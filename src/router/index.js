import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeComponent'
import Login from '../components/LoginComponent'
import CreditosGrupales from '../components/CreditosGrupalesComponent'
import ControlCambios from '../components/ControlCambios'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/creditos-grupales', 
        name: "Creditos Grupales", 
        component: CreditosGrupales
    },
    { path: '/control-de-cambios/:idCredito', name: 'ControlCambios', component: ControlCambios },
    { path: '*', name: 'Home', component: Home },
]

const router  = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
})

/**
 * Router Guard, useful to check if the session is enabled.
 */
router.beforeEach((to, from, next)=> {
    //check if the session exist on the local storage
    const session = JSON.parse(localStorage.getItem('session'))
    if(!session && to.path !== '/login'){
        next({path: '/login'})
    }
    else {
        next()
    }
})

export default router