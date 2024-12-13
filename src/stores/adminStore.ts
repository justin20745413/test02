import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        permissions: {
            CALENDAR: 'EDIT',
            DASHBOARD: 'VIEW',
            // 添加其他路由和權限
        } as Record<string, string>,
    }),
    actions: {
        getAuthByRouteName(routeName: string) {
            return this.permissions[routeName] || 'DISABLE'
        },
        getAuthByCode(featureCode: string) {
            const featurePermissions: Record<string, string> = {
                FEATURE_A: 'EDIT',
                FEATURE_B: 'VIEW',
                // 添加其他功能代碼和權限
            }
            return featurePermissions[featureCode] || 'DISABLE'
        },
    },
})
