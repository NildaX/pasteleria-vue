<template>
<div class="row" align="center">
        <div class="col-6">
            <h2>Pasteles disponibles</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Sabores</th>
                            <th scope="col">Piezas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chocolate</td>
                            <td>{{ $store.state.contChocolate }}</td>
                            <button @click="$store.dispatch('bajarContador','chocolate')">-</button>
                            <button @click="$store.dispatch('subirContador','chocolate')">+</button>

                        </tr>
                        <tr>
                            <td>Fresa</td>
                            <td>{{ $store.state.contFresa }}</td>
                            <button @click="$store.dispatch('bajarContador','fresa')">-</button>
                            <button @click="$store.dispatch('subirContador','fresa')">+</button>
                        </tr>
                        <tr>
                            <td>Tres leches</td>
                            <td>{{ $store.state.contLeches }}</td>
                            <button @click="$store.dispatch('bajarContador','leches')">-</button>
                            <button @click="$store.dispatch('subirContador','leches')">+</button>
                        </tr>
                        <tr>
                            <td>Platano</td>
                            <td>{{ $store.state.contPlatano }}</td>
                            <button @click="$store.dispatch('bajarContador','platano')">-</button>
                            <button @click="$store.dispatch('subirContador','platano')">+</button>
                        </tr>
                        <tr>
                            <td>Chessecake</td>
                            <td>{{ $store.state.contChessecake }}</td>
                            <button @click="$store.dispatch('bajarContador','chessecake')">-</button>
                            <button @click="$store.dispatch('subirContador','chessecake')">+</button>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <h2>Adornos disponibles</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Adornos</th>
                            <th scope="col">Porciones para pastel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Galletas</td>
                            <td>{{ $store.state.contGalletas }}</td>
                            <button @click="$store.dispatch('bajarContador','galletas')">-</button>
                            <button @click="$store.dispatch('subirContador','galletas')">+</button>
                        </tr>
                        <tr>
                            <td>Gomitas</td>
                            <td>{{ $store.state.contGomitas }}</td>
                            <button @click="$store.dispatch('bajarContador','gomitas')">-</button>
                            <button @click="$store.dispatch('subirContador','gomitas')">+</button>
                        </tr>
                        <tr>
                            <td>Gelatina</td>
                            <td>{{ $store.state.contGelatina }}</td>
                            <button @click="$store.dispatch('bajarContador','gelatina')">-</button>
                            <button @click="$store.dispatch('subirContador','gelatina')">+</button>
                        </tr>
                        <tr>
                            <td>Frutos rojos</td>
                            <td>{{ $store.state.contFrutos }}</td>
                            <button @click="$store.dispatch('bajarContador','frutos')">-</button>
                            <button @click="$store.dispatch('subirContador','frutos')">+</button>
                        </tr>
                        <tr>
                            <td>Chocolate</td>
                            <td>{{ $store.state.contAChocolate}}</td>
                            <button @click="$store.dispatch('bajarContador','achocolate')">-</button>
                            <button @click="$store.dispatch('subirContador','achocolate')">+</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
export default{
    name: 'Disponibilidad',
}
</script>

<style scoped>
h1{
    padding-left:30vw;
}
table {
  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th, td {
  padding: 20px;
}  
  ul {
    padding: 0;
    width: 100%;
  }
  
  li {
    display: inline;
  }
  
  a {
    outline: none;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    margin-right: 0.625%;
    text-align: center;
    line-height: 3;
    color: #ff0080;
    font-size: xx-large;
    
  }
  
  li:last-child a {
    margin-right: 0;
  }
  
  a:link, a:visited, a:focus {
    background: rgb(255, 255, 255);
  }
  
  a:hover {
    background: rgb(215, 53, 230);
  }
  
  a:active {
    background: #c970ae;
    color: white;
  }
  label{
    font-size: 30px;
  }
  h2{
    padding: 50px,
  }
</style>