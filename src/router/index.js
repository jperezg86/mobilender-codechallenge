import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeComponent'
import Login from '../components/LoginComponent'
import CreditosGrupales from '../components/CreditosGrupalesComponent'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/creditos-grupales', 
        name: "Creditos Grupales", 
        component: CreditosGrupales
    },
    { path: '*', name: 'Home', component: Home },
]

const router  = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next)=> {
    //check if the session exist on the local storage
    console.log("entra")
    next()
})

export default router