<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <!--  點擊圖片 -->
        <div :key="key" class="clickable-image-container">
            <p>1.點擊圖片</p>
            <div
                class="clickable-image"
                :class="{ 'is-clicked': isClicked }"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
                @mouseleave="handleMouseLeave"
            >
                <div
                    class="image-wrapper"
                    :style="{ transform: `rotate(${rotation}deg)`, clipPath: clipPath }"
                >
                    <img :src="imageUrl" alt="Clickable image" />
                </div>
                <button class="click-text" :class="{ 'is-clicked': isClicked }">click</button>
            </div>
            <button @click="rotateImage">Rotate Image 90°</button>
        </div>

        <!--  平滑圓角 -->

        <div class="g-container">
            <div class="g-content">
                <div class="g-filter"></div>
            </div>
        </div>

        <div class="g-container">
            <div class="g-content">
                <div class="g-filter"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ClickableImage',
    props: {
        imageUrl: {
            type: String,
            default: 'https://fakeimg.pl/300x200/200',
        },
    },
    setup() {
        const isClicked = ref(false)
        const rotation = ref(0)
        const clipPath = ref(
            'polygon(69% 100%, 0 100%, 0 0, 100% 0, 100% 73%, 73% 73%, 72% 73%, 71% 73%, 70% 74%, 69% 76%)',
        )
        const key = ref(0)

        const handleMouseDown = () => {
            isClicked.value = true
        }

        const handleMouseUp = () => {
            isClicked.value = false
        }

        const handleMouseLeave = () => {
            isClicked.value = false
        }

        const rotateImage = () => {
            rotation.value = (rotation.value + 90) % 360
            // 根據旋轉角度調整裁切角度
            switch (rotation.value) {
                case 90:
                    clipPath.value = 'polygon(0 0, 65% 0, 65% 25%, 100% 25%, 100% 100%, 0 100%)'
                    break //大約抓亂打的
                case 180:
                    clipPath.value =
                        'polygon(31% 0, 100% 0, 100% 100%, 0 100%, 0 27%, 27% 27%, 28% 27%, 29% 27%, 30% 26%, 31% 24%)'
                    break
                case 270:
                    clipPath.value = 'polygon(0 65%, 0 0, 100% 0, 100% 100%, 25% 100%, 25% 65%)'
                    break //大約抓亂打的
                default:
                    clipPath.value =
                        'polygon(69% 100%, 0 100%, 0 0, 100% 0, 100% 73%, 73% 73%, 72% 73%, 71% 73%, 70% 74%, 69% 76%)'
                    break
            }
            key.value += 1
        }

        return {
            isClicked,
            rotation,
            clipPath,
            key,
            handleMouseDown,
            handleMouseUp,
            handleMouseLeave,
            rotateImage,
        }
    },
})
</script>

<style lang="scss" scoped>
.clickable-image-container {
    position: relative;
    width: fit-content;
    padding: 8px;
}

.clickable-image {
    position: relative;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    .image-wrapper {
        position: relative;
        transition: transform 0.5s ease-in-out;

        img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }

    .click-text {
        position: absolute;
        bottom: 0;
        right: 0px;
        width: 5.2rem;
        height: 3rem;
        border-radius: 0.5rem;
        background-color: #ff3e3e;
        color: #ffffff;
        padding: 6px 12px;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        transition: transform 0.1s ease-in-out;

        &.is-clicked {
            transform: scale(0.95) translateY(2px);
        }
    }
}

button {
    margin-top: 60px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
}

// 平滑圓角

html,
body {
    width: 100%;
    height: 100%;
    display: flex;

    background-color: white;
}

.g-container {
    position: relative;
    width: 300px;
    height: 100px;
    margin: auto;

    .g-content {
        height: 100px;
        filter: contrast(20);
        background-color: rgb(255, 255, 255);
        opacity: 0.9;
        overflow: hidden;

        .g-filter {
            filter: blur(10px);
            height: 100px;
            background: radial-gradient(
                circle at 50% -10px,
                transparent 0,
                transparent 29px,
                #000 40px,
                #000
            );
        }
    }
}

.g-container:nth-child(2) {
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        background: radial-gradient(
            circle at 50% -10px,
            transparent 0,
            transparent 60px,
            #000 60px,
            #000 0
        );
    }
}
</style>
