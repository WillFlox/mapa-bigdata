export interface NodeData {
  name: string
  description: string
  color: string
  detailedInfo?: string
  examples?: string[]
  technologies?: string[]
  benefits?: string[]
  challenges?: string[]
  resources?: { title: string; url: string }[]
  icon?: string
  children?: NodeData[]
}

export const bigDataTree: NodeData = {
  name: "Big Data",
  description: "Exploración completa de los principios, tecnologías y aplicaciones del Big Data.",
  color: "#8b5cf6",
  icon: "🌐",
  detailedInfo: `Big Data representa una revolución en la forma en que las organizaciones recopilan, almacenan, procesan y analizan información.`,
  children: [
    {
      name: "Introducción a Big Data",
      description: "Contexto, definición e importancia del Big Data en la transformación digital.",
      color: "#4ade80",
      icon: "📚",
      children: [
        {
          name: "Contexto y Transformación Digital",
          description: "Impacto de la cuarta revolución industrial y factores clave.",
          color: "#4ade80",
          icon: "🔄",
          detailedInfo: `La transformación digital está impulsada por la convergencia de múltiples tecnologías y tendencias que han cambiado radicalmente la forma en que las organizaciones operan y compiten.`,
          children: [
            {
              name: "Impacto de la cuarta revolución industrial",
              description: "Cambios fundamentales en la economía y sociedad digital.",
              color: "#4ade80",
              icon: "⚙️",
              detailedInfo: `La cuarta revolución industrial se caracteriza por la fusión de tecnologías que difuminan las líneas entre las esferas física, digital y biológica. Big Data es uno de los pilares fundamentales de esta transformación.`,
              examples: [
                "Automatización inteligente en manufactura",
                "Ciudades inteligentes con sensores IoT",
                "Medicina personalizada basada en genómica"
              ]
            },
            {
              name: "Factores clave: Cloud, Redes Sociales, Móvil, Analítica",
              description: "Tecnologías que impulsan la generación y análisis de Big Data.",
              color: "#4ade80",
              icon: "☁️",
              detailedInfo: `Cuatro factores tecnológicos clave han convergido para hacer posible la era del Big Data:

**Cloud Computing**: Infraestructura escalable y económica
**Redes Sociales**: Generación masiva de datos de usuarios
**Dispositivos Móviles**: Datos de ubicación y comportamiento en tiempo real
**Analítica Avanzada**: Capacidad de extraer valor de los datos`,
              examples: [
                "AWS, Azure, Google Cloud - infraestructura elástica",
                "Facebook, Twitter - billones de interacciones diarias",
                "Smartphones - 6.8 mil millones de usuarios globalmente",
                "Machine Learning - predicciones y automatización"
              ],
              technologies: ["AWS", "Azure", "Google Cloud", "Spark", "TensorFlow"]
            }
          ]
        },
        {
          name: "Definición de Big Data",
          description: "Qué es Big Data y sus características fundamentales.",
          color: "#4ade80",
          icon: "📖",
          detailedInfo: `Big Data se refiere a conjuntos de datos tan grandes, complejos y que crecen tan rápidamente que los métodos tradicionales de procesamiento de datos son inadecuados para manejarlos.

Según NIST (National Institute of Standards and Technology), Big Data es donde el volumen, velocidad o variedad de los datos requiere arquitecturas escalables para el almacenamiento, manipulación y análisis eficientes.`,
          examples: [
            "Google procesa más de 20 petabytes de datos diariamente",
            "Facebook genera 4 petabytes de datos por día",
            "Sensores IoT generan billones de eventos por segundo"
          ],
          technologies: ["Hadoop", "Spark", "Kafka", "MongoDB", "Cassandra"],
          resources: [
            { title: "NIST Big Data Definition", url: "https://www.nist.gov/programs-projects/big-data" }
          ]
        },
        {
          name: "Importancia y Necesidad en las Organizaciones",
          description: "Por qué las organizaciones modernas requieren capacidades de Big Data.",
          color: "#4ade80",
          icon: "💼",
          detailedInfo: `La necesidad de Big Data surge de varios factores convergentes:

**EXPLOSIÓN DE DATOS**: IoT, redes sociales, comercio electrónico generan volúmenes masivos
**VENTAJA COMPETITIVA**: Las empresas que aprovechan Big Data tienen 23% más probabilidad de adquirir clientes
**TRANSFORMACIÓN DIGITAL**: Personalización, automatización, predicción, optimización
**CASOS CRÍTICOS**: Salud, seguridad, ciudades inteligentes, cambio climático`,
          examples: [
            "Netflix ahorra $1B/año con su motor de recomendaciones",
            "Walmart procesa 2.5 petabytes por hora para optimizar inventario",
            "UPS analiza 16.3 millones de paquetes diarios para optimizar rutas"
          ],
          benefits: [
            "Toma de decisiones basada en datos",
            "Identificación de patrones ocultos",
            "Mejora de eficiencia operacional",
            "Personalización de experiencias"
          ],
          challenges: [
            "Inversión inicial significativa",
            "Escasez de talento especializado",
            "Complejidad de integración",
            "Preocupaciones de privacidad y seguridad"
          ]
        },
        {
          name: "Mitos y Preguntas frecuentes",
          description: "Aclarando conceptos erróneos sobre Big Data.",
          color: "#4ade80",
          icon: "❓",
          detailedInfo: `**MITOS COMUNES**:

❌ "Big Data es solo para grandes empresas"
✅ Realidad: PyMEs también pueden beneficiarse con soluciones cloud

❌ "Más datos siempre es mejor"
✅ Realidad: La calidad y relevancia son más importantes que el volumen

❌ "Big Data reemplaza la intuición humana"
✅ Realidad: Complementa y mejora la toma de decisiones humanas

❌ "Es solo una moda tecnológica"
✅ Realidad: Es una transformación fundamental en cómo operan las organizaciones`,
          examples: [
            "Pequeñas startups usan BigQuery sin infraestructura propia",
            "Datos limpios y relevantes superan a grandes volúmenes ruidosos",
            "Mejores decisiones combinan datos y experiencia humana"
          ]
        }
      ]
    },
    {
      name: "Naturaleza del Dato",
      description: "Tipos de datos, complejidad y necesidades emergentes.",
      color: "#facc15",
      icon: "🔍",
      children: [
        {
          name: "Datos estructurados y no estructurados",
          description: "Diferencias entre tipos de datos y sus características.",
          color: "#facc15",
          icon: "📊",
          detailedInfo: `**DATOS ESTRUCTURADOS**:
- Organizados en tablas con esquema definido
- Fáciles de buscar y analizar
- Ejemplos: bases de datos relacionales, hojas de cálculo
- Representan ~20% de los datos empresariales

**DATOS NO ESTRUCTURADOS**:
- Sin formato predefinido
- Texto libre, imágenes, video, audio
- Difíciles de procesar con métodos tradicionales
- Representan ~80% de los datos empresariales

**DATOS SEMI-ESTRUCTURADOS**:
- Tienen cierta organización pero no esquema rígido
- JSON, XML, logs
- Flexibles pero con metadatos`,
          examples: [
            "Estructurados: Transacciones bancarias, inventarios",
            "No estructurados: Emails, videos de seguridad, posts en redes sociales",
            "Semi-estructurados: Logs de servidores, datos de sensores IoT"
          ],
          technologies: ["SQL", "NoSQL", "MongoDB", "Elasticsearch", "Hadoop"]
        },
        {
          name: "Complejidad del dato (3Vs)",
          description: "Las tres dimensiones principales de complejidad en Big Data.",
          color: "#facc15",
          icon: "⚡",
          detailedInfo: `**VOLUMEN**: Escala masiva de datos
- Terabytes, petabytes, exabytes
- Crecimiento exponencial
- Desafío: almacenamiento económico y eficiente

**VELOCIDAD**: Rapidez de generación y procesamiento
- Streaming en tiempo real
- Millones de eventos por segundo
- Desafío: procesamiento y análisis en tiempo real

**VARIEDAD**: Múltiples tipos y formatos
- Estructurados, semi-estructurados, no estructurados
- Múltiples fuentes heterogéneas
- Desafío: integración y normalización`,
          examples: [
            "Volumen: YouTube - 500 horas de video por minuto",
            "Velocidad: NYSE - 8,000 transacciones por segundo",
            "Variedad: Hospital - registros, imágenes, señales de dispositivos"
          ]
        },
        {
          name: "Necesidades emergentes",
          description: "Nuevos requerimientos en el manejo de datos masivos.",
          color: "#facc15",
          icon: "🚀",
          children: [
            {
              name: "Integración de datos diversos",
              description: "Combinar múltiples fuentes de datos heterogéneas.",
              color: "#facc15",
              icon: "🔗",
              detailedInfo: `La integración de datos diversos requiere:

- **ETL/ELT modernos**: Transformación de datos de múltiples fuentes
- **Data Lakes**: Almacenamiento centralizado de datos diversos
- **APIs y conectores**: Integración de sistemas legacy y modernos
- **Calidad de datos**: Limpieza, validación y enriquecimiento`,
              technologies: ["Apache NiFi", "Talend", "Informatica", "AWS Glue", "Apache Airflow"]
            },
            {
              name: "Datos en tiempo real",
              description: "Procesamiento y análisis de streams de datos continuos.",
              color: "#facc15",
              icon: "⏱️",
              detailedInfo: `El procesamiento en tiempo real permite:

- **Detección inmediata**: Fraudes, anomalías, oportunidades
- **Respuesta rápida**: Acciones automatizadas basadas en eventos
- **Experiencias personalizadas**: Recomendaciones dinámicas
- **Monitoreo continuo**: IoT, sistemas críticos, operaciones`,
              examples: [
                "Detección de fraude en transacciones bancarias",
                "Recomendaciones personalizadas en e-commerce",
                "Monitoreo de pacientes en hospitales",
                "Optimización de rutas en tiempo real"
              ],
              technologies: ["Apache Kafka", "Apache Flink", "Spark Streaming", "AWS Kinesis"]
            },
            {
              name: "Procesamiento eficiente y almacenamiento",
              description: "Optimización de recursos para manejar grandes volúmenes.",
              color: "#facc15",
              icon: "💾",
              detailedInfo: `Estrategias para eficiencia:

**ALMACENAMIENTO**:
- Compresión de datos
- Formatos columnares (Parquet, ORC)
- Tiering (hot, warm, cold storage)
- Deduplicación

**PROCESAMIENTO**:
- Computación distribuida
- Procesamiento in-memory
- Optimización de queries
- Caching inteligente`,
              technologies: ["Parquet", "ORC", "Snappy", "Redis", "Spark", "Presto"],
              benefits: [
                "Reducción de costos de almacenamiento hasta 90%",
                "Mejora de performance de queries hasta 100x",
                "Escalabilidad horizontal",
                "Mejor utilización de recursos"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Tipos y Categorías de Big Data",
      description: "Clasificación según NIST y escenarios de uso.",
      color: "#3b82f6",
      icon: "📑",
      children: [
        {
          name: "Clasificación según NIST",
          description: "Tres tipos principales de escenarios Big Data.",
          color: "#3b82f6",
          icon: "🏷️",
          detailedInfo: `NIST (National Institute of Standards and Technology) define tres tipos de escenarios Big Data basados en las necesidades tecnológicas:`,
          children: [
            {
              name: "Tipo 1: Datos no relacionales necesarios",
              description: "Escenarios donde los datos no encajan en modelos relacionales.",
              color: "#3b82f6",
              icon: "1️⃣",
              detailedInfo: `**TIPO 1**: Cuando la naturaleza de los datos requiere modelos no relacionales

**Características**:
- Datos con estructura flexible o variable
- Relaciones complejas o jerárquicas
- Documentos, grafos, series temporales

**Casos de uso**:
- Catálogos de productos con atributos variables
- Redes sociales con relaciones complejas
- Datos de sensores con esquemas cambiantes`,
              examples: [
                "MongoDB para catálogos de e-commerce",
                "Neo4j para análisis de redes sociales",
                "InfluxDB para series temporales de IoT"
              ],
              technologies: ["MongoDB", "Neo4j", "Cassandra", "InfluxDB", "Couchbase"]
            },
            {
              name: "Tipo 2: Escalabilidad horizontal por volumen/velocidad",
              description: "Escenarios donde el volumen o velocidad excede capacidades tradicionales.",
              color: "#3b82f6",
              icon: "2️⃣",
              detailedInfo: `**TIPO 2**: Cuando el volumen o velocidad requiere escalabilidad horizontal

**Características**:
- Volúmenes masivos (petabytes+)
- Alta velocidad de ingesta
- Necesidad de procesamiento paralelo
- Los datos podrían ser relacionales pero la escala lo impide

**Casos de uso**:
- Logs de aplicaciones web a gran escala
- Datos de clickstream
- Telemetría de dispositivos IoT`,
              examples: [
                "Google procesa 20+ PB diarios con BigQuery",
                "Twitter ingesta millones de tweets por minuto",
                "Tesla procesa datos de millones de vehículos"
              ],
              technologies: ["Hadoop", "Spark", "BigQuery", "Redshift", "Snowflake"]
            },
            {
              name: "Tipo 3: Datos no relacionales con escalabilidad horizontal",
              description: "Combinación de naturaleza no relacional y escala masiva.",
              color: "#3b82f6",
              icon: "3️⃣",
              detailedInfo: `**TIPO 3**: Cuando se necesitan AMBOS: modelo no relacional Y escalabilidad horizontal

**Características**:
- Datos inherentemente no relacionales
- Volumen o velocidad masivos
- Requiere lo mejor de ambos mundos
- El escenario más complejo

**Casos de uso**:
- Análisis de grafos sociales a escala web
- Procesamiento de imágenes/video masivo
- Análisis de genomas a gran escala`,
              examples: [
                "Facebook - grafos sociales con billones de relaciones",
                "YouTube - procesamiento de video a escala planetaria",
                "Genomics - análisis de millones de secuencias genéticas"
              ],
              technologies: ["Cassandra", "HBase", "DynamoDB", "Cosmos DB"],
              challenges: [
                "Complejidad arquitectónica muy alta",
                "Requiere expertise especializado",
                "Costos significativos de infraestructura",
                "Dificultad en garantizar consistencia"
              ]
            }
          ]
        },
        {
          name: "Escenarios de uso de Big Data",
          description: "Situaciones donde Big Data es necesario o beneficioso.",
          color: "#3b82f6",
          icon: "🎯",
          children: [
            {
              name: "Fuentes tradicionales y nuevas",
              description: "Evolución de las fuentes de datos.",
              color: "#3b82f6",
              icon: "📡",
              detailedInfo: `**FUENTES TRADICIONALES**:
- Bases de datos transaccionales
- Data warehouses
- Sistemas ERP/CRM
- Archivos y documentos

**FUENTES NUEVAS**:
- Redes sociales
- Dispositivos IoT
- Sensores y wearables
- Logs de aplicaciones web/móvil
- Imágenes y video
- Datos de geolocalización`,
              examples: [
                "Tradicional: Ventas en punto de venta",
                "Nueva: Sentimiento en redes sociales sobre productos",
                "Tradicional: Inventario en almacén",
                "Nueva: Datos de sensores de temperatura en cadena de frío"
              ]
            },
            {
              name: "Velocidad y volumen",
              description: "Escenarios definidos por la escala temporal y de datos.",
              color: "#3b82f6",
              icon: "📈",
              detailedInfo: `**ALTA VELOCIDAD**:
- Streaming de eventos
- Transacciones financieras
- Telemetría en tiempo real
- Requiere: procesamiento de streams

**ALTO VOLUMEN**:
- Datos históricos masivos
- Archivos multimedia
- Logs acumulados
- Requiere: almacenamiento distribuido y procesamiento batch

**AMBOS**:
- IoT a escala industrial
- Plataformas de video
- Mercados financieros globales
- Requiere: arquitecturas Lambda/Kappa`,
              examples: [
                "Alta velocidad: Detección de fraude en milisegundos",
                "Alto volumen: Análisis de años de datos climáticos",
                "Ambos: Netflix - streaming + análisis de preferencias"
              ]
            },
            {
              name: "Variedad de datos",
              description: "Escenarios con múltiples tipos de datos heterogéneos.",
              color: "#3b82f6",
              icon: "🎨",
              detailedInfo: `**VARIEDAD DE DATOS** requiere:

- Integración de fuentes diversas
- Procesamiento de múltiples formatos
- Enriquecimiento y correlación
- Análisis multi-modal

**EJEMPLOS DE VARIEDAD**:
- Hospital: registros médicos + imágenes + señales vitales + genómica
- Retail: transacciones + clickstream + redes sociales + inventario
- Smart City: tráfico + clima + energía + seguridad`,
              technologies: ["Data Lakes", "Apache NiFi", "Elasticsearch", "Databricks"],
              challenges: [
                "Complejidad de integración",
                "Calidad y consistencia de datos",
                "Gobernanza y seguridad",
                "Expertise en múltiples dominios"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Tecnologías de Big Data",
      description: "Stack tecnológico: almacenamiento, procesamiento, análisis y visualización.",
      color: "#ec4899",
      icon: "⚙️",
      children: [
        {
          name: "Almacenamiento",
          description: "Tecnologías para guardar y gestionar grandes volúmenes de datos.",
          color: "#ec4899",
          icon: "💾",
          children: [
            {
              name: "Bases relacionales y NoSQL",
              description: "Comparación entre bases de datos tradicionales y modernas.",
              color: "#ec4899",
              icon: "🗄️",
              detailedInfo: `**BASES RELACIONALES (SQL)**:
- Esquema rígido y predefinido
- ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)
- Joins complejos
- Escalabilidad vertical
- Ejemplos: PostgreSQL, MySQL, Oracle

**BASES NoSQL**:
- Esquema flexible
- BASE (Basically Available, Soft state, Eventually consistent)
- Escalabilidad horizontal
- Tipos: Document, Key-Value, Column-family, Graph

**CUÁNDO USAR CADA UNA**:
SQL: Transacciones financieras, datos estructurados críticos
NoSQL: Escalabilidad masiva, datos semi/no estructurados`,
              examples: [
                "SQL: Sistema bancario con transacciones ACID",
                "Document DB: Catálogo de productos con atributos variables",
                "Key-Value: Cache de sesiones de usuarios",
                "Column-family: Análisis de series temporales",
                "Graph: Recomendaciones basadas en relaciones sociales"
              ],
              technologies: [
                "PostgreSQL", "MySQL", "MongoDB", "Cassandra",
                "Redis", "Neo4j", "DynamoDB", "HBase"
              ]
            },
            {
              name: "Data Lakes",
              description: "Repositorios centralizados para datos estructurados y no estructurados.",
              color: "#ec4899",
              icon: "🌊",
              detailedInfo: `**DATA LAKE**: Repositorio que almacena datos en su formato nativo hasta que sean necesarios

**CARACTERÍSTICAS**:
- Schema-on-Read (estructura al leer, no al escribir)
- Almacenamiento económico
- Escalabilidad masiva (petabytes+)
- Soporta cualquier tipo de dato
- Procesamiento flexible: batch, streaming, ML

**ZONAS DEL DATA LAKE**:
1. Raw Zone: Datos originales sin procesar
2. Refined Zone: Datos limpiados y validados
3. Trusted Zone: Datos enriquecidos y combinados
4. Analytics Zone: Datos agregados para análisis

**VS DATA WAREHOUSE**:
- Data Lake: almacena todo, schema flexible, más económico
- Data Warehouse: solo datos relevantes, schema rígido, optimizado para queries`,
              examples: [
                "AWS Lake Formation - gestión automatizada",
                "Azure Data Lake Storage - almacenamiento jerárquico",
                "Delta Lake - capa ACID sobre data lakes",
                "Netflix usa S3 como data lake para 1.5 PB diarios"
              ],
              technologies: [
                "Apache Hadoop HDFS", "Amazon S3", "Azure Data Lake Storage",
                "Google Cloud Storage", "Delta Lake", "Apache Iceberg"
              ],
              benefits: [
                "Almacenamiento económico de datos diversos",
                "Flexibilidad para análisis exploratorios",
                "Base para machine learning",
                "Eliminación de silos de datos"
              ],
              challenges: [
                "Riesgo de convertirse en 'data swamp'",
                "Gobernanza y catalogación",
                "Seguridad y control de acceso",
                "Calidad sin validación en escritura"
              ]
            }
          ]
        },
        {
          name: "Procesamiento",
          description: "Frameworks para transformar y analizar datos masivos.",
          color: "#ec4899",
          icon: "🚀",
          children: [
            {
              name: "Sistemas distribuidos",
              description: "Arquitecturas para procesamiento paralelo a gran escala.",
              color: "#ec4899",
              icon: "🔄",
              detailedInfo: `**PRINCIPIOS DE SISTEMAS DISTRIBUIDOS**:

- **Paralelización**: Dividir trabajo entre múltiples nodos
- **Tolerancia a fallos**: Continuar operando ante fallos de nodos
- **Escalabilidad horizontal**: Añadir más nodos para más capacidad
- **Localidad de datos**: Procesar datos donde están almacenados

**DESAFÍOS**:
- Coordinación entre nodos
- Consistencia de datos
- Latencia de red
- Debugging distribuido`,
              technologies: ["Apache Hadoop", "Apache Spark", "Apache Flink", "Kubernetes"],
              benefits: [
                "Procesamiento paralelo masivo",
                "Escalabilidad prácticamente ilimitada",
                "Tolerancia a fallos automática",
                "Uso eficiente de recursos"
              ]
            },
            {
              name: "Motores especializados (Hadoop, Spark, H2O, TensorFlow)",
              description: "Frameworks principales para diferentes tipos de procesamiento.",
              color: "#ec4899",
              icon: "⚡",
              detailedInfo: `**APACHE HADOOP**:
- MapReduce para procesamiento batch
- HDFS para almacenamiento distribuido
- YARN para gestión de recursos
- Ecosistema maduro y extenso

**APACHE SPARK**:
- Procesamiento in-memory (100x más rápido)
- Batch y streaming unificados
- MLlib para machine learning
- APIs en Python, Scala, Java, R

**H2O.ai**:
- AutoML para Big Data
- Algoritmos optimizados
- Integración con Spark/Hadoop
- Modelos interpretables

**TENSORFLOW**:
- Deep learning a escala
- Entrenamiento distribuido
- Deployment en producción
- Ecosistema completo (TFX, TensorBoard)`,
              examples: [
                "Hadoop: Yahoo! con clusters de 40,000+ nodos",
                "Spark: Uber procesa 100+ PB para análisis de viajes",
                "H2O: Detección de fraude en tiempo real",
                "TensorFlow: Google Photos - reconocimiento de imágenes"
              ],
              technologies: [
                "Apache Hadoop", "Apache Spark", "Apache Flink",
                "H2O.ai", "TensorFlow", "PyTorch", "Dask"
              ],
              benefits: [
                "Procesamiento paralelo masivo",
                "Abstracción de complejidad distribuida",
                "Tolerancia a fallos automática",
                "Ecosistema rico de librerías"
              ]
            }
          ]
        },
        {
          name: "Análisis",
          description: "Técnicas y herramientas para extraer insights de los datos.",
          color: "#ec4899",
          icon: "🤖",
          children: [
            {
              name: "Tecnologías y librerías de Machine Learning, Deep Learning, Graph Analytics",
              description: "Herramientas especializadas para análisis avanzado.",
              color: "#ec4899",
              icon: "🧠",
              detailedInfo: `**MACHINE LEARNING**:
- Spark MLlib: ML distribuido
- Scikit-learn: Algoritmos clásicos
- XGBoost: Gradient boosting optimizado
- H2O: AutoML a escala

**DEEP LEARNING**:
- TensorFlow: Framework completo de Google
- PyTorch: Investigación y producción
- Keras: API de alto nivel
- MXNet: Escalabilidad en AWS

**GRAPH ANALYTICS**:
- Neo4j: Base de datos de grafos
- GraphX (Spark): Procesamiento de grafos distribuido
- NetworkX: Análisis de redes en Python
- TigerGraph: Grafos a escala empresarial`,
              examples: [
                "ML: Netflix - sistema de recomendaciones",
                "DL: Tesla - conducción autónoma",
                "Graph: LinkedIn - 'People You May Know'",
                "ML: Amazon - optimización de precios dinámicos"
              ],
              technologies: [
                "Spark MLlib", "TensorFlow", "PyTorch", "Scikit-learn",
                "XGBoost", "Neo4j", "GraphX", "H2O.ai"
              ]
            },
            {
              name: "Análisis en tiempo real y en batch",
              description: "Diferentes paradigmas de procesamiento según latencia requerida.",
              color: "#ec4899",
              icon: "⏱️",
              detailedInfo: `**ANÁLISIS BATCH**:
- Procesamiento de grandes volúmenes históricos
- Latencia de minutos a horas
- Optimizado para throughput
- Ejemplos: Reportes diarios, entrenamiento de modelos ML
- Tecnologías: Hadoop MapReduce, Spark Batch

**ANÁLISIS EN TIEMPO REAL (STREAMING)**:
- Procesamiento continuo de eventos
- Latencia de milisegundos a segundos
- Optimizado para baja latencia
- Ejemplos: Detección de fraude, recomendaciones dinámicas
- Tecnologías: Flink, Spark Streaming, Kafka Streams

**ARQUITECTURAS HÍBRIDAS**:
- Lambda: Batch + Speed layers
- Kappa: Todo como streaming
- Combinan precisión de batch con velocidad de streaming`,
              examples: [
                "Batch: Análisis de tendencias mensuales de ventas",
                "Real-time: Alertas de fraude en transacciones",
                "Híbrido: Dashboard con métricas históricas y en vivo"
              ],
              technologies: [
                "Apache Spark", "Apache Flink", "Kafka Streams",
                "Apache Storm", "AWS Kinesis", "Google Dataflow"
              ]
            }
          ]
        },
        {
          name: "Visualización y Data Storytelling",
          description: "Herramientas para comunicar insights de forma efectiva.",
          color: "#ec4899",
          icon: "📊",
          detailedInfo: `**VISUALIZACIÓN DE DATOS**:
Transformar datos complejos en representaciones visuales comprensibles

**HERRAMIENTAS**:
- **Tableau**: Visualizaciones interactivas sin código
- **Power BI**: Integración con ecosistema Microsoft
- **Looker**: BI moderno basado en web
- **Apache Superset**: Open-source, escalable
- **D3.js**: Visualizaciones personalizadas en web

**DATA STORYTELLING**:
- Narrativa con datos
- Contexto y significado
- Audiencia específica
- Insights accionables

**MEJORES PRÁCTICAS**:
- Simplicidad sobre complejidad
- Visualizaciones apropiadas para el tipo de dato
- Interactividad cuando añade valor
- Accesibilidad y diseño inclusivo`,
          examples: [
            "Dashboard ejecutivo con KPIs en tiempo real",
            "Visualización geográfica de ventas por región",
            "Análisis de tendencias temporales interactivo",
            "Storytelling de impacto de campaña de marketing"
          ],
          technologies: [
            "Tableau", "Power BI", "Looker", "Apache Superset",
            "D3.js", "Plotly", "Grafana", "Kibana"
          ],
          benefits: [
            "Democratización de datos",
            "Decisiones más rápidas",
            "Identificación de patrones visuales",
            "Comunicación efectiva de insights"
          ]
        }
      ]
    },
    {
      name: "Arquitectura y Ecosistemas de Big Data",
      description: "Diseño de sistemas y plataformas para soluciones Big Data.",
      color: "#a855f7",
      icon: "🏗️",
      children: [
        {
          name: "Arquitectura general",
          description: "Capas fundamentales de una arquitectura Big Data.",
          color: "#a855f7",
          icon: "📐",
          children: [
            {
              name: "Capas: Captura, Almacenamiento, Procesamiento, Análisis, Visualización",
              description: "Las cinco capas principales de una arquitectura Big Data.",
              color: "#a855f7",
              icon: "🔷",
              detailedInfo: `**ARQUITECTURA EN CAPAS**:

**1. CAPA DE CAPTURA/INGESTA**:
- Recolección de datos de múltiples fuentes
- Batch: Sqoop, Talend
- Streaming: Kafka, Flume, Kinesis
- APIs y conectores

**2. CAPA DE ALMACENAMIENTO**:
- Data Lakes: HDFS, S3, Azure Data Lake
- Bases de datos: SQL, NoSQL
- Formatos: Parquet, ORC, Avro

**3. CAPA DE PROCESAMIENTO**:
- Batch: Hadoop MapReduce, Spark
- Streaming: Flink, Spark Streaming
- Orquestación: Airflow, Oozie

**4. CAPA DE ANÁLISIS**:
- Machine Learning: MLlib, TensorFlow
- SQL Analytics: Hive, Presto, BigQuery
- Graph Analytics: Neo4j, GraphX

**5. CAPA DE VISUALIZACIÓN**:
- BI Tools: Tableau, Power BI
- Dashboards: Grafana, Kibana
- Custom: D3.js, React`,
              examples: [
                "E-commerce: Clickstream → S3 → Spark → ML → Dashboard",
                "IoT: Sensores → Kafka → Flink → TimeSeries DB → Grafana",
                "Social Media: APIs → Data Lake → Spark → NLP → Insights"
              ],
              technologies: [
                "Kafka", "HDFS", "S3", "Spark", "Flink",
                "Hive", "Presto", "TensorFlow", "Tableau"
              ]
            }
          ]
        },
        {
          name: "Data Lakes",
          description: "Repositorios centralizados y su gobernanza.",
          color: "#a855f7",
          icon: "🌊",
          children: [
            {
              name: "Concepto y gobernanza",
              description: "Qué es un Data Lake y cómo gobernarlo efectivamente.",
              color: "#a855f7",
              icon: "📋",
              detailedInfo: `**CONCEPTO DE DATA LAKE**:
Repositorio centralizado que almacena datos estructurados y no estructurados a cualquier escala, en su formato nativo.

**GOBERNANZA DE DATA LAKES**:

**1. CATALOGACIÓN**:
- Metadata management
- Data discovery
- Lineage tracking
- Herramientas: AWS Glue Catalog, Apache Atlas

**2. CALIDAD DE DATOS**:
- Validación y limpieza
- Monitoreo de calidad
- Data profiling
- Herramientas: Great Expectations, Deequ

**3. SEGURIDAD Y ACCESO**:
- Autenticación y autorización
- Encriptación en reposo y tránsito
- Auditoría de accesos
- Herramientas: Ranger, Knox

**4. GESTIÓN DEL CICLO DE VIDA**:
- Políticas de retención
- Archivado y eliminación
- Optimización de costos`,
              technologies: [
                "AWS Lake Formation", "Azure Purview", "Apache Atlas",
                "Collibra", "Alation", "Apache Ranger"
              ],
              challenges: [
                "Evitar 'data swamps' (pantanos de datos)",
                "Mantener calidad sin schema rígido",
                "Balance entre accesibilidad y seguridad",
                "Costos de almacenamiento a largo plazo"
              ]
            },
            {
              name: "Participación de expertos y automatización",
              description: "Roles humanos y automatización en la gestión de Data Lakes.",
              color: "#a855f7",
              icon: "🤝",
              detailedInfo: `**ROLES CLAVE**:

**Data Engineers**:
- Diseño de pipelines de ingesta
- Optimización de almacenamiento
- Mantenimiento de infraestructura

**Data Stewards**:
- Definición de políticas de gobernanza
- Calidad y consistencia de datos
- Resolución de conflictos

**Data Scientists**:
- Exploración y análisis
- Feedback sobre calidad
- Requerimientos de datos

**AUTOMATIZACIÓN**:
- Ingesta automática de datos
- Catalogación con ML
- Detección de anomalías
- Limpieza y enriquecimiento
- Optimización de costos

**BALANCE**:
- Automatizar tareas repetitivas
- Humanos para decisiones estratégicas
- Supervisión humana de procesos automatizados`,
              examples: [
                "Catalogación automática con AWS Glue Crawlers",
                "Detección de PII (datos personales) con ML",
                "Data Stewards definen políticas de retención",
                "Alertas automáticas de calidad de datos"
              ]
            }
          ]
        },
        {
          name: "Integración de tecnologías y plataformas",
          description: "Cómo combinar diferentes herramientas en un ecosistema coherente.",
          color: "#a855f7",
          icon: "🔗",
          detailedInfo: `**ESTRATEGIAS DE INTEGRACIÓN**:

**1. PLATAFORMAS UNIFICADAS**:
- Databricks: Spark + Delta Lake + MLflow
- Cloudera: Hadoop ecosystem completo
- AWS: Suite completa de servicios Big Data
- Azure Synapse: Analytics unificado

**2. BEST-OF-BREED**:
- Seleccionar mejores herramientas para cada capa
- Integración vía APIs y conectores
- Mayor flexibilidad pero más complejidad

**3. CONSIDERACIONES**:
- Interoperabilidad entre componentes
- Formatos de datos comunes (Parquet, Avro)
- Orquestación centralizada (Airflow)
- Monitoreo unificado
- Gestión de costos

**PATRONES COMUNES**:
- Kafka como backbone de eventos
- S3/HDFS como almacenamiento central
- Spark como motor de procesamiento
- Airflow para orquestación
- Tableau/Power BI para visualización`,
          examples: [
            "Netflix: Kafka → S3 → Spark → Presto → Tableau",
            "Uber: Kafka → HDFS → Spark → Hive → Custom dashboards",
            "Airbnb: Airflow orquesta pipelines en AWS"
          ],
          technologies: [
            "Apache Airflow", "Kafka", "Spark", "Databricks",
            "AWS", "Azure", "Google Cloud", "Kubernetes"
          ],
          benefits: [
            "Ecosistema coherente y mantenible",
            "Reutilización de componentes",
            "Escalabilidad del sistema completo",
            "Reducción de silos tecnológicos"
          ]
        }
      ]
    },
    {
      name: "Casos de Uso y Aplicaciones",
      description: "Aplicaciones prácticas de Big Data en diversos sectores.",
      color: "#f59e0b",
      icon: "💼",
      children: [
        {
          name: "Sectores destacados",
          description: "Industrias que aprovechan Big Data para transformación.",
          color: "#f59e0b",
          icon: "🏢",
          children: [
            {
              name: "Hostelería: análisis de satisfacción, comentarios externos",
              description: "Big Data en hoteles y restaurantes.",
              color: "#f59e0b",
              icon: "🏨",
              detailedInfo: `**APLICACIONES EN HOSTELERÍA**:

**ANÁLISIS DE SATISFACCIÓN**:
- Análisis de sentimiento en reseñas (TripAdvisor, Google, Booking)
- Monitoreo de redes sociales en tiempo real
- Encuestas post-estancia automatizadas
- Identificación de problemas recurrentes

**OPTIMIZACIÓN OPERACIONAL**:
- Predicción de demanda y ocupación
- Pricing dinámico basado en múltiples factores
- Gestión de inventario y suministros
- Personalización de experiencias

**FUENTES DE DATOS**:
- Sistemas de reservas
- POS (Point of Sale)
- Redes sociales
- Sitios de reseñas
- Sensores IoT (temperatura, ocupación)`,
              examples: [
                "Marriott usa ML para pricing dinámico de habitaciones",
                "Hilton analiza sentimiento en 100+ idiomas",
                "Restaurantes predicen demanda para optimizar personal",
                "Hoteles personalizan ofertas basadas en preferencias"
              ],
              technologies: [
                "NLP para análisis de sentimiento",
                "Spark para procesamiento de reseñas",
                "Tableau para dashboards de satisfacción",
                "ML para predicción de demanda"
              ],
              benefits: [
                "Mejora de satisfacción del cliente",
                "Optimización de revenue",
                "Reducción de costos operativos",
                "Ventaja competitiva"
              ]
            },
            {
              name: "Deportes: análisis de rendimiento y estrategia",
              description: "Big Data en deportes profesionales.",
              color: "#f59e0b",
              icon: "⚽",
              detailedInfo: `**APLICACIONES EN DEPORTES**:

**ANÁLISIS DE RENDIMIENTO**:
- Tracking de jugadores con GPS y sensores
- Análisis biomecánico
- Monitoreo de salud y fatiga
- Prevención de lesiones

**ESTRATEGIA Y TÁCTICA**:
- Análisis de oponentes
- Optimización de formaciones
- Scouting basado en datos
- Simulaciones de partidos

**ENGAGEMENT DE FANS**:
- Personalización de contenido
- Análisis de sentimiento en redes sociales
- Predicción de asistencia
- Optimización de precios de entradas`,
              examples: [
                "NBA usa tracking óptico para analizar cada movimiento",
                "FC Barcelona - análisis de 1000+ métricas por partido",
                "NFL - prevención de lesiones con ML",
                "Formula 1 - 300+ sensores por coche generando 1.5 GB/segundo"
              ],
              technologies: [
                "Computer Vision para tracking",
                "IoT sensors (GPS, acelerómetros)",
                "ML para predicción de lesiones",
                "Graph analytics para análisis táctico"
              ]
            },
            {
              name: "Agricultura: eficiencia en sistemas de riego y análisis de datos ambientales",
              description: "Big Data en agricultura de precisión.",
              color: "#f59e0b",
              icon: "🌾",
              detailedInfo: `**AGRICULTURA DE PRECISIÓN**:

**OPTIMIZACIÓN DE RIEGO**:
- Sensores de humedad del suelo
- Datos meteorológicos en tiempo real
- Predicción de necesidades hídricas
- Riego automatizado y zonificado

**ANÁLISIS AMBIENTAL**:
- Monitoreo de calidad del suelo
- Análisis de imágenes satelitales
- Predicción de plagas y enfermedades
- Optimización de uso de fertilizantes

**GESTIÓN DE CULTIVOS**:
- Predicción de rendimiento
- Optimización de siembra
- Trazabilidad de productos
- Gestión de maquinaria`,
              examples: [
                "John Deere - tractores conectados generan datos de campo",
                "Drones con multispectral imaging para salud de cultivos",
                "Sensores IoT reducen uso de agua hasta 30%",
                "ML predice plagas con 85% de precisión"
              ],
              technologies: [
                "IoT sensors (humedad, temperatura, pH)",
                "Imágenes satelitales (Sentinel, Landsat)",
                "Computer Vision para detección de plagas",
                "ML para predicción de rendimiento"
              ],
              benefits: [
                "Reducción de uso de agua hasta 30%",
                "Aumento de rendimiento 10-15%",
                "Reducción de uso de químicos",
                "Sostenibilidad ambiental"
              ]
            },
            {
              name: "Sector de juegos online: monitorización y análisis de transacciones",
              description: "Big Data en gaming y apuestas online.",
              color: "#f59e0b",
              icon: "🎮",
              detailedInfo: `**APLICACIONES EN GAMING ONLINE**:

**DETECCIÓN DE FRAUDE**:
- Análisis de patrones de transacciones
- Detección de cuentas múltiples
- Identificación de bots
- Prevención de lavado de dinero

**ANÁLISIS DE COMPORTAMIENTO**:
- Segmentación de jugadores
- Predicción de churn
- Personalización de ofertas
- Optimización de game balance

**OPERACIONES EN TIEMPO REAL**:
- Monitoreo de performance de servidores
- Detección de anomalías
- Análisis de logs
- Optimización de matchmaking`,
              examples: [
                "Zynga analiza billones de eventos de juego diarios",
                "Casinos online detectan fraude en milisegundos",
                "Steam personaliza recomendaciones para 120M+ usuarios",
                "Epic Games analiza telemetría de Fortnite en tiempo real"
              ],
              technologies: [
                "Kafka para streaming de eventos",
                "Flink para detección de fraude en tiempo real",
                "Cassandra para almacenamiento de sesiones",
                "ML para predicción de churn"
              ],
              benefits: [
                "Reducción de fraude hasta 90%",
                "Aumento de retención de jugadores",
                "Mejora de experiencia de usuario",
                "Cumplimiento regulatorio"
              ]
            }
          ]
        },
        {
          name: "Operaciones e inteligencia en tiempo real",
          description: "Casos de uso que requieren procesamiento inmediato.",
          color: "#f59e0b",
          icon: "⚡",
          detailedInfo: `**OPERACIONES EN TIEMPO REAL**:

**CASOS DE USO**:

**1. DETECCIÓN DE FRAUDE**:
- Transacciones bancarias
- E-commerce
- Seguros
- Latencia: milisegundos

**2. RECOMENDACIONES DINÁMICAS**:
- E-commerce
- Streaming de video/música
- Redes sociales
- Latencia: segundos

**3. MONITOREO DE INFRAESTRUCTURA**:
- Data centers
- Redes de telecomunicaciones
- Sistemas industriales
- Latencia: segundos

**4. TRADING ALGORÍTMICO**:
- Mercados financieros
- Criptomonedas
- Latencia: microsegundos

**ARQUITECTURA**:
- Stream processing (Kafka, Flink)
- In-memory databases (Redis)
- Complex Event Processing (CEP)
- Edge computing para ultra-baja latencia`,
          examples: [
            "PayPal procesa 193 transacciones/segundo con detección de fraude",
            "Netflix genera recomendaciones en <1 segundo",
            "Datadog monitorea 18 trillones de eventos/día",
            "Trading de alta frecuencia en microsegundos"
          ],
          technologies: [
            "Apache Kafka", "Apache Flink", "Redis", "Apache Storm",
            "AWS Kinesis", "Google Cloud Dataflow"
          ]
        },
        {
          name: "Valor del dato y generación de insights",
          description: "Cómo extraer valor accionable de los datos.",
          color: "#f59e0b",
          icon: "💎",
          detailedInfo: `**GENERACIÓN DE VALOR**:

**NIVELES DE INSIGHTS**:

**1. DESCRIPTIVO** (¿Qué pasó?):
- Dashboards y reportes
- KPIs y métricas
- Análisis histórico

**2. DIAGNÓSTICO** (¿Por qué pasó?):
- Análisis de causas raíz
- Correlaciones
- Segmentación

**3. PREDICTIVO** (¿Qué pasará?):
- Machine Learning
- Forecasting
- Análisis de tendencias

**4. PRESCRIPTIVO** (¿Qué hacer?):
- Optimización
- Simulaciones
- Recomendaciones automatizadas

**MONETIZACIÓN DE DATOS**:
- Mejora de productos/servicios
- Nuevos modelos de negocio
- Venta de insights (data as a service)
- Optimización de operaciones`,
          examples: [
            "Amazon: 35% de ventas vienen de recomendaciones",
            "UPS ahorra $300M-400M/año optimizando rutas",
            "Netflix ahorra $1B/año reduciendo churn",
            "Google monetiza datos de búsqueda vía publicidad"
          ],
          benefits: [
            "ROI medible y significativo",
            "Ventaja competitiva sostenible",
            "Innovación basada en datos",
            "Eficiencia operacional"
          ]
        }
      ]
    },
    {
      name: "Aspectos Clave de Implementación",
      description: "Consideraciones estratégicas para adopción exitosa de Big Data.",
      color: "#ef4444",
      icon: "🎯",
      children: [
        {
          name: "Modelos de madurez y evaluación de organización",
          description: "Frameworks para evaluar y mejorar capacidades de Big Data.",
          color: "#ef4444",
          icon: "📊",
          detailedInfo: `**MODELOS DE MADUREZ**:

**NIVEL 1 - INICIAL/AD-HOC**:
- Datos en silos
- Análisis manual y esporádico
- Sin estrategia de datos
- Decisiones basadas en intuición

**NIVEL 2 - REPETIBLE**:
- Algunos procesos documentados
- Herramientas básicas de BI
- Data warehouse inicial
- Reportes regulares

**NIVEL 3 - DEFINIDO**:
- Procesos estandarizados
- Gobernanza de datos establecida
- Data Lake implementado
- Self-service analytics

**NIVEL 4 - GESTIONADO**:
- Métricas de calidad de datos
- Automatización de pipelines
- ML en producción
- Data-driven culture

**NIVEL 5 - OPTIMIZADO**:
- Mejora continua
- IA/ML avanzado
- Monetización de datos
- Innovación constante

**EVALUACIÓN**:
- Tecnología
- Procesos
- Personas y cultura
- Gobernanza
- Casos de uso`,
          examples: [
            "Nivel 1: Startup sin infraestructura de datos",
            "Nivel 3: Empresa con data warehouse y BI",
            "Nivel 5: Google, Amazon - datos en el core del negocio"
          ]
        },
        {
          name: "Barreras y desafíos",
          description: "Obstáculos comunes en la adopción de Big Data.",
          color: "#ef4444",
          icon: "🚧",
          detailedInfo: `**BARRERAS PRINCIPALES**:

**1. TÉCNICAS**:
- Complejidad de tecnologías
- Integración de sistemas legacy
- Calidad de datos
- Escalabilidad

**2. ORGANIZACIONALES**:
- Resistencia al cambio
- Silos departamentales
- Falta de cultura data-driven
- Procesos inadecuados

**3. TALENTO**:
- Escasez de data scientists
- Falta de data engineers
- Necesidad de upskilling
- Retención de talento

**4. FINANCIERAS**:
- Inversión inicial alta
- ROI no inmediato
- Costos operativos
- Presupuestos limitados

**5. GOBERNANZA Y SEGURIDAD**:
- Privacidad de datos (GDPR, CCPA)
- Seguridad de datos
- Compliance regulatorio
- Ética en uso de datos`,
          challenges: [
            "60% de proyectos Big Data fallan por falta de skills",
            "Integración de datos consume 50-80% del tiempo de proyectos",
            "Calidad de datos: 'garbage in, garbage out'",
            "Cambio cultural es el mayor desafío según Gartner"
          ],
          examples: [
            "Legacy systems dificultan integración de datos",
            "Departamentos no comparten datos entre sí",
            "Falta de data scientists cualificados",
            "Proyectos sin ROI claro son cancelados"
          ]
        },
        {
          name: "Estrategia y gobernanza de datos",
          description: "Planificación estratégica y gestión de datos empresariales.",
          color: "#ef4444",
          icon: "📋",
          detailedInfo: `**ESTRATEGIA DE DATOS**:

**COMPONENTES CLAVE**:

**1. VISIÓN Y OBJETIVOS**:
- Alineación con estrategia de negocio
- Casos de uso prioritarios
- KPIs y métricas de éxito
- Roadmap de implementación

**2. ARQUITECTURA DE DATOS**:
- Diseño de data lake/warehouse
- Integración de fuentes
- Flujos de datos
- Tecnologías y plataformas

**3. GOBERNANZA**:
- Ownership de datos
- Políticas de calidad
- Seguridad y privacidad
- Compliance

**4. ORGANIZACIÓN**:
- Roles y responsabilidades
- Centro de excelencia de datos
- Modelo operativo
- Cultura data-driven

**5. GESTIÓN DEL CAMBIO**:
- Comunicación
- Training y upskilling
- Quick wins
- Escalamiento gradual`,
          examples: [
            "CDO (Chief Data Officer) lidera estrategia",
            "Data governance council con stakeholders clave",
            "Políticas de data quality con métricas",
            "Roadmap de 3 años con fases incrementales"
          ]
        },
        {
          name: "Estándares y gobernanza",
          description: "Frameworks y mejores prácticas para gestión de datos.",
          color: "#ef4444",
          icon: "⚖️",
          detailedInfo: `**ESTÁNDARES Y FRAMEWORKS**:

**ESTÁNDARES TÉCNICOS**:
- ISO 8000: Calidad de datos
- ISO 27001: Seguridad de información
- NIST Big Data Framework
- DAMA-DMBOK: Data Management Body of Knowledge

**REGULACIONES**:
- GDPR (Europa): Protección de datos personales
- CCPA (California): Privacidad del consumidor
- HIPAA (USA): Datos de salud
- PCI-DSS: Datos de tarjetas de pago

**GOBERNANZA DE DATOS**:

**1. DATA QUALITY**:
- Accuracy, completeness, consistency
- Validación y limpieza
- Monitoreo continuo
- Métricas y SLAs

**2. METADATA MANAGEMENT**:
- Catálogo de datos
- Lineage (trazabilidad)
- Diccionario de datos
- Business glossary

**3. MASTER DATA MANAGEMENT (MDM)**:
- Golden records
- Deduplicación
- Sincronización
- Gestión de cambios

**4. SEGURIDAD Y PRIVACIDAD**:
- Clasificación de datos
- Control de acceso (RBAC)
- Encriptación
- Auditoría
- Anonimización/pseudonimización

**5. LIFECYCLE MANAGEMENT**:
- Retención de datos
- Archivado
- Eliminación segura
- Backup y recovery`,
          technologies: [
            "Collibra", "Alation", "Informatica", "Talend",
            "Apache Atlas", "Apache Ranger", "AWS Lake Formation"
          ],
          benefits: [
            "Confianza en los datos",
            "Compliance regulatorio",
            "Reducción de riesgos",
            "Eficiencia operacional",
            "Habilitación de self-service"
          ],
          challenges: [
            "Balance entre gobernanza y agilidad",
            "Adopción por parte de usuarios",
            "Mantenimiento de políticas",
            "Costos de herramientas de gobernanza"
          ]
        }
      ]
    }
  ]
}
