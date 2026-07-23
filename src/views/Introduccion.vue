<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(src='@/assets/curso/temas/intro/1.png', alt='', style="width: 1280px").m-auto

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/temas/intro/2.svg', style='width: 100px').m-auto
      
      .col
        p Las estructuras de control son uno de los pilares de la programación. Permiten que un programa no se ejecute de forma lineal, sino que tome decisiones y repita tareas de acuerdo con los datos que recibe y con la lógica definida por el programador. Sin las estructuras de control sería imposible construir programas que respondan a situaciones variables, validen información o procesen grandes volúmenes de datos.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Python ofrece un conjunto sencillo y poderoso de estructuras de control. Las estructuras condicionales, encabezadas por las palabras reservadas if, elif y else, permiten al programa elegir entre distintos caminos según el resultado de una expresión booleana. Las estructuras iterativas, con las sentencias while y for, permiten ejecutar un bloque de instrucciones varias veces mientras se cumpla una condición o mientras existan elementos por recorrer en una secuencia.


    p.mt-4 Los operadores son los componentes que dan vida a las expresiones evaluadas por las estructuras de control. Los relacionales comparan valores; los lógicos combinan expresiones booleanas; los de inclusión verifican pertenencia en secuencias; y los de asignación permiten almacenar valores en variables. Su correcto uso garantiza que las decisiones del programa reflejen fielmente la lógica del problema a resolver.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Adicionalmente, los operadores y funciones de rango (principalmente range(), enumerate() y zip()) resultan esenciales para construir bucles controlados. Permiten generar secuencias de números, recorrer colecciones con sus índices y combinar varias secuencias en paralelo, lo que amplía considerablemente las posibilidades de los ciclos.

    p.mt-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al video introductorio:

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
