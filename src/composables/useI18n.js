import { ref, computed } from 'vue';

const currentLanguage = ref('es');

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      destinations: 'Destinos',
      services: 'Servicios',
      contact: 'Contacto'
    },
    hero: {
      company: 'Taxis y Remises Malvinas',
      title: 'Descubrí Misiones con Seguridad y Comodidad',
      subtitle: 'Traslados privados a los mejores destinos turísticos de la provincia',
      button: 'Contactanos por WhatsApp'
    },
    destinations: {
      title: 'Destinos Turísticos',
      cataratas: {
        title: 'Cataratas del Iguazú',
        description: 'Una de las 7 maravillas naturales del mundo. Experimentá la majestuosidad de más de 275 saltos de agua en medio de la selva misionera.'
      },
      ruinas: {
        title: 'Ruinas de San Ignacio',
        description: 'Patrimonio de la Humanidad por UNESCO. Descubrí la historia de las misiones jesuíticas guaraníes del siglo XVII.'
      },
      salto: {
        title: 'Salto Encantado',
        description: 'Un salto de agua de 64 metros rodeado de selva virgen. Naturaleza en estado puro y paisajes inolvidables.'
      },
      wanda: {
        title: 'Minas de Wanda',
        description: 'Explorá las famosas minas de piedras semipreciosas. Amatistas, ágatas y cuarzos en formaciones naturales únicas.'
      },
      aves: {
        title: 'Jardín de las Aves',
        description: 'Más de 150 especies de aves exóticas en su hábitat natural. Una experiencia única para los amantes de la naturaleza.'
      },
      hitos: {
        title: 'Hito Tres Fronteras',
        description: 'El punto donde se encuentran Argentina, Brasil y Paraguay. Vista panorámica del río Iguazú y sus tres países.'
      }
    },
    services: {
      title: 'Nuestros Servicios',
      airport: {
        title: 'Traslados Aeropuerto',
        description: 'Servicio de traslado desde el aeropuerto hasta cualquier hotel de la Triple Frontera. Servicio puerta a puerta con total comodidad y puntualidad.'
      },
      international: {
        title: 'Servicio Nacional e Internacional',
        description: 'Traslados a cualquier punto turístico nacional e internacional. Cruzamos fronteras para llevarte a Brasil y Paraguay con toda la documentación en regla.'
      },
      tripleFrontera: {
        title: 'Traslados Triple Frontera',
        description: 'Conectamos todos los hoteles y puntos turísticos de Puerto Iguazú, Foz de Iguazú y Ciudad del Este con servicios regulares y seguros.'
      },
      customTours: {
        title: 'Tours a Medida',
        description: 'Diseñamos tu itinerario personalizado a cualquier punto turístico de la región. Cataratas, Ruinas, Minas de Wanda y mucho más.'
      },
      premium: {
        title: 'Vehículos Premium',
        description: 'Flota de vehículos cómodos, climatizados y en perfectas condiciones. Adaptados para grupos pequeños y grandes familias.'
      },
      schedule: {
        title: 'Horario Extendido',
        description: 'Atención de 6 AM a 22 HS, todos los días de la semana. Cobertura completa para todos tus traslados diurnos y nocturnos.'
      }
    },
    contact: {
      title: 'Solicitá tu Traslado',
      info: {
        title: 'Información de Contacto',
        phone: 'Teléfono',
        email: 'Email',
        location: 'Ubicación',
        locationValue: 'Puerto Iguazú, Misiones, Argentina',
        schedule: 'Horario',
        scheduleValue: 'Lunes a Domingo de 6:00 a 22:00 hs',
        whatsapp: 'Chatea con nosotros en WhatsApp'
      },
      form: {
        name: 'Nombre Completo',
        email: 'Email',
        phone: 'Teléfono',
        destination: 'Destino',
        selectDestination: 'Seleccioná un destino',
        date: 'Fecha del Traslado',
        passengers: 'Cantidad de Pasajeros',
        message: 'Mensaje',
        messagePlaceholder: 'Contanos sobre tu viaje y necesidades especiales...',
        submit: 'Enviar Consulta',
        successMessage: 'Gracias por tu consulta. Te contactaremos pronto!'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados',
      slogan: 'Descubrí la magia de Misiones con seguridad y confort'
    }
  },
  en: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      company: 'Taxis y Remises Malvinas',
      title: 'Discover Misiones with Safety and Comfort',
      subtitle: 'Private transfers to the best tourist destinations in the province',
      button: 'Contact us on WhatsApp'
    },
    destinations: {
      title: 'Tourist Destinations',
      cataratas: {
        title: 'Iguazu Falls',
        description: 'One of the 7 natural wonders of the world. Experience the majesty of more than 275 waterfalls in the middle of the Misiones jungle.'
      },
      ruinas: {
        title: 'San Ignacio Ruins',
        description: 'UNESCO World Heritage Site. Discover the history of the 17th century Jesuit Guarani missions.'
      },
      salto: {
        title: 'Enchanted Waterfall',
        description: 'A 64-meter waterfall surrounded by virgin jungle. Pure nature and unforgettable landscapes.'
      },
      wanda: {
        title: 'Wanda Mines',
        description: 'Explore the famous semi-precious stone mines. Amethysts, agates and quartz in unique natural formations.'
      },
      aves: {
        title: 'Bird Garden',
        description: 'More than 150 species of exotic birds in their natural habitat. A unique experience for nature lovers.'
      },
      hitos: {
        title: 'Three Borders Landmark',
        description: 'The point where Argentina, Brazil and Paraguay meet. Panoramic view of the Iguazu River and its three countries.'
      }
    },
    services: {
      title: 'Our Services',
      airport: {
        title: 'Airport Transfers',
        description: 'Transfer service from the airport to any hotel in the Triple Frontier. Door-to-door service with total comfort and punctuality.'
      },
      international: {
        title: 'National and International Service',
        description: 'Transfers to any national and international tourist destination. We cross borders to take you to Brazil and Paraguay with all documentation in order.'
      },
      tripleFrontera: {
        title: 'Triple Frontier Transfers',
        description: 'We connect all hotels and tourist spots in Puerto Iguazú, Foz do Iguaçu and Ciudad del Este with regular and safe services.'
      },
      customTours: {
        title: 'Custom Tours',
        description: 'We design your personalized itinerary to any tourist destination in the region. Waterfalls, Ruins, Wanda Mines and much more.'
      },
      premium: {
        title: 'Premium Vehicles',
        description: 'Fleet of comfortable, air-conditioned vehicles in perfect condition. Adapted for small groups and large families.'
      },
      schedule: {
        title: 'Extended Hours',
        description: 'Service from 6 AM to 10 PM, every day of the week. Complete coverage for all your day and night transfers.'
      }
    },
    contact: {
      title: 'Request Your Transfer',
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        locationValue: 'Puerto Iguazú, Misiones, Argentina',
        schedule: 'Schedule',
        scheduleValue: 'Monday to Sunday from 6:00 AM to 10:00 PM',
        whatsapp: 'Chat with us on WhatsApp'
      },
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        destination: 'Destination',
        selectDestination: 'Select a destination',
        date: 'Transfer Date',
        passengers: 'Number of Passengers',
        message: 'Message',
        messagePlaceholder: 'Tell us about your trip and special needs...',
        submit: 'Send Inquiry',
        successMessage: 'Thank you for your inquiry. We will contact you soon!'
      }
    },
    footer: {
      rights: 'All rights reserved',
      slogan: 'Discover the magic of Misiones with safety and comfort'
    }
  }
};

export function useI18n() {
  const t = computed(() => translations[currentLanguage.value]);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang;
    }
  };

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
  };

  return {
    currentLanguage,
    t,
    setLanguage,
    toggleLanguage
  };
}
