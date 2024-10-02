import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faChevronLeft, faBullseye, faQrcode, faChartBar, faFileAlt, faGlobe, faCreditCard } from '@fortawesome/free-solid-svg-icons';

createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon) // Register FontAwesome globally
.mount('#app');