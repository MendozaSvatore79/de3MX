# 🚀 Configuración de Reviews con Strapi

## 📋 PASO 1: Configurar Strapi Backend

### 1.1 Crear Collection Type "Review"

1. Abre tu panel de Strapi Admin (generalmente `http://localhost:1337/admin`)
2. Ve a **Content-Type Builder** (Constructor de tipos de contenido)
3. Click en **"Create new collection type"**
4. Nombre: `review` (en minúsculas)

### 1.2 Agregar campos al Collection Type

Agrega los siguientes campos en orden:

| Campo | Tipo | Configuración |
|-------|------|---------------|
| `name` | Text | Short text, Required |
| `company` | Text | Short text, Required |
| `text` | Text | Long text, Required |
| `rating` | Number | Integer, Default: 5, Min: 1, Max: 5 |
| `order` | Number | Integer, Required (para ordenar reviews) |
| `avatar` | Media | Single media, Required |

### 1.3 Configurar permisos

1. Ve a **Settings → Users & Permissions Plugin → Roles**
2. Click en **Public**
3. Encuentra `Review` en la lista
4. Marca las siguientes acciones:
   - ✅ `find` (ver todos)
   - ✅ `findOne` (ver uno)
5. Click en **Save**

### 1.4 Agregar contenido de prueba

1. Ve a **Content Manager → Review**
2. Click en **"Create new entry"**
3. Agrega al menos 3-5 reviews:

**Ejemplo Review 1:**
- Name: `Alfredo Lomantza`
- Company: `Gruppo Lomantza Company`
- Text: `Working with this team was an amazing experience. They delivered exactly what we needed and more.`
- Rating: `5`
- Order: `1`
- Avatar: Sube una imagen o usa placeholder

**Ejemplo Review 2:**
- Name: `María González`
- Company: `Tech Solutions Inc`
- Text: `Exceptional service and attention to detail. They transformed our digital presence completely.`
- Rating: `5`
- Order: `2`
- Avatar: Sube una imagen

4. Click en **Publish** para cada review

---

## 📋 PASO 2: Configurar Variables de Entorno

### 2.1 Crear archivo `.env.local`

En la raíz de tu proyecto Next.js, crea o edita `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 2.2 Para producción

Cuando subas a producción, cambia la URL:

```env
NEXT_PUBLIC_STRAPI_URL=https://tu-strapi-backend.com
```

---

## 📋 PASO 3: Archivos ya modificados ✅

Ya modifiqué el archivo:
- ✅ `src/components/Reviews.tsx`

### Funcionalidades implementadas:

1. **Fetch de datos de Strapi** con populate para avatar
2. **Navegación con flechas** (← →)
3. **Indicadores activos** (puntos verdes/grises)
4. **Estado de carga** (loading)
5. **Fallback** si no hay datos

---

## 📋 PASO 4: Probar la integración

### 4.1 Verificar que Strapi esté corriendo

```bash
# En la carpeta de tu proyecto Strapi
npm run develop
```

### 4.2 Iniciar Next.js

```bash
# En la carpeta de tu proyecto Next.js (de3MX)
npm run dev
```

### 4.3 Verificar endpoint

Abre en tu navegador:
```
http://localhost:1337/api/reviews?populate=*
```

Deberías ver JSON con tus reviews.

### 4.4 Ver la página

Abre:
```
http://localhost:3000
```

Navega hasta la sección "Reviews matter" y prueba:
- ✅ Las flechas izquierda/derecha cambian reviews
- ✅ Los indicadores muestran el review actual
- ✅ Puedes hacer click en los indicadores
- ✅ Las imágenes de avatar se cargan desde Strapi

---

## 🎨 Estructura de datos esperada de Strapi

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Alfredo Lomantza",
        "company": "Gruppo Lomantza Company",
        "text": "Working with this team was an amazing experience...",
        "rating": 5,
        "order": 1,
        "avatar": {
          "data": {
            "attributes": {
              "url": "/uploads/avatar_123.jpg"
            }
          }
        }
      }
    }
  ]
}
```

---

## 🔧 Troubleshooting

### Error: "Failed to fetch"
- ✅ Verifica que Strapi esté corriendo en `http://localhost:1337`
- ✅ Verifica que la variable `NEXT_PUBLIC_STRAPI_URL` esté correcta
- ✅ Reinicia el servidor de Next.js después de agregar `.env.local`

### No se ven las imágenes
- ✅ Verifica que marcaste los permisos `find` en Public role
- ✅ Verifica que agregaste `?populate=*` en el endpoint
- ✅ Revisa la consola del navegador para errores de CORS

### CORS Error
Agrega en tu Strapi `config/middlewares.js`:

```javascript
module.exports = [
  // ... otros middlewares
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],
    }
  },
];
```

---

## 🎯 Próximos pasos opcionales

1. **Agregar transiciones suaves** entre reviews con framer-motion
2. **Auto-play** cada 5 segundos
3. **Swipe en móvil** con react-swipeable
4. **Caché** con SWR o React Query
5. **Internacionalización** para reviews en español/inglés

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa la consola de Next.js
3. Verifica que Strapi esté corriendo
4. Verifica los permisos en Strapi Admin
