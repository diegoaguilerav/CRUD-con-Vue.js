<template>
  <div class="contenedor">
    <h2>ELIMINAR CLIENTE</h2>
    <p>Rut</p>
    <input type="text" v-model="rut"/> <br /><br />
    <input type="button" value="Eliminar cliente" @click="eliminar" />
  </div>
</template>

<script>
export default {
  name: "Eliminar",
  data: function () {
    return {
      store: this.$store,
      rut: "",
    };
  },
  methods: {
    eliminar: function () {
      this.store.commit("eliminar_cliente", {rut : this.rut});
      this.rut = ''
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
