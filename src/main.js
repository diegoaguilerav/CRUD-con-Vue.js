import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import util from './util.js'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    clientes: util.clientes
  },
  mutations: {
    agregar_cliente(state, cliente) {
      state.clientes.push(cliente)
    },
    eliminar_cliente(state, rut_cliente) {
      var index = state.clientes.map(cliente => cliente.rut).indexOf(rut_cliente.rut)
      if (index != -1) {
        state.clientes.splice(index, 1)
      }
    },
    modificar_cliente(state, datos) {
      var index = state.clientes.map(cliente => cliente.rut).indexOf(datos.rut)
      if (index != -1) {
        state.clientes[index].nombre = datos.nombre
        /*var cliente_modificado = {
            nombre : datos.nombre,
            rut : datos.rut,
            sueldo: state.clientes[index].sueldo
          }
          state.clientes.splice(index, 1, cliente_modificado)*/
      }
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
