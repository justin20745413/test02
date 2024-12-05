<template>
    <div class="chart-container">
        <div class="tabs">
            <q-btn
                v-for="(chart, index) in chartIds"
                :key="chart"
                :class="{ active: currentIndex === index }"
                :color="isDark ? 'grey-8' : 'grey-3'"
                :text-color="isDark ? 'white' : 'black'"
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
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'
import { Dark } from 'quasar'

const currentIndex = ref(0)
const myCharts = ref<echarts.ECharts[]>([])
const isDark = ref(Dark.isActive)

const chartIds = ['chart-bar', 'chart-line', 'chart-pie', 'chart-radar', 'chart-scatter']
const chartTitles = ['柱狀圖', '折線圖', '圓餅圖', '雷達圖', '散點圖']

// 監聽暗色模式變化
watch(
    () => Dark.isActive,
    (val) => {
        isDark.value = val
        myCharts.value.forEach((chart, index) => {
            if (chart) {
                chart.dispose()
            }
            initChart(index)
        })
    },
)

const getChartTheme = () => {
    return isDark.value
        ? {
              backgroundColor: 'transparent',
              textStyle: { color: '#ffffff' },
              title: { textStyle: { color: '#ffffff' } },
              xAxis: { axisLine: { lineStyle: { color: '#ffffff' } } },
              yAxis: { axisLine: { lineStyle: { color: '#ffffff' } } },
          }
        : {}
}

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
        xAxis: { show: false },
        yAxis: { show: false },
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
                label: {
                    color: isDark.value ? '#ffffff' : '#000000'
                }
            },
        ],
    },
    {
        title: { text: 'Radar' },
        xAxis: { show: false },
        yAxis: { show: false },
        radar: {
            indicator: [
                { name: 'A', max: 50 },
                { name: 'B', max: 50 },
                { name: 'C', max: 50 },
                { name: 'D', max: 50 },
                { name: 'E', max: 50 },
            ],
            axisName: {
                color: isDark.value ? '#ffffff' : '#000000'
            }
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

    if (myCharts.value[index]) {
        myCharts.value[index].dispose()
    }

    const chart = echarts.init(chartDom)
    const theme = getChartTheme()
    chart.setOption({ ...chartOptions[index], ...theme })
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
    setTimeout(() => {
        initChart(0)
    }, 0)

    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
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

.chart {
    width: 100%;
    height: 400px;
    background: transparent;
}
</style>
