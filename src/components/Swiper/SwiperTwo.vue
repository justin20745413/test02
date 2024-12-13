<template>
    <div>
        <div class="box mt-10">
            <div class="swiper-container">
                <!-- Swiper -->
                <swiper
                    ref="mySwiper"
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :centered-slides="true"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                        type: 'bullets',
                        el: '.swiper-pagination-2',
                    }"
                    :navigation="{
                        nextEl: '.next-button-2',
                        prevEl: '.prev-button',
                    }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="w-full custom-swiper"
                >
                    <swiper-slide
                        v-for="(img, index) in images"
                        :key="index"
                        class="swiper-slide-custom"
                    >
                        <q-img :src="img" alt="Slide Image" class="swiper-img"></q-img>
                    </swiper-slide>
                </swiper>

                <!-- 自訂義左右導航按鈕 -->
                <q-btn @click="goPrev" class="custom-nav-button prev-button">
                    <q-icon name="keyboard_double_arrow_left" color="primary"></q-icon>
                </q-btn>
                <q-btn @click="goNext" class="custom-nav-button next-button-2">
                    <q-icon name="keyboard_double_arrow_right"></q-icon>
                </q-btn>

                <!-- 自訂義分頁 -->
                <div class="swiper-pagination-2"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ref } from 'vue'

import img01 from '@/assets/img/01.jpeg'
import img02 from '@/assets/img/02.jpeg'
import img03 from '@/assets/img/03.jpeg'
import img04 from '@/assets/img/04.jpeg'
import img05 from '@/assets/img/05.jpeg'
import img06 from '@/assets/img/06.jpeg'

// Swiper 模塊和圖片
const swiperModules = [Pagination, Navigation]
const swiperRef = ref<SwiperType | null>(null)

const images = [img01, img02, img03, img04, img05, img06]

const onSwiper = (swiper: SwiperType) => {
    swiperRef.value = swiper
    console.log(swiper)
}

const onSlideChange = () => {
    console.log('Slide changed')
}

const goNext = () => {
    swiperRef.value?.slideNext()
}

const goPrev = () => {
    swiperRef.value?.slidePrev()
}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: center;
    width: 980px;
}

.swiper-container {
    position: relative;
    width: 100%;
    max-width: 80%;
}

.custom-swiper {
    width: 100%;
    max-width: 100%;
    position: relative;
    box-sizing: border-box;
}

.swiper-slide-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
        transform 0.3s,
        opacity 0.3s;
}

.swiper-slide-custom.swiper-slide-active {
    transform: scale(1.2);
    opacity: 1;
    z-index: 10;
}

.swiper-slide-custom {
    transform: scale(0.8);
    opacity: 0.6;
}

.swiper-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.custom-nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    opacity: 0.8;
    background-color: #0051f3;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: orange;
    }
}

.prev-button {
    left: -60px;
}

.next-button-2 {
    right: -60px;
}

/* 自訂義分頁按鈕樣式 */
::v-deep(.swiper-pagination-2) {
    text-align: center;
    bottom: -30px;
}

::v-deep(.swiper-pagination-2 .swiper-pagination-bullet) {
    background-color: #0051f3 !important;
}

::v-deep(.swiper-pagination-2 .swiper-pagination-bullet-active) {
    background-color: orange !important;
}
</style>
