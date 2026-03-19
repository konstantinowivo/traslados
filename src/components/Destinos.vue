<template>
  <section id="destinos" class="destinos">
    <div class="container">
      <h2 class="section-title">Nuestros Destinos</h2>
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
const destinos = [
  {
    id: 1,
    className: 'cataratas',
    title: 'Cataratas del Iguazú',
    description: 'Una de las 7 Maravillas Naturales del Mundo. Te llevamos al Parque Nacional Iguazú para que vivas una experiencia inolvidable.'
  },
  {
    id: 2,
    className: 'san-ignacio',
    title: 'Ruinas de San Ignacio',
    description: 'Descubrí la historia jesuítica guaraní en estas increíbles ruinas declaradas Patrimonio de la Humanidad.'
  },
  {
    id: 3,
    className: 'salto-encantado',
    title: 'Salto Encantado',
    description: 'Disfrutá de la belleza natural de este impresionante salto de agua en medio de la selva misionera.'
  },
  {
    id: 4,
    className: 'minas-wanda',
    title: 'Minas de Wanda',
    description: 'Conocé las famosas piedras semipreciosas y cristales en estas fascinantes minas.'
  },
  {
    id: 5,
    className: 'jardin-aves',
    title: 'Jardín de las Aves',
    description: 'Observá más de 150 especies de aves tropicales en su hábitat natural.'
  },
  {
    id: 6,
    className: 'hitos',
    title: 'Hito Tres Fronteras',
    description: 'Visitá el punto donde se unen Argentina, Brasil y Paraguay.'
  }
];
</script>

<style scoped>
.destinos {
  background: linear-gradient(to bottom,
              rgba(0, 0, 0, 0.3) 0%,
              rgba(26, 71, 42, 0.15) 3%,
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
  color: #1a472a;
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
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%234db8ff" width="400" height="300"/><path fill="%23fff" opacity="0.3" d="M0 150 Q100 120 200 150 T400 150 V300 H0 Z"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-size="40" font-weight="bold">Cataratas</text></svg>');
}

.san-ignacio {
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23c49a6c" width="400" height="300"/><rect fill="%238b6f47" x="100" y="80" width="80" height="120"/><rect fill="%238b6f47" x="220" y="80" width="80" height="120"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-size="30" font-weight="bold">San Ignacio</text></svg>');
}

.salto-encantado {
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2334a853" width="400" height="300"/><path fill="%2369d4ff" opacity="0.6" d="M150 0 L170 0 L190 300 L150 300 Z"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-size="28" font-weight="bold">Salto Encantado</text></svg>');
}

.minas-wanda {
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%239c27b0" width="400" height="300"/><circle fill="%23e1bee7" cx="100" cy="100" r="30"/><circle fill="%23ce93d8" cx="200" cy="150" r="40"/><circle fill="%23ba68c8" cx="300" cy="120" r="35"/><text x="50%" y="85%" text-anchor="middle" fill="%23fff" font-size="32" font-weight="bold">Minas Wanda</text></svg>');
}

.jardin-aves {
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2300bcd4" width="400" height="300"/><circle fill="%23ffeb3b" cx="150" cy="120" r="20"/><path fill="%23ff5722" d="M150 140 Q130 160 150 180 Q170 160 150 140"/><text x="50%" y="85%" text-anchor="middle" fill="%23fff" font-size="28" font-weight="bold">Jardín de Aves</text></svg>');
}

.hitos {
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2375aadb" width="133" height="300"/><rect fill="%23009b3a" x="133" width="133" height="300"/><rect fill="%23da291c" x="266" width="134" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-size="26" font-weight="bold">Tres Fronteras</text></svg>');
}

.destino-info {
  padding: 25px;
}

.destino-info h3 {
  color: #1a472a;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.destino-info p {
  color: #666;
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
