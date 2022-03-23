import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores:[0,0,0,0,0],
    adornos:[0,0,0,0,0],
    pedidos:[
    {id:0,descripcion:"Sabor Chocolate con Fresa con adornos de galletas y gomitas",nombre:"Raúl R",telefono:"111 222 33 44",correo:"raulr@prueba.com"},
    {id:1,descripcion:"Sabor Tres leches con adornos de Chocolate",nombre:"Lizbeth X",telefono:"555 666 77 88",correo:"lizbethx@prueba.com"}
  ],
  },
  getters: {
  },
  mutations: {
    subirContador(state,sabor){
      switch (sabor) {
        case 'chocolate':
          state.sabores[0]++;
          break;
        case 'fresa':
          state.sabores[1]++;
          break;
        case 'leches':
          state.sabores[2]++;
          break;
        case 'platano':
          state.sabores[3]++;
          break;
        case 'chessecake':
          state.sabores[4]++;
          break;
        case 'galletas':
          state.adornos[0]++;
          break;
        case 'gomitas':
          state.adornos[1]++;
          break;
        case 'gelatina':
          state.adornos[2]++;
          break;
        case 'frutos':
          state.adornos[3]++;
          break;
        case 'achocolate':
          state.adornos[4]++;
          break;
      }
    },
    bajarContador(state,sabor){
      switch (sabor) {
        case 'chocolate':
          state.sabores[0]--;
          break;
        case 'fresa':
          state.sabores[1]--;
          break;
        case 'leches':
          state.sabores[2]--;
          break;
        case 'platano':
          state.sabores[3]--;
          break;
        case 'chessecake':
          state.sabores[4]--;
          break;
        case 'galletas':
          state.adornos[0]--;
          break;
        case 'gomitas':
          state.adornos[1]--;
          break;
        case 'gelatina':
          state.adornos[2]--;
          break;
        case 'frutos':
          state.adornos[3]--;
          break;
        case 'achocolate':
          state.adornos[4]--;
          break;
      }
    }
  },
  actions: {
    subirContador({commit},tipo) { 
      commit("subirContador",tipo);
      console.log(tipo);

    },
    bajarContador({commit},tipo) { 
      commit("bajarContador",tipo);
      console.log(tipo);
    },
  },
  modules: {
  }
})
