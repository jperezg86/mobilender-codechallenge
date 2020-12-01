<template>
    <div class="header container-fluid d-flex justify-content-between align-items-center py-3">
        <h1 class="p2">Integra<span>Software</span></h1>
        <div class="menu d-flex flex-row align-items-center" v-if="session">
            <span class="username mr-2">{{session.user.first_name}} {{session.user.last_name}}</span> 
            <img v-bind:src="session.user.avatar" class="mr-2 img-fluid rounded-circle user-photo b0">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'app-header',
    computed : {
         ...mapGetters([
          'session'
        ]),
    },

    methods: {
        
    }
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
</style>