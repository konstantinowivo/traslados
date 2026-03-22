<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Traslados Misiones. {{ t.footer.rights }}.</p>
      <p>{{ t.footer.slogan }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  background-color: #e8f5e9;
  color: #2e7d32;
  text-align: center;
  padding: 60px 0 40px 0;
  margin-top: 0;
}

footer p {
  margin: 8px 0;
  font-size: 0.95rem;
  font-weight: 400;
}

footer p:first-child {
  font-weight: 500;
}
</style>
