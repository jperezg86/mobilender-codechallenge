<template>
    <div class="container d-flex flex-row 
        justify-content-center 
        align-items-center vh-100 wrapper">
        <div class="card p-3">
            <div class="card-title">
                <h1>Please LogIn</h1>
            </div>
            <div class="card-body">
                <form>
                    <div class="text-warning" v-if="errors">{{errors.loginFail || ''}}</div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" 
                                id="email" aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                v-model="username">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" 
                                class="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                v-model="password">
                    </div>
                    <button type="button" class="btn btn-primary" v-on:click="logIn()">Submit</button>
                </form>
            </div>
        </div>
    </div> 
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            username : 'eve.holt@reqres.in',
            password : '',
        }
    },


    computed : {
        ...mapGetters([
            'session',
            'errors'
        ])
    },

    methods: {
        logIn() {
            this.$store.dispatch('login',{ username: this.username, password : this.password})
        }
    },

    watch : {
        session(session) {
            if(session){
                this.$router.replace('/')
            }
        },
    }
}
</script>
<style scoped>
 .wrapper {
     margin-top: -50px;
 }

 .card { 
     background: black;
     border-color: #f0f0f0;
 }

</style>