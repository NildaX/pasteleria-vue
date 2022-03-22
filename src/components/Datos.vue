<template>
    <label for="fname">Nombre del solicitante:</label>
    <br>
    <input type="text" id="fname" name="fname">
    <br>
    <label for="quantity">Telefono:</label>
    <br>
    <input type="number" id="quantity" name="quantity" min="1" max="5">
    <br>
    <label for="email">Correo electronico:</label>
    <br>
    <input type="email" id="email" name="email">
    <br>
    
</template>

<script>
export default{
    name: 'Datos',
}
</script>