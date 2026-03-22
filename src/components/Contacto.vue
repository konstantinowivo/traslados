<template>
  <section id="contacto" class="contacto">
    <div class="container">
      <h2 class="section-title">{{ t.contact.title }}</h2>
      <div class="contacto-content">
        <div class="contacto-form">
          <form @submit.prevent="handleSubmit">
            <!-- Campo oculto para Web3Forms - REEMPLAZAR 'YOUR_ACCESS_KEY_HERE' con el Access Key real -->
            <input type="hidden" name="access_key" :value="accessKey">

            <!-- Campo honeypot para protección anti-spam -->
            <input type="checkbox" name="botcheck" style="display: none;">

            <div class="form-group">
              <label for="nombre">{{ t.contact.form.name }} *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                v-model="formData.nombre"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">{{ t.contact.form.email }} *</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="telefono">{{ t.contact.form.phone }} *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                v-model="formData.telefono"
                required
              />
            </div>
            <div class="form-group">
              <label for="destino">{{ t.contact.form.destination }}</label>
              <select id="destino" name="destino" v-model="formData.destino">
                <option value="">{{ t.contact.form.selectDestination }}</option>
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
              <label for="fecha">{{ t.contact.form.date }}</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                v-model="formData.fecha"
              />
            </div>
            <div class="form-group">
              <label for="pasajeros">{{ t.contact.form.passengers }}</label>
              <input
                type="number"
                id="pasajeros"
                name="pasajeros"
                v-model.number="formData.pasajeros"
                min="1"
                max="20"
              />
            </div>
            <div class="form-group">
              <label for="mensaje">{{ t.contact.form.message }}</label>
              <textarea
                id="mensaje"
                name="mensaje"
                v-model="formData.mensaje"
                rows="4"
                :placeholder="t.contact.form.messagePlaceholder"
              ></textarea>
            </div>

            <!-- Mensaje de estado -->
            <div v-if="formStatus.message" :class="['form-message', formStatus.type]">
              {{ formStatus.message }}
            </div>

            <button type="submit" class="btn-submit" :disabled="formStatus.submitting">
              {{ formStatus.submitting ? (currentLanguage === 'es' ? 'Enviando...' : 'Sending...') : t.contact.form.submit }}
            </button>
          </form>
        </div>
        <div class="contacto-info">
          <h3>{{ t.contact.info.title }}</h3>
          <p><strong>📞 {{ t.contact.info.phone }}:</strong> {{ contactInfo.phone }}</p>
          <p><strong>📧 {{ t.contact.info.email }}:</strong> {{ contactInfo.email }}</p>
          <p><strong>📍 {{ t.contact.info.location }}:</strong> {{ t.contact.info.locationValue }}</p>
          <p><strong>⏰ {{ t.contact.info.schedule }}:</strong> {{ t.contact.info.scheduleValue }}</p>
          <div class="whatsapp-box">
            <a
              :href="whatsappLink"
              class="btn-whatsapp-large"
              target="_blank"
            >
              {{ t.contact.info.whatsapp }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t, currentLanguage } = useI18n();

// Access Key de Web3Forms obtenido de variables de entorno
// Los mensajes del formulario se enviarán al email configurado en Web3Forms
const accessKey = ref(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE');

const contactInfo = {
  phone: '+54 9 3757 312141',
  email: 'info@trasladosmisiones.com'
};

const whatsappLink = computed(() => {
  const message = currentLanguage.value === 'es'
    ? 'Hola,%20necesito%20información%20sobre%20traslados'
    : 'Hello,%20I%20need%20information%20about%20transfers';
  return `https://wa.me/5493757312141?text=${message}`;
});

const destinos = computed(() => [
  { value: 'cataratas', text: t.value.destinations.cataratas.title },
  { value: 'san-ignacio', text: t.value.destinations.ruinas.title },
  { value: 'salto-encantado', text: t.value.destinations.salto.title },
  { value: 'minas-wanda', text: t.value.destinations.wanda.title },
  { value: 'jardin-aves', text: t.value.destinations.aves.title },
  { value: 'hitos', text: t.value.destinations.hitos.title },
  { value: 'otro', text: currentLanguage.value === 'es' ? 'Otro destino' : 'Other destination' }
]);

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  destino: '',
  fecha: '',
  pasajeros: null,
  mensaje: ''
});

const formStatus = reactive({
  submitting: false,
  message: '',
  type: '' // 'success' o 'error'
});

const handleSubmit = async () => {
  formStatus.submitting = true;
  formStatus.message = '';

  try {
    const formElement = document.querySelector('form');
    const formDataToSend = new FormData(formElement);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      formStatus.type = 'success';
      formStatus.message = t.value.contact.form.successMessage;

      // Resetear el formulario
      formData.nombre = '';
      formData.email = '';
      formData.telefono = '';
      formData.destino = '';
      formData.fecha = '';
      formData.pasajeros = null;
      formData.mensaje = '';
    } else {
      throw new Error('Error al enviar el formulario');
    }
  } catch (error) {
    formStatus.type = 'error';
    formStatus.message = currentLanguage.value === 'es'
      ? 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
      : 'There was an error submitting the form. Please try again.';
    console.error('Error:', error);
  } finally {
    formStatus.submitting = false;

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      formStatus.message = '';
    }, 5000);
  }
};
</script>

<style scoped>
.contacto {
  background: linear-gradient(to bottom,
              #f9f9f9 0%,
              #f9f9f9 75%,
              rgba(249, 249, 249, 0.98) 80%,
              rgba(246, 251, 246, 0.95) 85%,
              rgba(242, 248, 243, 0.9) 90%,
              rgba(238, 246, 239, 0.85) 93%,
              rgba(235, 244, 236, 0.8) 95%,
              rgba(232, 242, 233, 0.9) 97%,
              rgba(230, 240, 231, 0.95) 98.5%,
              #e8f5e9 100%);
  padding: 40px 0 0 0;
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

.contacto-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  align-items: start;
}

.contacto-info {
  background-color: white;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.contacto-info h3 {
  color: #000;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.contacto-info p {
  margin-bottom: 12px;
  font-size: 1rem;
}

.whatsapp-box {
  margin-top: 25px;
  text-align: center;
}

.btn-whatsapp-large {
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.95rem;
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
  color: #000;
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
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover:not(:disabled) {
  background-color: #45a049;
}

.btn-submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.form-message {
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
}

.form-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
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
