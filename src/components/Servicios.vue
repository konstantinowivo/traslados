<template>
  <section id="servicios" class="servicios">
    <div class="container">
      <h2 class="section-title">{{ t.services.title }}</h2>
      <div class="servicios-list">
        <div
          v-for="servicio in servicios"
          :key="servicio.id"
          class="servicio-item"
        >
          <div class="servicio-number">{{ String(servicio.id).padStart(2, '0') }}</div>
          <div class="servicio-content">
            <h3>{{ servicio.title }}</h3>
            <p>{{ servicio.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();

const servicios = computed(() => [
  {
    id: 1,
    title: t.value.services.airport.title,
    description: t.value.services.airport.description
  },
  {
    id: 2,
    title: t.value.services.international.title,
    description: t.value.services.international.description
  },
  {
    id: 3,
    title: t.value.services.tripleFrontera.title,
    description: t.value.services.tripleFrontera.description
  },
  {
    id: 4,
    title: t.value.services.customTours.title,
    description: t.value.services.customTours.description
  },
  {
    id: 5,
    title: t.value.services.premium.title,
    description: t.value.services.premium.description
  },
  {
    id: 6,
    title: t.value.services.schedule.title,
    description: t.value.services.schedule.description
  }
]);
</script>

<style scoped>
.servicios {
  background: linear-gradient(to bottom,
              #fff 0%,
              #fff 90%,
              rgba(255, 255, 255, 0.7) 95%,
              rgba(249, 249, 249, 0.5) 98%,
              #f9f9f9 100%);
  padding: 80px 0 40px 0;
  margin-top: -1px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
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

.servicios-list {
  max-width: 900px;
  margin: 0 auto;
}

.servicio-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 30px;
  padding: 30px 0;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.servicio-item:last-child {
  border-bottom: none;
}

.servicio-item:hover {
  transform: translateX(10px);
}

.servicio-number {
  font-size: 3rem;
  font-weight: 700;
  color: #4CAF50;
  line-height: 1;
  text-align: center;
  position: relative;
}

.servicio-number::after {
  content: '';
  position: absolute;
  right: -15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #4CAF50, transparent);
}

.servicio-content h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: #000;
  font-weight: 600;
}

.servicio-content p {
  color: #000;
  line-height: 1.7;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .servicio-item {
    grid-template-columns: 60px 1fr;
    gap: 20px;
    padding: 25px 0;
  }

  .servicio-number {
    font-size: 2.2rem;
  }

  .servicio-content h3 {
    font-size: 1.2rem;
  }

  .servicio-content p {
    font-size: 0.95rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
