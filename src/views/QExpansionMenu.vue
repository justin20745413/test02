<template>
    <q-page>
        <div class="q-pa-md flex flex-col md:flex-row gap-10">
            <!-- 搜索框 -->
            <div class="w-full mb-4">
                <q-input
                    v-model="searchQuery"
                    placeholder="搜尋選單項目..."
                    icon="search"
                    @input="filterMenuItems"
                    outlined
                    dense
                >
                    <template v-slot:append>
                        <q-icon
                            name="clear"
                            @click="clearSearch"
                            class="cursor-pointer"
                            v-if="searchQuery"
                        />
                    </template>
                </q-input>
            </div>

            <div class="flex flex-wrap gap-4">
                <div
                    v-for="(section, sIndex) in filteredMenuSections"
                    :key="sIndex"
                    class="menu-section w-full md:w-auto"
                >
                    <div
                        v-for="(item, index) in section.items"
                        :key="index"
                        class="expansion-item-wrapper"
                    >
                        <q-expansion-item
                            :label="item.title"
                            :default-opened="item.opened"
                            @click="scrollToElement(item.id)"
                            :icon="item.icon"
                            :toggle-icon="item.toggleIcon || 'expand_less'"
                            :class="['custom-expansion-item', `theme-${item.theme}`]"
                            expand-icon-toggle
                        >
                            <template v-slot:header>
                                <q-item-section avatar v-if="item.leadingIcon">
                                    <q-icon
                                        :name="item.leadingIcon"
                                        :color="item.iconColor || 'primary'"
                                    />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-weight-bold">
                                        {{ item.title }}
                                    </q-item-label>
                                    <q-item-label caption v-if="item.subtitle">
                                        {{ item.subtitle }}
                                    </q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <div class="flex items-center">
                                        <!-- 收藏按鈕 -->
                                        <q-btn
                                            flat
                                            round
                                            dense
                                            :icon="item.isFavorite ? 'star' : 'star_border'"
                                            :color="item.isFavorite ? 'yellow-7' : 'grey'"
                                            @click.stop="toggleFavorite(item)"
                                            class="mr-2"
                                        />

                                        <q-chip
                                            v-if="item.chip"
                                            :color="item.chip.color || 'primary'"
                                            text-color="white"
                                            size="sm"
                                        >
                                            {{ item.chip.label }}
                                        </q-chip>
                                    </div>
                                </q-item-section>
                            </template>

                            <div :class="['content-wrapper', `content-theme-${item.theme}`]">
                                <template v-if="item.menuItems">
                                    <q-list padding>
                                        <template
                                            v-for="(menuItem, mIndex) in item.menuItems"
                                            :key="mIndex"
                                        >
                                            <q-expansion-item
                                                v-if="menuItem.subItems"
                                                :icon="menuItem.icon"
                                                :label="menuItem.label"
                                                dense-toggle
                                                class="sub-expansion-item"
                                            >
                                                <q-list padding>
                                                    <q-item
                                                        v-for="(
                                                            subItem, sIndex
                                                        ) in menuItem.subItems"
                                                        :key="sIndex"
                                                        clickable
                                                        v-ripple
                                                    >
                                                        <q-item-section avatar>
                                                            <q-icon :name="subItem.icon" />
                                                        </q-item-section>
                                                        <q-item-section>
                                                            {{ subItem.label }}
                                                        </q-item-section>
                                                    </q-item>
                                                </q-list>
                                            </q-expansion-item>

                                            <q-item
                                                v-else
                                                clickable
                                                v-ripple
                                                :active="menuItem.active"
                                                :class="{ 'menu-item-active': menuItem.active }"
                                            >
                                                <q-item-section avatar v-if="menuItem.icon">
                                                    <q-icon :name="menuItem.icon" />
                                                </q-item-section>
                                                <q-item-section>
                                                    {{ menuItem.label }}
                                                </q-item-section>
                                            </q-item>
                                        </template>
                                    </q-list>
                                </template>
                                <div v-else class="q-pa-sm">
                                    {{ item.content }}
                                </div>
                            </div>
                        </q-expansion-item>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主題切換 -->
        <q-fab color="primary" icon="palette" direction="up" class="fixed-bottom-right q-ma-md">
            <q-fab-action
                v-for="(color, index) in themeColors"
                :key="index"
                :color="color.value"
                @click="changeTheme(color.value)"
                :icon="color.icon"
            />
        </q-fab>
    </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Lenis from 'lenis'

interface MenuItem {
    id: string
    title: string
    subtitle?: string
    leadingIcon?: string
    iconColor?: string
    theme?: string
    opened?: boolean
    chip?: { label: string; color?: string }
    menuItems?: SubMenuItem[]
    content?: string
    isFavorite?: boolean
    icon?: string
    toggleIcon?: string
}

interface SubMenuItem {
    label: string
    icon?: string
    active?: boolean
    subItems?: { label: string; icon?: string }[]
}

const menuSections = ref<{ items: MenuItem[] }[]>([
    {
        items: [
            {
                id: 'item1',
                title: '系統設定',
                subtitle: '基本系統配置選項',
                leadingIcon: 'settings',
                iconColor: 'deep-purple',
                theme: 'purple',
                opened: false,
                isFavorite: false,
                chip: { label: '新功能', color: 'purple' },
                menuItems: [
                    { label: '用戶管理', icon: 'person', active: true },
                    { label: '權限設置', icon: 'security' },
                    { label: '系統日誌', icon: 'history' },
                ],
            },
            {
                id: 'item2',
                title: '數據分析',
                subtitle: '業務數據統計報表',
                leadingIcon: 'analytics',
                theme: 'blue',
                opened: false,
                menuItems: [
                    { label: '銷售報表', icon: 'show_chart' },
                    { label: '用戶數據', icon: 'group' },
                    { label: '增長趨勢', icon: 'trending_up' },
                ],
            },
            {
                id: 'item3',
                title: '通知中心',
                leadingIcon: 'notifications',
                theme: 'orange',
                opened: false,
                content: '這裡是通知內容展示區域',
                chip: { label: '99+', color: 'orange' },
            },
            {
                id: 'item6',
                title: '進階設置',
                leadingIcon: 'settings_applications',
                theme: 'deep-purple',
                opened: false,
                chip: { label: '高級', color: 'deep-purple' },
                menuItems: [
                    {
                        label: '系統優化',
                        icon: 'tune',
                        subItems: [
                            { label: '性能設置', icon: 'speed' },
                            { label: '緩存管理', icon: 'storage' },
                        ],
                    },
                    {
                        label: '安全配置',
                        icon: 'security',
                        subItems: [
                            { label: '防火牆', icon: 'shield' },
                            { label: '訪問控制', icon: 'lock' },
                        ],
                    },
                ],
            },
            {
                id: 'item7',
                title: '項目管理',
                leadingIcon: 'folder',
                theme: 'indigo',
                opened: false,
                menuItems: [
                    {
                        label: '進行中',
                        icon: 'play_circle',
                    },
                    {
                        label: '已完成',
                        icon: 'check_circle',
                    },
                ],
            },
        ],
    },
    {
        items: [
            {
                id: 'item4',
                title: '幫助文檔',
                leadingIcon: 'help',
                theme: 'green',
                opened: false,
                menuItems: [
                    { label: '使用指南', icon: 'book' },
                    { label: 'FAQ', icon: 'help_outline' },
                    { label: '聯繫支持', icon: 'support_agent' },
                ],
            },
            {
                id: 'item5',
                title: '個人設置',
                leadingIcon: 'person',
                theme: 'teal',
                opened: false,
                menuItems: [
                    { label: '個人信息', icon: 'account_circle' },
                    { label: '安全設置', icon: 'security' },
                    { label: '通知設定', icon: 'notifications' },
                ],
            },
        ],
    },
])

// 搜索相關
const searchQuery = ref('')
const filteredMenuSections = computed(() => {
    if (!searchQuery.value) return menuSections.value

    return menuSections.value.map((section) => ({
        ...section,
        items: section.items.filter(
            (item) =>
                item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                (item.subtitle &&
                    item.subtitle.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
                (item.menuItems &&
                    item.menuItems.some((menuItem) =>
                        menuItem.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
                    )),
        ),
    }))
})

// 搜索方法
const filterMenuItems = () => {
    // 搜索邏輯已在計算屬性中實現
}

const clearSearch = () => {
    searchQuery.value = ''
}

// 收藏功能
const toggleFavorite = (item: MenuItem) => {
    item.isFavorite = !item.isFavorite
}

// 主題顏色選擇
const themeColors = [
    { value: 'purple', icon: 'palette' },
    { value: 'blue', icon: 'waves' },
    { value: 'green', icon: 'nature' },
    { value: 'orange', icon: 'wb_sunny' },
]

const changeTheme = (color: string) => {
    // 實際主題切換邏輯可以根據需要進一步擴展
    menuSections.value.forEach((section) => {
        section.items.forEach((item) => {
            item.theme = color
        })
    })
}

// 平滑滾動
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
    wheelMultiplier: 1.2,
})

function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

onMounted(() => {
    requestAnimationFrame(raf)
})

const scrollToElement = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
        lenis.scrollTo(target)
    }
}
</script>

<style lang="scss" scoped>
.menu-section {
    min-width: 100px;
    max-width: 400px;
}

.expansion-item-wrapper {
    margin-bottom: 15px;
}

.custom-expansion-item {
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .q-expansion-item__container {
        border-radius: 12px;
    }

    // 不同主題樣式
    &.theme-purple {
        border-left: 4px solid #673ab7;
    }

    &.theme-blue {
        border-left: 4px solid #2196f3;
    }

    &.theme-orange {
        border-left: 4px solid #ff9800;
    }

    &.theme-green {
        border-left: 4px solid #4caf50;
    }

    &.theme-teal {
        border-left: 4px solid #009688;
    }

    &.theme-indigo {
        border-left: 4px solid #3f51b5;
    }

    &.theme-deep-purple {
        border-left: 4px solid #673ab7;
    }
}

.content-wrapper {
    padding: 12px;
    border-radius: 0 0 12px 12px;

    &.content-theme-purple {
        background-color: #f3e5f5;
    }

    &.content-theme-blue {
        background-color: #e3f2fd;
    }

    &.content-theme-orange {
        background-color: #fff3e0;
    }

    &.content-theme-green {
        background-color: #e8f5e9;
    }

    &.content-theme-teal {
        background-color: #e0f2f1;
    }

    &.content-theme-indigo {
        background-color: #e8eaf6;
    }

    &.content-theme-deep-purple {
        background-color: #ede7f6;
    }
}

.menu-item-active {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    .q-icon {
        color: var(--q-primary);
    }
}

.q-item {
    border-radius: 8px;
    margin: 4px 0;
    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.03);
    }
}

.sub-expansion-item {
    background: rgba(255, 255, 255, 0.7);
    margin: 4px 0;
    border-radius: 8px;

    .q-expansion-item__container {
        padding: 4px 0;
    }

    .q-item {
        padding-left: 16px;
    }
}

.fixed-bottom-right {
    position: fixed;
    bottom: 16px;
    right: 16px;
}

@media (max-width: 768px) {
    .menu-section {
        width: 100%;
    }
}
</style>
