<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operadores condicionales

    .row.bg-13
      .col-12
        .p-5
          .row.align-items-center.justify-content-center(data-aos="fade-down")
            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/1.png', alt='', style="width: 490px").m-auto
            .col-lg-7
              p Los operadores condicionales son símbolos o palabras reservadas que permiten construir las expresiones que evalúan las estructuras condicionales. Son elementos fundamentales del lenguaje porque posibilitan comparar valores, combinar condiciones, verificar pertenencia y asignar datos a las variables. Un dominio adecuado de los operadores es indispensable para construir expresiones claras y correctas, que reflejen con precisión la lógica del problema que se desea resolver.

              p Para reconocer su función dentro del código, los operadores abordados en este componente se organizan en cinco grupos:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Relacionales: comparan dos valores.

          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Lógicos: combinan expresiones booleanas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 De inclusión: verifican la pertenencia de un elemento.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 De asignación: almacenan o actualizan valores.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 De identidad: comprueban si dos referencias corresponden al mismo objeto.


    .row.justify-content-center
      .col-lg-10
        p Esta clasificación facilita la elección del operador adecuado según la comparación, validación o actualización que requiera el programa.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/2.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Los operadores se agrupan según la función que cumplen dentro de una expresión. El recorrido comienza con los operadores relacionales, empleados para comparar valores.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Operadores relacionales

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los operadores relacionales comparan dos valores y devuelven un resultado booleano: True si la comparación se cumple y False en caso contrario. Son la base de las condiciones que se evalúan en las estructuras if, elif, while y otros contextos donde se necesita tomar una decisión. Python admite aplicar estos operadores a datos numéricos, cadenas de caracteres, listas, tuplas y cualquier tipo que defina reglas de comparación.

    p.mt-4 Para aplicar correctamente las comparaciones dentro de una condición, es necesario conocer cada operador relacional y el resultado que produce. La siguiente tabla recoge cada operador con un ejemplo y su valor de retorno, de modo que sirva como referencia rápida al construir expresiones booleanas.
    
    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Operadores relacionales en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Operador
                th Nombre
                th Ejemplo
                th Resultado

            tbody
              tr(style="background-color: #F6F9F4")
                td ==
                td Igual a
                td 5 == 5
                td True

              tr
                td !=
                td Diferente de
                td 5 != 3
                td True


              tr(style="background-color: #F6F9F4")
                td >
                td Mayor que
                td 5 > 3
                td True

              tr
                td <
                td Menor que
                td 5 < 3
                td True

              tr(style="background-color: #F6F9F4")
                td >=
                td Mayor o igual
                td 5 >= 3
                td True

              tr
                td <=
                td Menor o igual
                td 5 <= 3
                td True


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t2/4.svg', style='width: 180px').m-auto
                
                .col
                  p Estos operadores constituyen la base de toda condición evaluada en las estructuras if, elif y while.

                  p Dominarlos permite traducir con precisión las reglas de un problema a expresiones que el programa pueda evaluar, paso indispensable para la toma de decisiones.



    p.mt-4 Para observar cómo los operadores relacionales comparan valores y generan resultados booleanos, a continuación, se presentan ejemplos aplicados con edades, rangos numéricos y validación de datos:


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/5.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operadores relacionales
    
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplos de operadores relacionales
                | >>> edad = 25
                | >>> edad == 25      # True
                | >>> edad != 30      # True
                | >>> edad > 18       # True
                | >>> edad < 18       # False
                | >>> edad >= 25      # True
                | >>> edad <= 20      # False


    .row.justify-content-center
      .col-lg-10
        p.mt-4 El código compara la edad, cuyo valor es 25, mediante distintos operadores relacionales. Cada expresión devuelve True o False, según se cumpla o no la comparación.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Comparación de cadenas
    
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Comparación de cadenas
                | >>> 'ana' < 'beto'       # True (compara alfabéticamente)
                | >>> 'Python' == 'python' # False (distingue mayúsculas)
                | >>> 'Hola' != 'Adiós'    # True
                | >>> 'A' < 'a'            # True (65 < 97 en Unicode)
                | >>> 'Z' < 'a'            # True (90 < 97 en Unicode)

        p El código compara palabras y letras teniendo en cuenta el orden Unicode y la diferencia entre mayúsculas y minúsculas. Por esta razón, 'Python' y 'python' se consideran cadenas diferentes.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/6.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Encadenamiento de operadores relacionales
    
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Encadenamiento de operadores relacionales
                | >>> edad = 25
                | >>> 18 <= edad <= 65     # True
                | >>> 0 < 7 < 10           # True
                | 
                | # Equivale a escribir:
                | >>> 18 <= edad and edad <= 65  # True

    .row.justify-content-center.mt-4
      .col-lg-10
        p El código verifica si un valor se encuentra entre dos límites mediante una sola expresión. La comparación 18 <= edad <= 65 equivale a combinar las dos condiciones con el operador and.

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Programa: validar datos de registro

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/7.png', alt='', style="width: 390px").m-auto
      .col-lg-6
    
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Programa: validar datos de registro
                | nombre = input('Nombre: ')
                | edad = int(input('Edad: '))
                | 
                | if len(nombre) == 0:
                |     print('Error: el nombre no puede estar vacío')
                | elif edad < 0:
                |     print('Error: la edad no puede ser negativa')
                | elif edad > 150:
                |     print('Error: la edad parece incorrecta')
                | else:
                |     print(f'Bienvenido, {nombre}')


    .row.justify-content-center.mt-2
      .col-lg-10
        p El código comprueba que el nombre no esté vacío y que la edad se encuentre entre 0 y 150. Si los datos son válidos, muestra un mensaje de bienvenida; de lo contrario, informa el error encontrado.

        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Los operadores relacionales permiten comparar números, cadenas de caracteres y otros datos compatibles. En las cadenas, Python aplica el orden Unicode y distingue entre mayúsculas y minúsculas, aspecto que debe considerarse al interpretar los resultados.

    p.mt-4 Las comparaciones anteriores generan resultados booleanos que permiten evaluar una condición. Cuando una decisión depende de dos o más condiciones, estos resultados se combinan mediante operadores lógicos, tema que se presenta a continuación.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Operadores lógicos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los operadores lógicos permiten combinar varias expresiones booleanas en una sola condición. Python dispone de tres operadores lógicos: and, or y not. Estos operadores son fundamentales cuando una decisión depende de varias condiciones relacionadas. A diferencia de otros lenguajes que utilizan símbolos como &&, || o !, Python emplea las palabras en inglés, lo que hace el código más legible.


    p.mt-4 Cuando una decisión depende de más de una condición, los operadores lógicos permiten combinarlas en una sola expresión. La tabla describe los tres operadores disponibles en Python (and, or y not) con ejemplos que ilustran su resultado.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Operadores lógicos en Python.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Operador
                th Descripción
                th Ejemplo
                th Resultado

            tbody
              tr(style="background-color: #F6F9F4")
                td and
                td Verdadero si ambas expresiones son verdaderas.
                td (5 > 3) and (2 < 4)
                td True

              tr
                td or
                td Verdadero si al menos una expresión es verdadera.
                td (5 > 3) or (2 > 4)
                td True


              tr(style="background-color: #F6F9F4")
                td not
                td Invierte el valor lógico de la expresión.
                td not (5 > 3)
                td False


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t2/9.svg', style='width: 180px').m-auto
                
                .col
                  p Combinar condiciones con and, or y not amplía la capacidad expresiva del programa y evita escribir múltiples estructuras anidadas. Su uso correcto es clave para reflejar fielmente la lógica del problema, especialmente en validaciones que dependen de varios criterios simultáneos.


    p.mt-4 Para anticipar el resultado de una condición compuesta, resulta útil observar el comportamiento de los operadores lógicos ante todas las combinaciones posibles de valores. La tabla de verdad presenta esos resultados de forma sistemática.


    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4.
          span Tabla de verdad de los operadores lógicos.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th A
                th B
                th A and B
                th A or B
                th not A

            tbody
              tr(style="background-color: #F6F9F4")
                td True
                td True
                td True
                td True
                td False

              tr
                td True
                td False
                td False
                td True
                td False

              tr(style="background-color: #F6F9F4")
                td False
                td True
                td False
                td True
                td False

              tr
                td False
                td False
                td False
                td False
                td True

    p La tabla de verdad permite predecir con certeza el valor de cualquier expresión lógica antes de ejecutarla, lo que ayuda a depurar condiciones y a evitar errores difíciles de detectar. Es una herramienta de referencia que el programador consulta al diseñar validaciones complejas.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Para comprender cómo los operadores and, or y not intervienen en la toma de decisiones, a continuación, se presentan ejemplos relacionados con el acceso a un sistema, los días de atención y la aprobación de un crédito:

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Uso de operadores lógicos: and, or, not


    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/10.png', alt='', style="width: 390px").m-auto
      .col-lg-6          
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo: validar acceso a un sistema
                | edad = 25
                | tiene_cuenta = True
                | 
                | if edad >= 18 and tiene_cuenta:
                |     print('Acceso permitido')
                | else:
                |     print('Acceso denegado')


        p.mt-2 El código permite el acceso porque la persona tiene 25 años y posee una cuenta activa. El operador and exige que ambas condiciones sean verdaderas.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operador or: verificar día de atención

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/11.png', alt='', style="width: 390px").m-auto
      .col-lg-6          
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo: verificar día de atención
                | dia = 'sábado'
                | 
                | if dia == 'sábado' or dia == 'domingo':
                |     print('Fin de semana')
                | else:
                |     print('Día hábil')
                | 
                | # Ejemplo: operador not
                | esta_lloviendo = False
                | if not esta_lloviendo:
                |     print('Puede salir sin paraguas')


    p.mt-4 El operador or identifica el sábado o el domingo como fin de semana. Por su parte, not invierte el valor False y permite mostrar que se puede salir sin paraguas.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Combinación de operadores lógicos

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/12.png', alt='', style="width: 390px").m-auto
      .col-lg-6          
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo: condición compleja
                | edad = 30
                | salario = 2500000
                | tiene_codeudor = False
                | 
                | # Aprueba crédito si:
                | # - Tiene más de 25 años Y gana más de 2 millones, O
                | # - Tiene codeudor
                | aprobado = (edad > 25 and salario > 2000000) or tiene_codeudor
                | 
                | if aprobado:
                |     print('Crédito aprobado')
                | else:
                |     print('Crédito rechazado')


    .row.justify-content-center.mt-4
      .col-lg-10
        p El código aprueba el crédito si la persona tiene más de 25 años y gana más de $2.000.000, o si cuenta con codeudor. Si ninguna de estas condiciones se cumple, el crédito se rechaza.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/13.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Los operadores lógicos articulan varias condiciones en una sola expresión. Si la validación consiste en comprobar si un elemento pertenece a una colección, se emplean los operadores de inclusión.


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3. Operadores de inclusión

    p Los operadores de inclusión (también llamados de pertenencia) verifican si un elemento se encuentra dentro de una secuencia, como una cadena, una lista, una tupla, un conjunto o un diccionario. Python ofrece dos operadores de inclusión: in y not in. Son muy útiles cuando se necesita validar si un dato pertenece a un grupo de valores permitidos, sin tener que escribir múltiples comparaciones con el operador or.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5.
          span Operadores de inclusión en Python.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Operador
                th Descripción
                th Ejemplo
                th Resultado

            tbody
              tr(style="background-color: #F6F9F4")
                td in
                td Verdadero si el elemento está presente en la secuencia.
                td 'a' in 'hola'
                td True

              tr
                td not in
                td Verdadero si el elemento no está presente en la secuencia.
                td 5 not in [1, 2, 3]
                td True



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t2/14.svg', style='width: 180px').m-auto
                
                .col
                  p Los operadores de inclusión simplifican las validaciones de pertenencia y sustituyen largas cadenas de comparaciones con or, haciendo el código más legible. Son especialmente prácticos al comprobar opciones de menús, listas de valores permitidos o caracteres dentro de una cadena.


    p.mt-4 Para comprender cómo se verifica la pertenencia de un dato en diferentes colecciones, se presentan ejemplos con cadenas, listas, tuplas y diccionarios, además de aplicaciones para simplificar comparaciones y validar opciones:


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Operadores de inclusión en cadenas y listas
    
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Verificar pertenencia en cadenas
                | >>> 'Python' in 'Aprende Python hoy'
                | True
                | >>> 'Java' not in 'Aprende Python hoy'
                | True
                | 
                | # Verificar pertenencia en listas
                | >>> frutas = ['manzana', 'pera', 'uva']
                | >>> 'pera' in frutas
                | True
                | >>> 'mango' not in frutas
                | True
                | 
                | # Verificar pertenencia en tuplas
                | >>> colores = ('rojo', 'verde', 'azul')
                | >>> 'verde' in colores
                | True
                | 
                | # Verificar pertenencia en diccionarios (revisa las claves)
                | >>> notas = {'María': 4.5, 'Juan': 3.8}
                | >>> 'María' in notas
                | True
                | >>> 4.5 in notas        # False: busca en claves, no en valores
                | False
                | >>> 4.5 in notas.values()  # True
                | True


        p El código utiliza in y not in para verificar elementos en cadenas, listas, tuplas y diccionarios. En los diccionarios, in busca en las claves; para consultar los valores, se utiliza values().

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Comparación: forma larga vs. operador in

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/15.png', alt='', style="width: 390px").m-auto
      .col-lg-6
    
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Forma larga (no recomendada)
                | if x == 'a' or x == 'b' or x == 'c' or x == 'd':
                |     print('Letra válida')
                | 
                | # Forma corta con operador in (recomendada)
                | if x in ['a', 'b', 'c', 'd']:
                |     print('Letra válida')

        p.mt-2 El código muestra dos formas de comprobar si una letra pertenece a un grupo de opciones. El operador in reemplaza varias comparaciones con or y facilita la lectura de la condición.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Programa: validar día de la semana

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/16.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo: validar día de la semana
                | dia = input('Ingrese el día: ').lower()
                | 
                | dias_validos = ['lunes', 'martes', 'miércoles',
                |                 'jueves', 'viernes', 'sábado', 'domingo']
                | 
                | if dia in dias_validos:
                |     print(f'{dia} es un día válido')
                | else:
                |     print('Día no reconocido')
                | 
                | # Ejemplo: verificar si un día es laboral
                | fin_semana = ['sábado', 'domingo']
                | if dia not in fin_semana:
                |     print('Es un día laboral')
                | else:
                |     print('Es fin de semana')


    .row.justify-content-center.mt-4
      .col-lg-10
        p El código comprueba si el dato ingresado corresponde a un día válido. Después, determina si se trata de un día laboral o de fin de semana.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/17.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 La pertenencia permite validar si un dato se encuentra o no en una secuencia. El siguiente subtema presenta los operadores de asignación, utilizados para almacenar y actualizar valores en variables.



    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4. Operadores de asignación

    figure
      img(src='@/assets/curso/temas/t2/18.png', alt='', style="width: 1280px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/19.svg', style='width: 100px').m-auto
          
          .col
            p Los operadores de asignación se utilizan para almacenar un valor en una variable. El operador básico es =, que asigna el valor de la derecha a la variable de la izquierda. Python también ofrece operadores de asignación compuesta que combinan una operación aritmética con la asignación, lo que permite escribir código más conciso y expresivo.

    p.mt-4 Además del operador básico de asignación, Python ofrece variantes que combinan una operación con la asignación en un solo paso. La tabla resume las variantes indicando a qué expresión equivale cada una y un ejemplo de uso.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6.
          span Operadores de asignación en Python.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Operador
                th Descripción
                th Equivale a
                th Ejemplo

            tbody
              tr(style="background-color: #F6F9F4")
                td =
                td Asignación simple
                td -
                td x = 10

              tr
                td +=
                td Asignación con suma
                td x = x + 5
                td x += 5


              tr(style="background-color: #F6F9F4")
                td -=
                td Asignación con resta
                td x = x - 3
                td x -= 3

              tr
                td *=
                td Asignación con multiplicación
                td x = x * 2
                td x *= 2

              tr(style="background-color: #F6F9F4")
                td /=
                td Asignación con división
                td x = x / 4
                td x /= 4

              tr
                td //=
                td Asignación con división entera
                td x = x // 2
                td x //= 2

              tr(style="background-color: #F6F9F4")
                td %=
                td Asignación con módulo
                td x = x % 3
                td x %= 3

              tr
                td **=
                td Asignación con potencia
                td x = x ** 2
                td x **= 2



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La asignación compuesta produce un código más conciso y expresivo, sobre todo en contadores y acumuladores dentro de los ciclos. Familiarizarse con estas formas abreviadas facilita la lectura de programas y es una práctica habitual entre desarrolladores. 



    p.mt-4 La asignación compuesta facilita la actualización de variables mediante expresiones breves y claras. Para comprender su aplicación con valores numéricos, cadenas, listas y asignaciones múltiples, a continuación, se presentan algunos ejemplos:

    TabsC.color-acento-botones
        .py-3.py-md-4.bg-3(titulo="Código. Operadores de asignación compuesta")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t2/20.png')
            .col-md-8.mb-4.mb-md-0
              p.mb-0 # Ejemplos de operadores de asignación
              p.mb-0 >>> x = 10
              p.mb-0 >>> x += 5      # x = 15
              p.mb-0 >>> x -= 3      # x = 12
              p.mb-0 >>> x *= 2      # x = 24
              p.mb-0 >>> x /= 4      # x = 6.0
              p.mb-0 >>> x //= 2     # x = 3.0
              p >>> x **= 2     # x = 9.0

              p El código inicia la variable x con el valor 10 y la actualiza mediante operaciones de suma, resta, multiplicación, división y potencia. Cada operador realiza el cálculo y almacena el nuevo resultado en la misma variable.
                  
            
        
        .py-3.py-md-4.bg-3(titulo="Código. Asignación compuesta con cadenas y listas")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t2/21.png')
            .col-md-8
              p.mb-0 # Operador += con cadenas
              p.mb-0 >>> mensaje = 'Hola'
              p.mb-0 >>> mensaje += ' mundo'
              p.mb-0 >>> print(mensaje)
              p Hola mundo
 
              p.mb-0 # Operador += con listas
              p.mb-0 >>> numeros = [1, 2, 3]
              p.mb-0 >>> numeros += [4, 5]
              p.mb-0 >>> print(numeros)
              p [1, 2, 3, 4, 5]
 
              p.mb-0 # Operador *= con cadenas
              p.mb-0 >>> linea = '-'
              p.mb-0 >>> linea *= 20
              p.mb-0 >>> print(linea)
              p.mb-0 --------------------
              p El código utiliza += para unir cadenas y agregar elementos a una lista. También emplea *= para repetir una cadena según la cantidad indicada.

        .py-3.py-md-4.bg-3(titulo="Código. Asignación múltiple e intercambio")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t2/22.png')
            .col-md-8
              p # Asignación múltiple
              p.mb-0 >>> a, b, c = 1, 2, 3
              p.mb-0 >>> print(a, b, c)
              p 1 2 3
 
              p.mb-0 # Intercambio de valores (swap)
              p.mb-0 >>> a, b = b, a
              p.mb-0 >>> print(a, b)
              p 2 1
 
              p.mb-0 # Asignación encadenada
              p.mb-0 >>> x = y = z = 0
              p.mb-0 >>> print(x, y, z)
              p 0 0 0

              p.mb-0 El código asigna varios valores en una sola línea, intercambia el contenido de dos variables y establece un mismo valor para varias variables. Estas formas reducen instrucciones y facilitan la lectura del código.
               

    p.mt-4 El código asigna varios valores en una sola línea, intercambia el contenido de dos variables y establece un mismo valor para varias variables. Estas formas reducen instrucciones y facilitan la lectura del código.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/23.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Los operadores de asignación modifican el contenido de una variable. En contraste, los operadores de identidad permiten comprobar si dos referencias corresponden al mismo objeto en memoria.


    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5. Operadores de identidad

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los operadores de identidad comparan si dos variables apuntan al mismo objeto en memoria. Python ofrece dos operadores de identidad: is e is not. A diferencia del operador == (que compara valores), los operadores de identidad verifican si dos referencias apuntan exactamente al mismo objeto.


    p.mt-4 Comparar valores no es lo mismo que comparar objetos en memoria, distinción que en Python se expresa con los operadores de identidad. La tabla presenta is e is not con ejemplos que aclaran su comportamiento.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 7.
          span Operadores de identidad en Python.

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Operador
                th Descripción
                th Ejemplo


            tbody
              tr(style="background-color: #F6F9F4")
                td is
                td Verdadero si ambas variables son el mismo objeto.
                td x is None


              tr
                td is not
                td Verdadero si las variables son objetos diferentes.
                td x is not None


    p.mt-4 Distinguir entre igualdad de valor (==) e identidad de objeto (is) evita errores sutiles, en especial al comparar con None. Comprender esta diferencia fortalece el manejo correcto de referencias y mejora la calidad del código.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t2/25.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Asignación múltiple e intercambio de valores en Python
    
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Diferencia entre == e is
                | >>> a = [1, 2, 3]
                | >>> b = [1, 2, 3]
                | >>> a == b       # True: tienen los mismos valores
                | >>> a is b       # False: son objetos diferentes
                |
                | >>> c = a
                | >>> c is a       # True: son el mismo objeto
                |
                | # Uso recomendado con None
                | >>> valor = None
                | >>> if valor is None:
                | ...     print('El valor no existe')
                | El valor no existe


    .row.justify-content-center
      .col-lg-10
        p La comparación con None siempre debe hacerse con is en lugar de ==. Esto se debe a que None es un objeto único en Python (un singleton), y el operador is es más rápido y semánticamente correcto para este caso. Esta regla forma parte de las recomendaciones del estándar PEP 8.

        .row.align-items-center.mt-4
          .col-lg-12
            .cajon.color2.p-4
              p Diferenciar identidad e igualdad evita comparaciones incorrectas. Cuando una expresión reúne varios operadores, también es necesario conocer el orden en que Python los evalúa.


    separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6. Precedencia de los operadores condicionales

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/26.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Cuando una expresión combina varios operadores, Python los evalúa según una jerarquía llamada precedencia. Los operadores con mayor precedencia se evalúan primero. En el contexto de las estructuras condicionales, la jerarquía general es la siguiente:

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Operadores aritméticos. 

    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Operadores relacionales. 

    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Operador lógico not. 

          li 
            .lista-ol--cuadro__vineta
              span.text-black 4
            p.mb-0 Operador lógico and. 

          li 
            .lista-ol--cuadro__vineta
              span.text-black 5
            p.mb-0 Operador lógico or.


    p.mt-4 Cuando una expresión combina varios operadores, el orden en que Python los evalúa determina el resultado. La tabla organiza esa jerarquía por niveles, de mayor a menor precedencia, como guía para interpretar expresiones complejas.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 8.
          span Precedencia de operadores en Python

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Nivel
                th Tipo de operador
                th Operadores


            tbody
              tr(style="background-color: #F6F9F4")
                td 1 (mayor)
                td Aritméticos de potencia
                td **

              tr
                td 2
                td Aritméticos multiplicativos
                td *, /, //, %

              tr(style="background-color: #F6F9F4")
                td 3
                td Aritméticos aditivos
                td +, -

              tr
                td 4
                td Relacionales
                td ==, !=, >, <, >=, <=

              tr(style="background-color: #F6F9F4")
                td 5
                td Inclusión e identidad
                td in, not in, is, is not

              tr
                td 6
                td Lógico not
                td not

              tr(style="background-color: #F6F9F4")
                td 7
                td Lógico and
                td and

              tr
                td 8 (menor)
                td Lógico or
                td or


    p.mt-4 Conocer la precedencia permite predecir el resultado de una expresión y emplear paréntesis para hacerla más clara cuando sea necesario. Respetar esta jerarquía previene errores lógicos y da lugar a condiciones más predecibles y fáciles de mantener.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Precedencia de operadores condicionales

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/27.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo de precedencia
                | >>> resultado = 2 + 3 * 4 > 10 and not False
                | >>> # Evaluación paso a paso:
                | >>> # 1) 3 * 4 = 12
                | >>> # 2) 2 + 12 = 14
                | >>> # 3) 14 > 10 = True
                | >>> # 4) not False = True
                | >>> # 5) True and True = True
                | >>> print(resultado)
                | True
                | 
                | # Con paréntesis para mayor claridad
                | >>> resultado = ((2 + 3 * 4) > 10) and (not False)


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Aunque Python respeta la precedencia automáticamente, se recomienda usar paréntesis cuando una expresión combina varios operadores. Esto mejora la legibilidad y evita confusiones, especialmente en expresiones complejas donde el orden de evaluación podría no ser obvio para quien lea el código por primera vez. 

        p.mt-4 La precedencia permite interpretar condiciones complejas de manera correcta. A partir de esta base, se estudian las estructuras iterativas, que repiten instrucciones y procesan conjuntos de datos.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/28.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/29.svg', style='width: 100px').m-auto
          
          .col
            p Para fortalecer la comprensión sobre el uso de los operadores en Python, se presenta el siguiente pódcast instruccional. Este recurso explica, mediante ejemplos sencillos, cómo comparar datos, combinar condiciones, verificar pertenencias, actualizar valores, comprobar la identidad de los objetos y reconocer el orden de evaluación de una expresión.

        .row.align-items-center.p-2.bg-10.bg-r8
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/30.svg', style="width: 100%").m-auto
            .col-lg-8
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    TarjetaAudio.color-acento-contenido.mb-3(
                    texto="Pódcast"
                    :audio="require_src('@/assets/componentes/audios/audio-ej.mp3')"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                    p.mb-0 Pódcast


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p El pódcast permite integrar los operadores como recursos para construir condiciones y orientar la lógica de un programa. Su aplicación adecuada facilita la escritura, la lectura y la revisión del código. A partir de esta comprensión, el contenido continúa con las estructuras iterativas, utilizadas para repetir instrucciones y procesar conjuntos de datos.



































</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema2',
  data() {
    return {
      mostrarIndicador: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
      Prism.highlightAllUnder(this.$el)
    })
  },
  updated() {
    this.$aosRefresh()
    Prism.highlightAllUnder(this.$el)
  },
}
</script>

<style lang="sass"></style>
