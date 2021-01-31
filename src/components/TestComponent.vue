<template>
<div class="container">
    <drag-to-upload-component :fileType="'image'" :filesLimit="2" v-model="files"></drag-to-upload-component>

    <button type="button" v-on:click="showImages">Mostrar imagenes</button>
</div>
</template>
<script>
import DragToUploadComponent from './DragToUploadComponent.vue'

export default {
    components: { DragToUploadComponent },
    data () {
        return {
            files : []
        }
    },

    methods: {
        showImages() {
            console.log(this.files);
        }
    }
}
</script>
