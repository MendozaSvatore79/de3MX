# Configuración de Formulario de Contacto

Este documento explica cómo configurar el sistema completo de formularios de contacto con AWS SES y Strapi.

## 1. Configuración de AWS SES

### Paso 1: Crear credenciales SMTP en SES

1. Ve a AWS Console → Amazon SES
2. En el menú lateral, ve a "SMTP settings"
3. Haz clic en "Create SMTP credentials"
4. Dale un nombre al usuario (ej: `de3-smtp-user`)
5. AWS creará automáticamente:
   - SMTP Username
   - SMTP Password
6. **IMPORTANTE**: Guarda estas credenciales, no las podrás ver de nuevo
   - SMTP Username → será tu AWS_SES_ACCESS_KEY_ID
   - SMTP Password → será tu AWS_SES_SECRET_ACCESS_KEY
7. Anota también el "SMTP endpoint" (ej: `email-smtp.us-east-1.amazonaws.com`)

### Paso 2: Verificar email en SES

1. Ve a AWS Console → SES → Verified Identities
2. Haz clic en "Create Identity"
3. Selecciona "Email address"
4. Ingresa: `contacto@de3.mx`
5. Verifica el email haciendo clic en el enlace que AWS envía

### Paso 3: Mover SES de Sandbox a Production (IMPORTANTE)

En Sandbox mode, solo puedes enviar emails a direcciones verificadas. Para enviar a cualquier cliente:

1. Ve a SES → Account dashboard
2. Haz clic en "Request production access"
3. Completa el formulario explicando tu caso de uso
4. AWS generalmente aprueba en 24 horas

## 2. Configuración de Variables de Entorno

Actualiza tu archivo `.env.local` con tus credenciales:

```env
# AWS SES Configuration
AWS_SES_REGION=us-east-1
AWS_SES_ACCESS_KEY_ID=TU_SMTP_USERNAME_AQUI
AWS_SES_SECRET_ACCESS_KEY=TU_SMTP_PASSWORD_AQUI
AWS_SES_FROM_EMAIL=contacto@de3.mx

# Email de contacto donde se recibirán los formularios
CONTACT_EMAIL=contacto@de3.mx
```

**Nota**: 
- `AWS_SES_ACCESS_KEY_ID` = SMTP Username que obtuviste de AWS
- `AWS_SES_SECRET_ACCESS_KEY` = SMTP Password que obtuviste de AWS
- `AWS_SES_FROM_EMAIL` = Email verificado en SES (debe estar verificado)

## 3. Configuración de Strapi

### Crear Content Type para Contact Submissions

1. Abre tu panel de Strapi: https://prueba-sitede3mx.synovasystems.com/admin
2. Ve a Content-Type Builder
3. Haz clic en "Create new collection type"
4. Nombre: `contact-submission` (en singular)
5. Agrega los siguientes campos:

   **Text Fields (Short text):**
   - `name` - Tipo: **Text** (requerido)
   - `email` - Tipo: **Email** (requerido) 
   - `phone` - Tipo: **Text** (opcional)
   - `company` - Tipo: **Text** (opcional)
   
   **Para services y budget tienes 2 opciones:**
   
   **Opción A - Simple (Recomendado):**
   - `services` - Tipo: **Text** (guarda el texto tal cual viene del formulario)
   - `budget` - Tipo: **Text** (guarda el rango seleccionado como texto)
   
   **Opción B - Con validación:**
   - `services` - Tipo: **Enumeration** con valores:
     - Web Development
     - App Development  
     - Design
     - Marketing
   - `budget` - Tipo: **Enumeration** con valores:
     - $5k - $10k
     - $10k - $25k
     - $25k - $50k
     - $50k+

   **Text Field (Long text):**
   - `comments` - Tipo: **Rich Text** o **Text (Long)** (requerido)

   **DateTime:**
   - `submittedAt` (requerido)

6. Guarda el Content Type

### Configurar permisos

1. Ve a Settings → Roles → Public
2. Busca `contact-submission`
3. Marca SOLO el permiso de `create`
4. Guarda

## 4. Probar el Sistema

### Prueba Local

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve al formulario de contacto en tu sitio
3. Completa el formulario con datos de prueba
4. Envía el formulario

### Verificar que funciona:

✅ **Strapi**: Ve a Content Manager → Contact Submissions para ver los datos guardados
✅ **Email a De3**: Revisa el inbox de `contacto@de3.mx`
✅ **Email al Cliente**: El cliente debe recibir un email de confirmación

## 5. Mensajes de Email

### Email a De3 (Notificación)
Contiene todos los datos del formulario para que el equipo pueda dar seguimiento.

### Email al Cliente (Confirmación)
Email profesional confirmando que se recibió el mensaje y que De3 se pondrá en contacto pronto.

## 6. Troubleshooting

### Error: "Email address is not verified"
- Verifica que el email esté verificado en AWS SES
- Revisa que AWS_SES_FROM_EMAIL coincida con el email verificado

### Error: "AccessDeniedException"
- Verifica que las credenciales AWS sean correctas
- Verifica que el usuario IAM tenga permisos SES

### No se guardan datos en Strapi
- Verifica que el Content Type se llame exactamente `contact-submission`
- Verifica que los permisos de `create` estén habilitados para Public
- Revisa el token de Strapi en `.env.local`

### Los emails no llegan
- Verifica que estés en production mode (no sandbox)
- Revisa AWS CloudWatch Logs para errores de SES
- Verifica que el email de origen esté verificado

## 7. Despliegue a Producción

Cuando despliegues a Vercel/producción:

1. Agrega todas las variables de entorno en el dashboard de Vercel
2. Asegúrate de que AWS SES esté en production mode
3. Verifica que el dominio de emails esté correctamente configurado

## 8. Seguridad

⚠️ **IMPORTANTE**: 
- NUNCA subas `.env.local` a Git
- Las credenciales de AWS deben mantenerse privadas
- Usa diferentes credenciales para desarrollo y producción
- Considera usar AWS Secrets Manager para producción

## Próximos Pasos Recomendados

1. **Personalizar emails**: Modifica los templates HTML en `/src/app/api/contact/route.ts`
2. **Agregar validación**: Implementa validación de campos más robusta
3. **Rate Limiting**: Implementa límite de envíos para prevenir spam
4. **Captcha**: Agrega reCAPTCHA para mayor seguridad
5. **Analytics**: Conecta con Google Analytics para trackear conversiones
