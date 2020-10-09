<template>
  <div class="contenedor">
    <h2>MODIFICAR CLIENTE</h2>
    <p>Rut</p>
    <input type="text" v-model="rut" />
    <p>Nombre</p>
    <input type="text" v-model="nombre" /> <br /><br />
    <input
      type="button"
      value="Modificar el nombre del cliente"
      @click="modificar"
    />
  </div>
</template>

<script>
export default {
  name: "Modificar",
  data: function () {
    return {
      store: this.$store,
      nombre: "",
      rut: "",
    };
  },
  methods: {
    modificar: function () {
      var datos_modificacion = {
        nombre: this.nombre,
        rut: this.rut
      }
      if (this.nombre != "" && this.rut != ""){
        this.store.commit("modificar_cliente", datos_modificacion);
        this.nombre = ''
        this.rut = ''
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
