<template>
    <div class="swiper-wrapper">
        <div class="swiper-container">
            <swiper
                class="mySwiper swiper-h"
                :modules="modules"
                :space-between="50"
                :pagination="{
                    clickable: true,
                    el: '.swiper-pagination-main',
                }"
                :navigation="{
                    nextEl: '.swiper-button-next-main',
                    prevEl: '.swiper-button-prev-main',
                }"
            >
                <!-- Image Slider Section -->
                <swiper-slide>
                    <swiper
                        :modules="innerModules"
                        :direction="'vertical'"
                        :slides-per-view="1"
                        :space-between="30"
                        :centered-slides="true"
                        :loop="true"
                        :effect="'coverflow'"
                        :pagination="{
                            clickable: true,
                            el: '.swiper-pagination-3',
                        }"
                        :navigation="{
                            nextEl: '.swiper-button-next-3',
                            prevEl: '.swiper-button-prev-3',
                        }"
                        :coverflowEffect="{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }"
                        @swiper="onInnerSwiper"
                        class="custom-swiper"
                    >
                        <swiper-slide
                            v-for="(img, index) in images"
                            :key="'img-' + index"
                            class="swiper-slide-custom"
                        >
                            <img
                                :src="img"
                                :alt="`Slide ${index + 1}`"
                                class="swiper-img"
                                loading="lazy"
                            />
                        </swiper-slide>

                        <div class="navigation-wrapper">
                            <button
                                class="nav-button prev-button swiper-button-prev-3"
                                aria-label="Previous slide"
                            ></button>
                            <button
                                class="nav-button next-button swiper-button-next-3"
                                aria-label="Next slide"
                            ></button>
                        </div>

                        <div class="swiper-pagination-3"></div>
                    </swiper>
                </swiper-slide>

                <!-- Nested Vertical Slider Section -->
                <swiper-slide>
                    <swiper
                        class="mySwiper2 swiper-v"
                        :direction="'vertical'"
                        :space-between="50"
                        :pagination="{
                            clickable: true,
                            el: '.swiper-pagination-nested',
                        }"
                        :modules="innerModules"
                    >
                        <swiper-slide>Vertical Slide 1</swiper-slide>
                        <swiper-slide>Vertical Slide 2</swiper-slide>
                        <swiper-slide>Vertical Slide 3</swiper-slide>
                        <swiper-slide>Vertical Slide 4</swiper-slide>
                        <swiper-slide>Vertical Slide 5</swiper-slide>

                        <div class="swiper-pagination-nested"></div>
                    </swiper>
                </swiper-slide>

                <swiper-slide class="mt-72">Horizontal Slide 3xxx</swiper-slide>
                <swiper-slide class="mt-72">Horizontal Slide 4xxx</swiper-slide>

                <div class="navigation-wrapper-main">
                    <button class="nav-button-main prev-button swiper-button-prev-main"></button>
                    <button class="nav-button-main next-button swiper-button-next-main"></button>
                </div>

                <div class="swiper-pagination-main"></div>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

// Types
interface SwiperInstance extends SwiperType {
    destroy: () => void
}

// State
const innerSwiperInstance = ref<SwiperInstance | null>(null)
const modules = [Pagination, Navigation]
const innerModules = [Pagination, Navigation, EffectCoverflow]

// Import images
const images = [
    new URL('@/assets/img/01.jpeg', import.meta.url).href,
    new URL('@/assets/img/02.jpeg', import.meta.url).href,
    new URL('@/assets/img/03.jpeg', import.meta.url).href,
    new URL('@/assets/img/04.jpeg', import.meta.url).href,
    new URL('@/assets/img/05.jpeg', import.meta.url).href,
    new URL('@/assets/img/06.jpeg', import.meta.url).href,
]

// Methods
const onInnerSwiper = (swiper: SwiperInstance) => {
    innerSwiperInstance.value = swiper
}

// Lifecycle
onBeforeUnmount(() => {
    if (innerSwiperInstance.value) {
        innerSwiperInstance.value.destroy()
    }
})
</script>

<style lang="scss" scoped>
.swiper-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 980px;
    margin: 40px auto 0;
}

.swiper-container {
    position: relative;
    width: 100%;
    height: 600px;
    max-width: 80%;
}

.swiper-h {
    width: 100%;
    height: 100%;
}

.swiper-v {
    height: 100%;
    background: #eee;
}

.custom-swiper {
    width: 100%;
    height: 100%;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
        pointer-events: none;
        z-index: 10;
    }
}

.swiper-slide-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &.swiper-slide-active {
        transform: scale(1.1) translateY(0);
        opacity: 1;
        z-index: 10;
    }

    &:not(.swiper-slide-active) {
        transform: scale(0.9) translateY(20px);
        opacity: 0.6;
    }
}

.swiper-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.navigation-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -64px;
    right: -64px;
    pointer-events: none;
    z-index: 20;
}

.navigation-wrapper-main {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.nav-button,
.nav-button-main {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    color: #2563eb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.3s ease;
    border: none;

    &:hover {
        background-color: #2563eb;
        color: white;
    }
}

.nav-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &.prev-button {
        top: 16px;
    }

    &.next-button {
        bottom: 16px;
    }
}

.swiper-pagination-3 {
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 20;
}

.swiper-pagination-main {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
}

.swiper-pagination-nested {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 20;
}

:deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: rgba(60, 58, 192, 0.5);
    transition: all 0.3s ease;
    cursor: pointer;
}

:deep(.swiper-pagination-bullet-active) {
    height: 16px;
    width: 8px;
    background-color: #0f641d;
}
</style>
