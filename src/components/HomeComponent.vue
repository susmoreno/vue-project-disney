<template>
  <div class="home">
      <div class="banner">
        <img :src="banner.img" alt="castillo">
      </div>
    <h1>Bienvenido al Parque Magic Kingdom de Disney</h1>
    
    <div v-for="(section, index) in sections" :key="index" class="seccionesflex">
      
      <div class="flex" :class="{ 'flex-reverse': index % 2 !== 0 }">
      <div class="imagen animate__animated">
        <img :src="section.img" alt="castillo">
      </div>
      <div>
      <h2 class="animate__animated animate__fadeInRight ">{{ section.title }}</h2>
      <p class="animate__animated animate__fadeIn animate__delay-1s">{{ section.content }}</p></div>
  </div>
    </div>
   
   <div>
      <h2>{{ titulo.mensaje }}</h2>
    </div>
    
    <div v-for="(sec, index) in seccion" :key="sec.id ? 'sec_' + sec.id : index" class="contenedor">  
          <div class="info animate__animated animate__bounceIn animate__delay-2s">
              
            <h3>{{ sec.segundo }}</h3>
            <img :src="sec.imag" alt="castillo">
            <p class="animate__animated animate__bounceIn animate__delay-3s">{{ sec.contenido }}</p>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      sections: [
        {
          title: 'El Parque Magic Kingdom de Disney',
          content: 'Magic Kingdom, o "Reino Mágico" en español, es un renombrado parque temático en Walt Disney World Resort, ubicado cerca de Orlando, Florida. Operado por The Walt Disney Company, abrió sus puertas el 1 de octubre de 1971, convirtiéndose en el parque más visitado del mundo y un ícono de Florida. Diseñado por WED Enterprises, ahora conocida como Walt Disney Imagineering, comparte similitudes con Disneyland en California. Con un récord de 20,492,000 visitantes en 2015, Magic Kingdom ha experimentado importantes remodelaciones desde 2011, destacando cambios en Main Street U.S.A., Fantasyland, Central Plaza y el Castillo de la Cenicienta, que ahora presenta cuatro torres nuevas. Entre el 18 de julio y el 10 de noviembre de 2015, la zona frontal del Castillo de la Cenicienta estuvo cerrada al público debido a trabajos de remodelación en los accesos por el portón central.',
          img:'src/noche.jpg',
          alt:'castillo',
        },
        {
          title: 'Historia',
          content: 'La construcción de Magic Kingdom y el resort comenzó en 1967, dirigida por The Walt Disney Company tras la muerte de Walt Disney. Aunque inicialmente similar a Disneyland en Anaheim, California, Magic Kingdom fue mejorado y construido en un área más extensa. Walt Disney, al observar un vaquero de Frontierland en Tomorrowland en Disneyland, buscó evitar tal mezcla de temas en el nuevo parque, llevando a la creación de los Utilidors, túneles que permiten a los empleados moverse discretamente. Inaugurado el 1 de octubre de 1971, Magic Kingdom fue la primera parte del proyecto para Florida, abriendo con dos hoteles: Disney´s Polynesian Resort y Disney´s Contemporary Resort. Con 23 atracciones, solo tres originales y veinte provenientes de Disneyland, el parque prometió aumentar la oferta. A lo largo de los años, Magic Kingdom solo cerró en cinco ocasiones, debido a eventos como el huracán Floyd y los ataques del 11 de septiembre, destacándose con ganancias de hasta 3 mil millones de dólares.',
           img:'src/historia.webp',
          alt:'castillo',
                
          },{
        title:'Transporte público y venta de entradas',
        content:'El diseño del resort sitúa a Magic Kingdom a más de una milla del estacionamiento, en el lado opuesto al Seven Seas Lagoon. Al llegar, los visitantes son dirigidos al Transportation and Ticket Center (TTC), donde se adquieren entradas y se ofrece transporte público para todo el complejo, junto con una pequeña tienda de recuerdos y una central de objetos perdidos para los cuatro parques temáticos. Para llegar a Magic Kingdom, los visitantes pueden utilizar el Walt Disney World Monorail System, el Ferry Boat o los autobuses, dependiendo de la ubicación de su hotel. Los hoteles más cercanos, como Disney´s Contemporary Resort, Disney´s Polynesian Resort y Disney´s Grand Floridian Spa & Resort, ofrecen ferry y Walt Disney World Monorail System. Los huéspedes de otros hoteles pueden usar autobuses para desplazarse al parque Magic Kingdom.',
        img:'src/entrada.jpg',

          },
        
      ],
      titulo:{
        mensaje:'Entretenimiento'
      },
      seccion: [{
        id: 4,
        imag:'src/navidad.jpg',
        titulo:'Entretenimiento especial Navidad',
        segundo:'Desfile Mickeys Once Upon a Christmastime Parade',
        contenido:' Este es un desfile especial de Navidad que presenta a los personajes de Disney vestidos con trajes festivos y decoraciones navideñas espectaculares.'
      },
      {
        id: 5,
        imag:'src/fuego.webp',
        segundo:'Holiday Wishes - Celebrate the Spirit of the Season',
        contenido:' Este es el espectáculo de fuegos artificiales navideño que se celebra en el Castillo de Cenicienta. Es una experiencia mágica con música.'
      },
       {
        id: 6,
        imag:'src/teatro.jpg',
        segundo:'A Frozen Holiday Wish in a iluminated Castle',
        contenido:'Anna, Elsa y otros personajes de Frozen se unen para iluminar el Castillo de Cenicienta con una ceremonia especial, poniendo música y cantado.'
      },
       {
        id: 7,
        imag:'src/micke.jpg',
        segundo:'Mickeys Most Merriest Celebration',
        contenido:'Este es un espectáculo que se lleva a cabo en el escenario del Castillo de Cenicienta, donde Mickey y sus amigos celebran la Navidad con música y baile.'
      },
       {
        id: 8,
        imag:'src/totally.jpg',
        segundo:'A Totally Tomorrowland Christmas',
        contenido:'Este es un espectáculo en Tomorrowland que presenta a los personajes de Toy Story junto con otros personajes de Disney.'
      },
        {
          id: 9,
        imag:'src/club.webp',
        segundo:'Club Tinsel',
        contenido:'Si buscas un ambiente más relajado y festivo, puedes visitar Club Tinsel en Cosmic Rays Starlight Café para bailar y disfrutar de la música.'
      },
       {
        id: 10,
        imag:'src/personajes.jpg',
        segundo:'Personajes Navideños',
        contenido:' Durante la temporada navideña, muchos personajes de Disney se visten con trajes festivos y están disponibles para saludos y fotografías.'
      },
       {
        id: 11,
        imag:'src/decoracion.jpg',
        segundo:'Decoraciones Navideñas',
        contenido:'Todo el parque estará decorado con hermosas luces y decoraciones navideñas, lo que crea un ambiente mágico y festivo.'
      },
      {
        id: 12,
        imag:'src/compras.jpg',
        segundo:'Compras Navideñas',
        contenido:'También puedes encontrar una amplia variedad de artículos temáticos de Navidad en las tiendas del parque, para que tus regalos sean magicos.'
      }
      ],
      banner:{
          img:'src/banner.webp',
          alt:'banner de navidad disney'
      }
    };
    
  }
}


</script>
<style scoped>
 @import "@/assets/styles.css";
</style>
