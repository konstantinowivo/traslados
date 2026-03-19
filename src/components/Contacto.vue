<template>
  <section id="contacto" class="contacto">
    <div class="container">
      <h2 class="section-title">Solicitá tu Traslado</h2>
      <div class="contacto-content">
        <div class="contacto-info">
          <h3>Información de Contacto</h3>
          <p><strong>📞 Teléfono:</strong> {{ contactInfo.phone }}</p>
          <p><strong>📧 Email:</strong> {{ contactInfo.email }}</p>
          <p><strong>📍 Ubicación:</strong> {{ contactInfo.location }}</p>
          <p><strong>⏰ Horario:</strong> {{ contactInfo.schedule }}</p>
          <div class="whatsapp-box">
            <a
              :href="contactInfo.whatsappLink"
              class="btn-whatsapp-large"
              target="_blank"
            >
              Chatea con nosotros en WhatsApp
            </a>
          </div>
        </div>
        <div class="contacto-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                v-model="formData.nombre"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                v-model="formData.telefono"
                required
              />
            </div>
            <div class="form-group">
              <label for="destino">Destino</label>
              <select id="destino" v-model="formData.destino">
                <option value="">Seleccioná un destino</option>
                <option
                  v-for="destino in destinos"
                  :key="destino.value"
                  :value="destino.value"
                >
                  {{ destino.text }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="fecha">Fecha del Traslado</label>
              <input
                type="date"
                id="fecha"
                v-model="formData.fecha"
              />
            </div>
            <div class="form-group">
              <label for="pasajeros">Cantidad de Pasajeros</label>
              <input
                type="number"
                id="pasajeros"
                v-model.number="formData.pasajeros"
                min="1"
                max="20"
              />
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                v-model="formData.mensaje"
                rows="4"
                placeholder="Contanos sobre tu viaje y necesidades especiales..."
              ></textarea>
            </div>
            <button type="submit" class="btn-submit">Enviar Consulta</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const contactInfo = {
  phone: '+54 9 3757 312141',
  email: 'info@trasladosmisiones.com',
  location: 'Puerto Iguazú, Misiones, Argentina',
  schedule: 'Lunes a Domingo de 6:00 a 22:00 hs',
  whatsappLink: 'https://wa.me/5493757312141?text=Hola,%20necesito%20información%20sobre%20traslados'
};

const destinos = [
  { value: 'cataratas', text: 'Cataratas del Iguazú' },
  { value: 'san-ignacio', text: 'Ruinas de San Ignacio' },
  { value: 'salto-encantado', text: 'Salto Encantado' },
  { value: 'minas-wanda', text: 'Minas de Wanda' },
  { value: 'jardin-aves', text: 'Jardín de las Aves' },
  { value: 'hitos', text: 'Hito Tres Fronteras' },
  { value: 'otro', text: 'Otro destino' }
];

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  destino: '',
  fecha: '',
  pasajeros: null,
  mensaje: ''
});

const handleSubmit = () => {
  console.log('Formulario enviado:', formData);
  alert('Gracias por tu consulta. Te contactaremos pronto!');
  // Aquí puedes agregar la lógica para enviar el formulario
};
</script>

<style scoped>
.contacto {
  background: linear-gradient(to bottom,
              #f9f9f9 0%,
              #f9f9f9 88%,
              rgba(249, 249, 249, 0.95) 90%,
              rgba(240, 245, 241, 0.9) 92%,
              rgba(230, 240, 232, 0.85) 94%,
              rgba(200, 220, 205, 0.8) 96%,
              rgba(26, 71, 42, 0.3) 97%,
              rgba(26, 71, 42, 0.5) 98%,
              rgba(26, 71, 42, 0.7) 99%,
              rgba(26, 71, 42, 0.85) 99.5%,
              #1a472a 100%);
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

.contacto-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
}

.contacto-info {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.contacto-info h3 {
  color: #1a472a;
  margin-bottom: 25px;
  font-size: 1.8rem;
}

.contacto-info p {
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.whatsapp-box {
  margin-top: 30px;
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 8px;
  text-align: center;
}

.btn-whatsapp-large {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-whatsapp-large:hover {
  background-color: #20ba5a;
  transform: scale(1.05);
}

.contacto-form {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #1a472a;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4CAF50;
}

.btn-submit {
  width: 100%;
  padding: 15px;
  background-color: #1a472a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #2d5a3f;
}

@media (max-width: 768px) {
  .contacto-content {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
