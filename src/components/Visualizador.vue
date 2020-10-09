<template>
  <div class="visualizador">
    <h2>LISTA DE CLIENTES</h2>
    <div v-for="(cliente, index) of store.state.clientes" v-bind:key="index">
      <div class="lista">
        <div class="atributos">
          Nombre: <br />
          Rut: <br />
          Sueldo: <br />
        </div>
        <div>
          {{ cliente.nombre }} <br />
          {{ cliente.rut }} <br />
          {{ cliente.sueldo }}
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Visualizador",
  data: function () {
    return {
      store: this.$store,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visualizador {
  width: 20%;
  border: 10px solid black;
  padding: 20px;
  background-color: royalblue;
  color: whitesmoke;
}
.lista {
  display: flex;
  flex-wrap: nowrap;
  text-align: start;
  color: white;
}
.atributos{
  margin: 0 20px 0 10px;
}
</style>
