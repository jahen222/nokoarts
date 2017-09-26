<template>
  <div id='vDesign'>
  <navbar></navbar>
    <section class="inbound-hero">
    	<div class="container">
    		<div class="row">
                <div class="inbound-hero-background  design-hero-background"></div>
                <div class="inbound-hero-text">
        			<h1>Diseño Integral</h1>
        			<p>Da los primeros pasos en el crecimiento visual de tu marca</p>	
                     <div class="arrow-scroll arrow-inbound">
                        <div class="arrow-scroll__wrap arrow-scroll__wrap_animated">
                            <a class="Home__next arrow-inbound" href="#uiux"><img src="/static/img/chevron.svg" alt="Next Section"></a>
                        </div>
                    </div>
                </div>     	
    		</div>
    	</div>
    </section>
    <section>
    	
    </section>   
   <section class="text-center services-section">
       <div class="container design-container">
            <div class="row">
                <div class="col-md-6  col-xs-12 service-feature-left service-image">
                    <img src="/static/img/sketch.png" alt="Diseño de Producto">
                </div>
                <div class="col-md-6 col-xs-12 service-text-right">
                   <h2 id="uiux">UI/UX Design</h2>
                   <p>Diseña el modo en que tus usuarios vivirán la experiencia de tu marca. Nuestro equipo diseñará, desarrollará y generará puntos de conversión de manera armónica para lograr tus metas comerciales y hacer vivir a nuestros usuarios una experiencia inolvidable.</p>
               </div>
           </div>
           
           <div class="row">
               <div class="col-md-6 col-xs-12 service-text-left">
                   <h2 id="branding">Diseño de Marca</h2>
                   <p>Si puedes soñarlo, puedes hacerlo realidad. Desde tu logo hasta la identidad gráfica de toda tu marca, haz que todo el mundo recuerde quién eres y qué haces.
                   </p>
               </div>
               <div class="col-md-6 col-xs-12 service-feature-right">
                   <img src="/static/img/branding.png" alt="Diseño de marca">
               </div>
           </div>
           <div class="row">
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/38.png" alt="Diseño de Producto">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right">
                   <h2 id="product">Diseño de Producto</h2>
                   <p>Nos gusta ir más allá, el universo de nuestras marcas no se limita a lo digital ¿Por qué entonces nosotros debemos limitarnos? Queremos representar tu marca en todos los aspectos, queremos hacer que tu diseño crezca junto a tus ideas.
                   </p>
               </div>
           </div>
           <div class="row">
               <div class="col-md-6 col-xs-12 service-text-left">
                   <h2 id="packaging">Diseño de Empaque</h2>
                   <p>Nos obsesiona la estética de los elementos visuales y de cómo lucirá un producto en el mercado. Nuestra meta es crear un mensaje conciso que destaque y refleje el crecimiento y la filosofía de la marca. Buscamos hacer que todo el mundo voltee a ver lo que tienes que decir, donde sea que tu producto o servicio se encuentre
                   </p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/packaging.png" alt="Diseño de Empaque">
                </div>
           </div>
           <div class="row">
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/flows.png" alt="Noko Arts - sketch and design">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right">
                   <h2 id="prototyping">Prototipado</h2>
                   <p>Dale vida a tus ideas, lo más difícil de iniciar un proyecto es encontrar el primer paso, nosotros te ayudamos a bocetear, planificar y generar una idea sustentable para las plataformas o espacios que tu marca ocupará.
                   </p>
               </div>
           </div>
           <div class="row">
               <div class="col-md-6 col-xs-12 service-text-left">
                   <h2 id="ilustration">Ilustración</h2>
                   <p>La mejor forma de decir un mensaje es ilustrándolo, crea un personaje, una viñeta o una trama para tus diseño. Haz que tus ideas vuelen y lleguen a la mente de tus consumidores en diseños irreverentes y poco usuales.
                   </p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/ilustracion.png" alt="Diseño de Empaque">
                </div>
           </div>
           <div class="row">                  
                <div class="col-md-12 gdd-start-now">                   
                    <a class="typeform-share button -green plan-button" href="https://nokoarts.typeform.com/to/waE9gv" data-mode="popup" target="_blank">Pedir Presupuesto<span id="plan-arrow"><i class="material-icons">navigation</i></span></a>
                </div>
            </div> 

       </div>
   </section>
  </div>
</template>
<script>
  export default {
    created () {
      window.anima()
      window.call2action()
    },
    components: {
    },
    name: 'Design',
    data () {
      return {
        msg: 'Design'
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>