<template>
  <div class="pastelero fondorosa">
        <h1>Cantidades disponibles </h1>
        <Disponibilidad/>
        <h1>Pedidos Realizados </h1>
        <Pedidos/>
    </div>
</template>

<script>
import Disponibilidad from "../components/Disponibilidad.vue";
import Pedidos from "../components/Pedidos.vue";
export default {
  name: 'PasteleroView',
  components: {
      Disponibilidad,
      Pedidos,
  }
}
</script>
<style scoped>
h1{
    padding-left:30vw;
}
</style>