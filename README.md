# 🌐 Mapa Conceptual Interactivo de Big Data

Una aplicación web moderna e interactiva construida con **Next.js 14**, **TypeScript**, **D3.js** y **Tailwind CSS** que explora los fundamentos, arquitecturas, tecnologías y aplicaciones del Big Data.

## ✨ Características

### 🎯 **Visualización Interactiva**
- **Dos modos de vista**: Árbol horizontal y radial
- **Zoom y pan** fluidos con D3.js
- **Expandir/colapsar** nodos para explorar jerarquías
- **Animaciones suaves** con Framer Motion

### 🔍 **Búsqueda Inteligente**
- Búsqueda en tiempo real de conceptos
- Resaltado visual de resultados
- Filtrado instantáneo

### 📊 **Contenido Enriquecido**
- **50+ conceptos** sobre Big Data
- **100+ tecnologías** mencionadas
- **Información detallada** para cada nodo:
  - Descripciones extensas
  - Ejemplos del mundo real
  - Tecnologías relacionadas
  - Beneficios y desafíos
  - Recursos externos

### 🎨 **Interfaz Moderna**
- Modo oscuro/claro
- Diseño responsivo
- Gradientes y efectos visuales atractivos
- Panel lateral con información contextual
- Estadísticas del mapa

### 💾 **Exportación**
- Descarga del mapa en formato SVG

## 📚 Contenido Cubierto

### 1. **¿Qué es Big Data?**
- Definición formal
- Las 5 Vs (Volumen, Velocidad, Variedad, Veracidad, Valor)
- Necesidad y aplicaciones

### 2. **Arquitectura de Big Data**
- Data Lakes
- Ecosistema Hadoop
- Arquitecturas Lambda y Kappa

### 3. **Tecnologías de Big Data**
- Almacenamiento distribuido (HDFS, S3, NoSQL)
- Motores de procesamiento (Spark, Flink, Kafka Streams)
- Herramientas de análisis y ML (MLlib, TensorFlow, Databricks)

### 4. **Casos de Uso y Aplicaciones**
- Comercio electrónico y retail
- Healthcare y medicina
- Servicios financieros
- Y más...

### 5. **Desafíos del Big Data**
- Desafíos técnicos (escalabilidad, rendimiento)
- Desafíos organizacionales (talento, cultura)
- Desafíos éticos y de privacidad (GDPR, bias algorítmico)

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos

1. **Navega al directorio del proyecto**:
```bash
cd C:\Users\HP\Desktop\mapa-bigdata
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en:
```
http://localhost:3000
```

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📦 Tecnologías Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Visualización**: D3.js v7
- **Animaciones**: Framer Motion
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Build**: Turbopack (Next.js)

## 🎨 Estructura del Proyecto

```
mapa-bigdata/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── MapaConceptual.tsx  # Componente principal de visualización D3
│   ├── Header.tsx          # Encabezado con controles
│   ├── SearchBar.tsx       # Búsqueda de conceptos
│   ├── ControlPanel.tsx    # Panel de controles de vista
│   ├── StatsPanel.tsx      # Panel de estadísticas
│   └── PanelInformacion.tsx # Panel lateral con detalles
├── data/
│   └── bigDataInfo.ts      # Datos estructurados del mapa
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎯 Uso

### Navegación
- **Click en nodos**: Expande o colapsa los hijos de ese concepto
- **Arrastrar fondo**: Mueve el mapa
- **Scroll**: Hace zoom in/out
- **Hover sobre nodos**: Resalta el nodo

### Controles
- **Modo de vista**: Alterna entre árbol y radial
- **Búsqueda**: Filtra conceptos en tiempo real
- **Estadísticas**: Muestra métricas del contenido
- **Zoom +/-**: Controles de zoom precisos
- **Reset**: Restablece la vista inicial
- **Descargar**: Exporta el mapa como SVG

### Panel de Información
Cada nodo puede mostrar:
- 💡 Información detallada
- ✅ Ejemplos reales
- 💻 Tecnologías relacionadas
- 🎯 Beneficios
- ⚠️ Desafíos
- 🔗 Recursos externos

## 🌟 Características Avanzadas

### Personalización
- Colores específicos por categoría
- Iconos emoji para identificación visual rápida
- Transiciones animadas suaves

### Rendimiento
- Renderizado optimizado con D3.js
- Virtual scrolling en paneles laterales
- Lazy loading de información detallada

### Accesibilidad
- Contraste de colores adecuado
- Navegación por teclado (en desarrollo)
- Texto legible en ambos modos (oscuro/claro)

## 📈 Futuras Mejoras

- [ ] Modo de presentación fullscreen
- [ ] Exportación a PNG/PDF
- [ ] Compartir nodos específicos (deep linking)
- [ ] Comparación lado a lado de tecnologías
- [ ] Filtros por categoría/color
- [ ] Modo de búsqueda avanzada
- [ ] Integración con APIs de documentación
- [ ] Tutorial interactivo

## 🤝 Contribuciones

Este proyecto es educativo y está abierto a mejoras. Siéntete libre de:
- Agregar más información sobre Big Data
- Mejorar la visualización
- Optimizar el rendimiento
- Corregir errores

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Creado con ❤️ para explorar y aprender sobre Big Data de forma interactiva.

---

**¡Disfruta explorando el mundo del Big Data!** 🚀
