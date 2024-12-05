import { ref, watch } from 'vue'
import { Dark } from 'quasar'

export const useTheme = () => {
    const isDark = ref(Dark.isActive)

    const toggleDarkMode = () => {
        Dark.toggle()
        isDark.value = Dark.isActive
        localStorage.setItem('darkMode', isDark.value ? 'true' : 'false')
    }

    const initTheme = () => {
        const darkMode = localStorage.getItem('darkMode')
        if (darkMode) {
            Dark.set(darkMode === 'true')
            isDark.value = Dark.isActive
        }
    }

    watch(
        () => Dark.isActive,
        (val) => {
            localStorage.setItem('darkMode', val ? 'true' : 'false')
        },
    )

    return {
        isDark,
        toggleDarkMode,
        initTheme,
    }
}
