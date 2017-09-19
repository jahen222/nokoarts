<template>
  <div id='vTechonoglogy'>
  <navbar></navbar>
   <section class="inbound-hero">
      <div class="container">
        <div class="row">
                <div class="inbound-hero-background  tecnology-hero-background"></div>
                <div class="inbound-hero-text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> 
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
            <div class="row AnimateLeft">
                <div class="col-md-6  col-xs-12 service-feature-left service-image">
                    <img class="" src="/static/img/Web-apps.png" alt="Noko Arts - Aplicaciones Web" style="max-height: 400px;">
                </div>
                <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2 id="uiux">Aplicaciones Web</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.</p>
               </div>
           </div>
           
           <div class="row AnimateRight">
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2 id="branding">Aplicaciones Mobiles</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.
                   </p>
               </div>
               <div class="col-md-6 col-xs-12 service-feature-right">
                   <img src="/static/img/mobile-apps.png" alt="Noko Arts - Aplicaciones Moviles">
               </div>
           </div>
           <div class="row AnimateLeft2">
               <div class="col-md-6 col-xs-12 service-feature-left other-class">
                   <img src="/static/img/eCommerce.png" alt="Noko Arts - eCommerce & Websites">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2 id="product">eCommerce & Websites</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.
                   </p>
               </div>
           </div>
           <div class="row AnimateRight2">
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2 id="packaging">Landing Page Optimizacion</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.
                   </p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/landing-page.png" alt="Noko Arts - Landing Page Optimizacion" style="max-height: 300px; margin-right: 20%;">
                </div>
           </div>
           <div class="row AnimateLeft3">
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/internetOfThings.png" alt="Noko Arts - Internet of things">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2 id="prototyping">Internet of things</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.
                   </p>
               </div>
           </div>
           <div class="row">                  
                <div class="col-md-12 gdd-start-now">                   
                    <a class="typeform-share button -green plan-button" href="https://nokoarts.typeform.com/to/waE9gv" data-mode="popup" target="_blank">Pedir Presupuesto Ahora<span id="plan-arrow"><i class="material-icons">navigation</i></span></a>
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