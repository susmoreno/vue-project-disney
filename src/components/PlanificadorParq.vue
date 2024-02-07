<template>
  <div class="planificador">
    <h2>Magic Kingdom Park</h2>
    <div class="horarios-agregados" v-if="horarios.length > 0">
      <h2>Horarios Agregados</h2>
      <ul>
        <li v-for="horario in horariosOrdenados" :key="horario.id">
          {{ horario.nombre }} de {{ horario.horaInicio }} a {{ horario.horaFin }}
          <button class="eliminar-button" @click="eliminarHorario(horario.id)">Eliminar Horario</button>
        </li>
      </ul>
      <p>Total de atracciones seleccionadas: {{ totalAtracciones }}</p>
    </div>
    <div v-for="atraccion in atracciones" :key="atraccion.id" class="atraccion animate__animated animate__fadeInLeft">
      <div><img :src="atraccion.imagen" alt="Imagen de la atracción" /></div>
      <h3>{{ atraccion.nombre }}</h3>
      <p>{{ atraccion.descripcion }}</p>
      <label for="horaInicio">Hora de Inicio:</label>
      <input type="time" v-model="atraccion.horaInicio" />
      <label for="horaFin">Hora de Fin:</label>
      <input type="time" v-model="atraccion.horaFin" />
      <button @click="agregarHorario(atraccion)">Agregar Horario</button>
      <p class="success-message animate__animated animate__pulse" v-if="atraccion.successMessage">{{ atraccion.successMessage }}</p>
      <p class="error-message animate__animated animate__shakeX" v-if="atraccion.errorMessage">{{ atraccion.errorMessage }}</p>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        atracciones: [
          {
            id: 1,
            nombre: 'Space Mountain',
            imagen: 'src/space_mountain.jpg',
            descripcion: 'Una montaña rusa en la oscuridad ambientada en el espacio exterior.',
            hora: '',
            horarios: [],
          },
          {
            id: 2,
            nombre: 'Pirates of the Caribbean',
            imagen: 'src/caribbean_pirates.jpg',
            descripcion: 'Un paseo acuático a través de una aventura pirata llena de animatrónicos y tesoros.',
            hora: '',
            horarios: [],
          },
          {
            id: 3,
            nombre: 'The Haunted Mansion',
            imagen: 'src/haunted_mansion.jpg',
            descripcion: 'Un paseo oscuro que te lleva a una mansión encantada llena de fantasmas y humor.',
            hora: '',
            horarios: [],
          },
          {
            id: 4,
            nombre: 'Big Thunder Mountain Railroad',
            imagen: 'src/big_thunder.jpg',
            descripcion: 'Una montaña rusa tematizada en el Salvaje Oeste.',
            hora: '',
            horarios: [],
          },
          {
            id: 5,
            nombre: 'It´s a Small World',
            imagen: 'src/small_world.jpg',
            descripcion: 'Un paseo en barca que muestra escenas de todo el mundo con muñecos cantantes.',
            hora: '',
            horarios: [],
          },
          {
            id: 6,
            nombre: 'Splash Mountain',
            imagen: 'src/splash_mountain.jpg',
            descripcion: 'Una emocionante montaña rusa acuática basada en el cuento del Tío Remus.',
            hora: '',
            horarios: [],
          },
          {
            id: 7,
            nombre: 'Seven Dwarfs Mine Train',
            imagen: 'src/seven_dwarfs.jpg',
            descripcion: 'Una montaña rusa suave que te lleva a través de la mina de los Siete Enanitos de Blancanieves.',
            hora: '',
            horarios: [],
          },
          {
            id: 8,
            nombre: 'Peter Pan´s Flight',
            imagen: 'src/peter_pan.jpg',
            descripcion: 'Un vuelo a bordo de barcas que recrea escenas de la película Peter Pan.',
            hora: '',
            horarios: [],
          },
          {
            id: 9,
            nombre: 'The Jungle Cruise',
            imagen: 'src/jungle_cruise.jpg',
            descripcion: 'Un recorrido en barca por la selva con un guía cómico y animales animatrónicos.',
            hora: '',
            horarios: [],
          },
          {
            id: 10,
            nombre: 'The Enchanted Tiki Room',
            imagen: 'src/enchanted_tiki.jpg',
            descripcion: 'Un espectáculo de aves tropicales y flores que cobran vida.',
            hora: '',
            horarios: [],
          },
          {
            id: 11,
            nombre: 'Under the Sea ~ Journey of the Little Mermaid',
            imagen: 'src/under_the_sea.jpg',
            descripcion: 'Un paseo que te sumerge en la historia de La Sirenita.',
            hora: '',
            horarios: [],
          },
          {
            id: 12,
            nombre: 'The Carousel of Progress',
            imagen: 'src/carousel_of_progress.jpg',
            descripcion: 'Un espectáculo teatral que muestra la evolución de la tecnología a lo largo del tiempo.',
            hora: '',
            horarios: [],
          },
          {
            id: 13,
            nombre: 'Dumbo the Flying Elephant',
            imagen: 'src/dumbo.jpg',
            descripcion: 'Un paseo en elefantes que puedes controlar para elevarte o descender.',
            hora: '',
            horarios: [],
          },
          {
            id: 14,
            nombre: 'Tomorrowland Speedway',
            imagen: 'src/tomorrowland_speedway.jpg',
            descripcion: 'Una pista de carreras para niños en coches de carreras.',
            hora: '',
            horarios: [],
          },
          {
            id: 15,
            nombre: 'Cinderella´s Castle',
            imagen: 'src/cinderella.jpg',
            descripcion: 'El icónico castillo de cuento de hadas que sirve como el símbolo central y corazón de Magic Kingdom en Walt Disney World.',
            hora: '',
            horarios: [],
          }
          ],
      horarios: [],
      totalAtracciones: 0,
    };
  },
  created() {
    const storedHorarios = localStorage.getItem('horarios');
    if (storedHorarios) {
      this.horarios = JSON.parse(storedHorarios);
    }
  },
  mounted() {
    this.calcularTotalAtracciones(); // Asegúrate de que esta función esté definida correctamente
  },
  watch: {
    horarios: {
      handler() {
        localStorage.setItem('horarios', JSON.stringify(this.horarios));
        this.calcularTotalAtracciones(); // Asegúrate de que esta función esté definida correctamente
      },
      deep: true,
    },
  },
  computed: {
    horariosOrdenados() {
      return this.horarios
        .slice()
        .sort((a, b) => {
          const horaInicioA = a.horaInicio || '';
          const horaInicioB = b.horaInicio || '';
          return horaInicioA.localeCompare(horaInicioB);
        });
    },
  },
    methods: {
    agregarHorario(atraccion) {
      const nuevoHorario = {
        horaInicio: atraccion.horaInicio,
        horaFin: atraccion.horaFin,
      };

      if (this.esHorarioValido(nuevoHorario) && !this.esHorarioOcupado(nuevoHorario)) {
        this.horarios.push({
          id: this.horarios.length + 1,
          nombre: atraccion.nombre,
          horaInicio: atraccion.horaInicio,
          horaFin: atraccion.horaFin,
        });

        atraccion.horaInicio = '';
        atraccion.horaFin = '';
        this.$set(atraccion, 'successMessage', 'Horario agregado con éxito.');

        // Limpiar el mensaje de éxito después de 3 segundos
        setTimeout(() => {
          this.$set(atraccion, 'successMessage', '');
        }, 3000);

        this.$set(atraccion, 'errorMessage', ''); // Limpiar el mensaje de error
      } else {
        this.$set(atraccion, 'errorMessage', 'El horario seleccionado no es válido o está ocupado.');
        this.$set(atraccion, 'successMessage', ''); // Limpiar el mensaje de éxito
      }
    },
    esHorarioValido(horario) {
      return horario.horaInicio < horario.horaFin;
    },
    esHorarioOcupado(nuevoHorario) {
      for (const horarioExistente of this.horarios) {
        if (
          (nuevoHorario.horaInicio >= horarioExistente.horaInicio && nuevoHorario.horaInicio <= horarioExistente.horaFin) ||
          (nuevoHorario.horaFin >= horarioExistente.horaInicio && nuevoHorario.horaFin <= horarioExistente.horaFin)
        ) {
          return true;
        }
      }
      return false;
    },
    eliminarHorario(horarioId) {
      this.horarios = this.horarios.filter((horario) => horario.id !== horarioId);
    },
    calcularTotalAtracciones() {
      this.totalAtracciones = this.horarios.length;
    },
  },
  
};
</script>
  
  <style scoped>
    @import "@/assets/styles.css";
  </style>