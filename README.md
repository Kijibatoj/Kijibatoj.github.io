# Portafolio Personal - Estética Cyberpunk/Retro

Un portafolio moderno con estética cyberpunk inspirado en sitios como sukeban.moe y kiririnlight.neocities.org

## Características

- **Diseño Cyberpunk/Retro**: Colores neón (rosa/rojo) sobre fondo oscuro
- **Multiidioma**: Soporte para Español, Inglés y Alemán
- **Responsive**: Adaptable a todos los dispositivos
- **Animaciones suaves**: Efectos visuales y transiciones
- **Sin dependencias**: HTML, CSS y JavaScript vanilla

## Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   ├── script.js       # Lógica principal
│   └── translations.js # Traducciones multiidioma
└── assets/             # Carpeta para imágenes y otros recursos
```

## Personalización

### 1. Información Personal

Edita `index.html` y reemplaza:
- `[ TU NOMBRE ]` con tu nombre
- Enlaces de contacto (email, GitHub, Twitter)
- Descripción personal en las secciones About

### 2. Proyectos

En la sección de proyectos, actualiza:
- Títulos de proyectos
- Descripciones
- Tags de tecnologías
- Enlaces a proyectos reales

### 3. Habilidades

Modifica la lista de habilidades en cada categoría según tu experiencia.

### 4. Traducciones

Edita `js/translations.js` para personalizar los textos en cada idioma:
- `es`: Español
- `en`: Inglés
- `de`: Alemán

### 5. Colores

Puedes cambiar la paleta de colores editando las variables CSS en `css/styles.css`:

```css
:root {
    --bg-primary: #0c0709;        /* Fondo principal */
    --accent-neon: #fc013f;       /* Color neón principal */
    --accent-pink: #f5006a;       /* Color rosa */
}
```

## Uso

1. Abre `index.html` en tu navegador
2. Usa los botones ES/EN/DE para cambiar de idioma
3. Navega por las secciones usando el menú

## Características Técnicas

### Sistema de Idiomas

El sistema de cambio de idioma:
- Guarda la preferencia en `localStorage`
- Actualiza dinámicamente todos los textos
- Mantiene el idioma seleccionado entre sesiones

### Animaciones

- Efecto glitch en el título principal
- Animaciones de aparición al hacer scroll
- Efectos hover en tarjetas y enlaces
- Parallax suave en el hero

### Responsive

El diseño se adapta a:
- Desktop (1100px+)
- Tablet (768px - 1099px)
- Mobile (< 768px)

## Despliegue

Puedes desplegar este portafolio en:

- **GitHub Pages**: Sube a un repositorio y activa GitHub Pages
- **Netlify**: Arrastra la carpeta portfolio
- **Vercel**: Conecta tu repositorio
- **Neocities**: Sube los archivos directamente

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)

## Licencia

Libre para uso personal y comercial. Personaliza como desees.

## Inspiración

Diseño inspirado en:
- [sukeban.moe](https://sukeban.moe)
- [kiririnlight.neocities.org](https://kiririnlight.neocities.org)
- Estética cyberpunk y retro-digital

---

**Hecho con ♥ por TU NOMBRE**
