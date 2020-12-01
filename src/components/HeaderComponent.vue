<template>
    <div class="header container-fluid d-flex justify-content-between align-items-center py-3">
        <h1 class="p2">Integra<span>Software</span></h1>
        <div class="menu d-flex flex-row align-items-center" v-if="session">
            <span class="username mr-2">{{session.user.first_name}} {{session.user.last_name}}</span> 
            <img v-bind:src="session.user.avatar" class="mr-2 img-fluid rounded-circle user-photo b0">
            <i class="fa fa-chevron-down" aria-hidden="true" v-on:click="toggleMenu()"></i>
        </div>

        <ul class="user-menu list-unstyled position-absolute p-3 d-none" v-bind:class="{'d-block' : showMenu}">
            <li v-on:click="logOut()">Cerrar Sesión</li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            showMenu : false
        }
    },
    name: 'app-header',
    computed : {
         ...mapGetters([
          'session'
        ]),
    },

    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },

        logOut() {
            this.$store.dispatch('logOut')
            this.$router.replace('/login')
        }
    },

    mounted() {
        console.log(this.session)
    },
    
    
}
</script>

<style scoped>
    .header {
        background: #171B2A;
        color: white;
    }

    .header h1 span { 
        color: #7DF4C2!important;
    }

    img.user-photo { 
        width: 50px;
        height: 50px;
    }

    .user-menu {
        background: #171B2A ;
        right:0px;
        top: 88px;
    }
</style>