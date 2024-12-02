<template>
  <div class="box">
    <swiper
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="50"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      auto
    >
      <swiper-slide>
        <q-img src="@/assets/img/01.jpeg" alt="Slide 1" class="swiper-img"></q-img>
      </swiper-slide>

      <swiper-slide>
        <q-img src="@/assets/img/02.jpeg" alt="Slide 2" class="swiper-img"></q-img>
      </swiper-slide>

      <swiper-slide>
        <q-img src="@/assets/img/03.jpeg" alt="Slide 3" class="swiper-img"></q-img>
      </swiper-slide>

      <swiper-slide>
        <q-img src="@/assets/img/04.jpeg" alt="Slide 4" class="swiper-img"></q-img>
      </swiper-slide>

      <swiper-slide>
        <q-img src="@/assets/img/05.jpeg" alt="Slide 5" class="swiper-img"></q-img>
      </swiper-slide>

      <swiper-slide>
        <q-img src="@/assets/img/06.jpeg" alt="Slide 6" class="swiper-img"></q-img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('Slide changed')
}

const swiperModules = [Navigation]
</script>

<style lang="scss" scoped>
.box {
  width: 100vh;
  border: 1px solid black;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  z-index: 10;
  transition: all 0.3s;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
}

.swiper-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
