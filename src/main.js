import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';  
// import InfiniteSlideBar from 'vue-infinite-slide-bar'



const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(BackToTop)
	// .component('infinite-slide-bar',InfiniteSlideBar)
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
