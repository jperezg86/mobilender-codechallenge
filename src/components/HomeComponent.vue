<template>
    <div class="container-fluid d-flex flex-column">
        <div class="list-header container d-flex flex-row justify-content-between mt-5 pb-3">
            <div class="flex-grow-1 d-flex align-items-center">
                    <i class="fa fa-list pr-3" aria-hidden="true"></i>
                    <h3>Listado de Softwares</h3>
            </div>
            <div class="">
                <button class="btn btn-outline-primary">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Agregar nuevo
                </button>
            </div>
        </div>
        <ul class="list container px-5">
            <li class="my-3 p-2 align-items-md-center" v-for="(item,index) in softwares" v-bind:key="item._id">
                <router-link v-bind:to="'/creditos-grupales'" class="container d-flex flex-row justify-content-between text-decoration-none align-items-center">
                    <span class="index p-2 flex-grow-0 mr-3">{{ (index+1) | zeroized}} </span>
                    <span class="list-item-title flex-grow-1 ">{{item.name}}</span>
                    <span class="flex-grow-1 list-item-subtitle">{{item.category}}</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </router-link>
                <!-- <a class="" >
                   
                </a> -->
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters([
          'session',
          'softwares'
        ]),
    },

    created() {
        if(!this.softwares) {
            this.$store.dispatch('getSoftwaresFromAPI')
        }
    }
}
</script>

<style scoped>
   
    
</style>