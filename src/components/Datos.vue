<template>
<form>
    <label for="sabor1">Realizar pedido</label>
    <br>
    <label for="sabor1">Sabor del pastel:</label>
    <div class="row">
        <div class="col-6">
            <input type="checkbox"  v-model="Chocolate" value="sabor1">
        </div>
        <div class="col-6">
            <label for="sabor1"> Chocolate</label>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <input type="checkbox"  v-model="Fresa" value="sabor2">
        </div>
        <div class="col-6">
            <label for="sabor1"> Fresa</label>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <input type="checkbox"  v-model="Naranja" value="sabor3">
        </div>
        <div class="col-6">
            <label for="sabor1"> Naranja</label>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <input type="checkbox" v-model="Platano"  value="sabor4">
        </div>
        <div class="col-6">
            <label for="sabor1"> Platano</label>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <input type="checkbox"  v-model="Chessecake" value="sabor5">
        </div>
        <div class="col-6">
            <label for="sabor1"> Chessecake</label>
        </div>
    </div>

    <label for="sabor1">Adornos del pastel:</label>
    <div class="row">
            <div class="col-6">
                <input type="checkbox" v-model="Galletas" value="sabor1">
            </div>
            <div class="col-6">
                <label for="sabor1"> Galletas</label>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <input type="checkbox"  v-model="Gomitas" value="sabor2">
            </div>
            <div class="col-6">
                <label for="sabor1"> Gomitas</label>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <input type="checkbox" v-model="Gelatina"  value="sabor3">
            </div>
            <div class="col-6">
                <label for="sabor1"> Gelatina</label>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <input type="checkbox"  v-model="Frutas" value="sabor4">
            </div>
            <div class="col-6">
                <label for="sabor1"> Frutas</label>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <input type="checkbox" v-model="Sneakers" value="sabor5">
            </div>
            <div class="col-6">
                <label for="sabor1"> Sneakers</label>
            </div>
        </div>
        <br>



    <label for="fname" >Nombre del solicitante:</label>
    <br>
    <input type="text" v-model="nombreS" required>
    <br>
    <label for="quantity">Telefono:</label>
    <br>
    <input type="number" v-model="telefonoS" min="1" max="5" required>
    <br>
    <label for="email">Correo electronico:</label>
    <br>
    <input type="email" v-model="correoS" required>
    <br>
    {{ $store.state.estadoenvio }}
    <br>
    <button type="reset" @click="$store.dispatch('realizarPedido',{Chocolate, Fresa, Naranja, Platano, Chessecake,Galletas, Gomitas,Gelatina,Frutas,Sneakers,nombreS,correoS,telefonoS})">Realizar pedido</button>
    </form>
</template>

<script>
export default{
    name: 'Datos',
}
</script>
<style scoped>
button{
    font-size: 30px;
    border: 2px;
    background: #fc67b1;
    padding: 0;
    width: 100%;
    height: 5%;
  }
  </style>