import { createStore } from 'vuex'

export default createStore({
  state: {
    contChocolate:15,
    contFresa:20,
    contLeches:20,
    contPlatano:20,
    contChessecake:20,
    contGalletas:10,
    contGomitas:10,
    contGelatina:10,
    contFrutos:10,
    contAChocolate:10,

  },
  getters: {
  },
  mutations: {
    subirContador(state,sabor){
      switch (sabor) {
        case 'chocolate':
          state.contChocolate++;
          break;
        case 'fresa':
          state.contFresa++;
          break;
        case 'leches':
          state.contLeches++;
          break;
        case 'platano':
          state.contPlatano++;
          break;
        case 'chessecake':
          state.contChessecake++;
          break;
        case 'galletas':
          state.contGalletas++;
          break;
        case 'gomitas':
          state.contGomitas++;
          break;
        case 'gelatina':
          state.contGelatina++;
          break;
        case 'frutos':
          state.contFrutos++;
          break;
        case 'achocolate':
          state.contAChocolate++;
          break;
      }
    },
    bajarContador(state,sabor){
      switch (sabor) {
        case 'chocolate':
          state.contChocolate--;
          break;
        case 'fresa':
          state.contFresa--;
          break;
        case 'leches':
          state.contLeches--;
          break;
        case 'platano':
          state.contPlatano--;
          break;
        case 'chessecake':
          state.contChessecake--;
          break;
        case 'galletas':
          state.contGalletas--;
          break;
        case 'gomitas':
          state.contGomitas--;
          break;
        case 'gelatina':
          state.contGelatina--;
          break;
        case 'frutos':
          state.contFrutos--;
          break;
        case 'achocolate':
          state.contAChocolate--;
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
