<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad
        ActividadController(:cuestionario="cuestionario")

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto Python: decisiones y ciclos en acción.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de las estructuras condicionales, los operadores, los ciclos y las funciones de recorrido en Python, mediante preguntas interactivas que fortalecen la toma de decisiones y la lógica de programación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué palabra reservada se utiliza en Python para iniciar una estructura condicional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'condition.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'if.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'switch.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'when.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La palabra reservada if da inicio a una estructura condicional en Python. La condición se expresa como una expresión booleana que al evaluarse produce un valor True o False.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué palabra reservada de Python se utiliza como abreviatura de else if para encadenar múltiples condiciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'then.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'elseif.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'elif.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'case.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La palabra reservada elif (abreviatura de else if) permite encadenar múltiples condiciones que se evalúan en orden.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué mecanismo utiliza Python para delimitar el bloque de código que pertenece a una estructura condicional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las llaves { }.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los paréntesis ( ).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La palabra reservada end.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La indentación con espacios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Python utiliza la indentación (con cuatro espacios por convención) para definir el bloque de código que pertenece a la estructura condicional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué palabra reservada se utiliza en Python cuando ninguna condición anterior se cumple?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'if.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'else.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'elife.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'for.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La palabra reservada else permite ejecutar un bloque de instrucciones cuando las condiciones anteriores no se cumplen.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál operador relacional en Python verifica si dos valores son iguales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '=',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '!=',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '==',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '&lt;&gt;',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El operador == compara si dos valores son iguales y devuelve True o False. No se debe confundir con =, que se utiliza para asignar valores a variables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué resultado produce el operador lógico and cuando ambas expresiones son verdaderas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'False.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'None.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'True.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Error.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El operador lógico and devuelve True únicamente cuando ambas expresiones son verdaderas; en cualquier otro caso devuelve False.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál operador se utiliza en Python para verificar si un elemento pertenece a una secuencia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'contains.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'in.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'inside.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'exists.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El operador in verifica si un elemento se encuentra dentro de una secuencia, como una cadena, una lista, una tupla, un conjunto o un diccionario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿A qué es equivalente la expresión x += 5 en Python?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'x = 5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'x == x + 5.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'x = x + 5.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'x * 5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El operador += es una forma abreviada de asignación compuesta; x += 5 equivale a escribir x = x + 5.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál estructura iterativa de Python ejecuta un bloque de instrucciones mientras una condición sea verdadera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ciclo for.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ciclo do-while.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ciclo while.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ciclo repeat.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El ciclo while ejecuta un bloque de instrucciones mientras una condición se mantenga verdadera. Python evalúa la condición antes de cada iteración.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es la principal utilidad del ciclo for en Python?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Validar entradas del usuario de forma indefinida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recorrer los elementos de una secuencia como una lista, tupla, cadena o rango.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar las estructuras condicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar solo una instrucción a la vez.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El ciclo for se utiliza para recorrer los elementos de una secuencia. Python asigna automáticamente el siguiente elemento a una variable de control en cada iteración.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué sentencia de Python interrumpe un ciclo de forma anticipada sin importar si la condición sigue siendo verdadera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'continue.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'exit.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'break.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'stop.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La sentencia break interrumpe inmediatamente el ciclo, sin importar si la condición sigue siendo verdadera.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué sentencia de Python omite las instrucciones restantes de la iteración actual y pasa a la siguiente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'break.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'skip.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'continue.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'pass.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La sentencia continue omite las instrucciones restantes de la iteración actual y pasa a la siguiente. A diferencia de break, no termina el ciclo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué valores genera la función range(5) en Python?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1, 2, 3, 4, 5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '0, 1, 2, 3, 4, 5.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5, 4, 3, 2, 1, 0.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '0, 1, 2, 3, 4.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La función range(5) genera una secuencia de cinco valores que comienza en 0 y termina en 4, sin incluir el número 5.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el propósito principal de la función enumerate() en Python?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ordenar los elementos de una secuencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asociar a cada elemento de una secuencia un número consecutivo que comienza en 0.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los elementos duplicados de una lista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Invertir el orden de una secuencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La función enumerate() asocia a cada elemento un número consecutivo que comienza en 0, generando pares (índice, valor).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función de zip() en Python?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprimir archivos para ahorrar espacio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar una secuencia de números enteros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Combinar dos o más secuencias en pares de elementos correspondientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Convertir una lista en un diccionario automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La función zip() combina dos o más secuencias en pares de elementos correspondientes; resulta útil para recorrer varias secuencias en paralelo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'En la evaluación de expresiones con varios operadores en Python, ¿cuál operador lógico tiene la MENOR precedencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'and.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'or.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'not.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'is.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El operador lógico or tiene la menor precedencia entre los operadores lógicos; se evalúa después de not y and.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál operador se recomienda para comparar una variable con el valor None en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '==',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '!=',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'is',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '=',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La comparación con None siempre debe hacerse con is en lugar de ==. None es un objeto único en Python y el operador is es más rápido y semánticamente correcto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el riesgo principal al trabajar con un ciclo while en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que Python no reconozca la palabra while.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Generar un ciclo infinito si no se actualiza la variable de la condición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que las variables se eliminen automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no pueda usarse con operadores lógicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Es indispensable que alguna instrucción dentro del ciclo modifique la variable que interviene en la condición. De lo contrario, el programa entraría en un ciclo infinito.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuándo se ejecuta la cláusula else asociada a un ciclo for o while en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando el ciclo se interrumpe con la sentencia break.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Siempre, al iniciar el ciclo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo cuando el ciclo termina de manera natural sin ejecutar break.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuando la condición inicial del ciclo es falsa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La cláusula else se ejecuta solo cuando el ciclo termina de manera natural (porque la condición dejó de cumplirse o se recorrió toda la secuencia). Si el ciclo se interrumpe con break, el bloque else no se ejecuta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la característica principal de los ciclos anidados en Python?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo pueden usarse con la estructura while.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se ejecutan una sola vez sin importar la condición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazan automáticamente a las estructuras condicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El ciclo interno se ejecuta completamente en cada iteración del ciclo externo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En un ciclo anidado, el ciclo interno se ejecuta completamente en cada iteración del ciclo externo. Si ambos realizan n iteraciones, el número total de ejecuciones será n × n.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Demuestra comprensión de las estructuras condicionales, los operadores, los ciclos y las funciones de recorrido en Python, aplicados a la lógica de programación.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
