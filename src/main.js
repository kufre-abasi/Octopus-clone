import { Vue, createApp }from 'vue'
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';  
// import InfiniteSlideBar from 'vue-infinite-slide-bar'
// import LottiePlayer from 'lottie-player-vue';


const feather = require('feather-icons');
feather.replace();
// createApp.use(LottiePlayer,'lottie-player' );
// createApp.component('infinite-slide-bar',InfiniteSlideBar);
// createApp.use(BackToTop)

	// new Vue({
	// 	router,
	// 	render: h => h(App)
	//   }).$mount('#app');
	  
createApp(App)
	.use(router)
	.use(BackToTop)
	// .use(LottiePlayer,'lottie-player' )
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
