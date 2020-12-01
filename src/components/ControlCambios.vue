<template>
    <div class="container-fluid">
        <div class="list-header container d-flex flex-row justify-content-between mt-5 pb-3">
            <div class="flex-grow-1 d-flex align-items-center">
                    <h3>Control de Cambios</h3>
            </div>
        </div>
        <div class="container mt-4">
            <div class="d-flex flex-row justify-content-between table-header justify-content-center text-center">
                <div class="flex-grow-1">Fecha</div>
                <div class="flex-grow-1">Archivo</div>
                <div class="flex-grow-1">Cambios</div>
            </div>
            <ul class="list container-fluid ml-0 pl-0">
                <li class="list-item py-3 my-3 px-3 row" v-for="(item,index) in controlCambios" v-bind:key="item._id">
                     <div class="container d-flex flex-row justify-content-between text-decoration-none align-items-center" >
                         <div class="flex-grow-1">
                             <span class="index p-2 flex-grow-0 mr-3">{{ (index+1) | zeroized}} </span>
                            <span class="list-item-title flex-grow-1 ">{{item.fecha}}</span>
                         </div>
                        <span class="flex-grow-1 list-item-subtitle">{{item.archivo}}</span>
                        <span class="flex-grow-1 list-item-subtitle">{{item.cambios}}</span>
                        <!-- <i class="fa fa-angle-right" aria-hidden="true"></i> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters([
          'controlCambios'
        ]),
    }, 
    mounted() {
        if(!this.cambios){
            this.$store.dispatch('getControlCambiosFromAPI', {idCredito : this.$route.params.idCredito})
        }
    }
}
</script>
<style scoped>
    @import url('../../public/css/styles.css');
    .list-item div { color: #9A9BD0!important; font-size: 1em; }
</style>