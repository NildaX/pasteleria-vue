<template>
  <nav>
  <div class="row alig-items-center justify-content-center text-center">
      <div class="col-6">
        <img src="@/assets/logo.png" alt="NASAcakes">
      </div>
      <div class="col-6 alig-items-center justify-content-center text-center">
        <router-link to="/">NASAcakes</router-link> |
        <router-link to="/about">Realizar pedido</router-link>  |
        <router-link to="/pastelero">Pastelero</router-link>
      </div>
  </div>    
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(230, 53, 133);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(215, 53, 230);
  padding: 30px;  
}

nav a.router-link-exact-active {
  color: rgb(230, 53, 133);
}
</style>
