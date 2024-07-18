import {createWebHistory,createRouter} from 'vue-router'
import HomePage from './components/Routing/HomePage.vue';
import Login from './components/Routing/Login.vue';
import Profile from './components/Routing/Profile.vue';
import PageNotFound from './components/Routing/PageNotFound.vue'

const routes=[
    {
        name:HomePage,
        path:'/',
        component:HomePage
    },
    {
        name:Login,
        path:'/login',
        component:Login
    },
    {
        name:Profile,
        path:'/porfile/:name/',
        component:Profile
    },
    {
        name:'NotFound',
        path:'/:patchMatch(.*)*',
        component:PageNotFound
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;