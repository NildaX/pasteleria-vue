<template>
<div align="center" class="container"> 
    <table>
        <thead>
            <tr>
                <th scope="col">Descripción del pastel</th>
                <th scope="col">Nombre del cliente</th>
                <th scope="col">Telefono del cliente</th>
                <th scope="col">Correo electronico del cliente</th>
            </tr>
        </thead>
        <tbody>
                <tr v-for="item in $store.state.pedidos" :key="item.id">
                  <td> {{ item. descripcion}} </td>
                  <td> {{ item. nombre}} </td>
                  <td> {{ item. telefono}} </td>
                  <td> {{ item. correo}}</td>
                </tr>
           
        </tbody>
    </table>
    </div>
</template>

<script>
export default{
    name: 'Pedidos',
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