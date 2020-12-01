import Vue from 'vue'
import Vuex from 'vuex'
import * as apiService from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        session : null,
        counter : 0,
        errors : {},
        softwares : null,
        creditosGrupales : null,
        controlCambios : []
    },

    getters : {
        session(state) {
            if(!state.session){
                state.session = JSON.parse(localStorage.getItem('session'))
            }
            return state.session
        },
        errors : (state) => {
            return state.errors
        },

        softwares(state) {
            return state.softwares
        },

        creditosGrupales : (state) => {
            return state.creditosGrupales
        },

        controlCambios : (state) => {
            return state.controlCambios
        }


    },

    mutations : {
        /**
         * Save the session to localStorage, 
         * TODO: It'll requires crypt library
         * @param {any} state, the global state
         * @param {any} payload the session data.
         */
        setSession : (state, payload) => {
            state.session = payload
            if(state.session) {
                localStorage.setItem("session",JSON.stringify(state.session))
            }
        },

        /**
         * Set message when login is not successfull
         * @param {any} state, the global state
         */
        loginFail : (state) => {
            state.errors.loginFail = "The user name or password not match"
        },

        /**
         * set the softwares list once it was downloaded from the API
         * and store in the global state
         * @param {any} state, the global state
         * @param {any} payload array of softwares objects
         */
        setSoftwares : (state, payload) => {
            state.softwares = payload.softwares
        },

        setCreditosGrupales : (state, payload) => {
            state.creditosGrupales = payload.creditos
        },

        setControlDeCambios : (state, payload) => {
           state.controlCambios = payload.cambios
        }

    },

    actions : {
        /**
         * perform the login action, tries to make the loggin and
         * store in the global state.
         */
        login : async (context, payload) => {
            try {
                const token = await apiService.login(payload.username, payload.password)
                let user = null 
                if(token) {
                     user = await apiService.getUserInfo()
                     context.commit('setSession',{token, user})
                }
            }catch(exception) {
                context.commit('loginFail')
            }
        },

        /**
         * Perform the logout action
         * 
         */
        logOut : async (context) => {
            localStorage.removeItem('session');
            context.commit('setSession',null);
        },

        /**
         * dispatch the get to the local server (API). 
         * @param {any} context, the context's store.
         */
        getSoftwaresFromAPI : async(context)=> {
            try {
                const softwares = await apiService.getSoftwareFromAPI()
                if(softwares) {
                    context.commit('setSoftwares', {softwares})
                }
            }catch(exception) { 
                context.commit('setSoftwares', { softwares : []})
            }
        },

        /**
         * perform the request to get the creditos grupales information
         * @param {any} context
         */
        getCreditosGrupalesFromAPI : async(context) => {
            try {
                const creditos = await apiService.getCreditosGrupales()
                if(creditos) {
                    context.commit('setCreditosGrupales', {creditos})
                }
            }catch(exception) { 
                context.commit('setCreditosGrupales', { creditos : []})
            }
        },

        /**
         * perform the request to get the control de cambios information
         * @param {any} context
         * @param {any} payload object with idCredito property
         */
        getControlCambiosFromAPI : async(context, payload) => {
            try {
                const cambios = await apiService.getControlCambios(payload.idCredito)
                if(cambios) {
                    context.commit('setControlDeCambios', {cambios})
                }
            }catch(exception) { 
                context.commit('setControlDeCambios', { cambios : []})
            }
        }

    }
})