<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Traslados Misiones. Todos los derechos reservados.</p>
      <p>{{ slogan }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
const slogan = 'Descubrí la magia de Misiones con seguridad y confort';
</script>

<style scoped>
footer {
  background-color: #1a472a;
  color: white;
  text-align: center;
  padding: 30px 0;
  margin-top: -1px;
}

footer p {
  margin: 5px 0;
}
</style>
