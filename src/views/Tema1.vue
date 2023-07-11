<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementación del diseño para la fabricación del circuito impreso, en <em>software</em> especializado
      
    .bg_grad-02
      .row.mb-5
        .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
          .cajon.bgr.p-4.mb-3
            p.mb-0 Para el diseño de un circuito impreso se utilizan componentes eléctricos como las resistencias, condensadores, bobinas, diodos y transistores -vistos en los componentes anteriores-, que cumplen la tarea de un objetivo determinado. Son populares en las instituciones educativas del área de electrónica y sirven de base para diferentes aplicaciones.
          span Hay una gran variedad de programas para diseñar los circuitos impresos. Según 
          span.colr.text-bold <em>Proto Electronics (s.f.), </em>  
          | existen distintos <em>softwares</em> gratuitos (de uso libre) y de pago para el diseño de circuitos impresos, que van desde la fase de protocolo hasta la industrialización, los cuales tienden a costar decenas de miles de dólares, entonces, ¿cómo saber escoger?
          br
          br
          span Sobre la base de las preferencias de los clientes de <em>Proto Electronics</em> (s.f.), se ha establecido la clasificación de los 
          span.colr.text-bold diez mejores programas de CAO electrónico.
        .col-12.col-md-6(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/t1-1.png", alt="Texto que describa la imagen")

      .tarjeta.bgr_2.p-4.mb-3(data-aos="flip-up")
        PasosB.color-acento-contenido
          .row.py-0.my-0
            .col-md-6.mb-md-5
              p.text-bold <em>Eagle</em>
              p Es un programa informático para diseño de circuitos impresos y tarjetas electrónicas creado por la empresa alemana <em>Cad Soft Computer</em> GmbH, la cual fue posteriormente adquirida por <em>Autodesk</em> en 2016. <em>EAGLE</em> significa <em>Easily Applicable Graphical Layout Editor.</em>
              p Este programa permite crear y editar diagramas electrónicos, editar tarjetas de circuitos impresos con enrutadores y generar archivos <em>GERBER</em>. Posee una amplia biblioteca de componentes y trabaja con un programa de programación similar al lenguaje C.
              p Cuenta con un sinnúmero de tutoriales, cuatro versiones de costo y una para el campo educacional que no tiene valor. Adicional a ello, posee la ventaja de funcionar fuera de <em>Windows</em> en ambientes <em>Mac OS</em> X o <em>Linux</em>.
            .col-md-6.mb-5.md-5
              .bgr_3.p-4
                figure
                  img(src='@/assets/curso/tema1/t1-2.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota. Tomada de Proto-electronics (s.f.) 
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.autodesk.fr/products/eagle/overview" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-12.mb-5.mb-md-5
              p.text-bold <em>Altium</em>
              p Creada con el nombre de <em>Protel Systems</em> en Australia, transformándose en <em>Altium</em> en 2001 para convertirse como empresa del mercado estadounidense. El programa es utilizado por un alto número de usuarios y ofrece otras herramientas adicionales a las de la industria. 
              p Permite el diseño de las tarjetas impresas de circuitos o PCB, de las siglas en inglés <em>Printer Circuit Boards</em>, con su etapa de diagramación, incluyendo los planos, ubicación de componentes y rutas de conexión, además de documentación y simulación. 
              p Trae, además, diseño en tercera dimensión, circuito impreso y de esquema, como las salidas <em>(file outputs)</em> de archivos de fabricación. Se caracteriza por el diseño de fabricación <em>Design for Manufacturing</em> (DFM) para asegurarse que sus diseños de PCB son funcionales, fiables y fáciles de fabricar.
              p Está preparado para trabajo en sistemas educativos al igual que para grandes empresas, entre las cuales, es uno de los programas favoritos. <em>Altium Designer</em> está diseñada únicamente para <em>Windows</em>.
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white En la página web de Altium puede descargar una versión completa de prueba y probarla durante 15 días. También se encuentran disponibles talleres virtuales. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.altium.com/altium-designer" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-6.mb-5.mb-md-0
              p.text-bold <em>Proteus</em>
              p Fue fabricado por <em>Lab Center Electronics</em> Ltd., empresa del Reino Unido. Se caracteriza por dos paquetes principales de programas: ISIS, para la creación de esquemas y simulación eléctrica, y ARES para la solución de enrutamiento del PCB, con la disposición automática de los componentes.
              p El programa IRIS trae integrado el módulo VSM que se encarga del modelado virtual del sistema. El programa ARES, o <em>Advanced Routing and Editing Software</em> (<em>Software</em> de Edición y Ruteo Avanzado) se encarga del enrutado, ubicación de componentes y la fabricación propia del circuito impreso. Posee una amplia biblioteca de componentes en la librería.
              p Tiene dos herramientas poderosas para la fabricación automática de los circuitos auto router y electra auto router, lo cual facilita el diseño.
            .col-md-6.mb-3
              .bgr_3.p-4
                figure
                  img(src='@/assets/curso/tema1/t1-3.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota. Tomada de Proto-electronics (s.f.) 
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.labcenter.com/" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-6.mb-5.mb-md-5
              p.text-bold <em>KiCad</em>
              p Es un programa libre y de código abierto para el diseño de tarjetas de circuito impresos, desarrollado inicialmente por Jean-Pierre Charras y actualmente administrado por <em>Kicad Development Team</em>. Este programa de diseño incluye la gestión de esquemas, el enrutamiento de PCB y la posibilidad de modelado en 3D para los ingenieros electrónicos.
              p Cumple con todas las funcionalidades de un buen programa de diseño de PCB, con gestión de proyectos, edición de planos y esquemas electrónicos, edición de circuitos impresos, ubicación de componentes, uso de archivos <em>Gerber</em>, y herramientas de ayuda para el cálculo de componentes.
            .col-md-6.mb-3
              .bgr_3.p-4
                figure
                  img(src='@/assets/curso/tema1/t1-4.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota. Tomada de Proto-electronics (s.f.) 
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.kicad.org/" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-12.mb-5.mb-md-5
              p.text-bold Velocidad OrCAD PCB <em>Designer</em>
              p Es otro programa muy utilizado en el diseño de tarjetas de circuitos impresos, desarrollado por la fusión de SDA <em>Systems</em> y ECAD, usado para dibujar planos o esquemas electrónicos, simulación o modelado y para la elaboración de los circuitos impresos y sus respectivas placas. 
              p Ayuda en la colocación de los componentes y enrutamiento, a través de la opción de enrutamiento interactivo; puede realizar modificación automática, tiene mejora de rendimiento y de la fiabilidad del PCB. Además cuenta con simulación mecánica y eléctrica de los circuitos eléctricos electrónicos, librerías y editor de símbolos.
              p <em>Cadence Design Systems</em> es una empresa líder en el mercado de <em>software</em> de CAO electrónico; y edita los programas <em>Allegro PCB Designer y OrCAD</em>.
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.orcad.com/products/orcad-pcb-designer/overview" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-6.mb-4.mb-md-0
              p.text-bold <em>Design Spark</em>
              p Es un programa de diseño asistido por computador CAD electrónico libre, resultado de la colaboración entre el principal distribuidor de componentes del mundo, RS Components, y el desarrollador de <em>software Number One Systems</em>. Es un programa único y motor poderoso de diseño de PCB que habilita la captura de esquemáticos, diseño de las tarjetas de circuitos impresos y sus planos. 
              p Tiene centro de diseño, herramientas CAD eléctricas y mecánicas, librerías, foros de la comunidad y la Universidad de RS Componentes. Genera archivos <em>Gerber</em> para documentación y archivos de perforación <em>Excellon</em>.
            .col-md-6.mb-3
              .bgr_3.p-4
                figure
                  img(src='@/assets/curso/tema1/t1-5.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota.Tomado de Rds10 (2019).  
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.rs-online.com/designspark/pcb-software" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-12.mb-4.mb-md-3
              p.text-bold <em>Protel</em>
              p Es un programa conocido como la versión inicial de <em>Altium Designer</em>, pero no por eso es reconocido, sino por sus grandes fortalezas en el diseño de tarjetas de circuitos impresos PCB. 
              p Se destaca por su exactitud y eficiencia en el diseño de placas, esquemas y diseño de componentes. Su problema es la antigüedad del programa y el uso de herramientas especiales para su actualización. 

            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.raypcb.com/protel-pcb/" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-6.mb-4.mb-5
              p.text-bold <em>CADSTAR</em>
              p Es una herramienta de <em>software</em> de automatización del diseño electrónico (EDA) basada en <em>Windows</em> para diseñar y crear diagramas esquemáticos y placas de circuito impreso (PCB). Proporciona a los ingenieros una herramienta para el diseño de placas de circuito impreso simples o complejas, de varias capas.
              p Cadstar abarca la captura de esquemas, la gestión de variantes, la colocación, el enrutamiento automático y de alta velocidad, la integridad de la señal, la integridad de la energía, el análisis de EMC, la comprobación de las reglas de diseño y la producción de datos de fabricación.
              p Es un programa de más de 25 años de servicio creado por franceses y en el 2019, se ha lanzado la nueva versión denominada eCadstar; ahora perteneciente a un grupo japonés Zuken.
            .col-md-6.mb-3
              .bgr_3.p-4
                figure
                  img(src='@/assets/curso/tema1/t1-6.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota.Tomado de Rds10 (2019).  
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.ecadstar.com/fr/product/cadstar/" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-12.mb-4.mb-5.md-3
              p.text-bold <em>Sprint-Layout</em>
              p <em>Sprint-Layout</em> es un programa utilizado para el diseño rápido y sencillo de placas de circuito impreso. Dispone de una amplia biblioteca con una serie de componentes comunes, desarrollado por Abacom. 
              p Es un <em>software</em> fácil de utilizar para el diseño de tarjetas de circuitos impresos electrónicos con la ventaja de bibliotecas, función automatizada de PCB, en doble cara, generación de archivos para documentación <em>Gerber</em> y <em>Excellon</em>, entre las principales características.
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.electronic-software-shop.com/lng/en/electronic-software/sprint-layout-60.html" target="_blank")
                        span Ver más
                        i.fas.fa-link
          .row.p-3.mb-5
            .col-md-12.mb-4.mb-5.md-3
              p.text-bold PADS PCB
              p PADS es desarrollado por la <em>Société Mentor Graphic</em>, empresa francesa adquirida por el grupo <em>Siemens</em> de Alemania. Está pensado para la pequeña y gran empresa, pues permite una fácil configuración del diseño de PCB. El programa soporta al técnico o ingeniero desde el inicio del prediseño hasta la impresión final. 
              p Tiene varias características relacionadas con el diseño de planos, gestión de las cargas eléctricas, rutas de conexión, librerías de componentes, ubicación y enrutamiento interactivo con herramientas CAD, archivos de documentación, simulación analógica y/o digital. Análisis de la integridad de la señal transmitida y de las cargas eléctricas o físicas comprometidas.
            .row.justify-content-center
              .col-12.col-md-8
                .tarjeta.bgr_1.p-3.mb-5
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Si desea conocer más sobre este <em>software</em>, le invitamos a revisar el enlace. 
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://eda.sw.siemens.com/en-US/pcb/pads/" target="_blank")
                        span Ver más
                        i.fas.fa-link

      .cajon.bgr.p-4(data-aos="flip-down")
        .row
          .col-12.col-md-1.mb-3.mb-md-0.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema1/t1-7.svg', alt='Texto que describa la imagen')
          .col-12.col-md-11
            p.mb-0 La anterior descripción de los programas más utilizados en el diseño de circuitos impresos es una relación actual (de la época), pero puede cambiar fácilmente debido a los avances de la tecnología, actualizaciones de los programas de las empresas o también por nuevos <em>softwares</em> o versiones de los desarrolladores libres. Sin embargo, existen muchos otros programas para el diseño de las PCB que, posiblemente, se puedan esperar durante el curso o que en el interés de investigación aplicada los aprendices puedan encontrar.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
