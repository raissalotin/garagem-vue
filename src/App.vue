import router from './router';
<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/acessorios">Acessorios</router-link> |
    <router-link to="/cores">Cores</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/marcas">Marcas</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
<style>
  /* Estilo para o body */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Estilo para o header */
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }

  header a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    transition: all 0.3s ease;
  }

  header a:hover {
    text-decoration: underline;
  }

  /* Estilo para o main */
  main {
    padding: 20px;
  }

  /* Estilo para os links dentro do main */
  main a {
    display: block;
    color: #007bff;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f4f4f4;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  main a:hover {
    background-color: #ddd;
  }

  /* Estilo para o RouterView */
  .RouterView-enter-active, .RouterView-leave-active {
    transition: opacity 0.5s;
  }

  .RouterView-enter, .RouterView-leave-to {
    opacity: 0;
  }
</style>
