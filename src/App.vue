import router from './router';
<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/acessorios">Acessorios</router-link> |
    <router-link to="/editoras">Editoras</router-link> |
    <router-link to="/autores">Autores</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
