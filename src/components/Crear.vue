<template>
  <div class="contenedor">
    <h2>CREAR CLIENTE</h2>
    <p>Nombre</p>
    <input type="text" v-model="nombre" />
    <p>Rut</p>
    <input type="text" v-model="rut" />
    <p>Sueldo</p>
    <input type="text" v-model="sueldo" /> <br /><br />
    <input type="submit" value="Agregar Cliente" @click="agregar" />
  </div>
</template>

<script>
export default {
  name: "Crear",
  data: function () {
    return {
      store: this.$store,
      nombre: "",
      rut: "",
      sueldo: "",
    };
  },
  methods: {
    agregar: function () {
      var cliente = {
        nombre: this.nombre,
        rut: this.rut,
        sueldo: this.sueldo,
      };
      if (this.nombre != "" && this.rut != "" && this.sueldo != "") {
        this.store.commit("agregar_cliente", cliente);
        this.nombre = "";
        this.rut = "";
        this.sueldo = "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
