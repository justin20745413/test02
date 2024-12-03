<template>
    <div class="chart-container">
        <div class="tabs">
            <q-btn
                v-for="(chart, index) in chartIds"
                :key="chart"
                :class="{ active: currentIndex === index }"
                @click="switchChart(index)"
            >
                {{ chartTitles[index] }}
            </q-btn>
        </div>
        <div
            v-for="(chart, index) in chartIds"
            :key="chart"
            :id="chart"
            class="chart"
            :style="{ display: currentIndex === index ? 'block' : 'none' }"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const currentIndex = ref(0)
const myCharts = ref<echarts.ECharts[]>([])

const chartIds = ['chart-bar', 'chart-line', 'chart-pie', 'chart-radar', 'chart-scatter']
const chartTitles = ['柱狀圖', '折線圖', '餅圖', '雷達圖', '散點圖']

const chartOptions = [
    {
        title: { text: 'Bar' },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [5, 20, 36, 10, 10] }],
    },
    {
        title: { text: 'Line' },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
        yAxis: { type: 'value' },
        series: [{ type: 'line', data: [5, 20, 36, 10, 10] }],
    },
    {
        title: { text: 'Pie' },
        series: [
            {
                type: 'pie',
                radius: '60%',
                data: [
                    { name: 'A', value: 5 },
                    { name: 'B', value: 20 },
                    { name: 'C', value: 36 },
                    { name: 'D', value: 10 },
                    { name: 'E', value: 10 },
                ],
            },
        ],
    },
    {
        title: { text: 'Radar' },
        radar: {
            indicator: [
                { name: 'A', max: 50 },
                { name: 'B', max: 50 },
                { name: 'C', max: 50 },
                { name: 'D', max: 50 },
                { name: 'E', max: 50 },
            ],
        },
        series: [
            {
                type: 'radar',
                data: [{ value: [5, 20, 36, 10, 10] }],
            },
        ],
    },
    {
        title: { text: 'Scatter' },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'scatter',
                data: [5, 20, 36, 10, 10],
            },
        ],
    },
]

const initChart = (index: number) => {
    const chartDom = document.getElementById(chartIds[index])
    if (!chartDom) return

    // 如果已經存在則銷毀
    if (myCharts.value[index]) {
        myCharts.value[index].dispose()
    }

    const chart = echarts.init(chartDom)
    chart.setOption(chartOptions[index])
    myCharts.value[index] = chart
}

const switchChart = (index: number) => {
    currentIndex.value = index
    setTimeout(() => {
        initChart(index)
    }, 0)
}

// 監聽視窗大小變化
const handleResize = () => {
    myCharts.value.forEach((chart) => {
        if (chart) {
            chart.resize()
        }
    })
}

onMounted(() => {
    // 初始化第一個圖表
    setTimeout(() => {
        initChart(0)
    }, 0)

    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    // 清理圖表實例
    myCharts.value.forEach((chart) => {
        if (chart) {
            chart.dispose()
        }
    })
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 500px;
    padding: 20px;
    box-sizing: border-box;
}

.tabs {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
}

.tabs button {
    padding: 8px 16px;
    border: none;
    background: #eee;
    cursor: pointer;
}

.tabs button.active {
    background: #666;
    color: white;
}

.chart {
    width: 100%;
    height: 400px;
}
</style>
