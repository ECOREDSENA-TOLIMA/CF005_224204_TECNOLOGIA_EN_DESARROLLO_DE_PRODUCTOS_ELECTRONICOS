<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa

    .row.mb-5
      .col-12.col-md-1.mb-3.mb-md-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img90(src='@/assets/curso/tema3/t3-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-11.d-flex.align-items-center(data-aos="fade-left")
        p.mb-0 El procedimiento del diseño y desarrollo de circuitos eléctricos/electrónicos se ha reglamentado a nivel nacional e internacional, pues se requiere que los formatos de comunicación internos funcionen lo mejor posible y la tarjeta electrónica produzca el objetivo planeado.
    
    .row
      .col-12.col-md-6(data-aos="fade-right")
        p Muchos de los dispositivos que se producen tienen parte electrónica para control, regulación y hasta para integración con otras tecnologías y/o sistemas de comunicaciones. Por estas razones es necesario que las tarjetas electrónicas cumplan con las normas de estandarización como pueden ser las determinadas por la ISO, <em>International Standardization Organization</em>, organización que es acogida por la mayoría de los países y cubre muchos aspectos, entre ellos la gestión de calidad, el medioambiente, la salud y seguridad en el trabajo, y el área de tecnología; y a su vez las normas de uso internacional son acogidas para normas nacionales en los países. 
        .cajon.bgr.p-4.mb-3
          p.mb-0 De la ISO, con aplicación al tema de circuitos, se rescatan normas de hardware mecánico, calidad y estandarización numérica.
      .col-12.col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/t3-2.png', alt='Texto que describa la imagen')

    separador

    .bg_grad-05
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Normas internacionales y nacionales de diseño y manufactura de productos electrónicos
      
      .row.mb-5
        .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-3.png', alt='Texto que describa la imagen')
        .col-12.col-md-6(data-aos="fade-left")
          p Las normas provenientes de organizaciones internacionales o de comunidades de países son de ámbito internacional y son adaptadas o adoptadas por los países. Dentro de estas reglamentaciones, también se encuentra la normativa IEC <em>(Intermulti Electrotechnical Commission)</em> que define los componentes electrónicos usados en equipos y máquinas. Los comités del IEC se encargan de definir los componentes, conectores, PCB, tecnología de montaje superficial y la automatización del diseño. 
          .cajon.bgr.p-4.mb-3
            p.mb-0 Para este caso, el interés se centra en las IPC <em>(Institute for Interconnecting and Packaging Electronic Circuits)</em> que se encargan de regular la comunicación entre proveedores y consumidores en la industria de las PCB. Dentro de estas normas, cuatro de ellas se consideran pertinentes para el desarrollo del proyecto. 
      
      .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
        h5 Figura 3.
        span <em>Normas ANSI</em>
      
      .row.mb-5.justify-content-center(data-aos="flip-left")
        .col-12.col-md-8
          figure
            img(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')

      .cajon.bgr.p-4(data-aos="flip-down")
        .row
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
          .col-12.col-md-11.d-flex.align-items-center
            p.mb-0 Otra entidad internacional que regula en el campo de la electrónica, y específicamente en las comunicaciones, es la UIT (Unión Internacional de Telecomunicaciones - <em>International Telecommunication Union</em>), entidad adjunta a la ONU para regular las telecomunicaciones y radiocomunicaciones.
    
    separador
     
    .bg_grad-06
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Normas de seguridad y salud en el trabajo
      
      .row.mb-5
        .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-6.png', alt='Texto que describa la imagen')
        .col-12.col-md-6(data-aos="fade-left")
          span Las normas de seguridad y salud en el trabajo 
          span.colr.text-bold son de alta importancia porque están relacionadas con la vida y salud del trabajador; 
          | en el caso de los técnicos, tecnólogos e ingenieros que manipulan circuitos impresos o tarjetas electrónicas manejan, normalmente, niveles bajos de potencia, es decir corrientes pequeñas y voltajes DC o AC en la magnitud de 110 voltios que en algunos países cambia a 220 voltios AC. 
          br
          br
          span Las normas de seguridad y salud en el trabajo 
          span.colr.text-bold están regidas por la ISO (en español OSI) y están relacionadas en las normas OHSAS, 
          | en las que se define el accidente de trabajo, la enfermedad profesional, los riesgos en el trabajo y las medidas que los operadores deben tener para evitar situaciones mencionadas.  
          .cajon.bgr.p-4.mb-3.mt-3
            p.mb-0 También existen normas de ámbito nacional e internacional relacionadas con el medio ambiente, en especial con la reposición y reciclaje de los elementos eléctricos electrónicos denominada RAEE, conocida como Gestión de Residuos de Aparatos Eléctricos y Electrónicos.

      p Igualmente, se aplica la Directiva RoHS, la cual es una sigla que proviene del inglés y significa <em>Restriction of Hazardous Substances</em>. Esta emite restricciones para el uso de sustancias peligrosas o tóxicas en la construcción de elementos eléctricos electrónicos como metales pesados y otras sustancias.         







</template>

<script>
export default {
  name: 'Tema3',
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
