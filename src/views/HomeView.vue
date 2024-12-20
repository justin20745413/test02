<template>
    <div class="wrap">
        <h1 class="section-title">News</h1>
        <div>
            <div class="swiper-container">
                <Swiper v-bind="swiperConfig" :key="swiperKey">
                    <SwiperSlide
                        v-for="(newsItem, index) in newsItems"
                        :key="index"
                        class="clickable"
                    >
                        <div class="mt-4 rounded-lg news_view" tabindex="0">
                            <div class="news_icon">
                                <q-icon
                                    :name="newsItem.icon"
                                    size="2rem"
                                    :color="newsItem.iconColor"
                                />
                            </div>
                            <div class="news_card">
                                <div>
                                    <p class="title_p">{{ newsItem.title }}</p>
                                    <div class="divider_p"></div>
                                    <div class="news_container">
                                        <div
                                            class="content_p text-right"
                                            :style="{ height: maxCardHeight - 210 + 'px' }"
                                        >
                                            {{ newsItem.content }}
                                        </div>
                                        <div class="news_footer">
                                            <div class="date-wrapper">
                                                <q-icon
                                                    name="event"
                                                    size="1rem"
                                                    class="date-icon"
                                                />
                                                <span class="date">{{ newsItem.date }}</span>
                                            </div>
                                            <button class="read-more">
                                                閱讀更多
                                                <q-icon
                                                    name="arrow_forward"
                                                    size="1rem"
                                                    class="ml-1"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <!-- Custom swiper control-->
            <div class="policy-container">
                <button
                    v-show="showNavigationControls"
                    aria-label="上一頁"
                    :style="buttonStyle"
                    title="上一頁"
                    class="policy-swiper-button-prev"
                    tabindex="0"
                    type="button"
                >
                    <q-icon :size="iconSize" name="arrow_back" />
                </button>

                <div
                    v-show="showNavigationControls"
                    class="policy-swiper-pagination"
                    style="width: auto"
                ></div>

                <button
                    v-show="showNavigationControls"
                    aria-label="下一頁"
                    :style="buttonStyle"
                    title="下一頁"
                    class="policy-swiper-button-next"
                    tabindex="0"
                    type="button"
                >
                    <q-icon :size="iconSize" name="arrow_forward" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectCreative, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const maxCardHeight = ref(0)
const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = ref(breakpoints.smallerOrEqual('sm'))
const md = ref(breakpoints.between('sm', 'lg'))

const isMobile = ref(breakpoints.smaller('md'))
const swiperKey = ref(0)
const windowWidth = ref()

const newsItems = [
    {
        icon: 'notifications',
        iconColor: 'deep-purple-6',
        title: '系統更新通知',
        content:
            '親愛的用戶您好，系統將於2024年4月1日進行例行維護更新，預計維護時間為凌晨2-4點，造成不便敬請見諒。',
        date: '2024-03-25',
    },
    {
        icon: 'event',
        iconColor: 'teal-6',
        title: '活動預告',
        content: '2024年春季SystemY覽即將開始！體驗最新科技產品。',
        date: '2024-03-28',
    },
    {
        icon: 'campaign',
        iconColor: 'orange-6',
        title: '重要公告',
        content: '因應新政策實施，請所有會員於4月15日前完成資料更新，以確保您的權益不受影響。',
        date: '2024-03-30',
    },
    {
        icon: 'campaign',
        iconColor: 'orange-6',
        title: '重要公告6',
        content: '因應新政策實施，請所有會員於4月15日前完成資料更新，以確保您的權益不受影響。',
        date: '2024-03-30',
    },
]

/** Swiper config */
const swiperConfig = ref({
    modules: [Navigation, Pagination, EffectCreative, Autoplay],
    spaceBetween: 16,
    loop: true,
    keyboard: true,
    slidesPerView: 1,
    loopedSlides: 3,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.policy-swiper-button-next',
        prevEl: '.policy-swiper-button-prev',
    },
    pagination: {
        el: '.policy-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1440: {
            slidesPerView: 3,
            centeredSlides: false,
        },
    },
    a11y: true,
})

const buttonStyle = computed(() => {
    if (isMobile.value) {
        return {}
    }
    return {
        top: `-${30 + maxCardHeight.value / 2}px`,
    }
})

/** Icon size 按鈕 */
const iconSize = computed(() => {
    if (sm.value) return '20px'
    if (md.value) return '24px'
    return '28px'
})

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
}

const showNavigationControls = computed(() => {
    if (windowWidth.value >= 1440) {
        return newsItems.length > 3
    } else if (windowWidth.value >= 768) {
        return newsItems.length > 2
    } else {
        return newsItems.length > 1
    }
})

// 計算最大卡片高度
const calculateMaxCardHeight = () => {
    maxCardHeight.value = 0
    const cards = document.querySelectorAll<HTMLElement>('.news_view')
    cards.forEach((card) => {
        const cardHeight = card.scrollHeight
        if (cardHeight > maxCardHeight.value) {
            maxCardHeight.value = cardHeight
        }
    })
    cards.forEach((card) => {
        card.style.height = `${maxCardHeight.value}px`
    })
}

const resizeTimeout: number | null = null

onMounted(() => {
    if (typeof window !== 'undefined') {
        updateWindowWidth()
        window.addEventListener('resize', updateWindowWidth)
    }
    nextTick(calculateMaxCardHeight)
})

onBeforeUnmount(() => {
    if (resizeTimeout) clearTimeout(resizeTimeout)
    if (typeof window !== 'undefined') {
    }
})
</script>

<style lang="scss" scoped>
.wrap {
    margin-top: 1rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
}

.news_view {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    margin: 2rem 0;
    transition: all 0.3s ease;
    border-radius: 16px;
    position: relative;
    overflow: visible;

    .news_icon {
        position: absolute;
        top: -20px;
        right: 20px;
        background: white;
        padding: 12px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 10;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
    }

    .news_card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem 1.5rem;
        height: 100%;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    }
}

.title_p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
}

.content_p {
    line-height: 1.6;
    margin: 1rem 0;
    text-align: left;
    word-break: break-word;
}

.news_footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0 1.5rem 0;
    .date-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        background-color: var(--q-primary);
        border-radius: 20px;
        .date {
            font-size: 0.9rem;
            font-weight: 500;
        }
    }

    .read-more {
        background-color: rgb(69, 69, 230);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        &:hover {
            background-color: rgb(0, 0, 255);
            transform: translateX(4px);
        }
    }
}

.swiper-container {
    max-width: 1440px; // 預設最大寬度
    padding: 0rem;

    @media screen and (max-width: 1440px) {
        max-width: 768px;
    }

    @media screen and (max-width: 768px) {
        max-width: 400px;
    }
}

.clickable {
    cursor: pointer;
    width: auto;
}

:deep(.swiper-pagination-bullet-active) {
    background-color: blue;
}

.policy-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
}

.policy-swiper-button-prev,
.policy-swiper-button-next {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: var(--q-light-bg, #ffffff);
    color: var(--q-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }

    :deep(.body--dark) & {
        background-color: var(--q-dark-page);
        color: var(--q-accent);
    }
}
</style>
