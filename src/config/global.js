export default {
  global: {
    Name: 'Estructuras de control condicionales e iterativas en Python',
    Description:
      'El componente desarrolla las estructuras de control del lenguaje Python: condicionales (if, elif, else), operadores relacionales, lógicos, de inclusión y de asignación, e iterativas (while, for) junto con los operadores de rango para construir bucles.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Estructuras condicionales: concepto, tipos, sintaxis, sentencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sintaxis general de las estructuras condicionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructura if simple',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estructura if-else',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura if-elif-else',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructuras condicionales anidadas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Operador ternario',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Estructura <em>match-case</em> (Python 3.10+)',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Tipos de estructuras condicionales',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Buenas prácticas con estructuras condicionales',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operadores condicionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Operadores relacionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Operadores lógicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Operadores de inclusión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Operadores de asignación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Operadores de identidad',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Precedencia de los operadores condicionales',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructuras iterativas: concepto, tipos, sintaxis, sentencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ciclo while',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ciclo for',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sentencias de control: break, continue y else',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ciclos anidados',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operadores de rango de datos: bucles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Función range()',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso de range() en ciclos for',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Función enumerate()',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Función zip()',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Funciones reversed() y sorted()',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Break',
      significado:
        'sentencia de Python que interrumpe un ciclo de forma anticipada, sin importar si la condición sigue siendo verdadera.',
    },
    {
      termino: 'Ciclo',
      significado:
        'estructura iterativa que repite un bloque de instrucciones varias veces mientras se cumple una condición o mientras existan elementos por recorrer.',
    },
    {
      termino: 'Condición',
      significado:
        'expresión booleana que al evaluarse produce un valor True o False y determina el comportamiento de una estructura de control.',
    },
    {
      termino: 'Elif',
      significado:
        'palabra reservada de Python, abreviatura de else if , que permite encadenar varias condiciones dentro de una estructura condicional.',
    },
    {
      termino: 'Else',
      significado:
        'palabra reservada de Python que define el bloque que se ejecuta cuando ninguna de las condiciones previas se cumple.',
    },
    {
      termino: 'Enumerate',
      significado:
        'función integrada de Python que añade un índice consecutivo a cada elemento de una secuencia durante su recorrido.',
    },
    {
      termino: 'For',
      significado:
        'estructura iterativa de Python que recorre los elementos de una secuencia en orden.',
    },
    {
      termino: 'Operador lógico',
      significado:
        'operador que combina expresiones booleanas; en Python son and, or y not.',
    },
    {
      termino: 'Range',
      significado:
        'función integrada de Python que genera una secuencia inmutable de números enteros, útil para controlar repeticiones en un ciclo.',
    },
    {
      termino: 'While',
      significado:
        'estructura iterativa de Python que repite un bloque de instrucciones mientras una condición se mantenga verdadera.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cuevas, A. (2017). <em>Python 3: Curso práctico</em>. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Guzdial, M. y Ericson, B. (2013). <em>Introducción a la computación y programación con Python</em>. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Hinojosa, A. (2016). <em>Python paso a paso</em>. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Pérez, A. (2016). <em>Python fácil</em>. Alfaomega Grupo Editor.',
      link: '',
    },
    {
      referencia:
        'Salazar, P. (2019). <em>Empezando a programar en Python</em>. Editorial Escuela Colombiana de Ingeniería.',
      link: '',
    },
    {
      referencia:
        "Lutz, M. (2013). <em>Learning Python</em> (5.ª ed.). O'Reilly Media.",
      link: '',
    },
    {
      referencia:
        'Python <em>Software</em> Foundation. (s.f.). <em>The Python Tutorial</em>.',
      link: 'https://docs.python.org/3/tutorial/',
    },
    {
      referencia:
        'Van Rossum, G., Warsaw, B. y Coghlan, N. (2001). <em>PEP 8 – Style Guide for Python Code</em>.',
      link: 'https://peps.python.org/pep-0008/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
