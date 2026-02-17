# 🚀 Guía de Inicio Rápido

## Instalación en 3 Pasos

### 1. Instalar Dependencias
Abre PowerShell o Terminal en la carpeta del proyecto y ejecuta:

```powershell
npm install
```

Este comando instalará:
- Next.js 14
- React 18
- D3.js para visualización
- Framer Motion para animaciones
- Tailwind CSS para estilos
- TypeScript
- Y todas las dependencias necesarias

⏱️ **Tiempo estimado**: 2-3 minutos

### 2. Ejecutar el Proyecto

```powershell
npm run dev
```

Este comando:
- Inicia el servidor de desarrollo
- Compila TypeScript automáticamente
- Habilita Hot Module Replacement (cambios en tiempo real)

⏱️ **Tiempo de inicio**: 10-15 segundos

### 3. Abrir en el Navegador

Abre tu navegador favorito y visita:

```
http://localhost:3000
```

¡Eso es todo! 🎉

---

## 📱 Primera Experiencia

Cuando abras la aplicación verás:

1. **Encabezado Superior**
   - Título "Big Data Explorer"
   - Botón de modo oscuro/claro
   - Tips de uso

2. **Panel Lateral Izquierdo**
   - Barra de búsqueda
   - Controles de vista (Árbol/Radial)
   - Botón de estadísticas
   - Panel de información (cuando seleccionas un nodo)

3. **Área Principal**
   - Mapa conceptual interactivo
   - Nodo central: "Fundamentos y Usos del Big Data"
   - Ramas de colores representando categorías
   - Controles de zoom flotantes
   - Leyenda de controles

---

## 🎮 Cómo Interactuar

### Explorar el Mapa
1. **Click en el nodo central** (púrpura) para ver las 5 categorías principales
2. **Click en cada categoría** para expandir y ver subcategorías
3. **Hover sobre nodos** para resaltarlos
4. **Click en nodos terminales** para ver información detallada en el panel izquierdo

### Buscar Conceptos
1. Escribe en la barra de búsqueda (ej: "Hadoop", "Machine Learning", "Privacidad")
2. Los nodos que coincidan se resaltarán en amarillo
3. Limpia la búsqueda con el botón X

### Cambiar Vista
- **Vista Árbol**: Disposición horizontal tradicional (mejor para jerarquías lineales)
- **Vista Radial**: Disposición circular (mejor para ver conexiones globales)

### Zoom y Navegación
- **Scroll del mouse**: Zoom in/out
- **Arrastrar fondo**: Mover el mapa
- **Botones +/-**: Zoom preciso
- **Botón ⊡**: Resetear vista
- **Botón ⬇**: Descargar como SVG

---

## 🎨 Código de Colores

Cada categoría tiene su propio color para fácil identificación:

- 🟣 **Púrpura** (#8b5cf6): Nodo raíz / Fundamentos
- 🟢 **Verde** (#4ade80): ¿Qué es Big Data?
- 🟡 **Amarillo** (#facc15): Arquitectura de Big Data
- 🔵 **Azul** (#3b82f6): Tecnologías de Big Data
- 🟠 **Naranja** (#f97316): Usos y Aplicaciones
- 🔷 **Turquesa** (#2dd4bf): Desafíos del Big Data

---

## 💡 Tips Pro

1. **Comienza Explorando**
   - Haz click en el nodo central
   - Expande "¿Qué es Big Data?" → "Las 5 Vs"
   - Lee la información detallada en el panel lateral

2. **Busca por Tecnologías**
   - Busca "Spark" para ver dónde se menciona
   - Busca "Hadoop" para explorar el ecosistema
   - Busca "Machine Learning" para casos de uso

3. **Compara Arquitecturas**
   - Navega a "Arquitectura" → "Arquitecturas Lambda y Kappa"
   - Lee las diferencias y cuándo usar cada una

4. **Explora Casos Reales**
   - Ve a "Usos y Aplicaciones"
   - Descubre cómo Netflix, Amazon, y Uber usan Big Data

5. **Entiende los Desafíos**
   - Expande "Desafíos del Big Data"
   - Aprende sobre privacidad, bias, y complejidad técnica

---

## 🐛 Solución de Problemas

### El servidor no inicia
```powershell
# Verifica que Node.js esté instalado
node --version

# Debería mostrar v18.0.0 o superior
# Si no, descarga desde: https://nodejs.org/
```

### Errores al instalar dependencias
```powershell
# Limpia caché de npm
npm cache clean --force

# Borra node_modules y reinstala
rm -r node_modules
npm install
```

### Página en blanco o errores en consola
```powershell
# Detén el servidor (Ctrl+C) y reinicia
npm run dev
```

### Puerto 3000 ya en uso
```powershell
# Usa un puerto diferente
npm run dev -- -p 3001

# O detén el proceso que usa el puerto 3000
```

---

## 📚 Próximos Pasos

1. **Explora Todo el Contenido**
   - Hay 50+ conceptos para descubrir
   - Cada uno con información detallada

2. **Personaliza el Código**
   - Los datos están en: `data/bigDataInfo.ts`
   - Agrega tus propios conceptos
   - Modifica colores y estilos

3. **Comparte con Otros**
   - Usa el botón de descarga para obtener SVG
   - Comparte screenshots de nodos interesantes

4. **Lee la Documentación Completa**
   - Ve al `README.md` para información técnica detallada

---

## 🆘 ¿Necesitas Ayuda?

Si encuentras problemas:
1. Revisa la sección de Solución de Problemas arriba
2. Verifica que todas las dependencias se instalaron: `npm list`
3. Revisa la consola del navegador (F12) para errores
4. Asegúrate de estar en la carpeta correcta del proyecto

---

**¡Disfruta explorando el mundo del Big Data de forma interactiva!** 🎉🚀
