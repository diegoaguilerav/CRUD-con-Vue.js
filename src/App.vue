<template>
  <div id="app">
    <div class="crud">
      <Crear/>
      <Eliminar/>
      <Modificar/>
      <Visualizador/>
    </div>
  </div>
</template>

<script>
import Crear from './components/Crear.vue'
import Eliminar from './components/Eliminar.vue'
import Modificar from './components/Modificar.vue'
import Visualizador from './components/Visualizador.vue'

export default {
  name: 'App',
  components: {
    Crear, Eliminar, Modificar, Visualizador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.crud{
  display: flex;
  justify-content: center;
}
.contenedor {
  height: 350px;
  width: 20%;
  border: 10px solid black;
  padding: 20px;
  background-color: royalblue;
  color: whitesmoke;
}
</style>
