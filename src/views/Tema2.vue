<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de diseño (CAD/CAM)

    .bg_grad-03
      span.colr.text-bold Las herramientas de diseño mediante asistencia de computador o CAD <em>(Computer Aided Design)</em>, se utilizan para el desarrollo de tarjetas con componentes electrónicos. 
      span Igualmente las siglas CAM también proceden del inglés, <em>Computer Aided Manufacturing</em>, traducido como fabricación asistida por computador. Así mismo, es frecuente encontrar la sigla CAE, <em>Computer Aided Engineering</em>, traducida como ingeniería asistida por computador.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5.mb-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En un concepto general, las tres herramientas sirven para diseño, pero las más utilizadas son CAD/CAM. Los programas CAE se usan para una mayor complejidad.

      p.mb-5 A continuación, se presentan las características que definen estas herramientas.

      .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
        h5 Figura 2.
        span <em>Características</em>
      
      .row.justify-content-center.mb-5
        .col-12.col-md-8
          .row.bgr_4.p-4.mb-3(data-aos="flip-down") 
            .col-12.col-md-2.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img70(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
            .col-12.col-md-10
              p.mb-0 Las características utilizadas se referencian según protocolos y parámetros programados en la simulación y están basados de acuerdo al trabajo, medioambiente e interacciones que el modelo o prototipo debería realizar al iniciar la operación.
            
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema2/t2-3.svg', alt='Texto que describa la imagen')

      span.colr.text-bold Los métodos de operación de estas herramientas permiten mejorar la producción de una empresa, la calidad, la comunicación entre los departamentos internos y una mejor documentación, 
      span ya que toda la información está almacenada en datos. Esto facilita la creación de tarjetas con componentes electrónicos, pues el diseño se exporta como medio electrónico para la impresión, prototipado, mecanizado y otras tareas relacionadas. 

      .row.mb-5.mt-5
        .col-12.col-md-5(data-aos="fade-right").mb-3.mb-md-0
          p.mb-4 Las librerías o bibliotecas, por su parte, que se utilizan dentro de las herramientas de diseño, son archivos prediseñados o diseñados en la fábrica del programa CAD/CAM para facilitar el proceso de diseño en sí, por ejemplo, en ellas se encuentran los componentes eléctricos/electrónicos, las fuentes de poder o voltaje, fuentes de corriente y algunos circuitos de uso general o cotidiano.
          .row.bgr_5.p-4
            .col-12.col-md-3.mb-3.mb-md-0
              figure.d-flex.justify-content-center
                img.img90(src='@/assets/curso/tema2/t2-4.svg', alt='Texto que describa la imagen')
            .col-12.col-md-9
              p.mb-0 Los diseñadores pueden ir construyendo algunas librerías para su uso particular en los programas abiertos, estas librerías o bibliotecas de elementos, pueden ser utilizados por cualquier usuario. Hay casos de programas que utilizan millones de elementos en sus librerías.
        .col-12.col-md-7(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/t2-5.png', alt='Texto que describa la imagen')
      
      .row.mb-5.justify-content-center
        .col-12.col-md-4
          a.boton.color-acento-botones.indicador__container.bgr_13(@click="modal1 = true")
            .row
              .col-2.col-md-2
                figure
                  img(src='@/assets/curso/tema2/t2-6.svg', alt='Texto que describa la imagen')
              .col-10.col-md-10.d-flex.align-items-center
                p.mb-0.text-bold Herramientas de diseño (CAD/CAM)
                .indicador--click(v-if="mostrarIndicador")

          ModalA(:abrir-modal.sync="modal1").bgr_6
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                p.text-bold Herramientas de diseño (CAD/CAM)
                p A continuación se muestra un ejemplo de diseño mediante asistencia de computador o CAD <em>(Computer Aided Design)</em>.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/t2-7.png', alt='Texto que describa la imagen')
                  figcaption.text-center Nota.Tomado de Fritzing Team (2014 )

      p.mb-5 Ahora, se indican algunas propiedades de las herramientas CAD/CAM. 

      AcordionA.mb-5.bgr_7(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Aspectos de integridad de señal").p-4
          .col-md-6.mb-4.mb-md-0
            p La integridad de señal es muy importante en la operación de las tarjetas electrónicas, ya que la frecuencia es portadora de la información y una variación de ella, podría alterar las características del circuito y de la información a transmitir.   En las actividades de desarrollo, diseño y construcción de circuitos impresos o tarjetas electrónicas es esencial conservar las señales eléctricas, es decir las señales del voltaje y corriente, y su relación con el tiempo, ya que se podrían añadir efectos externos como ruido o interferencias.
            p En las primeras tarjetas electrónicas preservar la señal era fundamental en los dispositivos electrónicos de aplicación militar, comunicaciones, medicina y aeroespacial. Actualmente, esto es requisito para todas las aplicaciones debido a la mayor interacción de los circuitos y de los dispositivos.
            .row.justify-content-center
              .col-12.col-md-6 
                a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
                  p.mb-0 Integridad de la señal
                  .indicador--click(v-if="mostrarIndicador")
                
                ModalA(:abrir-modal.sync="modal2").bgr_9
                  p.text-bold Expresa Aldo Morales (2009) en Ingeniare, revista chilena de ingeniería, sobre la confiabilidad de la señal, lo siguiente:
                  div.p-0.p-md-4.bg_grad-04.position-relative   
                    p El tema de la integridad de las señales ha sido identificado, hace mucho tiempo, como un área clave para el desarrollo científico, pues la velocidad de los nuevos diseños digitales cada vez se incrementa más, llegando a los rangos de gigabits por segundo. 
                    p De hecho, la National Science Foundation (NSF) predijo, en un informe de un taller de sistemas de mil millones de transistores en 1998 (que se encuentra en un sitio Web de Princeton University), que: "El futuro diseño de circuitos integrados estará impulsado por las interconexiones, no transistores". Además, la tecnología de interconexión está cambiando rápidamente. Como resultado de ello, es fundamental el desarrollo de metodologías, algoritmos y métodos en la que puede manejar las interconexiones de las generaciones futuras. 
                    p La integridad de las señales es un gran problema hoy y lo será aún más en el futuro. Nuevas tecnologías de interconexión, como el cobre y las bajas temperaturas de las interconexiones, presentarán nuevos problemas. "Por lo tanto, el rendimiento de las interconexiones se ha convertido en uno de los factores claves en el funcionamiento de un sistema fiable a altas velocidades” (p. 4-5).
                    img.pst.img30(src='@/assets/curso/tema2/t2-10.svg', alt='Texto que describa la imagen')
                    img.pst_1.img30(src='@/assets/curso/tema2/t2-9.svg', alt='Texto que describa la imagen')
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-8.png', alt='Texto que describa la imagen')
              figcaption.bgr_8 Por ejemplo, la interacción en internet de dispositivos, llamada internet de las cosas, y otros tipos de comunicación como el telerremoto utilizadas para control y supervisión.
        .row(titulo="Clasificación de pistas").p-4
          .col-md-6.mb-4.mb-md-0
            p Las pistas son los caminos de comunicación del circuito, generalmente están construidos en cobre, material que es buen conductor, y su objetivo es conectar los diferentes elementos que conforman el circuito impreso. 
            p En el principio, las placas tenían orificios para conectar los elementos con sus respectivos pines, técnica llamada a través del hueco, estos diseños eran realizados a mano. Actualmente se hacen con los programas de simulación y/o diseño electrónico. 
            p Luego de diseñado el plano del circuito, se podría implementar para pruebas en un “<em>protoboard</em>”, el cual se puede definir como una placa de pruebas o tarjeta de pruebas, por su nombre en inglés, que facilita procesos de verificación y comprobación, ya que los componentes, se pueden desmontar o cambiar fácilmente.  Las pistas pueden ir en una cara o en ambas caras de la placa.  
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-11.png', alt='Texto que describa la imagen')
              figcaption.bgr_8 Las pistas van sobre la placa, la cual está elaborada con un material no conductor, preferiblemente fibra de vidrio, cerámica, plástico u otros polímeros como la baquelita. 
        .row(titulo="Redes críticas y no críticas").p-4
          .col-md-6.mb-4.mb-md-0
            p Las redes son como las carreteras del circuito, conectan los elementos entre sí o con otros circuitos para producir el objetivo o tarea de la tarjeta. Dependiendo de la complejidad de esta, existirán redes más críticas que otras.  
            p Con los programas de diseño o simulación, se pueden utilizar las redes en vez de los cables que se utilizaban en las producciones manuales e incluso en las conexiones del <em>protoboard</em>; las redes tienen varios canales de comunicación para facilitar la ubicación de elementos y una optimización del espacio de la tarjeta, al igual que eficiencia del conductor.  
            p De acuerdo con su tamaño y número de carriles de las redes se hacen más críticas y en especial por la clase de señal que transporta. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-12.png', alt='Texto que describa la imagen')
              figcaption.bgr_8 Las redes más críticas se encuentran en tarjetas multicapa. La imagen presenta un circuito impreso de cuatro capas.
              p.pst_2.mt-3.text-center Nota. Tomado de Kappel (2006)
        .row(titulo="Distorsión de cruce").p-4
          div 
            p La distorsión se presenta cuando las derivaciones asociadas con los agujeros de las vías pueden resonar y causarla en forma de onda.  Las derivaciones en las vías se presentan especialmente en las interconexiones de las tarjetas de circuitos impresos en razón a que pueden atenuar o distorsionar las señales que pasan por ellas.  
            p Las diferencias entre la impedancia característica de la pista y la impedancia de salida del conductor, o la impedancia de entrada de la carga, es la creación  de reflexiones de la señal, las cuales, a su vez distorsiona la forma de onda de la señal.  Las reflexiones reducen los márgenes de ruido del sistema y pueden causar fallos no deseados en las señales. Los efectos de líneas de transmisión dependen del tiempo de conmutación y no de la frecuencia de la señal.
            p Los cambios de impedancia pueden presentar una distorsión la cual puede ocasionar fallas severas en el sistema.  Los sistemas digitales ayudan a solucionar este problema con controles de la impedancia.
            p Las variaciones de la señal pueden causar distorsiones y las caídas de la frecuencia, aumentarlas.
        .row(titulo="Terminaciones").p-4
          .col-md-6.mb-4.mb-md-0
            p En los circuitos impresos se presentan terminaciones de entrada y salida, caracterizadas por procedimientos de terminación entre las impresiones conductoras de circuitos impresos con la interconexión de los circuitos con el sistema.    
            p La conexión de las terminaciones se puede hacer por contacto con el borde de la placa o por conexión tipo enchufe.  Estas conexiones tipo enchufe se pueden realizar en forma unitaria o múltiple.  
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/t2-13.png', alt='Texto que describa la imagen')
              figcaption.bgr_8 Se observan también las terminaciones en la forma de soldar los alambres de un circuito impreso con el sistema a través de la placa y en la conexión de los conectores.
        div(titulo="Interconexión").p-4
          p Las interconexiones son un elemento básico de los circuitos impresos y se podría decir que son la base de estos, pues a través de la comunicación de las pistas o conductos se transmite la señal, ayudan en la reducción de espacio en las tarjetas y, aunque las conexiones son complejas, contribuyen en la transmisión de las señales eléctricas.  
          p De igual forma, por el tipo de conexiones permiten la clasificación de las tarjetas de una sola cara, de doble cara o multicapa.
        div(titulo="Trazado y enrutamiento").p-4
          p El trazado se inició con el dibujo en papel de un croquis del circuito y mostraba sus rutas para convertirlo manualmente en planos-modelo que se pudieran digitalizar y utilizar actualmente por las máquinas trazadoras.   
          p El dibujo modelo básico por lo general registra las siguientes impresiones:
          ul.lista-ul--color.ps-3
            li.mb-0 
              i.fas.fa-circle.pst_3
              | Contorno de la placa.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Sistemas de referencia (con todas sus advertencias y marcas).
            li.mb-0
              i.fas.fa-circle.pst_3
              | Impresión y rotulación de los conectores.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Posición del agujero sustento.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Configuración normalizada de agujeros.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Planos de tierra y de capacidad.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Posiciones de salida del conector, según detalla el producto.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Nudos de prueba, según asigna la especificación de pruebas del producto.
          p Estas impresiones tienen la posibilidad de ser recurrentes, repetitivas o fijas y como tales se manifiestan en el dibujo.
          .bgr_10.p-4
            p.mb-0 Para un buen trazado se requiere una adecuada disposición de los elementos en la placa, la cual mejora la comunicación del enrutado y además disminuye costos de espacio y materiales. 

      .cajon.bgr_11.p-4(data-aos="flip-down")
        .row
          .col-12.col-md-1.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img70(src='@/assets/curso/tema2/t2-14.svg', alt='Texto que describa la imagen')
          .col-12.col-md-11.d-flex.align-items-center
            p.mb-0 Las herramientas asistidas por computador son de gran ayuda para modelar las tarjetas de circuitos de impresos y su respectiva producción, pues permiten el simulado y corrección de errores junto con la producción de las mismas para entregar al cliente final.










</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    mostrarIndicador: true,
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
