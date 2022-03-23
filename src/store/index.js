import { createStore } from 'vuex'

export default createStore({
  state: {
    existenciasP:[
      {id:0,nombre:"Chocolate",cantidad:"0"},
      {id:1,nombre:"Fresa",cantidad:"0"},
      {id:2,nombre:"Tres leches",cantidad:"0"},
      {id:3,nombre:"Platano",cantidad:"0"},
      {id:4,nombre:"Chessecake",cantidad:"0"},
    ],
    existenciasA:[
      {id:5,nombre:"Galletas",cantidad:"0"},
      {id:6,nombre:"Gomitas",cantidad:"0"},
      {id:7,nombre:"Gelatina",cantidad:"0"},
      {id:8,nombre:"Frutos rojos",cantidad:"0"},
      {id:9,nombre:"M&M",cantidad:"0"},
    ],
    pedidos:[
    {id:0,descripcion:"Sabor Chocolate con Fresa con adornos de galletas y gomitas",nombre:"Raúl R",telefono:"111 222 33 44",correo:"raulr@prueba.com"},
    {id:1,descripcion:"Sabor Tres leches con adornos de Chocolate",nombre:"Lizbeth X",telefono:"555 666 77 88",correo:"lizbethx@prueba.com"}
  ],
  },
  getters: {
  },
  mutations: {
    subirContador(state,sabor){
      if (sabor <=4){
        state.existenciasP[sabor]['cantidad']++;
      }
      else{
        state.existenciasA[sabor-5]['cantidad']++;
      }
    },
    bajarContador(state,sabor){
      if (sabor <=4){
        state.existenciasP[sabor]['cantidad']--;
      }
      else{
        state.existenciasA[sabor-5]['cantidad']--;
      }
    },
    realizarPedidoa(state,inf){
      let descr="Sabor ";
      let descr2= " con adornos de ";
      let i=0;
      for (const property in inf) {
        console.log(`${property}: ${inf[property]}`);
        if(i<10){
          if(i<=4){
            if(inf[property]!=undefined){
              descr+=" "+property;
            }
          }
          else{
            if(inf[property]!=undefined){
              descr2+=" "+property;
            }
          }
        }
        i++;
      }
      state.pedidos.push({id:state.pedidos.lengt +1,descripcion: descr+descr2,nombre:inf['nombreS'], telefono:inf['telefonoS'], correo:inf['correoS']})
     // state.pedidos.push({id:state.pedidos.lengt +1,descripcion:"Sabor: "+ inf['schoco'] +inf['sfresa']+inf['sleches']+inf['splatano']+inf['schesse']+ "Con adornos "+inf['afrutos']+inf['agalletas']+inf['agelatina']+inf['agomitas']+inf['amym'],nombre:inf['nombreS'], telefono:inf['telefonoS'], correo:inf['correoS']})
    }
  },
  actions: {
    subirContador({commit},payload) { 
      commit("subirContador",payload.id);
      console.log(payload.id);
    },
    bajarContador({commit},payload) { 
      commit("bajarContador",payload.id);
      console.log(payload.id);
    },
    realizarPedido({commit},tipo){
      console.log("realizo pedido");
      console.log(tipo);
      commit("realizarPedidoa",tipo);
    }
  },
  modules: {
  }
})
