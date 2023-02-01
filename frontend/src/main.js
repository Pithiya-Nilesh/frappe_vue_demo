import { createApp } from 'vue'
import { FrappeUI, Button } from 'frappe-ui'
import router from "./router"
import App from './App.vue'
import { socketio_port } from "../../../../sites/common_site_config.json"
import "./index.css"


let app = createApp(App)
app.use(router)
app.use(FrappeUI, {
	socketio: {
		port: socketio_port,
	},
})
app.component('Button', Button)
app.mount('#app')

// ***********************************

// import { createApp } from 'vue';

// import App from './App.vue';

// createApp(App).mount('#app')