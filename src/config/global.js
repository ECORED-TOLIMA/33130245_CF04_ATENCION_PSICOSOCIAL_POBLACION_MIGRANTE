export default {
  global: {
    componenteFormativo:
      'Acciones intersectoriales para la atención de población migrante',
    descripcionCurso:
      'Este componente formativo aborda los fundamentos de la acción intersectorial en salud en contextos de movilidad humana, resaltando la influencia de los determinantes sociales y la articulación entre sectores. Se analizan el rol del sector salud, la coordinación territorial y la participación social para fortalecer la atención integral a población migrante y comunidades de acogida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Fundamentos de la acción intersectorial en salud y migración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Determinantes sociales y necesidad de articulación intersectorial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Rol del sector salud en escenarios de movilidad humana',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actores sectoriales e intersectoriales en el territorio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Coordinación sectorial e intersectorial para la atención de la población migrante',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Mesas de Articulación Territorial en Salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Capacidades institucionales y territoriales para la atención en salud a la población migrante',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Comunidades sin aseguramiento en salud y acciones de respuesta',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Participación social y enfoques diferenciales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Lineamientos técnicos y operativos para la acción intersectorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Líneas de acción de la vigilancia en salud pública',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Intervenciones colectivas e individuales en salud',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Situaciones de interés en salud pública relacionadas con migrantes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Protocolos, rutas y guías técnicas vigentes',
            hash: 't_3_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130245_CF4_DU.pdf',
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
      tema: '1.2. Rol del sector salud en escenarios de movilidad humana',
      referencia:
        'MinSaludCol. (2022). <em>Acompañamiento psicosocial, Logros del sector salud en población migrante</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yqY5aVdRsNM',
    },
    {
      tema: '3.2. Intervenciones colectivas e individuales en salud',
      referencia:
        'ESE Manuel Castro Tovar. (2018). <em>Plan de Intervenciones Colectivas</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MALUnauUghs',
    },
  ],
  glosario: [
    {
      termino: 'Articulación intersectorial',
      significado:
        'Coordinación organizada entre sectores como salud, educación, bienestar social, justicia, migración y cooperación internacional.',
    },
    {
      termino: 'Aseguramiento en salud',
      significado:
        'Proceso mediante el cual una persona es afiliada al Sistema General de Seguridad Social en Salud, lo que garantiza acceso a servicios, continuidad del cuidado y protección financiera.',
    },
    {
      termino: 'Determinantes sociales de la salud',
      significado:
        'Factores sociales, económicos, culturales y ambientales que influyen en la salud de las personas, como la vivienda, educación, empleo, ingresos, entorno y redes de apoyo.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'Perspectiva que adapta la atención a las características de grupos específicos (niñez, mujeres, personas mayores, población LGBTIQ+, grupos étnicos, víctimas del conflicto, entre otros), garantizando acciones culturalmente pertinentes y libres de discriminación.',
    },
    {
      termino: 'Intervenciones colectivas',
      significado:
        'Acciones dirigidas a grupos o comunidades, como educación en salud, jornadas extramurales, promoción de convivencia y fortalecimiento de redes.',
    },
    {
      termino: 'Intervenciones individuales',
      significado:
        'Atenciones dirigidas a personas o familias, que incluyen valoración clínica y psicosocial, seguimiento, activación de rutas y remisiones.',
    },
    {
      termino: 'Mesas de Articulación Territorial en Salud (MATS)',
      significado:
        'Espacios de coordinación entre entidades del territorio para analizar situaciones, definir responsabilidades y organizar respuestas conjuntas en salud pública y migración.',
    },
    {
      termino: 'Movilidad humana',
      significado:
        'Proceso que incluye migración, retorno, desplazamiento y tránsito de personas entre territorios, motivado por razones económicas, sociales, familiares o humanitarias.',
    },
    {
      termino: 'Rutas de atención en salud',
      significado:
        'Protocolos y pasos definidos para garantizar atención oportuna y continua, que incluyen orientación inicial, atención de urgencias, afiliación cuando aplica, remisiones y seguimiento territorial.',
    },
    {
      termino: 'Vigilancia en salud pública',
      significado:
        'Proceso sistemático de recolección, análisis e interpretación de datos epidemiológicos para detectar riesgos, orientar decisiones y activar acciones de prevención y control.',
    },
  ],
  referencias: [
    {
      referencia:
        'ACNUR. (2023). <em>Guía operativa para la atención a personas refugiadas y migrantes en contextos de crisis</em>.',
      link: '',
    },
    {
      referencia: 'ACNUR. (s. f.). <em>Salud mental y apoyo psicosocial</em>.',
      link:
        'https://www.acnur.org/que-hacemos/salvaguardar-los-derechos-humanos/salud-publica/salud-mental-y-apoyo-psicosocial',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). <em>Ley 1098 de 2006</em>. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2014). <em>Ley 1719 de 2014</em>. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=57716',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015</em>. Diario Oficial.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia: 'Función Pública. (2001). <em>Ley 715 de 2001</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4452',
    },
    {
      referencia: 'Función Pública. (2008). <em>Ley 1257 de 2008</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34054',
    },
    {
      referencia: 'Función Pública. (2016). <em>Decreto 780 de 2016</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
    {
      referencia: 'Función Pública. (2021). <em>Ley 2136 de 2021</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=168067',
    },
    {
      referencia: 'Función Pública. (2025). <em>Ley 2460 de 2025</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260636',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). <em>Lineamientos nacionales de vigilancia en salud pública 2023</em>. INS.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/lineamientos-nacionales-2023.pdf',
    },
    {
      referencia:
        'Ministerio de Relaciones Exteriores de Colombia. (2021). <em>Resolución 0971 de 2021</em>.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_uaemc_0971_2021.htm',
    },
    {
      referencia:
        'Ministerio de Relaciones Exteriores de Colombia. (2021). <em>Decreto 216 de 2021</em>.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/decreto_0216_2021.htm',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). <em>Ley 1616 de 2013</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1616-del-21-de-enero-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Resolución 2063 de 2017</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202063%20de%202017.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <em>Resolución 3280 de 2018</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <em>Resolución 4886 de 2018</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-4886-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). <em>Circular 024 de 2020</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%20No.%2024%20de%202020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). <em>Resolución 521 de 2020</em>.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). <em>Decreto 216 de 2021</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=159606',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). <em>Política de Atención Integral en Salud (PAIS)</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones. (2020). <em>Salud mental, respuesta psicosocial y comunicación intercultural</em>. OIM.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones. (2022). <em>Informe sobre las Migraciones en el Mundo 2022</em>.',
      link:
        'https://publications.iom.int/books/informe-sobre-las-migraciones-en-el-mundo-2022',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        // {
        //   nombre: 'Milady Tatiana Villamil Castellanos',
        //   cargo:
        //     'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
        //   centro: 'Dirección General',
        // },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Yusunguaira Ceballos',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
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
          nombre: 'Jorge Bustos Gómez',
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
