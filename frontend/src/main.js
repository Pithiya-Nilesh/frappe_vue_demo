import { createApp } from 'vue'
import { FrappeUI, Button } from 'frappe-ui'
// import { FrappeUI } from '../../frappe-ui'

import App from './App.vue'
import { socketio_port } from "../../../../sites/common_site_config.json"

let app = createApp(App)
// app.use(router)
app.use(FrappeUI, {
	socketio: {
		port: socketio_port,
	},
})
// app.component('Button', Button)
app.mount('#app')

// ***********************************

// import { createApp } from 'vue';

// import App from './App.vue';

// createApp(App).mount('#app')