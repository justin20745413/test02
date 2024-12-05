export interface UserCredentials {
    username: string
    password: string
}

export interface AuthState {
    token: string | null
    sessionStartTime: string | null
}

export interface TimerState {
    remainingTime: string
    timer?: number
    updateTimer?: number
    startTime: number
}

export interface DialogOptions {
    title: string
    message: string
    ok: {
        label: string
        handler: () => void
    }
    cancel: {
        label: string
        handler: () => void
    }
} 