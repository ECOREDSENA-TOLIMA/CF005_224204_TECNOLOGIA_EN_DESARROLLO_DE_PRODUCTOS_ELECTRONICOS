<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg_grad-01
      figure.mb-3
        img(src='@/assets/curso/introduccion/img1.png', alt='Texto que describa la imagen')
      
      p.mb-5 En los componentes formativos anteriores se ha trabajado sobre los circuitos eléctricos y electrónicos, estos abren el camino hacia las tarjetas electrónicas que serán revisadas en el presente componente formativo para conocer sus características, funciones, aplicaciones y normativas internacionales y nacionales. 

      .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
        h5 Figura 1.
        span <em>Circuito impreso</em>
      
      .row.mb-5.justify-content-center(data-aos="zoom-in")
        .col-12.col-md-8
          figure
            img(src='@/assets/curso/introduccion/img2.svg', alt='Texto que describa la imagen')
      
      .row
        .col-12.col-md-7.d-flex.align-items-center(data-aos="fade-right")
          div 
            span Un circuito impreso 
            span.colr.text-bold es la unión de diferentes circuitos para cumplir una o varias tareas dependiendo de la configuración de este, 
            | especialmente en aplicaciones industriales, académicas y otras. 
            br
            br
            span En el desarrollo y fabricación de prototipos electrónicos, con funciones de instrumentación, automatización y control, 
            span.colr.text-bold es necesario realizar un diseño preliminar del circuito y del arte de la placa, para ello, 
            | es imperioso conocer una serie de herramientas y consideraciones teóricas y técnicas que permitan al desarrollador crear y estudiar con detalle, los modelos y esquemas de la electrónica a implementar. Así como consejos de seguridad, montaje y técnicas de soldadura con criterios de selección del método apropiado según la función, complejidad o susceptibilidad de esta 
            span.colr.text-bold (Salas, Pérez y Ramírez, s. f.).
        .col-12.col-md-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/introduccion/img3.svg', alt='Texto que describa la imagen')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
