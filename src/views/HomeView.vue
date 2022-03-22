<template>
  <div class="home">
    <div class="fondorosa">
      <Carrusel/>
      <Menu/>
      <Informacion/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Carrusel from "../components/Carrusel.vue";
import Menu from "../components/Menu.vue";
import Informacion from "../components/Informacion.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Carrusel,
    Menu,
    Informacion,
  }
}
</script>
<style>
.fondorosa{
  background-color:#FFD1DC;
}
.fondoblanco{
  background-color:#FFFFFF;
}
</style>
