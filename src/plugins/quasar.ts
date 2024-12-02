import { Quasar, Dialog, Notify, Loading, LoadingBar } from 'quasar'
import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import MaterialIconSet from 'quasar/icon-set/material-icons'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import langZhTw from 'quasar/lang/zh-TW'

MaterialIconSet.table.arrowUp = 'sort'

export const setupQuasar = (app: ReturnType<typeof createApp>) => {
    app.use(Quasar, {
        plugins: { Dialog, Notify, Loading, LoadingBar },
        iconSet: MaterialIconSet,
        config: {
            brand: {
                primary: 'var(--q-primary)', // 使用 CSS 變量
                secondary: 'var(--q-secondary)',
                midd: 'var(--q-midd)',
            },
            loadingBar: {
                color: 'primary',
            },
        },
        lang: langZhTw,
    })
}
