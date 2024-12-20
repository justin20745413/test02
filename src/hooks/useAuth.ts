import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PermissionStatusEnum } from '@/models/enum/userEnum'
import { FeatureCodeEnum, RouteNameEnum } from '@/models/enum/routeEnum'
import { isEnumValue } from '@/utils/is'
import { useAdminStore } from '@/stores/adminStore'

export const useAuth = () => {
    const route = useRoute()
    const adminStore = useAdminStore()

    const isEditable = computed(() => {
        const routeName = route.name as string
        return (
            adminStore.getAuthByRouteName(
                routeName === RouteNameEnum.CALENDAR_SEARCH ? RouteNameEnum.CALENDAR : routeName,
            ) === PermissionStatusEnum.EDIT
        )
    })

    const featureEditable = (feature: string | FeatureCodeEnum) => {
        return (
            adminStore[
                isEnumValue(feature, FeatureCodeEnum) ? 'getAuthByCode' : 'getAuthByRouteName'
            ](feature) === PermissionStatusEnum.EDIT
        )
    }

    const featureReadable = (feature: string | FeatureCodeEnum) => {
        return (
            adminStore[
                isEnumValue(feature, FeatureCodeEnum) ? 'getAuthByCode' : 'getAuthByRouteName'
            ](feature) !== PermissionStatusEnum.DISABLE
        )
    }

    const getEditable = (
        auth: string | boolean | undefined,
        disable: boolean | undefined | unknown = false,
    ) => {
        const _disable = !!disable || disable === ''
        if (_disable) return false
        if (!auth && auth !== '') return true

        if (auth === true || auth === '') {
            // 用當前頁面的 meta auth 判斷
            return isEditable.value
        } else {
            // 用傳入的 code 判斷
            return featureEditable(auth)
        }
    }

    return {
        isEditable,
        featureEditable,
        featureReadable,
        getEditable,
    }
}
