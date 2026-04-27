<template>
  <section id="visitanos" class="visitanos">
    <div class="container">
      <h2 class="section-title">{{ t.visitanos.title }}</h2>
      <p class="section-description">{{ t.visitanos.description }}</p>

      <div class="map-container" ref="mapContainer">
        <iframe
          v-if="mapVisible"
          src="https://www.google.com/maps?q=-25.6118283,-54.5621833&output=embed"
          class="map-iframe"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :title="t.visitanos.mapTitle"
        ></iframe>
        <div v-else class="map-placeholder" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
const mapContainer = ref(null);
const mapVisible = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        mapVisible.value = true;
        observer.disconnect();
      }
    },
    { rootMargin: '200px' }
  );
  if (mapContainer.value) observer.observe(mapContainer.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.visitanos {
  background: linear-gradient(to bottom,
              #f9f9f9 0%,
              #f9f9f9 100%);
  padding: 80px 0;
  margin-top: -1px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #4CAF50;
}

.section-description {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.map-container {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.map-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.map-iframe {
  width: 100%;
  height: 450px;
  border: 0;
  display: block;
}

.map-placeholder {
  width: 100%;
  height: 450px;
  background-color: #e8f0e8;
}

@media (max-width: 768px) {
  .visitanos {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
    padding: 0 20px;
  }

  .map-iframe {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .map-iframe {
    height: 300px;
  }
}
</style>
