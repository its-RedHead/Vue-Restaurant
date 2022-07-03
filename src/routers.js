import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LogIn from './components/LogIn.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/update-restaurant/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;