import './css/normalize.css'
import './css/skeleton.css'
import './css/tooltip.css'
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app') as HTMLElement,
})

export default app
