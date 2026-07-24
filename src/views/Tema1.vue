<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estructuras condicionales: concepto, tipos, sintaxis, sentencias

      figure
        img(src='@/assets/curso/temas/t1/1.png', alt='', style="width: 1280px").m-auto

      p.mt-4 Las estructuras condicionales permiten que un programa tome decisiones durante su ejecución. Se utilizan cuando se necesita que ciertas instrucciones se ejecuten solo si se cumple una condición específica. De esta manera, el flujo del programa deja de ser lineal y se adapta a diferentes situaciones según los datos que recibe. Sin las estructuras condicionales, un programa solo podría ejecutar una secuencia fija de instrucciones, lo que limitaría enormemente su utilidad práctica.

      p Antes de ver ejemplos aplicados, conviene fijar cuatro ideas clave que sostienen el funcionamiento de toda estructura condicional en Python:

      .row
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-12.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/2.svg', style="width: 116px").m-auto
            h3.text-center Palabras reservadas
            p.mb-0.text-center  If, elif y else construyen las estructuras condicionales en Python, cada una con un rol específico dentro de la decisión. 

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-12.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/3.svg', style="width: 116px").m-auto
            h3.text-center Expresión booleana
            p.mb-0.text-center  La condición de toda estructura condicional se expresa así y, al evaluarse, produce siempre un valor True o False.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.bg-12.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/4.svg', style="width: 116px").m-auto
            h3.text-center Evaluación
            p.mb-0.text-center Si el resultado es True se ejecuta el bloque asociado; si es False, se omite o se evalúa la siguiente condición.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.bg-12.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/t1/5.svg', style="width: 116px").m-auto
            h3.text-center Indentación
            p.mb-0.text-center A diferencia de C o Java, Python no usa llaves; delimita los bloques con espacios, exigiendo una estructura visual clara.

      p.mt-4 Estos cuatro elementos muestran que toda estructura condicional en Python depende de una sintaxis precisa: una palabra reservada, una condición booleana, una regla de evaluación y una indentación correcta que trabajan en conjunto para que el programa tome decisiones de forma confiable.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p A partir de esta comprensión, resulta necesario reconocer la sintaxis con la que cada estructura condicional se construye en Python. En el siguiente apartado, se presenta la estructura if simple, la más sencilla de todas, la cual permite ejecutar un bloque de instrucciones únicamente cuando se cumple una condición.


      separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1. Sintaxis general de las estructuras condicionales

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/6.png', alt='', style="width: 390px").m-auto
        .col-lg-8
          .row.align-items-start
            .col-lg-2.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/7.svg', style='width: 100px').m-auto
            
            .col
              p La sintaxis básica de una estructura condicional en Python utiliza la palabra reservada if seguida de la condición y dos puntos (:). Las instrucciones que se ejecutan cuando la condición es verdadera deben estar indentadas con cuatro espacios. Python utiliza la indentación para definir el bloque de código que pertenece a la estructura, por lo que una indentación incorrecta genera un error de tipo IndentationError.

          .row.justify-content-center.mt-2
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color1.p-4
                    p La indentación, lejos de ser un detalle de estilo, es el mecanismo con el que Python reconoce qué instrucciones forman parte de una decisión. En el trabajo profesional, mantener una sangría coherente facilita que otras personas lean y modifiquen el código, y previene errores difíciles de detectar cuando los bloques se vuelven extensos o se combinan entre sí.

      p.mt-4 Dominar esta forma básica es el punto de partida para construir cualquier decisión dentro de un programa, pues sobre ella se apoyan todas las variantes condicionales del lenguaje. Por ello, conviene observar con atención tres elementos:

      .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/8.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Palabra reservada if
                p.mb-0 Inicia toda estructura condicional simple e indica a Python que debe evaluar una condición antes de continuar. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/9.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Condición evaluada
                p.mb-0 Expresión booleana ubicada entre if y los dos puntos, que determina si el bloque siguiente se ejecuta. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/10.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Bloque indentado
                p.mb-0 Conjunto de instrucciones con cuatro espacios de sangría que se ejecutan únicamente cuando la condición evaluada resulta verdadera.



      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/11.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 Estos tres elementos, la palabra reservada, la condición y el bloque indentado, conforman la estructura mínima que cualquier programa en Python necesita para tomar una decisión.


      p.mt-4 Con la estructura clara, es momento de observar cómo estos tres elementos se combinan en la sintaxis real de Python: primero en su forma general, luego en un ejemplo aplicado y, finalmente, en un caso donde la condición no requiere una comparación explícita:

      .row.justify-content-center
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
            .tarjeta.clr--pink02.p-4(titulo="Código. Sintaxis general de la estructura condicional if")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 if condicion:
                  p.px-3.mb-0 instrucción_1
                  p.px-3.mb-0 instrucción_2
                  p.px-3.mb-0 ...
                  p.px-3 instrucción_n

                  p Cuando la condición se evalúa como True, Python ejecuta las instrucciones indentadas. Cuando es False, las instrucciones se omiten y el flujo continúa con la siguiente línea sin indentación. Es importante notar que los dos puntos al final de la línea del if son obligatorios, olvidarlos produce un SyntaxError.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t1/12.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Código. Estructura condicional if")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 >>> edad = 20
                  p.mb-0 >>> if edad >= 18:
                  p.mb-0 ...     print('Es mayor de edad')
                  p.mb-0 ...
                  p Es mayor de edad

                  p En Python, una condición no necesariamente tiene que ser una comparación explícita; cualquier expresión que produzca un valor puede utilizarse como condición. En ese caso, Python aplica sus reglas de conversión a booleano: valores como 0, 0.0, cadenas vacías '', listas vacías [], None y False se consideran falsos; todo lo demás se considera verdadero.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t1/13.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Código. Condiciones sin comparación explícita")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Ejemplos de condiciones sin comparación explícita
                  p.mb-0 >>> nombre = 'Ana'
                  p.mb-0 >>> if nombre:
                  p.mb-0 ...     print('El nombre no está vacío')
                  p.mb-0 ...
                  p El nombre no está vacío
 
                  p.mb-0 >>> lista = []
                  p.mb-0 >>> if not lista:
                  p.mb-0 ...     print('La lista está vacía')
                  p.mb-0 ...
                  p La lista está vacía

                  p La cadena 'Ana' se evalúa como verdadera por no estar vacía, mientras que la lista vacía se evalúa como falsa, sin necesidad de comparar su longitud con cero.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t1/14.png', alt='', style="width: 480px").m-auto


      p Estos tres ejemplos evidencian que la sintaxis if condición, se aplica de la misma manera sin importar si la condición proviene de una comparación explícita o de la evaluación directa de un valor, siempre delimitando el bloque con indentación.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p La sintaxis anterior constituye la base para aplicar la forma más sencilla de decisión. A continuación, se estudia la estructura if simple y su ejecución cuando una condición es verdadera.

      separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2. Estructura if simple

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/15.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La estructura if simple evalúa una única condición. Si la condición es verdadera, ejecuta el bloque de instrucciones asociado; si es falsa, el programa continúa sin ejecutar nada adicional. Es la estructura condicional más elemental y se utiliza cuando solo interesa actuar ante un caso específico, sin necesidad de hacer nada cuando la condición no se cumple.


      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/18.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          p Esta clase de decisión aparece de forma constante en el desarrollo de software: validar que un campo no esté vacío, conceder un permiso solo si se cumple un requisito o mostrar una alerta cuando un valor supera cierto límite son situaciones cotidianas que se resuelven con un if simple. Su sencillez lo convierte en la primera herramienta de control que utiliza cualquier programador. Para emplearla con seguridad, conviene distinguir dos elementos:

          .row
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton.bg-12.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t1/16.svg', style="width: 116px").m-auto
                h4.text-center Condición
                p.mb-0.text-center  Expresión que siempre produce un valor verdadero o falso, determinando si el bloque debe ejecutarse. 

            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta--boton.bg-12.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/temas/t1/17.svg', style="width: 116px").m-auto
                h4.text-center Bloque indentado
                p.mb-0.text-center  Conjunto de instrucciones que se ejecuta únicamente cuando la condición se cumple.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/19.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-3 Con la condición y el bloque indentado claros, el if simple queda listo para aplicarse en casos reales de validación.


      p.mt-4 A continuación, se presentan dos ejemplos que aplican la estructura if simple en situaciones frecuentes de la práctica profesional: el control de acceso por edad y la aplicación de descuentos por compra:

      TabsC.color-acento-botones
        .py-3.py-md-4.bg-3(titulo="Ejemplo 1")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t1/20.png')
            .col-md-8.mb-4.mb-md-0
              p
               b Aplicar un if simple para validar si una persona cumple con la edad mínima requerida antes de permitirle el acceso a un sistema.
              p
                b Código. Programa: validar edad mínima

              p.mb-0 # Programa: validar edad mínima
              p edad = int(input('Ingrese su edad: '))
 
              p.mb-0 if edad >= 18:
              p.px-3     print('Puede ingresar al sistema')
 
              p print('Gracias por su visita')

              p En este ejemplo, el mensaje 'Puede ingresar al sistema' se imprime únicamente cuando la condición edad >= 18 es verdadera, pues se encuentra dentro del bloque indentado. En cambio, el mensaje 'Gracias por su visita' se imprime siempre, ya que está fuera de dicho bloque y no depende de la condición. Este comportamiento ilustra cómo la indentación delimita con precisión el alcance de la estructura condicional.      
            
        
        .py-3.py-md-4.bg-3(titulo="Ejemplo 2")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t1/21.png')
            .col-md-8
              p
               b Ilustrar el uso del if simple en un contexto de control de descuentos.
              p
                b Código. Programa: aplicar descuento por compra

              p.mb-0 # Programa: aplicar descuento por compra mayor a $100.000
              p.mb-0 total_compra = float(input('Total de la compra: '))
              p descuento = 0
 
              p.mb-0 if total_compra > 100000:
              p.mb-0.px-3     descuento = total_compra * 0.10
              p.px-3     print(f'Aplica descuento del 10%: ${descuento:,.0f}')
 
              p.mb-0 total_final = total_compra - descuento
              p print(f'Total a pagar: ${total_final:,.0f}')

              p En este caso, el programa calcula un descuento del 10 % solamente cuando la compra supera los 100 mil pesos. Si no se cumple la condición, el descuento permanece en cero y el total final es igual al total de la compra original. Este patrón es muy frecuente en sistemas de facturación.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/22.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 Con el manejo del if simple ya dominado, es momento de conocer la estructura if-else, que permite definir una segunda ruta de acción cuando la condición no se cumple.


      separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3. Estructura if-else

      figure
        img(src='@/assets/curso/temas/t1/23.png', alt='', style="width: 1280px").m-auto

      p.mt-4 La estructura if-else permite ejecutar un bloque de instrucciones cuando la condición es verdadera y otro bloque diferente cuando es falsa. De esta manera, el programa siempre ejecuta uno de los dos caminos posibles, garantizando una respuesta en cualquier situación. Se utiliza cuando las dos alternativas son mutuamente excluyentes.

      p La estructura if-else resulta especialmente útil en decisiones que solo admiten dos caminos posibles. Algunos ejemplos frecuentes en el desarrollo de software son:

      .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/24.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Aprobación o rechazo
                p.mb-0 El programa acepta o rechaza una solicitud según se cumpla o no un requisito. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/25.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Permiso o denegación
                p.mb-0 Un sistema permite o deniega el acceso a un recurso según las credenciales ingresadas. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/26.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Descuento o precio completo
                p.mb-0 Una tienda aplica una rebaja o cobra el valor íntegro según el monto de la compra.


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/27.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 En los tres casos, el programa evalúa una sola condición y responde siempre con una de dos acciones posibles, sin dejar la decisión sin resolver.


      p.mt-4 A continuación, se presentan tres ejemplos que aplican la estructura if-else en situaciones distintas: clasificar un número como par o impar, verificar el derecho al voto y calcular el valor absoluto de un número:

      .row.justify-content-center
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
            .tarjeta.clr--pink02.p-4(titulo="Clasificar un número como par o impar")
              .row.align-items-center
                .col-lg-7
                  p 
                    b Utilizar el operador de módulo para determinar si un número ingresado es par o impar.

                  p Código. Sintaxis de la estructura if-else

                  p.mb-0 if condicion:
                  p.mb-0.px-3     # bloque cuando es verdadera
                  p.mb-0.px-3     instrucciones_si_verdadero
                  p.mb-0 else:
                  p.mb-0.px-3     # bloque cuando es falsa
                  p.mb-0.px-3     instrucciones_si_falso
                  p.mb-0 # Programa: determinar si un número es par o impar
                  p numero = int(input('Ingrese un número: '))
 
                  p.mb-0 if numero % 2 == 0:
                  p.mb-0.px-3     print(f'{numero} es un número par')
                  p.mb-0 else:
                  p     print(f'{numero} es un número impar')

                  p El operador % (módulo) devuelve el residuo de la división. Si el residuo al dividir entre 2 es cero, el número es par; de lo contrario, es impar. La estructura if-else garantiza que siempre se imprima uno de los dos mensajes.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t1/28.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Verificar el derecho al voto ")
              .row.align-items-center
                .col-lg-6
                  p
                    b Presentar cómo determinar si una persona puede votar según su edad y su nacionalidad.

                  p Código. Programa: verificar derecho al voto

                  p.mb-0 # Programa: verificar derecho al voto
                  p.mb-0 edad = int(input('Edad: '))
                  p nacionalidad = input('Nacionalidad: ').lower()
 
                  p.mb-0 if edad >= 18 and nacionalidad == 'colombiana':
                  p.mb-0.px-3     print('Tiene derecho al voto en Colombia')
                  p.mb-0 else:
                  p.px-3     print('No cumple los requisitos para votar en Colombia')
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t1/29.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Calcular el valor absoluto de un número")
              .row.align-items-center
                .col-lg-6
                  p
                    b Explicar el cálculo del valor absoluto de un número, utilizando solamente las estructuras condicionales básicas (sin usar la función abs()).

                  p Código. Programa: calcular el valor absoluto

                  p.mb-0 # Programa: calcular el valor absoluto de un número
                  p numero = float(input('Ingrese un número: '))
 
                  p.mb-0 if numero < 0:
                  p.mb-0.px-3     valor_absoluto = -numero
                  p.mb-0 else:
                  p.px-3     valor_absoluto = numero
 
                  p print(f'El valor absoluto es: {valor_absoluto}')
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t1/30.png', alt='', style="width: 480px").m-auto

      
      p La estructura if-else garantiza siempre una respuesta del programa, sin dejar casos sin resolver, sin importar qué tan compleja sea la condición evaluada.

      p La estructura if-else resuelve decisiones con dos caminos. Para situaciones que requieren evaluar tres o más alternativas, se emplea la estructura if-elif-else.


      separador
      #t_1_4.titulo-segundo.color-acento-contenido
        h2 1.4. Estructura if-elif-else

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/31.png', alt='', style="width: 490px").m-auto
        .col-lg-7
          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Cuando un programa debe evaluar varias condiciones posibles, se utiliza la estructura if-elif-else. La palabra reservada elif (abreviatura de else if) permite encadenar múltiples condiciones que se evalúan en orden. Python ejecuta el bloque asociado a la primera condición que resulte verdadera y omite el resto. Si ninguna condición se cumple, se ejecuta el bloque else, que es opcional.

          p.mt-2 Muchos problemas no se reducen a dos opciones, sino que exigen elegir entre varias categorías: 

          ul.lista-ul--color
            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 Clasificar una nota.
      
            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 Asignar un rango de edad.

            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 Determinar una tarifa según el horario.

          p.mt-2 En estos casos, la estructura if-elif-else permite expresar todas las alternativas de forma ordenada, evitando una maraña de condiciones sueltas.

      p.mt-4 Para aprovecharla correctamente conviene recordar que las condiciones se evalúan en orden y que solo se ejecuta el primer bloque verdadero. Por ello, el orden en que se escriben las condiciones influye en el resultado, aspecto que los ejemplos de esta sección permiten apreciar con claridad:


      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 1. Sintaxis general de la estructura if-elif-else y su aplicación para clasificar una calificación según varios rangos.

          p
            b
              i Código. Sintaxis de la estructura if-elif-else


      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/32.png', alt='', style="width: 390px").m-auto
        .col-lg-6           
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | if condicion_1:
                  |     bloque_1
                  | elif condicion_2:
                  |     bloque_2
                  | elif condicion_3:
                  |     bloque_3
                  | else:
                  |     bloque_por_defecto
                  | # Programa: clasificar una calificación
                  | nota = float(input('Ingrese la nota (0 a 5): '))
                  |
                  | if nota >= 4.5:
                  |     print('Excelente')
                  | elif nota >= 4.0:
                  |     print('Sobresaliente')
                  | elif nota >= 3.0:
                  |     print('Aprobado')
                  | else:
                  |     print('Reprobado')

      .row.justify-content-center.mt-4
        .col-lg-10
          p El código compara la nota con varios rangos. Si es igual o superior a 4,5, muestra “Excelente”; desde 4,0, “Sobresaliente”; desde 3,0, “Aprobado”; y, si es inferior a 3,0, “Reprobado”.

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 2. Clasificación del índice de masa corporal (IMC), una aplicación clásica en el área de salud.

          p
            b
              i Código. Programa: clasificar el IMC


      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/33.png', alt='', style="width: 390px").m-auto
        .col-lg-6           
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | # Programa: clasificar el IMC de una persona
                  | peso = float(input('Peso en kilogramos: '))
                  | estatura = float(input('Estatura en metros: '))
                  | 
                  | imc = peso / (estatura ** 2)
                  | 
                  | if imc < 18.5:
                  |     categoria = 'Bajo peso'
                  | elif imc < 25.0:
                  |     categoria = 'Peso saludable'
                  | elif imc < 30.0:
                  |     categoria = 'Sobrepeso'
                  | elif imc < 35.0:
                  |     categoria = 'Obesidad grado I'
                  | elif imc < 40.0:
                  |     categoria = 'Obesidad grado II'
                  | else:
                  |     categoria = 'Obesidad grado III'
                  | 
                  | print(f'IMC: {imc:.2f} - Categoría: {categoria}')


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/34.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 El código calcula el IMC con el peso y la estatura. Luego, clasifica el resultado desde «Bajo peso» hasta «Obesidad grado III», según el rango obtenido.


          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 3. Cálculo de la tarifa de un taxi según el horario del servicio.

          p
            b
              i Código. Programa: calcular tarifa de taxi


      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/35.png', alt='', style="width: 390px").m-auto
        .col-lg-6           
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | # Programa: calcular tarifa de taxi según horario
                  | hora = int(input('Hora del servicio (0-23): '))
                  | distancia = float(input('Distancia en km: '))
                  | 
                  | if 6 <= hora < 20:
                  |     tarifa_base = 5000
                  |     valor_km = 1500
                  |     tipo = 'Tarifa diurna'
                  | elif 20 <= hora < 23:
                  |     tarifa_base = 6000
                  |     valor_km = 2000
                  |     tipo = 'Tarifa nocturna'
                  | else:
                  |     tarifa_base = 8000
                  |     valor_km = 2500
                  |     tipo = 'Tarifa de madrugada'
                  | 
                  | total = tarifa_base + (valor_km * distancia)
                  | print(f'{tipo}: ${total:,.0f}')

      .row.justify-content-center.mt-4
        .col-lg-10
          p El código selecciona la tarifa diurna, nocturna o de madrugada según la hora del servicio. Luego, calcula el valor total con la tarifa base, el precio por kilómetro y la distancia recorrida.

      p.mt-2 Los ejemplos muestran que la estructura if-elif-else permite organizar varias alternativas y ejecutar únicamente la primera condición verdadera. El orden de evaluación resulta esencial para clasificar los datos de manera correcta.

      separador
      #t_1_5.titulo-segundo.color-acento-contenido
        h2 1.5. Estructuras condicionales anidadas

      .bloque-texto-g.bg-2.p-3.p-sm-4.p-md-5.mt-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/362.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una estructura condicional puede contener otras estructuras condicionales en su interior. A esto se le conoce como anidamiento. Es útil cuando la decisión a tomar depende de varias condiciones relacionadas que se evalúan en niveles. Al anidar, es muy importante respetar los niveles de indentación para que Python identifique correctamente a qué bloque pertenece cada instrucción.


      p.mt-4 Para interpretarlas con claridad conviene leerlas por niveles: se evalúa la condición exterior y, solo si se cumple, se valoran las condiciones internas que dependen de ella. Este razonamiento por etapas es el que permite seguir la lógica de los programas de validación.


      TabsC.color-acento-botones
        .py-3.py-md-4.bg-3(titulo="Verificación del estado académico mediante condiciones anidadas")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t1/37.png')
            .col-md-8.mb-4.mb-md-0
              p
               b Código. Programa: determinar estado académico

              p.mb-0 # Programa: determinar estado académico
              p.mb-0 nota = float(input('Nota final: '))
              p asistencia = float(input('Porcentaje de asistencia: '))
 
              p.mb-0 if nota >= 3.0:
              p.mb-0.px-3     if asistencia >= 80:
              p.mb-0.px-5         print('Aprobado')
              p.mb-0.px-3     else:
              p.mb-0.px-5         print('Reprobado por inasistencia')
              p.mb-0 else:
              p.px-3     print('Reprobado por nota')

              p El código verifica primero si la nota es igual o superior a 3,0. Si se cumple esta condición, revisa si la asistencia alcanza el 80 %; de lo contrario, informa si la reprobación fue por nota o por inasistencia. 
            
        
        .py-3.py-md-4.bg-3(titulo="Ejemplo 2")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t1/38.png')
            .col-md-8
              p
               b Código. Programa: validación de inicio de sesión

              p.mb-0 # Programa: validación de inicio de sesión por niveles
              p.mb-0 usuario = input(‘Usuario: ‘)
              p clave = input(‘Contraseña: ‘)
              
              p.mb-0 if usuario == ‘admin’:
              p.mb-0.px-3     if clave == ‘1234’:
              p.mb-0.px-5         print(‘Bienvenido administrador’)
              p.mb-0.px-3     else:
              p.mb-0.px-5         print(‘Contraseña incorrecta’)
              p.mb-0 else:
              p.px-3     print(‘Usuario no registrado’)

              p El código verifica primero si el usuario ingresado es «admin» y, después, si la contraseña es «1234». Según el resultado, permite el acceso o muestra el mensaje de error correspondiente.


      p.mt-4 Aunque las estructuras anidadas son útiles, se recomienda no abusar de ellas. Un código con muchos niveles de anidamiento se vuelve difícil de leer y mantener. Esta situación se conoce como "código flecha" (arrow code), porque los bloques se van desplazando a la derecha formando una figura similar a una flecha. En muchos casos se pueden simplificar utilizando operadores lógicos (and, or), combinando las condiciones o aplicando técnicas como las cláusulas de guarda (early return).

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color2.p-4
                p Las estructuras anidadas son útiles para decisiones por niveles, pero no todas las situaciones requieren esa extensión. Para decisiones breves, Python ofrece el operador ternario como una alternativa compacta.

      separador
      #t_1_6.titulo-segundo.color-acento-contenido
        h2 1.6. Operador ternario

      .row.align-items-center.justify-content-center
        .col-lg-12
          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/temas/t1/39.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg
                  figure
                    img(src="@/assets/curso/temas/t1/40.svg", alt="", style="width: 90px")

                  p.mt-2 Python ofrece una forma compacta de escribir estructuras condicionales simples conocida como operador ternario. Permite asignar un valor a una variable según el resultado de una condición, todo en una sola línea.

                  p Esta forma compacta es muy valorada en la práctica profesional porque reduce líneas de código y expresa decisiones sencillas de manera directa, por ejemplo, al asignar una etiqueta, un estado o un valor por defecto. Se emplea con frecuencia dentro de mensajes, cálculos rápidos y asignaciones condicionales breves.

      p.mt-4 Conviene usarla con criterio, resulta ideal para decisiones simples, pero perjudica la legibilidad cuando la lógica es compleja o requiere varias instrucciones. Comprender su sintaxis permite decidir cuándo preferirla frente a un if-else tradicional.

      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Sintaxis del operador ternario

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/41.png', alt='', style="width: 390px").m-auto
        .col-lg-6    
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | variable = valor_si_verdadero if condicion else valor_si_falso
                  | >>> edad = 20
                  | >>> categoria = 'mayor' if edad >= 18 else 'menor'
                  | >>> print(categoria)
                  | mayor
                  | 
                  | >>> numero = 7
                  | >>> tipo = 'par' if numero % 2 == 0 else 'impar'
                  | >>> print(tipo)
                  | impar
                  | 
                  | >>> nota = 3.5
                  | >>> estado = 'Aprobado' if nota >= 3.0 else 'Reprobado'
                  | >>> print(estado)
                  | Aprobado

      .row.justify-content-center.mt-4
        .col-lg-10
          p El operador ternario también se puede usar dentro de una llamada a print() o como parte de una expresión más grande:
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Operador ternario dentro de print()

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/42.png', alt='', style="width: 390px").m-auto
        .col-lg-6    
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | >>> x = 15
                  | >>> print(f'El número es {"par" if x % 2 == 0 else "impar"}')
                  | El número es impar
                  | 
                  | # Combinado con operaciones
                  | >>> precio = 100
                  | >>> total = precio * 0.9 if precio > 50 else precio
                  | >>> print(total)
                  | 90.0



      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p El operador ternario resulta muy útil para asignaciones sencillas. Sin embargo, no se recomienda cuando la lógica es compleja o cuando hay que ejecutar varias instrucciones, ya que afecta la legibilidad del código. En esos casos es preferible escribir la estructura if-else de forma tradicional.


          p.mt-4 Esta forma abreviada simplifica decisiones de dos resultados. Cuando un valor debe compararse con varios patrones definidos, la estructura <em>match-case</em> ofrece una organización más clara.


      separador
      #t_1_7.titulo-segundo.color-acento-contenido
        h2 1.7. Estructura <em>match-case</em> (Python 3.10+)

      .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
        .col-lg-5.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/43.png', alt='', style="width: 490px").m-auto
        .col-lg-7
          p A partir de la versión 3.10, Python incorporó la estructura <em>match-case</em>, que permite comparar un valor contra varios patrones de manera elegante. Es similar al switch-case de otros lenguajes, pero más potente, ya que admite patrones estructurales.

          .row.justify-content-center.mt-4
            .col-lg-12
              .row.align-items-center
                .col-lg-12
                  .cajon.color2.p-4
                    p Esta estructura resulta especialmente útil cuando una variable debe compararse contra muchos valores fijos, como ocurre en los menús de opciones, los códigos de estado o los comandos de una aplicación. En esos casos, <em>match-case</em> ofrece una alternativa más legible y organizada que una larga cadena de if-elif.


      p.mt-4 Por ser una incorporación reciente del lenguaje, solo está disponible a partir de Python 3.10, lo que conviene tener presente al elegirla. Su sintaxis se apoya en la palabra match y en bloques case que describen cada patrón a comparar.


      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Sintaxis de la estructura <em>match-case</em>

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.order-2
          figure
            img(src='@/assets/curso/temas/t1/44.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | match valor:
                  | case patron_1:
                  |     bloque_1
                  | case patron_2:
                  |     bloque_2
                  | case _:
                  |     bloque_por_defecto

          p El guion bajo (_) actúa como comodín y equivale al bloque else. Este tipo de estructura es útil cuando se compara una variable contra varios valores fijos.


      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5.bg-11.p-1 Código. Programa: menú con <em>match-case</em>

      .row.align-items-center.justify-content-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/45.png', alt='', style="width: 390px").m-auto
        .col-lg-6
          .tarjeta-codigo
              pre.language-python(language="python")
                code
                  | # Programa: menú de opciones con <em>match-case</em>
                  | opcion = input('Elija una opción (A, B, C): ').upper()
                  | 
                  | match opcion:
                  |     case 'A':
                  |         print('Opción A seleccionada: consultar saldo')
                  |     case 'B':
                  |         print('Opción B seleccionada: realizar retiro')
                  |     case 'C':
                  |         print('Opción C seleccionada: hacer consignación')
                  |     case _:
                  |         print('Opción no válida')

          p Aunque el <em>match-case</em> es una adición reciente al lenguaje, la estructura if-elif-else sigue siendo la más utilizada por su compatibilidad con versiones anteriores de Python y por su flexibilidad para manejar condiciones complejas con rangos u operadores lógicos.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/46.svg', style='width: 100px').m-auto
            
            .col
              p.bg-1.p-2 Después de revisar las principales formas de decisión en Python, conviene compararlas para reconocer sus diferencias y seleccionar la más adecuada en cada situación.


      separador
      #t_1_8.titulo-segundo.color-acento-contenido
        h2 1.8. Tipos de estructuras condicionales

      p Tras revisar cada estructura condicional por separado, conviene contrastarlas en conjunto para apreciar cuándo emplear cada una. La tabla comparativa las reúne indicando su sintaxis y su uso típico, lo que facilita elegir la estructura más adecuada según el tipo de decisión que deba tomar el programa.

      .row.justify-content-center.mt-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 1.
            span Tipos de estructuras condicionales en Python

          .tabla-a.color-acento-contenido 
            table
              thead(style="background-color: #FE9841")
                tr
                  th(style="width: 30%") Tipo
                  th Sintaxis
                  th Uso típico

              tbody
                tr(style="background-color: #F6F9F4")
                  td if simple
                  td if condición:
                  td Ejecutar un bloque solo cuando la condición es verdadera.

                tr
                  td if-else
                  td if condición: / else:
                  td Elegir entre dos caminos posibles.


                tr(style="background-color: #F6F9F4")
                  td if-elif-else
                  td if / elif / else:
                  td Evaluar múltiples condiciones mutuamente excluyentes.

                tr
                  td Anidada
                  td if dentro de if
                  td Decisiones por niveles o combinaciones específicas.

                tr(style="background-color: #F6F9F4")
                  td Ternaria
                  td valor1 if cond else valor2
                  td Asignar un valor según una condición en una sola línea.

                tr
                  td match-case
                  td match valor: case patrón:
                  td Comparar un valor contra varios patrones (Python 3.10+).


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.color1.p-4
                p La comparación evidencia que Python ofrece una estructura para cada nivel de complejidad, desde una decisión simple hasta evaluaciones con múltiples alternativas. Reconocer estas diferencias ayuda a seleccionar la opción más legible y eficiente al resolver problemas reales de validación y control de flujo.


      p.mt-4 La comparación permite elegir una estructura según el número y el tipo de alternativas. Esta elección debe complementarse con buenas prácticas que favorezcan la claridad y el mantenimiento del código.

      separador
      #t_1_9.titulo-segundo.color-acento-contenido
        h2 1.9. Buenas prácticas con estructuras condicionales

      p Al escribir estructuras condicionales, se recomienda seguir una serie de buenas prácticas que facilitan la legibilidad y el mantenimiento del código:

      .row.justify-content-center 
        .col-lg-7
          LineaTiempoD.color-primario.linea-bold
            .row(numero="1" titulo="Usar nombres descriptivos")
              .col-md-12.mb-4.mb-md-0
                p Asignar nombres claros a las variables facilita la comprensión de las condiciones. Por ejemplo, es_mayor_de_edad comunica mejor su propósito que x. 
      
            .row(numero="2" titulo="Evitar condiciones redundantes")
              .col-md-12.mb-4.mb-md-0
                p Escribir directamente la condición hace que el código sea más claro. Por ejemplo, se recomienda usar if edad >= 18: en lugar de if (edad >= 18) == True:. 
      
            .row(numero="3" titulo="Limitar la profundidad del anidamiento")
              .col-md-12.mb-4.mb-md-0
                p Se recomienda no superar tres niveles de condiciones anidadas. Si el código requiere más niveles, conviene organizarlo mediante funciones o combinar las condiciones con operadores lógicos. 

            .row(numero="4" titulo="Ordenar las condiciones por probabilidad")
              .col-md-12.mb-4.mb-md-0
                p En una estructura if-elif-else, se recomienda ubicar al comienzo las condiciones que tienen mayor probabilidad de cumplirse. Python finaliza la evaluación cuando encuentra la primera condición verdadera. 
      
            .row(numero="5" titulo="Utilizar el bloque else con prudencia")
              .col-md-12.mb-4.mb-md-0
                p Este bloque se emplea cuando debe ejecutarse una acción si ninguna condición anterior se cumple. Si solo se necesita actuar ante una condición específica, basta con utilizar if.
      
      
        .col-lg-5.d-none.d-lg-block
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/t1/47.png', alt='', style="width: 100%").m-auto


      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-start.mt-4
            .col-lg-1.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/t1/48.svg', style='width: 100px').m-auto
            
            .col
              p Aplicar estas prácticas desde el inicio del aprendizaje crea hábitos sólidos que se reflejan en códigos más limpios, más fáciles de depurar y más colaborativos, cualidades esenciales en entornos profesionales de desarrollo. Para construir las expresiones que orientan las decisiones del programa, a continuación, se presentan los operadores condicionales.













  </template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema1',
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
