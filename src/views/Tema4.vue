<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Documentación del diseño para la fabricación de la placa de circuito impreso
  
      .bg_grad-07
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/t4-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La documentación para la fabricación de circuitos impresos es imprescindible de registrar, porque es la comunicación del proyecto o diseño entre el cliente inicial, el diseñador y el fabricante de la tarjeta o circuito con las instrucciones precisas del producto. 
        
        p.mb-5 Se deben crear, en general, los siguientes documentos, los cuales podrían variar ligeramente teniendo en cuenta el programa de diseño, simulación y/o fabricación, así:
  
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 4.
          span <em>Documentación del diseño</em>
        
        figure.mb-5(data-aos="flip-left")
          img(src='@/assets/curso/tema4/t4-2.png', alt='Texto que describa la imagen')
        
        .cajon.bgr_11.p-4.mb-5(data-aos="flip-down")
          .row
            .col-12.col-md-1.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema4/t4-3.svg', alt='Texto que describa la imagen')
            .col-12.col-md-11.d-flex.align-items-center
              p.mb-0 La gestión de la documentación es importante en el proceso de fabricación porque contiene los archivos de prediseño, diseño, desarrollo y fabricación del circuito impreso o tarjeta electrónica, incluyendo también datos como la planificación, costos y otros.
        
        p.mb-5 Se puede destacar dentro de la gestión de la documentación, algunos casos especiales como los siguientes:
  
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
          h5 Figura 5.
          span <em>Gestión de la documentación</em>
        
        .row.mb-5
          .col-12.col-md-3.mb-3.mb-md-0
            .bgr_12.p-4.h-100
              figure.mb-3.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
              h4.text-center Gestión de las librerías 
              p.mb-0.text-center Revisar, adicionar (en los programas libres) y editar en las bibliotecas elementos a utilizarse en el diseño de las tarjetas de circuito impreso.
          .col-12.col-md-3.mb-3.mb-md-0
            .bgr_12.p-4.h-100
              figure.mb-3.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-5.svg', alt='Texto que describa la imagen')
              h4.text-center Gestión de componentes  
              p.mb-0.text-center Uso adecuado de los elementos para aplicar en el PCB, con sus características y condiciones respectivas.
          .col-12.col-md-3.mb-3.mb-md-0
            .bgr_12.p-4.h-100
              figure.mb-3.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-6.svg', alt='Texto que describa la imagen')
              h4.text-center Gestión de interconexiones  
              p.mb-0.text-center Encontrar la mejor ruta para establecer en la placa, ubicar los componentes y realizar el enrutado para ahorro de espacio y conexiones.
          .col-12.col-md-3
            .bgr_12.p-4.h-100
              figure.mb-3.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-7.svg', alt='Texto que describa la imagen')
              h4.text-center Gestión de datos  
              p.mb-0.text-center Los datos son guardados en archivos de acuerdo a la tarea realizada, algunos son de tipo general o particular para algunos programas.
  
        span Los formatos, de acuerdo al programa de diseño, 
        span.colr.text-bold deben ser rigurosamente diligenciados para proporcionar información de alta calidad y fidedigna. 
        | Cada programa tiene sus formatos de registro de componentes, enrutamiento, prediseño, diseño y fabricación, por lo cual el registro se debe ajustar al formato para que la información sea clara y completa con el objetivo de evitar fallas o errores por mal registro de la información. 
  
        p.my-5 Algunos archivos pueden aceptar una tolerancia en el registro cuando se aplica por ejemplo a la utilización del modelado mediante el uso de CAD.
  
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/t4-8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Las notas en la planeación son importantes para el registro, así como el prediseño en la conversación inicial con el cliente.
            br
            br
            p.mb-0 Es importante conocer a qué se refiere un archivo Gerber, el cual se encuentra en formato texto ASCII y reúne los parámetros de configuración, la apertura del diseño, la ubicación de las coordenadas en el plano cartesiano X Y para los comandos de dibujo y los códigos de comando para el dibujo y parpadeo. 
        
        .cajon.bgr.p-4.mb-5(data-aos="flip-down")
          .row
            .col-12.col-md-1.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema4/t4-9.svg', alt='Texto que describa la imagen')
            .col-12.col-md-11
              p.mb-0 La norma aplicada para documentación de las tarjetas de circuito impreso es la IPC-D-325 <em>Documentation Requirements for Printed Boards, Assemblies and Support Drawing</em> del IPC. Está diseñada para que la documentación sea suministrada de forma completa y separada por archivos para ser entregada al fabricante de la tarjeta y al ensamblador.
  
        p Finalmente, los protocolos de calidad en la generación de archivos para fabricación de tarjetas electrónicas cumplen estándares de alta calidad debido a la fidelidad que debe existir en la transmisión de la información del proceso desde la etapa inicial hasta la producción final; y están determinados por las normas de calidad y otros estándares establecidos por los protocolos de diseño. 
  
  
  
  
       
  
  
  
              
  
  
  </template>

<script>
export default {
  name: 'Tema4',
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
