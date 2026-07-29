<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Operadores de rango de datos: bucles

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/1.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/2.svg', style='width: 100px').m-auto
          
          .col
            p Cuando se trabaja con ciclos en Python, frecuentemente es necesario generar secuencias de números o recorrer rangos específicos de valores. Los operadores y funciones de rango de datos cumplen este propósito, proporcionan los valores sobre los cuales se ejecutan los bucles. La función range() es la más utilizada en este contexto, aunque Python ofrece otras herramientas que complementan su funcionalidad, como enumerate(), zip(), reversed() y sorted().

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Dominar estas funciones permite construir bucles precisos, recorrer colecciones con eficiencia y manipular índices de forma adecuada. Además, facilita la generación de datos de prueba, la implementación de algoritmos matemáticos y el procesamiento ordenado de información. En el desarrollo de <em>software</em>, su uso es frecuente para controlar recorridos y organizar datos.


    p.mt-4 Las funciones de recorrido facilitan la generación y organización de secuencias. La primera de ellas es range(), empleada para producir series de números enteros.


    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1. Función range()

    figure
      img(src='@/assets/curso/temas/t4/3.png', alt='', style="width: 1280px").m-auto

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/temas/t4/4.svg', style='width: 100px').m-auto
      
      .col
        p La función range() genera una secuencia inmutable de números enteros que se utiliza principalmente en ciclos for. Acepta uno, dos o tres argumentos, que permiten configurar el inicio, el fin y el incremento de la secuencia generada. Es importante recordar que el valor final especificado no se incluye en la secuencia; esta característica se conoce como intervalo semiabierto.

    p.mt-4 La versatilidad de range() radica en que admite uno, dos o tres argumentos, con efectos distintos en la secuencia generada. La tabla resume estas formas de uso con un ejemplo de cada una.

    .row.justify-content-center.mt-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 10.
          span Formas de uso de la función range()

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #FE9841")
              tr
                th Sintaxis
                th Descripción
                th Ejemplo

            tbody
              tr(style="background-color: #F6F9F4")
                td range(fin)
                td Genera números desde 0 hasta fin-1.
                td range(5) → 0, 1, 2, 3, 4

              tr
                td range(inicio, fin)
                td Genera números desde inicio hasta fin-1.
                td range(2, 6) → 2, 3, 4, 5

              tr(style="background-color: #F6F9F4")
                td range(inicio, fin, paso)
                td Genera números con incremento definido.
                td range(0, 10, 2) → 0, 2, 4, 6, 8


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Dominar las tres formas de range() permite generar exactamente la secuencia de números que requiere cada ciclo, recordando siempre que el valor final queda excluido. Esta función es la herramienta más utilizada para controlar las iteraciones de un bucle for.



    p.mt-4 Para comprender la aplicación de la función range(), se presentan dos códigos: el primero muestra la generación de secuencias numéricas y el segundo explica su uso eficiente de la memoria:

    .row.justify-content-center
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
            .tarjeta.clr--pink02.p-4(titulo="Código. Formas de uso de range()")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # Ejemplos con range()
                  p.mb-0 >>> list(range(5))
                  p [0, 1, 2, 3, 4]
 
                  p.mb-0 >>> list(range(2, 8))
                  p [2, 3, 4, 5, 6, 7]
 
                  p.mb-0 >>> list(range(0, 20, 5))
                  p [0, 5, 10, 15]
 
                  p.mb-0 # Secuencia decreciente con paso negativo
                  p.mb-0 >>> list(range(10, 0, -2))
                  p [10, 8, 6, 4, 2]
 
                  p.mb-0 # Cuenta regresiva
                  p.mb-0 >>> list(range(5, 0, -1))
                  p [5, 4, 3, 2, 1]

                  p El código genera secuencias con diferentes valores de inicio, límite e incremento, incluido el recorrido descendente. En todos los casos, el valor final se excluye de la secuencia.

                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t4/5.png', alt='', style="width: 480px").m-auto
      
            div(titulo="Código. Eficiencia de range() en memoria")
              .row.align-items-center
                .col-lg-6
                  p.mb-0 # range() es eficiente en memoria
                  p.mb-0 >>> numeros = range(1, 1000001)  # Rango de un millón
                  p.mb-0 >>> type(numeros)
                  p.mb-0 &lt;class 'range'&gt;
                  p >>> # No se almacenan los números, solo la regla para generarlos

                  p El código crea un rango de un millón de números sin almacenarlos individualmente. Python conserva únicamente la regla necesaria para generarlos durante el recorrido.
                
                .col-lg-6
                  figure
                    img(src='@/assets/curso/temas/t4/6.png', alt='', style="width: 480px").m-auto


    p La función range() define el inicio, el límite y el incremento de una secuencia. A continuación, se analiza su integración con el ciclo for para controlar un número determinado de repeticiones.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2. Uso de range() en ciclos for

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/7.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p La combinación del ciclo for con la función range() es una de las construcciones más comunes en Python. Permite ejecutar un bloque de instrucciones un número exacto de veces, controlando con precisión el valor de la variable de iteración. Esta combinación es especialmente útil en problemas matemáticos, generación de datos y recorrido indexado de secuencias.

        .row.align-items-start.mt-2
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/8.svg', style='width: 100px').m-auto
          
          .col
            p Este recurso permite repetir una acción el número de veces requerido, sin depender de una lista existente. Se emplea en tareas frecuentes de cálculo y generación de datos de prueba, como sumar series numéricas, construir tablas, generar identificadores o ejecutar procesos con repeticiones definidas.

    p.mt-4 Para comprender cómo el ciclo for y la función range() controlan repeticiones numéricas, a continuación, se presentan ejemplos para mostrar los primeros números de una secuencia, calcular una suma, construir una tabla de multiplicar, obtener un factorial y generar potencias de 2:

    TabsC.color-acento-botones
        .py-3.py-md-4.bg-3(titulo="Código. Ciclo for con range(): primeros 5 números")
          .row.p-4
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/9.png')
            .col-md-8.mb-4.mb-md-0
              p.mb-0 # Imprimir los primeros 5 números
              p.mb-0 for i in range(5):
              p.px-3     print(i)
 
              p.mb-0 # Calcular la suma de los números del 1 al 100
              p.mb-0 suma = 0
              p.mb-0 for numero in range(1, 101):
              p.mb-0.px-3     suma += numero
              p print(f'La suma es: {suma}')
 
              p.mb-0 # Tabla de multiplicar del 5
              p.mb-0 for i in range(1, 11):
              p.px-3     print(f'5 x {i} = {5 * i}')

              p El primer código muestra los números del 0 al 4. Los dos códigos siguientes calculan la suma de los números del 1 al 100 y generan la tabla de multiplicar del 5, desde 5 × 1 hasta 5 × 10.
                  
            
        
        .py-3.py-md-4.bg-3(titulo="Código. Programa: calcular factorial con for y range()")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/10.png')
            .col-md-8
              p.mb-0 # Programa: calcular factorial
              p.mb-0 n = int(input('Ingrese un número: '))
              p factorial = 1
 
              p.mb-0 for i in range(1, n + 1):
              p.px-3     factorial *= i
 
              p print(f'{n}! = {factorial}')
 
              p # Ejemplo: 5! = 120

              p El código multiplica los números enteros desde 1 hasta el valor ingresado. Por ejemplo, si se ingresa 5, calcula 1×2×3×4×5 y obtiene 120.

        .py-3.py-md-4.bg-3(titulo="Código. Programa: generar potencias de 2")
          .row.p-4
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/11.png')
            .col-md-8
              p.mb-0 # Programa: generar potencias de 2
              p.mb-0 print('Potencias de 2:')
              p.mb-0 for i in range(1, 11):
              p.px-3     print(f'2^{i} = {2 ** i}')
 
              p.mb-0 # Salida:
              p.mb-0 # 2^1 = 2
              p.mb-0 # 2^2 = 4
              p.mb-0 # 2^3 = 8
              p.mb-0 # ...
              p # 2^10 = 1024

              p El código eleva el número 2 a los exponentes comprendidos entre 1 y 10. En cada repetición, muestra la potencia y el resultado correspondiente.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/12.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 La combinación de for y range() controla repeticiones numéricas. Cuando también se necesita conocer la posición de cada elemento de una secuencia, resulta conveniente utilizar enumerate().

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3. Función enumerate()

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/temas/t4/13.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Cuando se recorre una secuencia con un ciclo for pero también se necesita conocer la posición (índice) de cada elemento, se utiliza la función enumerate(). Esta función asocia a cada elemento un número consecutivo que comienza en 0, generando pares (índice, valor). Resulta mucho más elegante que manejar un contador manualmente.

        p Conocer la posición de cada elemento facilita tareas como las siguientes:

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Numerar las opciones de un menú. 

    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Mostrar resultados según su orden de aparición. 

    
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Identificar la fila en la que se encuentra un dato. 

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p En estos casos, la función proporciona la posición y el valor de cada elemento, sin necesidad de crear ni actualizar un contador adicional.



    p.mt-4 Para comprender cómo la función enumerate() relaciona cada elemento con su posición, a continuación, se presentan tres códigos: numeración de una lista, comparación con range(len()) y construcción de un menú dinámico:

    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-14")
          .tarjeta.clr--pink02.p-4(titulo="Código. Uso de enumerate() para índice y valor")
            .row.align-items-center
              .col-lg-6
                p.mb-0 # Usar enumerate para obtener índice y valor
                p frutas = ['manzana', 'pera', 'uva']
 
                p.mb-0 for indice, fruta in enumerate(frutas):
                p     print(f'{indice}: {fruta}')
 
                p.mb-0 # Salida:
                p.mb-0 # 0: manzana
                p.mb-0 # 1: pera
                p # 2: uva
 
                p.mb-0 # También se puede iniciar en un número diferente
                p.mb-0 for num, fruta in enumerate(frutas, start=1):
                p.px-3     print(f'{num}. {fruta}')
 
                p.mb-0 # Salida:
                p.mb-0 # 1. manzana
                p.mb-0 # 2. pera
                p # 3. uva

                p El código recorre una lista de frutas y muestra cada elemento con su posición. La numeración puede comenzar en 0 o modificarse para iniciar en 1. 

              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/t4/14.png', alt='', style="width: 480px").m-auto
    
          div(titulo="Código. Comparación: enumerate() vs. range(len())")
            .row.align-items-center
              .col-lg-6
                p.mb-0 # Forma no recomendada (usando len y range)
                p.mb-0 for i in range(len(frutas)):
                p.px-3     print(f'{i}: {frutas[i]}')
 
                p.mb-0 # Forma recomendada (usando enumerate)
                p.mb-0 for i, fruta in enumerate(frutas):
                p.px-3     print(f'{i}: {fruta}')

                p Ambas formas permiten obtener la posición y el valor de cada fruta. Sin embargo, enumerate() expresa esta tarea de manera más directa, clara y fácil de leer.
              
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/t4/15.png', alt='', style="width: 480px").m-auto

          div(titulo="Código. Programa: menú dinámico con enumerate()")
            .row.align-items-center
              .col-lg-6
                p.mb-0 # Programa: menú dinámico numerado
                p.mb-0 opciones = ['Registrarse', 'Iniciar sesión',
                p.px-3  'Recuperar clave', 'Salir']
 
                p.mb-0 print('===== MENÚ =====')
                p.mb-0 for numero, opcion in enumerate(opciones, start=1):
                p.px-3  print(f'{numero}. {opcion}')
 
                p.mb-0 eleccion = int(input('Elija una opción: '))
                p print(f'Usted eligió: {opciones[eleccion - 1]}')

                p El código enumera las opciones del menú desde 1 y solicita seleccionar una de ellas. Después, utiliza el número ingresado para mostrar la opción correspondiente.
              
              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/t4/16.png', alt='', style="width: 480px").m-auto

    
    .row.justify-content-center
      .col-lg-10
        .row.align-items-start
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/17.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 La función enumerate() relaciona cada elemento con su posición. Para recorrer de manera simultánea datos almacenados en dos o más secuencias, Python dispone de la función zip().



    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4. Función zip()

    p La función zip() combina dos o más secuencias en pares de elementos correspondientes. Se utiliza para recorrer varias secuencias en paralelo dentro de un mismo ciclo. El resultado contiene tantos pares como elementos tenga la secuencia más corta.

    p Para comprender la utilidad de la función zip(), se presentan algunos casos en los que permite relacionar datos almacenados en listas paralelas:

    .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/18.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center Nombres y edades
                p.mb-0 Relaciona cada persona con su edad. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/19.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center Productos y precios
                p.mb-0 Asocia cada producto con su valor. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/20.svg' alt='')
            .tarjeta.color-primario.w-100
              .p-4
                h4.text-center Estudiantes y calificaciones
                p.mb-0 Vincula cada estudiante con su resultado. 


    p.mt-4 De esta manera, zip() permite recorrer y procesar datos relacionados de forma conjunta, sin utilizar índices manuales.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/temas/t4/21.svg', style='width: 180px').m-auto
                
                .col
                  p Su principal ventaja es la legibilidad, en lugar de acceder a cada lista por separado mediante índices, el ciclo for recibe directamente una variable por cada secuencia combinada. Esta forma de recorrer datos relacionados resulta clara y reduce los errores de desfase entre listas.


    p.mt-4 Para comprender cómo zip() relaciona y recorre datos almacenados en varias secuencias, a continuación, se presentan ejemplos con dos y tres listas, así como con secuencias de diferente longitud:


    .row.justify-content-center 
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/temas/t4/22.png', alt='', style="width: 100%").m-auto
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Código. Uso de zip() para combinar listas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # Combinar dos listas con zip
              p.mb-0 nombres = ['Ana', 'Luis', 'María']
              p.mb-0 edades = [25, 30, 22]
 
              p.mb-0 for nombre, edad in zip(nombres, edades):
              p.px-3    print(f'{nombre} tiene {edad} años')
 
              p.mb-0 # Salida:
              p.mb-0 # Ana tiene 25 años
              p.mb-0 # Luis tiene 30 años
              p # María tiene 22 años

              p.mb-0 El código relaciona cada nombre con la edad que ocupa la misma posición en la segunda lista. Luego, recorre las parejas y muestra la información de cada persona.
    
          .row(numero="2" titulo="Código. Uso de zip() con tres listas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # Combinar tres listas
              p.mb-0 nombres = ['Ana', 'Luis', 'Pedro']
              p.mb-0 ciudades = ['Ibagué', 'Bogotá', 'Medellín']
              p profesiones = ['Ingeniera', 'Médico', 'Arquitecto']
 
              p.mb-0 for nombre, ciudad, profesion in zip(nombres, ciudades, profesiones):
              p.px-3    print(f'{nombre} es {profesion} en {ciudad}')

              p.mb-0 El código agrupa el nombre, la ciudad y la profesión ubicados en la misma posición de las tres listas. Después, recorre cada grupo y presenta la información asociada.
    
          .row(numero="3" titulo="Código. Comportamiento de zip() con longitudes diferentes")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 # zip() con secuencias de diferente longitud
              p.mb-0 lista_a = [1, 2, 3, 4, 5]
              p lista_b = ['a', 'b', 'c']
 
              p.mb-0 for num, letra in zip(lista_a, lista_b):
              p.px-3     print(f'{num}-{letra}')
 
              p.mb-0 # Salida:
              p.mb-0 # 1-a
              p.mb-0 # 2-b
              p.mb-0 # 3-c
              p # (los elementos 4 y 5 de lista_a son ignorados)

              p.mb-0 El código relaciona los números con las letras hasta que termina la lista más corta. Por esta razón, muestra tres parejas e ignora los números 4 y 5 de la primera lista.
    
      
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/23.svg', style='width: 100px').m-auto
          
          .col
            p.bg-1.p-2 El código relaciona los números con las letras hasta que termina la lista más corta. Por esta razón, muestra tres parejas e ignora los números 4 y 5 de la primera lista.



    p.mt-4 Una vez comprendido cómo zip() relaciona elementos de varias secuencias, es importante reconocer que los datos también pueden requerir un orden específico para facilitar su análisis. Por ello, a continuación, se presentan las funciones reversed() y sorted(), utilizadas para invertir recorridos y ordenar elementos, respectivamente.

    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5. Funciones reversed() y sorted()

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/temas/t4/24.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                figure
                  img(src="@/assets/curso/temas/t4/25.svg", alt="", style="width: 90px")

                p.mt-2 Las funciones reversed() y sorted() son útiles cuando se desea recorrer una secuencia en un orden diferente al original. La función reversed() invierte el orden de los elementos, mientras que sorted() devuelve una lista con los elementos ordenados.

                p Presentar la información en un orden distinto al de captura es una necesidad constante: mostrar los últimos registros primero, ordenar alfabéticamente una lista de nombres o clasificar calificaciones de mayor a menor. Estas funciones permiten obtener ese orden en el momento de recorrer los datos.

    p.mt-4 Una característica clave es que ninguna de las dos modifica la secuencia original: ambas devuelven el resultado como un nuevo recorrido u objeto, de modo que los datos iniciales se conservan. Distinguir entre invertir y ordenar, y entre orden ascendente y descendente, permite elegir la función adecuada para cada caso.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.bg-11.p-1 Código. Uso de las funciones reversed() y sorted()
    
        .tarjeta-codigo
            pre.language-python(language="python").mb-5
              code
                | # Recorrer una lista en orden inverso
                | numeros = [1, 2, 3, 4, 5]
                | 
                | for num in reversed(numeros):
                |     print(num)
                | 
                | # Salida: 5, 4, 3, 2, 1
                | 
                | # Recorrer una lista ordenada ascendentemente
                | desordenados = [5, 2, 8, 1, 9, 3]
                | 
                | for num in sorted(desordenados):
                |     print(num)
                | 
                | # Salida: 1, 2, 3, 5, 8, 9
                | 
                | # Orden descendente con sorted()
                | for num in sorted(desordenados, reverse=True):
                |     print(num)
                | 
                | # Salida: 9, 8, 5, 3, 2, 1

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Ambas funciones crean una nueva secuencia sin modificar la original. Esto es importante cuando se necesita preservar el orden original de los datos para otros procesos posteriores. 


</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'

export default {
  name: 'Tema4',
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
