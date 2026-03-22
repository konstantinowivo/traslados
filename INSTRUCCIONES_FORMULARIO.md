# Instrucciones para Activar el Formulario de Contacto

El formulario de contacto está configurado con **Web3Forms**, un servicio gratuito que NO requiere crear cuenta y envía los mensajes directamente a tu email.

## Pasos para Activar el Formulario

### 1. Obtener el Access Key (Clave de Acceso)

1. Ve a: **https://web3forms.com**
2. En la página principal, verás un campo que dice "Enter your email"
3. Ingresa el **email donde quieres recibir los mensajes del formulario** (ejemplo: info@trasladosmisiones.com)
4. Haz click en "Get Access Key" o "Create Access Key"
5. **Revisa tu email** - Te llegará un mensaje de Web3Forms con tu Access Key
6. **Copia el Access Key** (es una cadena de letras y números como: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6")

### 2. Configurar el Access Key en el Código

**Opción A - Usando Variables de Entorno (Recomendado):**
1. Copia el archivo `.env.example` y renómbralo a `.env`
2. Abre el archivo `.env`
3. Reemplaza `YOUR_ACCESS_KEY_HERE` con tu Access Key real:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6
   ```
4. Guarda el archivo
5. **Importante:** El archivo `.env` ya está en `.gitignore`, por lo que NO se subirá a GitHub

**Opción B - Directamente en el Código:**
1. Abre el archivo: `src/components/Contacto.vue`
2. Busca la línea 127 que dice:
   ```javascript
   const accessKey = ref(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE');
   ```
3. Reemplaza `'YOUR_ACCESS_KEY_HERE'` con tu Access Key real:
   ```javascript
   const accessKey = ref(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6');
   ```
4. Guarda el archivo

### 3. ¡Listo!

El formulario ya está funcionando. Cada vez que alguien envíe el formulario:
- ✅ Los datos llegarán directamente a tu email
- ✅ Se mostrará un mensaje de éxito/error al usuario
- ✅ El formulario se limpiará automáticamente después del envío exitoso

## Características del Formulario

- **Sin límite de envíos** - Completamente gratis
- **Sin backend** - No necesitas servidor
- **Protección anti-spam** - Incluye honeypot para bloquear bots
- **Bilingüe** - Funciona en español e inglés
- **Responsive** - Se adapta a móviles y tablets

## ¿Qué Datos Recibirás en tu Email?

Cada vez que alguien complete el formulario, recibirás un email con:
- Nombre completo del cliente
- Email del cliente
- Teléfono
- Destino seleccionado
- Fecha del traslado
- Cantidad de pasajeros
- Mensaje adicional

## Soporte

Si tienes algún problema con Web3Forms, puedes:
- Revisar su documentación: https://docs.web3forms.com
- Contactar su soporte: Es completamente gratuito y no requiere cuenta

---

**Nota Importante:** El Access Key es específico para el email que ingreses. Si quieres cambiar el email de recepción en el futuro, solo necesitas generar un nuevo Access Key con el nuevo email y reemplazarlo en el código.
