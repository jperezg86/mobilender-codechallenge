<template>
    <div class="container-fluid">
        <div class="list-header container d-flex flex-row justify-content-between mt-5 pb-3">
            <div class="flex-grow-1 d-flex align-items-center">
                    <h3>Buscar Créditos Grupales</h3>
            </div>
            <div class="">
                <a href="" class="btn btn-outline-primary">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    Inspeccionar
                </a>
            </div>
        </div>
        <div class="container pt-4 table-header">
            <div class="row text-center">
                <div class="col-2">
                    Archivo
                </div>    
                <div class="col-1">
                    Expedición
                </div>    
                <div class="col-3">
                    % Calidad de Información
                </div>    
                <div class="col-1">
                    Estátus
                </div>    
                <div class="col-1">
                    Finalización
                </div>    
                <div class="col-2">
                    Usuario
                </div>    
                <div class="col-2">
                    Acciones
                </div>    
            </div>
        </div>
        <ul class="container list">
            <li class="list-item p-2 my-2" v-for="item in creditosGrupales" v-bind:key="item._id">
                <router-link v-bind:to="'/control-de-cambios/' + item._id" class="row text-center d-flex align-items-center">
                    <div class="col-2">
                        {{item.file}}
                    </div>
                    <div class="col-1">
                        {{item.expedition}}
                    </div>    
                    <div class="col-3">
                       {{item.info_quality}}%
                    </div>    
                    <div class="col-1" v-bind:class="getClass(item)">
                        {{item.status}}
                    </div>    
                    <div class="col-1">
                        {{item.end_date}}
                    </div>    
                    <div class="col-2">
                        {{item.user}}
                    </div>    
                    <div class="col-2 text-center">
                        <div class="d-flex flex-row justify-content-between">
                            <i class="fa fa-file" aria-hidden="true"></i>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div> 
                </router-link>
                      
            </li>
        </ul>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters([
          'creditosGrupales'
        ]),
    },

    methods: {
        getClass(item) {
            switch(item.status.toLowerCase()) {
                case 'en proceso':
                    return "text-warning"
                case 'finalizado': 
                    return "text-success"
                case 'rechazado' : 
                    return "text-danger"
                default: 
                    return ''
            }
        }
    },

    created() {
        if(!this.creditos) {
            this.$store.dispatch('getCreditosGrupalesFromAPI')
        }
    }
}
</script>

<style scoped>
 
 .list-item a { color: #9A9BD0!important; font-size: 0.8em; }
 .list-item { height: 54px; min-height: 54px;}
</style>