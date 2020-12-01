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
                <a class="container d-flex flex-row justify-content-between text-decoration-none align-items-center" >
                    <span class="index p-2 flex-grow-0 mr-3">{{ (index+1) | zeroized}} </span>
                    <span class="list-item-title flex-grow-1 ">{{item.name}}</span>
                    <span class="flex-grow-1 list-item-subtitle">{{item.category}}</span>
                   <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>

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
        if(!this.session){
            this.$router.replace('/login')
        }
        else {
            if(!this.softwares) {
                this.$store.dispatch('getSoftwaresFromAPI')
            }
        }

        
    }
}
</script>

<style scoped>
    .list-header {
        border-bottom: 1px solid #272A31;
    }
    
    .list-header i { color: #7DF4C2 }
    .list-header h3 { font-size: 16pt; padding-top: 0.3em; font-weight:900;}
    .list-header .btn { text-transform: uppercase; font-size: 10pt;}

    .list li{ list-style: none; color: white; background: #171925; border-radius:8px;}
    .list li a{color: white; cursor: pointer;} 
    .list li a .list-item-title{font-weight: 600; font-size: 1.3em;}
    .list li a .list-item-subtitle { color: #9EA2AD; font-size: 0.8em; }
    .list li a  i { font-size: 1.5em;}
    .list .index { border: 1px solid #7DF4C2; color: white; font-weight: 500; font-size: 1.2em; }
</style>