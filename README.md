# Traslados Misiones - Vue.js

Aplicación web desarrollada con Vue.js 3 y Vite para la empresa de traslados en Misiones.

## Características

- Desarrollo con Vue.js 3 (Composition API)
- Arquitectura basada en componentes reutilizables
- Diseño responsive para dispositivos móviles y desktop
- Menú hamburguesa interactivo
- Formulario de contacto reactivo
- Estilos modulares con scoped CSS

## Estructura del Proyecto

```
vue-app/
├── src/
│   ├── components/
│   │   ├── Header.vue      # Navegación y menú
│   │   ├── Hero.vue        # Sección hero principal
│   │   ├── Destinos.vue    # Tarjetas de destinos turísticos
│   │   ├── Servicios.vue   # Servicios ofrecidos
│   │   ├── Contacto.vue    # Formulario y datos de contacto
│   │   └── Footer.vue      # Pie de página
│   ├── App.vue             # Componente principal
│   ├── main.js             # Punto de entrada
│   └── style.css           # Estilos globales
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
└── package.json            # Dependencias del proyecto
```

## Instalación

1. Navegar al directorio del proyecto:
```bash
cd vue-app
```

2. Instalar dependencias:
```bash
npm install
```

## Comandos Disponibles

### Modo Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:3000`

### Build para Producción
```bash
npm run build
```
Genera los archivos optimizados para producción en la carpeta `dist/`

### Preview de Producción
```bash
npm run preview
```
Previsualiza la versión de producción localmente

## Componentes

### Header.vue
- Navegación sticky
- Menú hamburguesa responsive
- Cierre automático al hacer clic fuera

### Hero.vue
- Sección de bienvenida con llamada a acción
- Botón de WhatsApp integrado

### Destinos.vue
- Grid responsive de destinos turísticos
- Tarjetas con hover effects
- 6 destinos principales de Misiones

### Servicios.vue
- Grid de servicios ofrecidos
- Cards interactivas con animaciones
- 4 servicios principales

### Contacto.vue
- Formulario reactivo con validación
- Información de contacto
- Integración con WhatsApp
- Select de destinos dinámico

### Footer.vue
- Año dinámico automático
- Información de copyright

## Tecnologías Utilizadas

- **Vue.js 3**: Framework progresivo de JavaScript
- **Vite**: Build tool y dev server
- **Composition API**: API moderna de Vue para mejor organización del código
- **CSS Scoped**: Estilos encapsulados por componente

## Características de Vue implementadas

- ✅ Composition API con `<script setup>`
- ✅ Reactive state con `ref` y `reactive`
- ✅ Computed properties
- ✅ Event handling
- ✅ Conditional rendering con `v-if`
- ✅ List rendering con `v-for`
- ✅ Two-way binding con `v-model`
- ✅ Lifecycle hooks (`onMounted`, `onUnmounted`)
- ✅ Component props y emisión de eventos

## Personalización

Para modificar colores, textos o datos de contacto, edita las constantes en cada componente Vue correspondiente.

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Licencia

Todos los derechos reservados - Traslados Misiones
