import { ref } from 'vue'
import type { TimerState } from '@/types/auth'
import { logout } from './auth'
import { useQuasar } from 'quasar'

const TIMEOUT_DURATION = 600000
const timerState = ref<TimerState>({
    remainingTime: '10:00',
    timer: undefined,
    updateTimer: undefined,
    startTime: Date.now(),
})

export const useTimer = () => {
    const $q = useQuasar()

    const updateRemainingTime = () => {
        const sessionStartTime = localStorage.getItem('sessionStartTime')
        if (!sessionStartTime) {
            handleLogout()
            return
        }

        const timeLeft = 600 - Math.floor((Date.now() - parseInt(sessionStartTime)) / 1000)
        if (timeLeft <= 0) {
            handleLogout()
            return
        }
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        timerState.value.remainingTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const startTimer = () => {
        if (!localStorage.getItem('sessionStartTime')) {
            return
        }

        clearTimers()

        updateRemainingTime()
        timerState.value.updateTimer = setInterval(updateRemainingTime, 1000)

        const sessionStartTime = parseInt(localStorage.getItem('sessionStartTime') || '0')
        const timePassedMs = Date.now() - sessionStartTime
        const timeLeftMs = TIMEOUT_DURATION - timePassedMs

        if (timeLeftMs > 0) {
            timerState.value.timer = setTimeout(() => {
                if (timerState.value.updateTimer) {
                    clearInterval(timerState.value.updateTimer)
                }
                showTimeoutDialog()
            }, timeLeftMs)
        }
    }

    const showTimeoutDialog = () => {
        $q.dialog({
            title: '繼續使用',
            message: '您已經閒置10分鐘，是否繼續使用？',
            ok: {
                label: '是',
                color: 'primary',
                handler: () => {
                    localStorage.setItem('sessionStartTime', Date.now().toString())
                    startTimer()
                },
            },
            cancel: {
                label: '否',
                color: 'secondary',
                handler: () => handleLogout(),
            },
        })
    }

    const handleLogout = () => {
        clearTimers()
        localStorage.removeItem('sessionStartTime')
        logout()
    }

    const clearTimers = () => {
        if (timerState.value.timer) {
            clearTimeout(timerState.value.timer)
        }
        if (timerState.value.updateTimer) {
            clearInterval(timerState.value.updateTimer)
        }
    }

    return {
        timerState,
        startTimer,
        clearTimers,
        handleLogout,
    }
}
