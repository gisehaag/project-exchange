import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import Error from '@/views/Error';
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router);

export default new Router({
	mode: 'history',

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/coin/:id', //el path con los : (:id) es lo que hace se refiere a un parametro dinámico :id será reemplazado por bitcoin, ethereum, etc
			//los dos puntos indican que es un parámetro y después lo voy a consultar con el $router.params.id
			name: 'coin-detail',
			component: CoinDetail,
		},
		{
			path: '*',
			name: 'error',
			component: Error,
		},
	],
});
