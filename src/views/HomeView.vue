<template>
  <div class="home">
    <Header/>
    <div class="fondorosa">
      <Carrusel/>
      <Botones/>
      <Informacion/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Carrusel from "../components/Carrusel.vue";
import Botones from "../components/Botones.vue";
import Informacion from "../components/Informacion.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Carrusel,
    Botones,
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
