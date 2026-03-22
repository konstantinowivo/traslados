<template>
  <section id="inicio" class="hero">
    <div class="hero-content">
      <p class="company-name">{{ t.hero.company }}</p>
      <h2>{{ t.hero.title }}</h2>
      <p>{{ t.hero.subtitle }}</p>
      <a
        :href="whatsappLink"
        class="btn-whatsapp"
        target="_blank"
      >
        {{ t.hero.button }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t, currentLanguage } = useI18n();

const whatsappLink = computed(() => {
  const message = currentLanguage.value === 'es'
    ? 'Hola,%20quiero%20información%20sobre%20traslados'
    : 'Hello,%20I%20want%20information%20about%20transfers';
  return `https://wa.me/5493757312141?text=${message}`;
});
</script>

<style scoped>
.hero {
  background: linear-gradient(to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.35) 50%,
              rgba(0, 0, 0, 0.15) 100%),
              url('/images/cataratas2.jpg');
  background-size: cover;
  background-position: center right;
  height: 600px;
  display: flex;
  align-items: center;
  color: white;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto 0 0;
  padding: 0 40px 0 80px;
  text-align: left;
}

.company-name {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: fadeInLeft 1s ease-out;
  display: inline-block;
  color: #FFD700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9),
               3px 3px 8px rgba(0, 0, 0, 0.8);
}

.hero-content h2 {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 3px 3px 8px rgba(0,0,0,0.7);
  font-weight: 700;
  line-height: 1.1;
  animation: fadeInLeft 1s ease-out 0.1s both;
}

.hero-content p:not(.company-name) {
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
  max-width: 600px;
  line-height: 1.4;
  animation: fadeInLeft 1s ease-out 0.2s both;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn-whatsapp {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 18px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  animation: fadeInLeft 1s ease-out 0.4s both;
}

.btn-whatsapp:hover {
  background-color: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

@media (max-width: 768px) {
  .hero {
    background-position: center;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url('/images/cataratas2.jpg');
    background-size: cover;
  }

  .hero-content {
    padding: 0 30px;
    text-align: center;
  }

  .hero-content h2 {
    font-size: 2.8rem;
  }

  .hero-content p {
    font-size: 1.3rem;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 500px;
  }

  .hero-content {
    padding: 0 20px;
  }

  .hero-content h2 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .btn-whatsapp {
    padding: 15px 30px;
    font-size: 1rem;
  }
}
</style>
