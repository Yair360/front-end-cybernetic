import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import ProfileComponent from "../public/pages/profile.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', name: 'home', component: HomeComponent},
        {path: '/profile', name: 'profile', component: ProfileComponent},
        // redireccion
        {path: '/', redirect: '/home'}
    ]
});

export default router;