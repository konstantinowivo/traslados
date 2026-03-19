<template>
  <div id="app">
    <Header />
    <Hero />
    <Destinos />
    <Servicios />
    <Contacto />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Destinos from './components/Destinos.vue';
import Servicios from './components/Servicios.vue';
import Contacto from './components/Contacto.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Estilos globales se importarán en main.js */
</style>
