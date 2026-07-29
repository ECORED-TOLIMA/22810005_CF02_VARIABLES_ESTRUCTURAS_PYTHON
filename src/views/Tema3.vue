<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estructuras iterativas: concepto, tipos, sintaxis, sentencias

    figure
      img(src='@/assets/curso/temas/t3/1.png', alt='', style="width: 1280px").m-auto

    p.mt-4 Las estructuras iterativas, también conocidas como ciclos o bucles, permiten ejecutar un bloque de instrucciones varias veces mientras se cumpla una condición determinada. Son fundamentales en la programación porque evitan la repetición manual de código y facilitan el procesamiento de grandes volúmenes de datos. 

    .row.justify-content-center
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/2.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Las estructuras iterativas evitan repetir instrucciones de forma manual. Gracias a ellas, un programa puede procesar grandes cantidades de datos de manera organizada y eficiente.

    p.mt-4 Python dispone de dos estructuras iterativas principales y de sentencias que permiten controlar su ejecución:

    .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/3.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center 1. Ciclo while
                p.mb-0 Repite un bloque mientras una condición sea verdadera. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/4.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center 2. Ciclo for
                p.mb-0 Recorre los elementos de una secuencia. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t3/5.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center 3. Sentencias de control
                p.mb-0 Break, continue y else modifican el desarrollo del ciclo. 


    p.mt-4 Cada estructura responde a una necesidad específica. Elegir la opción adecuada permite crear programas más claros, organizados y eficientes.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Las estructuras responden a distintas necesidades de repetición. Primero se presenta el ciclo while, adecuado cuando la ejecución depende de una condición y no se conoce previamente el número de iteraciones.



    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Ciclo while

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t3/6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t3/7.svg", alt="", style="width: 90px")

                p.mt-2 El ciclo while repite un bloque de instrucciones mientras una condición sea verdadera. Antes de cada repetición, Python evalúa la condición: si se cumple, ejecuta el bloque; de lo contrario, finaliza el ciclo y continúa con la siguiente instrucción.

                p Esta estructura se compone de la palabra reservada while, una condición y un bloque indentado. La relación entre estos elementos permite identificar qué instrucciones se repiten y cuándo finaliza el ciclo.


    p.mt-4 Para comprender su funcionamiento, a continuación, se presentan cinco códigos que muestran la sintaxis general del ciclo while y su aplicación para contar valores, controlar un menú, validar datos y acumular números:

    .row.justify-content-center
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
            .tarjeta.clr--pink02.p-4(titulo="Código. Sintaxis general del ciclo while")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 while condicion:
                  p.mb-0.px-3     instrucción_1
                  p.mb-0.px-3     instrucción_2
                  p.mb-0.px-3     ...
                  p.px-3     instrucción_n

                  p El ciclo while evalúa una condición antes de cada repetición y ejecuta el bloque indentado mientras sea verdadera. Cuando la condición es falsa, el ciclo termina y el programa continúa.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t3/8.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Código. Programa: contar del 1 al 5 con while")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Programa: contar del 1 al 5
                  p contador = 1
 
                  p.mb-0 while contador <= 5:
                  p.mb-0.px-3     print(contador)
                  p.px-3     contador += 1
 
                  p print('Fin del ciclo')

                  p El código muestra los números del 1 al 5 y aumenta el contador en cada repetición. Cuando el contador llega a 6, la condición deja de cumplirse y aparece el mensaje “Fin del ciclo”.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t3/9.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Código. Programa: menú interactivo con while")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Programa: menú de opciones con ciclo while
                  p opcion = ''
 
                  p.mb-0 while opcion != '4':
                  p.mb-0.px-3     print('\n===== MENÚ =====')
                  p.mb-0.px-3     print('1. Consultar saldo')
                  p.mb-0.px-3     print('2. Realizar retiro')
                  p.mb-0.px-3     print('3. Hacer consignación')
                  p.mb-0.px-3     print('4. Salir')
                  p.px-3     opcion = input('Elija una opción: ')
 
                  p.mb-0.px-3     if opcion == '1':
                  p.mb-0.px-5         print('Su saldo es $500.000')
                  p.mb-0.px-3     elif opcion == '2':
                  p.mb-0.px-5         print('Retiro realizado con éxito')
                  p.mb-0.px-3     elif opcion == '3':
                  p.mb-0.px-5         print('Consignación exitosa')
                  p.mb-0.px-3     elif opcion == '4':
                  p.mb-0.px-5         print('Saliendo del sistema...')
                  p.mb-0.px-3     else:
                  p.px-5         print('Opción no válida')

                  p El código mantiene activo el menú y ejecuta una acción según la opción seleccionada. La repetición termina cuando se elige la opción 4, correspondiente a salir del sistema.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t3/10.png', alt='', style="width: 480px").m-auto

            div(titulo="Código. Programa: validar entrada de datos con while")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Programa: validar entrada de edad
                  p edad = -1
 
                  p.mb-0 while edad < 0 or edad > 150:
                  p.mb-0.px-3     edad = int(input('Ingrese su edad (0-150): '))
                  p.mb-0.px-3     if edad < 0 or edad > 150:
                  p.px-5         print('Edad no válida, intente de nuevo')
 
                  p print(f'Edad registrada: {edad}')

                  p El código solicita nuevamente la edad mientras el valor sea menor que 0 o mayor que 150. Cuando se ingresa un dato válido, finaliza el ciclo y muestra la edad registrada.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t3/11.png', alt='', style="width: 480px").m-auto

            div(titulo="Código. Programa: sumar números con acumulador")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Programa: sumar números hasta que el usuario quiera terminar
                  p.mb-0 continuar = True
                  p suma = 0
 
                  p.mb-0 while continuar:
                  p.mb-0.px-3     numero = float(input('Ingrese un número: '))
                  p.mb-0.px-3     suma += numero
                  p.mb-0.px-3     respuesta = input('¿Ingresar otro? (s/n): ').lower()
                  p.mb-0.px-3     if respuesta != 's':
                  p.px-5         continuar = False
 
                  p print(f'Suma total: {suma}')

                  p El código solicita números y acumula cada valor en la variable suma. El ciclo continúa mientras se responda “s” y, al finalizar, muestra el total obtenido.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t3/12.png', alt='', style="width: 480px").m-auto


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p El ciclo while mantiene la repetición mientras una condición sea verdadera. Cuando se requiere recorrer una secuencia o un conjunto de valores, el ciclo for ofrece una estructura más directa.






    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Ciclo for

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/13.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Es utilizado para recorrer los elementos de una secuencia, como una lista, una tupla, una cadena de caracteres o un rango de números. En cada iteración, Python asigna automáticamente el siguiente elemento de la secuencia a una variable de control y ejecuta el bloque de instrucciones.

        p El ciclo for se utiliza con frecuencia para procesar colecciones de datos en tareas como las siguientes:

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Recorrer los productos de un inventario. 
  
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Calcular el promedio de una lista de notas. 
   
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Procesar los caracteres de una cadena. 

        p.mt-2 Estas aplicaciones se resuelven de manera clara y directa, por lo que este ciclo es una herramienta fundamental para el análisis de datos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Su estructura es directa, la palabra for, una variable que recibe cada elemento, la palabra in y la secuencia que se recorre, seguidas de un bloque indentado. Identificar estas partes facilita leer cualquier recorrido, ya sea sobre listas, cadenas o rangos numéricos.



    p.mt-4 Para reconocer las principales aplicaciones del ciclo for, a continuación, se presenta una infografía interactiva con ejemplos de recorridos en listas, cadenas, tuplas, diccionarios y rangos numéricos. 

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/14.svg', style="width:128px").m-auto
        p.text-center
            b Funcionamiento general
        p.text-center.mb-0 El ciclo for recorre una secuencia y procesa un elemento en cada repetición. Por ejemplo, puede revisar cinco productos hasta completar la lista. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/15.svg', style="width:128px").m-auto
        p.text-center
            b Recorrido de listas
        p.text-center.mb-0 Una lista almacena elementos en un orden determinado. Por ejemplo, puede recorrer una lista para mostrar los nombres de varias frutas. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/16.svg', style="width:128px").m-auto
        p.text-center
            b Recorrido de cadenas
        p.text-center.mb-0 Una cadena está formada por una secuencia de caracteres. Por ejemplo, al procesar la palabra «Python», identifica cada letra desde la «P» hasta la «n». 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/17.svg', style="width:128px").m-auto
        p.text-center
            b Recorrido de tuplas
        p.text-center.mb-0 Una tupla agrupa datos ordenados que permanecen sin modificaciones. Por ejemplo, puede consultar por separado los valores de unas coordenadas. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/18.svg', style="width:128px").m-auto
        p.text-center
            b Recorrido de diccionarios
        p.text-center.mb-0 Un diccionario organiza información mediante claves y valores relacionados. Por ejemplo, puede asociar el nombre de cada estudiante con su calificación. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/19.svg', style="width:128px").m-auto
        p.text-center
            b Repeticiones con rangos
        p.text-center.mb-0 La función range() genera una secuencia numérica para controlar las repeticiones. Por ejemplo, un rango del 1 al 10 permite construir una tabla de multiplicar. 
              
      .tarjeta.bg-9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/20.svg', style="width:128px").m-auto
        p.text-center
            b Procesamiento de datos
        p.text-center.mb-0 El ciclo realiza una misma operación con todos los valores de una colección. Por ejemplo, puede sumar varias calificaciones para calcular su promedio.
              

    p.mt-4 Los ejemplos muestran que el ciclo for permite recorrer diferentes secuencias y procesar sus elementos de forma ordenada. Su aplicación facilita la automatización de tareas repetitivas y mejora la organización del programa.    


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Los ciclos while y for permiten repetir instrucciones, aunque responden a situaciones diferentes. La siguiente comparación facilita reconocer cuándo conviene utilizar cada uno.


    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3. Sentencias de control: break, continue y else

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Python ofrece tres sentencias especiales para modificar el flujo normal de los ciclos: break, continue y else. Estas sentencias permiten construir ciclos más flexibles y responder a situaciones particulares durante la ejecución. Su uso adecuado simplifica la lógica y reduce la necesidad de estructuras anidadas complejas.


    p.mt-4 La sentencia <b>break</b> interrumpe inmediatamente el ciclo, sin importar si la condición sigue siendo verdadera. Se utiliza cuando se detecta una situación que exige salir del ciclo de forma anticipada, como encontrar un elemento buscado o detectar un error crítico.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Ejemplo de break: buscar un número
                | numeros = [1, 5, 8, 12, 17, 20]
                | 
                | for num in numeros:
                |     if num > 10:
                |         print(f'Primer número mayor a 10: {num}')
                |         break
                | 
                | # Salida: Primer número mayor a 10: 12
                | # Ejemplo de break en un while: adivinar número
                | import random
                | numero_secreto = random.randint(1, 10)
                | intentos = 0
                | 
                | while True:
                |     intento = int(input('Adivine el número (1-10): '))
                |     intentos += 1
                |     if intento == numero_secreto:
                |         print(f'¡Correcto! Lo logró en {intentos} intentos')
                |         break
                |     elif intento < numero_secreto:
                |         print('Muy bajo, intente un número mayor')
                |     else:
                |         print('Muy alto, intente un número menor')


    p.mt-4 La sentencia continue omite las instrucciones restantes de la iteración actual y pasa a la siguiente. A diferencia de break, no termina el ciclo, solo salta una iteración. Es útil cuando ciertos elementos deben ser ignorados sin detener el procesamiento.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/22.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo de continue: imprimir solo pares
                | for num in range(1, 11):
                |     if num % 2 != 0:
                |         continue
                |     print(num)
                | 
                | # Salida: 2, 4, 6, 8, 10
                | # Ejemplo de continue: procesar solo datos válidos
                | datos = [10, -5, 8, 0, 'dato', 15, None]
                | suma = 0
                | 
                | for valor in datos:
                |     # Saltar valores no numéricos o no positivos
                |     if not isinstance(valor, (int, float)) or valor <= 0:
                |         continue
                |     suma += valor
                | 
                | print(f'Suma de valores positivos: {suma}')
                | # Salida: Suma de valores positivos: 33


    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/temas/t3/23.svg', style='width: 100px').m-auto
      
      .col
        p La cláusula else se puede asociar tanto a while como a for. Se ejecuta solo cuando el ciclo termina de manera natural (porque la condición dejó de cumplirse o se recorrió toda la secuencia). Si el ciclo se interrumpe con break, el bloque else no se ejecuta. Esta característica es útil para identificar si un ciclo completó su recorrido sin encontrar una condición de salida.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t3/24.png', alt='', style="width: 390px").m-auto
      .col-lg-6

        .tarjeta-codigo
            pre.language-python(language="python")
              code
                | # Ejemplo de else en un ciclo
                | for num in range(1, 6):
                |     print(num)
                | else:
                |     print('Ciclo terminado correctamente')
                | 
                | # Salida: 1, 2, 3, 4, 5, Ciclo terminado correctamente
                | # Ejemplo: verificar si un número es primo
                | numero = 17
                | 
                | for i in range(2, numero):
                |     if numero % i == 0:
                |         print(f'{numero} no es primo, divisible por {i}')
                |         break
                | else:
                |     print(f'{numero} es un número primo')
                | 
                | # Salida: 17 es un número primo

    .row.justify-content-center
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/25.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 Las sentencias de control permiten interrumpir, omitir o completar iteraciones. Cuando una repetición debe ejecutarse dentro de otra, se utilizan ciclos anidados.


    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4. Ciclos anidados

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/26.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t3/27.svg', style='width: 100px').m-auto
          
          .col
            p Un ciclo anidado contiene otro ciclo en su interior. El ciclo externo controla el recorrido principal, mientras que el interno completa sus repeticiones cada vez que avanza el ciclo exterior. Esta estructura se utiliza para procesar información organizada en dos dimensiones, como matrices y tablas.


        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p El anidamiento también permite recorrer filas y columnas de una hoja de cálculo, analizar los píxeles de una imagen, generar combinaciones y comparar los elementos de dos listas. Su aplicación facilita el procesamiento de datos que requieren varios niveles de repetición.


    p.mt-4 Para comprender cómo funcionan los ciclos anidados, a continuación, se presentan tres ejemplos aplicados: la generación de una tabla de multiplicar, la construcción de un triángulo de asteriscos y la búsqueda de coincidencias entre dos listas:

    .row.justify-content-center 
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Código. Ciclos anidados: tabla de multiplicar")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # Ejemplo: generar una tabla de multiplicar
              p.mb-0.px-3 for i in range(1, 4):
              p.mb-0.px-4     for j in range(1, 4):
              p.mb-0.px-5         producto = i * j
              p.mb-0.px-5         print(f'{i} x {j} = {producto}')
              p.px-3     print('---')
              p.mb-0 
              p.mb-0 # Salida:
              p.mb-0 # 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3, ---
              p.mb-0 # 2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6, ---
              p # 3 x 1 = 3, 3 x 2 = 6, 3 x 3 = 9, ---

              p El ciclo externo recorre los números del 1 al 3 y el interno los combina con el mismo rango. En cada repetición, se calcula y se muestra el producto correspondiente.
    
          .row(numero="2" titulo="Código. Programa: triángulo de asteriscos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # Programa: triángulo de asteriscos
              p filas = 5
 
              p.mb-0 for i in range(1, filas + 1):
              p.mb-0.px-3     for j in range(i):
              p.mb-0.px-5         print('*', end='')
              p.px-3     print()  # Salto de línea
 
              p.mb-0 # Salida:
              p.mb-0 # *
              p.mb-0 # **
              p.mb-0 # ***
              p.mb-0 # ****
              p # *****

              p El ciclo externo determina las cinco filas del triángulo y el interno imprime los asteriscos de cada una. La cantidad aumenta en cada fila hasta completar la figura.
    
          .row(numero="3" titulo="Código. Programa: buscar coincidencias entre listas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # Ejemplo: buscar coincidencias entre dos listas
              p.mb-0 lista_a = [1, 3, 5, 7, 9]
              p lista_b = [2, 4, 6, 7, 10]
 
              p.mb-0 coincidencias = []
              p.mb-0 for elemento_a in lista_a:
              p.mb-0.px-3     for elemento_b in lista_b:
              p.mb-0.px-4         if elemento_a == elemento_b:
              p.px-5             coincidencias.append(elemento_a)
 
              p.mb-0 print(f'Elementos comunes: {coincidencias}')
              p # Salida: Elementos comunes: [7]

              p Los ciclos comparan cada elemento de la primera lista con todos los elementos de la segunda. Cuando encuentran un valor común, lo agregan a la lista de coincidencias; en este caso, el resultado es 7.
    
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/t3/28.png', alt='', style="width: 100%").m-auto

    p.mt-4 Estos ciclos son potentes, pero aumentan el costo computacional. Si el ciclo externo realiza n iteraciones y el interno también, el número total de ejecuciones será n × n. Por esta razón, se recomienda usarlos con moderación y buscar alternativas cuando se trabaja con grandes volúmenes de datos. En muchos casos, el uso de conjuntos (set) o diccionarios (dict) permite reemplazar ciclos anidados por operaciones mucho más eficientes.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Los ciclos anidados permiten procesar datos organizados en varios niveles. Para controlar los valores que recorren los bucles, Python incorpora funciones de rango y recorrido.
















</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema3',
  data() {
    return {
      mostrarIndicador: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
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
