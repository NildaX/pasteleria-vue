<template>
  <div align="center" class="container fondorosa"> 
        <Datos/>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
// @ is an alias to /src
import Datos from "../components/Datos.vue";

export default {
  name: 'AboutView',
  components: {
    Datos,
  }
}
</script>

<style>
label{
    font-size: 30px;
  }
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 24px;
  }
  input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 24px;
  }
  input[type=number] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 24px;
  }
  input[type=checkbox] {
    height: 40px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 24px;
  }
  .button{
    font-size: 30px;
    border: 2px;
    background: #fc67b1;
    padding: 0;
    width: 100%;
    height: 5%;
  }
</style>