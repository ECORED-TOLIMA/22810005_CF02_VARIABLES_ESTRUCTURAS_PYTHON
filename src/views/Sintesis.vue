<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta las estructuras de control condicionales de Python: if, if-else, if-elif-else, las condiciones anidadas y el operador ternario. Estas estructuras permiten orientar la ejecución de un programa mediante expresiones construidas con operadores relacionales, lógicos, de inclusión, de asignación y de identidad. También se aborda la precedencia, que determina el orden de evaluación de los operadores.

    p Asimismo, se estudian los ciclos while y for, las sentencias break, continue y else, y los ciclos anidados. Este aprendizaje se complementa con las funciones range(), enumerate(), zip(), reversed() y sorted(), utilizadas para controlar repeticiones y recorrer datos.

    p A continuación, el mapa conceptual organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Estructuras de control condicionales e iterativas en Python” organiza el tema central en cuatro ejes: estructuras condicionales, operadores condicionales, estructuras iterativas, y operadores y funciones de rango. El primer eje incluye las estructuras if, if-else e if-elif-else, las condiciones anidadas y el operador ternario. El segundo reúne los operadores relacionales, lógicos, de inclusión, de asignación y de identidad, junto con su precedencia. El tercero presenta los ciclos while y for, las sentencias break, continue y else, y los ciclos anidados. El cuarto integra las funciones range(), enumerate(), zip(), reversed() y sorted(). En conjunto, estos elementos permiten tomar decisiones, controlar repeticiones y recorrer datos de manera organizada para desarrollar programas claros, funcionales y eficientes. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
