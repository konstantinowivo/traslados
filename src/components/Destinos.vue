<template>
  <section id="destinos" class="destinos">
    <div class="container">
      <h2 class="section-title">{{ t.destinations.title }}</h2>
      <div class="destinos-grid">
        <div
          v-for="destino in destinos"
          :key="destino.id"
          class="destino-card"
        >
          <div
            class="destino-image"
            :class="destino.className"
          ></div>
          <div class="destino-info">
            <h3>{{ destino.title }}</h3>
            <p>{{ destino.description }}</p>
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

const destinos = computed(() => [
  {
    id: 1,
    className: 'cataratas',
    title: t.value.destinations.cataratas.title,
    description: t.value.destinations.cataratas.description
  },
  {
    id: 2,
    className: 'san-ignacio',
    title: t.value.destinations.ruinas.title,
    description: t.value.destinations.ruinas.description
  },
  {
    id: 3,
    className: 'salto-encantado',
    title: t.value.destinations.salto.title,
    description: t.value.destinations.salto.description
  },
  {
    id: 4,
    className: 'minas-wanda',
    title: t.value.destinations.wanda.title,
    description: t.value.destinations.wanda.description
  },
  {
    id: 5,
    className: 'jardin-aves',
    title: t.value.destinations.aves.title,
    description: t.value.destinations.aves.description
  },
  {
    id: 6,
    className: 'hitos',
    title: t.value.destinations.hitos.title,
    description: t.value.destinations.hitos.description
  }
]);
</script>

<style scoped>
.destinos {
  background: linear-gradient(to bottom,
              rgba(0, 0, 0, 0.3) 0%,
              rgba(76, 175, 80, 0.15) 3%,
              rgba(249, 249, 249, 0.5) 6%,
              #f9f9f9 10%,
              #f9f9f9 90%,
              rgba(249, 249, 249, 0.7) 95%,
              rgba(255, 255, 255, 0.5) 98%,
              #fff 100%);
  padding: 80px 0;
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

.destinos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.destino-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.destino-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.destino-image {
  height: 250px;
  background-size: cover;
  background-position: center;
}

.cataratas {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/cataratas1.jpg');
  background-size: cover;
  background-position: center;
}

.san-ignacio {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/ruinas_san_ignacio.jpg');
  background-size: cover;
  background-position: center;
}

.salto-encantado {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/salto_encantado.jpg');
  background-size: cover;
  background-position: center;
}

.minas-wanda {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/minas_wanda.png');
  background-size: cover;
  background-position: center;
}

.jardin-aves {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/ave1.jpg');
  background-size: cover;
  background-position: center;
}

.hitos {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),
              url('/images/triple_frontera.jpg');
  background-size: cover;
  background-position: center;
}

.destino-info {
  padding: 25px;
}

.destino-info h3 {
  color: #000;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.destino-info p {
  color: #000;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .destinos-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
