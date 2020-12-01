<template>
  <div id="app" class="container-fluid p-0">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
     Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffffff;
  background: #000;
}

button.btn.btn-primary{
  background-color:  #7DF4C2;
  color: #000;
  border-color: transparent!important;
};



</style>
