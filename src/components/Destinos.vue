<template>
  <section id="destinos" class="destinos">
    <div class="container">
      <h2 class="section-title">{{ t.destinations.title }}</h2>
      <div class="destinos-grid">
        <article
          v-for="destino in destinos"
          :key="destino.id"
          class="destino-card"
          itemscope
          itemtype="https://schema.org/TouristAttraction"
        >
          <picture>
            <source :srcset="destino.imageWebp" type="image/webp">
            <img
              :src="destino.image"
              :alt="destino.alt"
              class="destino-image"
              loading="lazy"
              width="350"
              height="250"
              itemprop="image"
            />
          </picture>
          <div class="destino-info">
            <h3 itemprop="name">{{ destino.title }}</h3>
            <p itemprop="description">{{ destino.description }}</p>
          </div>
        </article>
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
    image: '/images/cataratas1.jpg',
    imageWebp: '/images/cataratas1.webp',
    alt: 'Cataratas del Iguazú Argentina - Pasarelas sobre las cascadas',
    title: t.value.destinations.cataratas.title,
    description: t.value.destinations.cataratas.description
  },
  {
    id: 2,
    image: '/images/ruinas_san_ignacio.jpg',
    imageWebp: '/images/ruinas_san_ignacio.webp',
    alt: 'Ruinas Jesuíticas de San Ignacio Miní - Patrimonio de la Humanidad UNESCO',
    title: t.value.destinations.ruinas.title,
    description: t.value.destinations.ruinas.description
  },
  {
    id: 3,
    image: '/images/salto_encantado.jpg',
    imageWebp: '/images/salto_encantado.webp',
    alt: 'Salto Encantado Misiones - Cascada en medio de la selva',
    title: t.value.destinations.salto.title,
    description: t.value.destinations.salto.description
  },
  {
    id: 4,
    image: '/images/minas_wanda.png',
    imageWebp: '/images/minas_wanda.webp',
    alt: 'Minas de Wanda - Piedras preciosas y amatistas de Misiones',
    title: t.value.destinations.wanda.title,
    description: t.value.destinations.wanda.description
  },
  {
    id: 5,
    image: '/images/ave1.jpg',
    imageWebp: '/images/ave1.webp',
    alt: 'Jardín de Aves - Parque de aves exóticas en Iguazú',
    title: t.value.destinations.aves.title,
    description: t.value.destinations.aves.description
  },
  {
    id: 6,
    image: '/images/triple_frontera.jpg',
    imageWebp: '/images/triple_frontera.webp',
    alt: 'Hito Tres Fronteras - Punto de encuentro Argentina, Brasil y Paraguay',
    title: t.value.destinations.hitos.title,
    description: t.value.destinations.hitos.description
  },
  {
    id: 7,
    image: '/images/cataratas_brasil.jpg',
    imageWebp: '/images/cataratas_brasil.webp',
    alt: 'Cataratas del Iguazú lado brasileño - Vista panorámica de las cascadas',
    title: t.value.destinations.cataratasBrasil.title,
    description: t.value.destinations.cataratasBrasil.description
  },
  {
    id: 8,
    image: '/images/saltos_mocona.jpg',
    imageWebp: '/images/saltos_mocona.webp',
    alt: 'Saltos del Moconá - Cascadas longitudinales únicas en el mundo',
    title: t.value.destinations.mocona.title,
    description: t.value.destinations.mocona.description
  },
  {
    id: 9,
    image: '/images/ciudad_del_este.jpg',
    imageWebp: '/images/ciudad_del_este.webp',
    alt: 'Ciudad del Este Paraguay - Shopping y compras duty free',
    title: t.value.destinations.shopping.title,
    description: t.value.destinations.shopping.description
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
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  filter: brightness(1.15);
  transition: transform 0.3s ease;
}

.destino-card:hover .destino-image {
  transform: scale(1.05);
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
