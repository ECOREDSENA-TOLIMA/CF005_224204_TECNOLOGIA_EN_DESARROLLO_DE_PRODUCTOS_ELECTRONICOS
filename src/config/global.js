export default {
  global: {
    componenteFormativo: 'Diseño de placas para circuito impreso',
    descripcionCurso:
      'El presente componente formativo se encamina al diseño de placas para circuitos impresos, pasando por las herramientas de diseño asistido por computador y la normativa para su creación. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Implementación del diseño para la fabricación del circuito impreso, en <em>software</em> especializado ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de diseño (CAD/CAM)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Normas internacionales y nacionales de diseño y manufactura de productos electrónicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normas de seguridad y salud en el trabajo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Documentación del diseño para la fabricación de la placa de circuito impreso',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Circuitos impresos',
      referencia:
        '<em>Spiess</em>, C. (1972). Los circuitos impresos. Servicio Nacional de Aprendizaje (SENA).',
      tipo: 'Libro electrónico',
      link: 'https://repositorio.sena.edu.co/handle/11404/5279',
    },
    {
      tema: 'Circuitos impresos',
      referencia:
        'Todo sobre circuitos. (s.f.). Circuitos Impresos. Funciones, elementos y características.',
      tipo: 'Página web',
      link: 'https://www.circuitos-electricos.com/circuitos-impresos-pcb/',
    },
    {
      tema: 'Normativa',
      referencia:
        'Jiménez R., S., y Sanau V., J. (2011). Colombia: capital público y productividad de la industria manufacturera. Revista Cepal, (104), 181.',
      tipo: 'Artículo',
      link: 'https://repositorio.cepal.org/handle/11362/11466',
    },
    {
      tema: 'Normativa',
      referencia:
        'Cardona, J. (2020). Estándares de Calidad para productos electrónicos de clase mundial. Colcircuitos.',
      tipo: 'Página web',
      link:
        'https://colcircuitos.com/estandares-calidad-productos-electronicos/',
    },
  ],
  glosario: [
    {
      termino: 'Circuito impreso',
      significado:
        'circuito con diversos componentes que se obtienen por impresión sobre un soporte aislante. También se le conoce al conjunto formado por un circuito impreso y la base que lo soporta.',
    },
    {
      termino: 'Datos',
      significado:
        'información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho. Información dispuesta de manera adecuada para su tratamiento por una computadora (RAE, 2021).',
    },
    {
      termino: 'Frecuencia',
      significado:
        'número de veces que se repite un proceso periódico por unidad de tiempo. La frecuencia de esta emisora es de tantos kilociclos por segundo.',
    },
    {
      termino: 'Pista',
      significado:
        'camino de rodadura para señales eléctricas en un dispositivo eléctrico electrónico.',
    },
    {
      termino: 'Placa',
      significado:
        'lámina, plancha o película que se forma o está superpuesta en un objeto.',
    },
    {
      termino: 'Señal',
      significado:
        'variación de una corriente eléctrica u otra magnitud que se utiliza para transmitir información.',
    },
    {
      termino: 'Tarjeta',
      significado:
        'placa de circuito impreso que, como parte del equipo de una computadora u otro dispositivo electrónico, permite la realización de ciertas funciones, como audio, video, edición de gráficos, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Delgado, J. (2021). Identificación de componentes electrónicos. [Gráfico]. SENA.',
      link: '',
    },
    {
      referencia:
        'Fritzing Team. (2014). Fritizing breadboard view. [Imagen]. Wikipedia.',
      link:
        'https://commons.wikimedia.org/wiki/File:Fritzing_breadboard_view_(new).png',
    },
    {
      referencia:
        'Morales, A., y Agili, S. (2009). Desafíos en la integridad de señales. Ingeniare. Revista Chilena de Ingeniería, 17(1), 4-5.',
      link: 'https://dx.doi.org/10.4067/S0718-33052009000100001',
    },
    {
      referencia:
        '<em>Proto Electronics.</em> (s.f.). Software de diseño de circuito impreso: nuestro top 10.',
      link:
        'https://www.proto-electronics.com/es/blog/software-de-dise%C3%B1o-de-circuito-impreso-nuestro-top-10',
    },
    {
      referencia: 'Rds10. (2019). DesignSpark PCB. [Fotografía]. Wikipedia. ',
      link:
        'https://commons.wikimedia.org/wiki/File:DesignSpark_PCB_screenshot.png#/media/File:DesignSpark_PCB_screenshot.png',
    },
    {
      referencia: 'Real Academia Española. (2021). Dato.',
      link: 'https://dle.rae.es/dato',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
