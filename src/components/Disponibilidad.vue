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
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Fresa</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Tres leches</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Platano</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Chessecake</td>
                            <td>1</td>
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
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Gomitas</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Gelatina</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Frutos rojos</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Chocolate</td>
                            <td>5</td>
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