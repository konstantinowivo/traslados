import { ref, computed } from 'vue';

const currentLanguage = ref('es');

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      destinations: 'Destinos',
      services: 'Servicios',
      contact: 'Contacto',
      visitanos: 'Visitanos'
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
        description: 'Una de las 7 maravillas naturales del mundo, ubicadas en el Parque Nacional Iguazú, Misiones. Sus más de 275 saltos se extienden casi 3 kilómetros dentro de la selva subtropical. Te trasladamos directamente desde tu alojamiento en Puerto Iguazú hasta la entrada del parque en vehículos climatizados, con horarios flexibles y servicio puerta a puerta para que aproveches cada minuto de tu visita.'
      },
      ruinas: {
        title: 'Ruinas de San Ignacio',
        description: 'Patrimonio de la Humanidad por UNESCO, las Ruinas Jesuíticas de San Ignacio Miní son el sitio arqueológico más importante de Argentina. Construidas en el siglo XVII junto con la comunidad guaraní, sus imponentes paredes de piedra narran cinco siglos de historia. Organizamos excursiones de día completo desde Puerto Iguazú recorriendo la Ruta Nacional 12, con tiempo para explorar el museo y presenciar el espectáculo de luces y sonidos nocturno.'
      },
      salto: {
        title: 'Salto Encantado',
        description: 'En el Parque Provincial Salto Encantado, a 90 km de Oberá, una cascada de 64 metros cae libre entre la selva misionera virgen. El sendero que conduce al salto atraviesa bosque nativo con helechos gigantes, bromélias y orquídeas silvestres. Un destino ideal para turistas que buscan naturaleza sin multitudes. Contamos con traslados privados desde cualquier punto de Misiones con guía local opcional.'
      },
      wanda: {
        title: 'Minas de Wanda',
        description: 'Las únicas minas de piedras semipreciosas abiertas al turismo en Argentina se encuentran en Wanda, a 50 km de Puerto Iguazú. Amatistas, ágatas, cuarzos y jaspes de colores forman geodos gigantes que pueden verse de cerca en visitas guiadas. Una experiencia única para toda la familia. Nuestro servicio de traslado combina la visita a las minas con las Cataratas en una sola excursión si lo preferís.'
      },
      aves: {
        title: 'Parque de las Aves',
        description: 'El Parque das Aves de Foz do Iguaçu alberga más de 150 especies de aves exóticas de la región en voladeros de selva abierta: tucanes, guacamayos, mariposas azules y flamencos conviven a pocos centímetros del visitante. Ubicado a metros de la entrada brasileña de las Cataratas, se puede combinar en una misma excursión internacional. Gestionamos el cruce de frontera con toda la documentación en regla.'
      },
      hitos: {
        title: 'Hito Tres Fronteras',
        description: 'En el extremo norte de Puerto Iguazú, donde el río Iguazú desemboca en el Paraná, se encuentran simultáneamente Argentina, Brasil y Paraguay. El Hito Argentino ofrece una vista panorámica de los obeliscos de los tres países y del majestuoso encuentro de los ríos al atardecer. A pocos minutos del centro de Puerto Iguazú, es una parada obligada que incluimos en nuestros tours de medio día por la ciudad.'
      },
      cataratasBrasil: {
        title: 'Cataratas lado Brasileño',
        description: 'Las Cataratas del Iguazú vistas desde Brasil ofrecen la panorámica más amplia de todo el sistema de saltos. El sendero de 1.200 metros culmina en la pasarela sobre la Garganta del Diablo brasileña, con vistas frontales a la cascada más alta. Gestionamos el cruce internacional completo: documentación, transporte puerta a puerta desde Puerto Iguazú y coordinación de horarios para optimizar tu día en ambos lados del parque.'
      },
      mocona: {
        title: 'Saltos del Moconá',
        description: 'Los Saltos del Moconá son únicos en el mundo: una fractura longitudinal de 3 kilómetros en el río Uruguay genera cascadas paralelas al cauce en lugar de atravesarlo. Ubicados en el Parque Provincial Moconá al sur de Misiones, el acceso requiere organización previa. Realizamos traslados de día completo desde distintos puntos de la provincia, con estadías en posadas y avistaje de fauna nativa del Parque Serrano Moconá incluidos en el itinerario.'
      },
      shopping: {
        title: 'Tour de Compras Ciudad del Este',
        description: 'Ciudad del Este, en Paraguay, es uno de los centros comerciales más grandes de América del Sur con precios duty free en electrónica, perfumería, calzado y ropa. A solo 20 minutos de Puerto Iguazú cruzando el Puente de la Amistad, el tour incluye traslado privado, asistencia en el cruce aduanero y acompañamiento durante las compras. Coordinamos con guías locales que conocen los mejores locales y ayudan con el proceso de declaración.'
      }
    },
    services: {
      title: 'Nuestros Servicios',
      airport: {
        title: 'Traslados Aeropuerto',
        description: 'Servicio de traslado privado desde el Aeropuerto Internacional Cataratas del Iguazú hasta cualquier hotel de Puerto Iguazú, Foz do Iguaçu o Ciudad del Este. Monitoreo de vuelo en tiempo real, espera sin cargo por demoras y asistencia con equipaje. Reservá con anticipación y recibí confirmación inmediata por WhatsApp.'
      },
      international: {
        title: 'Servicio Nacional e Internacional',
        description: 'Traslados privados a destinos turísticos en Argentina, Brasil y Paraguay con toda la documentación fronteriza gestionada. Conectamos Puerto Iguazú con Posadas, Oberá, San Ignacio, Wanda y otros puntos de Misiones, además de Foz do Iguaçu y Ciudad del Este con conductores experimentados en cruces internacionales.'
      },
      tripleFrontera: {
        title: 'Traslados Triple Frontera',
        description: 'Servicio diario que conecta todos los hoteles, hosterías y puntos turísticos de Puerto Iguazú, Foz do Iguaçu y Ciudad del Este. Ideal para turistas que distribuyen su estadía entre los tres países. Tarifas fijas sin sorpresas, vehículos identificados y conductores bilingües disponibles para grupos de hasta 8 pasajeros.'
      },
      customTours: {
        title: 'Tours a Medida',
        description: 'Diseñamos tu itinerario personalizado combinando Cataratas, Ruinas Jesuíticas, Minas de Wanda, Salto Encantado, Moconá y más en uno o varios días. Ideal para familias, grupos corporativos o viajeros que quieren maximizar el tiempo en Misiones sin preocuparse por la logística. Consultanos y armamos el recorrido ideal para vos.'
      },
      premium: {
        title: 'Vehículos Premium',
        description: 'Flota de autos y camionetas 4x4 con aire acondicionado, mantenimiento periódico y seguro al día. Adaptados para familias con niños, adultos mayores y personas con movilidad reducida. Todos los vehículos cuentan con identificación oficial y los conductores con habilitación profesional vigente.'
      },
      schedule: {
        title: 'Horario Extendido',
        description: 'Atención de 6:00 a 22:00 hs todos los días del año, incluyendo feriados nacionales y festivos. Cubrimos traslados nocturnos al aeropuerto, llegadas de madrugada y excursiones de salida temprana a las Cataratas antes de las multitudes. Respondemos por WhatsApp en menos de 15 minutos.'
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
    visitanos: {
      title: 'Visitanos',
      description: 'Estamos ubicados en calle Cardenal, paralela a Av. Victoria Aguirre, frente a la rotonda de acceso principal.',
      mapTitle: 'Ubicación de Taxis y Remises Malvinas en Google Maps',
      addressTitle: 'Nuestra Ubicación',
      address: 'Cardenal, Puerto Iguazú, Misiones, Argentina',
      accessTitle: 'Cómo Llegar',
      accessInfo: 'Calle paralela a Av. Victoria Aguirre, frente a la rotonda de acceso principal. Fácil acceso desde cualquier punto de la ciudad.'
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
      contact: 'Contact',
      visitanos: 'Visit Us'
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
        description: 'One of the 7 natural wonders of the world, located in Iguazú National Park, Misiones. More than 275 waterfalls stretch nearly 3 kilometers through subtropical jungle. We transfer you directly from your accommodation in Puerto Iguazú to the park entrance in air-conditioned vehicles, with flexible schedules and door-to-door service so you make the most of every minute of your visit.'
      },
      ruinas: {
        title: 'San Ignacio Ruins',
        description: 'UNESCO World Heritage Site, the San Ignacio Miní Jesuit Ruins are the most important archaeological site in Argentina. Built in the 17th century alongside the Guaraní community, their imposing stone walls tell five centuries of history. We organize full-day excursions from Puerto Iguazú along National Route 12, with time to explore the museum and watch the nightly sound and light show.'
      },
      salto: {
        title: 'Enchanted Waterfall',
        description: 'In Salto Encantado Provincial Park, 90 km from Oberá, a 64-meter waterfall drops freely through virgin Misiones jungle. The trail leading to the falls crosses native forest with giant ferns, bromeliads and wild orchids. An ideal destination for travelers seeking nature without crowds. We offer private transfers from anywhere in Misiones with an optional local guide.'
      },
      wanda: {
        title: 'Wanda Mines',
        description: 'The only semi-precious stone mines open to tourists in Argentina are located in Wanda, 50 km from Puerto Iguazú. Amethysts, agates, quartz and jasper in brilliant colors form giant geodes you can see up close on guided tours. A unique experience for the whole family. Our transfer service can combine the mines visit with the Falls in a single excursion if preferred.'
      },
      aves: {
        title: 'Bird Park',
        description: 'The Parque das Aves in Foz do Iguaçu houses over 150 species of exotic birds from the region in open jungle aviaries: toucans, macaws, blue morpho butterflies and flamingos just centimeters from visitors. Located steps from the Brazilian entrance to the Falls, it can be combined in the same international excursion. We handle all border crossing paperwork.'
      },
      hitos: {
        title: 'Three Borders Landmark',
        description: 'At the northern tip of Puerto Iguazú, where the Iguazú River meets the Paraná, Argentina, Brazil and Paraguay converge. The Argentine Landmark offers a panoramic view of all three countries\' obelisks and the majestic confluence of rivers at sunset. Just minutes from Puerto Iguazú\'s center, it is a must-see included in our half-day city tours.'
      },
      cataratasBrasil: {
        title: 'Brazilian Side of Iguazu Falls',
        description: 'Iguazu Falls viewed from Brazil offer the widest panorama of the entire waterfall system. The 1,200-meter trail ends at the walkway over the Brazilian Devil\'s Throat, with frontal views of the tallest cascade. We handle the complete international crossing: documentation, door-to-door transport from Puerto Iguazú and schedule coordination to maximize your day on both sides of the park.'
      },
      mocona: {
        title: 'Moconá Falls',
        description: 'Moconá Falls are unique in the world: a 3-kilometer longitudinal fracture in the Uruguay River creates waterfalls that run parallel to the riverbed instead of crossing it. Located in Moconá Provincial Park in southern Misiones, access requires advance planning. We offer full-day transfers from various points in the province, with lodging options and native wildlife spotting in the Moconá Serra Park included in the itinerary.'
      },
      shopping: {
        title: 'Ciudad del Este Shopping Tour',
        description: 'Ciudad del Este in Paraguay is one of South America\'s largest commercial centers with duty-free prices on electronics, perfumes, footwear and clothing. Just 20 minutes from Puerto Iguazú across the Bridge of Friendship, the tour includes private transfer, assistance at customs and escort during shopping. We coordinate with local guides who know the best stores and help with the declaration process.'
      }
    },
    services: {
      title: 'Our Services',
      airport: {
        title: 'Airport Transfers',
        description: 'Private transfer service from Cataratas del Iguazú International Airport to any hotel in Puerto Iguazú, Foz do Iguaçu or Ciudad del Este. Real-time flight monitoring, free waiting time for delays and luggage assistance. Book in advance and receive immediate confirmation via WhatsApp.'
      },
      international: {
        title: 'National and International Service',
        description: 'Private transfers to tourist destinations in Argentina, Brazil and Paraguay with all border documentation managed. We connect Puerto Iguazú with Posadas, Oberá, San Ignacio, Wanda and other points in Misiones, as well as Foz do Iguaçu and Ciudad del Este with drivers experienced in international crossings.'
      },
      tripleFrontera: {
        title: 'Triple Frontier Transfers',
        description: 'Daily service connecting all hotels, guesthouses and tourist spots in Puerto Iguazú, Foz do Iguaçu and Ciudad del Este. Ideal for tourists who split their stay across three countries. Fixed rates with no surprises, identified vehicles and bilingual drivers available for groups of up to 8 passengers.'
      },
      customTours: {
        title: 'Custom Tours',
        description: 'We design your personalized itinerary combining the Falls, Jesuit Ruins, Wanda Mines, Salto Encantado, Moconá and more across one or several days. Perfect for families, corporate groups or travelers who want to maximize their time in Misiones without worrying about logistics. Contact us and we\'ll build the ideal route for you.'
      },
      premium: {
        title: 'Premium Vehicles',
        description: 'Fleet of cars and 4x4 SUVs with air conditioning, regular maintenance and up-to-date insurance. Adapted for families with children, seniors and passengers with reduced mobility. All vehicles carry official identification and drivers hold valid professional licenses.'
      },
      schedule: {
        title: 'Extended Hours',
        description: 'Service from 6:00 AM to 10:00 PM every day of the year, including national holidays. We cover night transfers to the airport, early morning arrivals and early-start Falls excursions before the crowds. We respond on WhatsApp in under 15 minutes.'
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
    visitanos: {
      title: 'Visit Us',
      description: 'We are located on Cardenal street, parallel to Victoria Aguirre Avenue, in front of the main access roundabout.',
      mapTitle: 'Location of Taxis y Remises Malvinas on Google Maps',
      addressTitle: 'Our Location',
      address: 'Cardenal, Puerto Iguazú, Misiones, Argentina',
      accessTitle: 'How to Get Here',
      accessInfo: 'Street parallel to Victoria Aguirre Avenue, in front of the main access roundabout. Easy access from anywhere in the city.'
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
