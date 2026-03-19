<template>
  <section id="inicio" class="hero">
    <div class="hero-content">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <a
        :href="whatsappLink"
        class="btn-whatsapp"
        target="_blank"
      >
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>

<script setup>
const title = 'Descubrí Misiones con Seguridad y Comodidad';
const subtitle = 'Traslados privados a los mejores destinos turísticos de la provincia';
const buttonText = 'Contactanos por WhatsApp';
const whatsappLink = 'https://wa.me/5493757312141?text=Hola,%20quiero%20información%20sobre%20traslados';
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url('/images/cataratas2.jpg');
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.btn-whatsapp {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:hover {
  background-color: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }

  .hero-content h2 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 500px;
    background-attachment: scroll;
  }

  .hero-content h2 {
    font-size: 1.5rem;
  }
}
</style>
