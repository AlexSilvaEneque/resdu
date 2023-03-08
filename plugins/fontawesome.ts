import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass,
        faBars,
        faHouse,
        faQuestion,
        faList,
        faUsers
        } 
from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false // dejamos que nuxt vea el CSS

library.add(
    faMagnifyingGlass,
    faBars,
    faHouse,
    faQuestion,
    faList,
    faUsers
)

export default defineNuxtPlugin( nuxtApp => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
} )