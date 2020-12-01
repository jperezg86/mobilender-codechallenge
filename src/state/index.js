import Vue from 'vue'
import Vuex from 'vuex'
import * as apiService from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        session : null,
        counter : 0,
        errors : {},
        softwares : null
    },

    getters : {
        session(state) {
            return state.session
        },
        errors : (state) => {
            return state.errors
        },

        softwares(state) {
            return state.softwares
        }
    },

    mutations : {
        setSession : (state, payload) => {
            state.session = payload
        },

        loginFail : (state) => {
            state.errors.loginFail = "The user name or password not match"
        },

        setSoftwares : (state, payload) => {
            state.softwares = payload.softwares
        }

    },

    actions : {
        increment : context => {
            context.commit('increment')
        },

        decrement : context => {
            context.commit('decrement')
        },

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

        getSoftwaresFromAPI : async(context)=> {
            try {
                const softwares = await apiService.getSoftwareFromAPI()
                if(softwares) {
                    context.commit('setSoftwares', {softwares})
                }
            }catch(exception) { 
                context.commit('setSoftwares', { softwares : []})
            }
        }
    }
})