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
                primary: '#00838F',
                secondary: '#26A69A',
                accent: 'red',
                positive: '#21BA45',
                negative: '#C10015',
                info: '#31CCEC',
                warning: '#F2C037',

                success: '#0da330',
                error: '#ff1744',
            },
            dark: 'auto',
            loadingBar: {
                color: 'primary',
            },
        },
        lang: langZhTw,
    })
}
