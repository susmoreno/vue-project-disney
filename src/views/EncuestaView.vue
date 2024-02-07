<template>
  <div>
    <h1>Descubre la mejor atracción para vos</h1>
    <form @submit.prevent="enviarRespuestas">
      <div v-for="(pregunta, index) in preguntas" :key="index" class="pregunta" :class="{ 'pregunta-incompleta': respuestasIncompletas && respuestas[index] === null }">
        <h2 class="h2pregunta">{{ pregunta.enunciado }}</h2>
        <div class="opciones">
          <div v-for="(opcion, i) in pregunta.opciones" :key="i" class="labelito">
            <input
              type="radio"
              :id="`opcion-${index}-${i}`"
              :name="`pregunta-${index}`"
              v-model="respuestas[index]"
              :value="i + 1"
            />
            <label :for="`opcion-${index}-${i}`">{{ opcion }}</label>
          </div>
        </div>
      </div>
      <button class="boton" type="submit">Enviar respuestas</button>
      <p class="error-message" v-if="respuestasIncompletas">Compruebe los datos ingresados.</p>
    </form>
    <div v-if="respuestaFinal !== null">
      <h2>Las Atracciones ideales para ti son:</h2>
      <p>{{ mensajePersonalizado[respuestaFinal] || 'No hay respuesta personalizada disponible.' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          enunciado: '¿Cuál de estas peliculas de disney es tu favorita?',
          opciones: ['Piratas del Caribe', 'Peter Pan', 'Dumbo', 'La Sirenita', 'La Cenicienta'],
        },
        {
          enunciado: '¿Qué opción te parece mas atractiva?',
          opciones: ['Navegar por el basto mar', 'Volar por el inmenso cielo', 'Planear con tus inmensas orejas', 'Bucear entre peces y sirenas', 'Convertirte en Princesa'],
        },
        {
          enunciado: '¿Qué tipo de atracción te gusta más?',
          opciones: ['Recorrido', 'Espectáculo en vivo', 'Carrusel', 'Montaña Rusa', 'Rueda de la fortuna'],
        },
        {
          enunciado: '¿Qué ambiente te parece mas atractivo?',
          opciones: ['La Selva', 'Ambiente tiki', 'Futurista', 'Montañas con cascadas', 'El castillo de una princesa'],
        },
        {
          enunciado: '¿Cómo te gustaría luchar contra tus enemigos?',
          opciones: ['Un duelo a muerte al estilo del viejo oeste', 'Duelo con espadas', 'Con picos de minero', 'Con poderes mágicos', 'Una batalla de naves espaciales'],
        },
        {
          enunciado: 'Si fueras un explorador, ¿a qué lugar misterioso te gustaría viajar?',
          opciones: ['Ciudad perdida en la jungla', 'Isla misteriosa en el océano', 'Cueva escondida en una montaña', 'Valle secreto en la tierra de hielo', 'Nuevos planetas'],
        }
        // ... Otras preguntas
      ],
      respuestas: [],
      respuestaFinal: null,
      mensajePersonalizado: {
        '1': 'Piratas del Caribe, Jungle Cruise y Big Thunder Mountain Railroad',
        '2': 'Peter Pan´s Flight, The enchanted tiki room y tomorrowland Speedway',
        '3': 'Dumbo The flying Elephant, The carousel of progress y Seven Dwarfs Mine Train',
        '4': 'Under the sea - Journey of the little mermaid, Splash Mountain y The Haunted Mansion',
        '5': 'Cinderella´s Castle, Its a Small World y Space Mountain.',
        // Agrega mensajes personalizados para cada opción
      },
      respuestasIncompletas: false,
      enviado: false,
    };
  },
  created() {
    this.respuestas = new Array(this.preguntas.length).fill(null);
  },
  methods: {
    enviarRespuestas() {
      if (this.validarRespuestas()) {
        this.calcularRespuestaFinal();
        console.log('Respuestas enviadas:', this.respuestas);
        this.enviado = true; // Establecer enviado a true después de enviar respuestas
      } else {
        this.respuestasIncompletas = true;
      }
    },
    validarRespuestas() {
      return this.respuestas.every((respuesta) => respuesta !== null);
    },
    calcularRespuestaFinal() {
      const conteoOpciones = [0, 0, 0, 0, 0];

      this.respuestas.forEach((opcion) => {
        if (opcion !== null) {
          conteoOpciones[opcion - 1]++;
        }
      });

      console.log('Conteo de opciones:', conteoOpciones);

      const indiceMasSeleccionado = conteoOpciones.indexOf(Math.max(...conteoOpciones));

      this.respuestaFinal = (indiceMasSeleccionado + 1).toString();
      this.respuestasIncompletas = false; // Restablecer a false después de calcular la respuesta final

      console.log('Tu Atracción Ideal es:', this.respuestaFinal);
    },
  },
};
</script>

<style scoped>
  @import "@/assets/styles.css";

  .pregunta-incompleta {
    border: 4px solid red;
  }
</style>