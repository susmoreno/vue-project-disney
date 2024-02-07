<template>
  <div id="app">
    <nav>
      <router-link to="/inicio">Inicio</router-link> 
      <router-link to="/about">Planificador de Visitas</router-link> 
      <router-link to="/">Descubrí tu Atraccion Ideal</router-link>
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.4rem;
}

nav a {
  padding: 40px 30px;
  font-weight: bold;
  color: linear-gradient(to right, #70247a, #c164a5);
  text-decoration: none;
}

nav a:hover{
  color: #c164a5;
}

nav a.router-link-exact-active {
  color: #c164a5;
}
</style>
