<template>
  <section id="servicios" class="servicios">
    <div class="container">
      <h2 class="section-title">Nuestros Servicios</h2>
      <div class="servicios-grid">
        <div
          v-for="servicio in servicios"
          :key="servicio.id"
          class="servicio-card"
        >
          <div class="servicio-icon">{{ servicio.icon }}</div>
          <h3>{{ servicio.title }}</h3>
          <p>{{ servicio.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicios = [
  {
    id: 1,
    icon: '✈️',
    title: 'Traslados Aeropuerto',
    description: 'Servicio de traslado desde el aeropuerto hasta cualquier hotel de la Triple Frontera. Servicio puerta a puerta con total comodidad y puntualidad.'
  },
  {
    id: 2,
    icon: '🌎',
    title: 'Servicio Nacional e Internacional',
    description: 'Traslados a cualquier punto turístico nacional e internacional. Cruzamos fronteras para llevarte a Brasil y Paraguay con toda la documentación en regla.'
  },
  {
    id: 3,
    icon: '🏨',
    title: 'Traslados Triple Frontera',
    description: 'Conectamos todos los hoteles y puntos turísticos de Puerto Iguazú, Foz de Iguazú y Ciudad del Este con servicios regulares y seguros.'
  },
  {
    id: 4,
    icon: '🗺️',
    title: 'Tours a Medida',
    description: 'Diseñamos tu itinerario personalizado a cualquier punto turístico de la región. Cataratas, Ruinas, Minas de Wanda y mucho más.'
  },
  {
    id: 5,
    icon: '🚗',
    title: 'Vehículos Premium',
    description: 'Flota de vehículos cómodos, climatizados y en perfectas condiciones. Adaptados para grupos pequeños y grandes familias.'
  },
  {
    id: 6,
    icon: '⏰',
    title: 'Horario Extendido',
    description: 'Atención de 6 AM a 22 HS, todos los días de la semana. Cobertura completa para todos tus traslados diurnos y nocturnos.'
  }
];
</script>

<style scoped>
.servicios {
  background: linear-gradient(to bottom,
              #fff 0%,
              #fff 90%,
              rgba(255, 255, 255, 0.7) 95%,
              rgba(249, 249, 249, 0.5) 98%,
              #f9f9f9 100%);
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

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.servicio-card {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.servicio-card:hover {
  background-color: #1a472a;
  color: white;
  transform: scale(1.05);
}

.servicio-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.servicio-card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.servicio-card:hover h3 {
  color: #fff;
}

.servicio-card p {
  color: #000;
}

.servicio-card:hover p {
  color: #e0e0e0;
}

@media (max-width: 768px) {
  .servicios-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
