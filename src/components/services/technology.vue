<template>
  <div id='vTechonoglogy'>
  <navbar></navbar>
   <section class="inbound-hero">
      <div class="container">
        <div class="row">
                <div class="inbound-hero-background  tecnology-hero-background"></div>
                <div class="inbound-hero-text">
              <h1>{{getLang.services.technology.h1}}</h1>
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
                   <h2 id="uiux">{{getLang.services.technology.s1t}}</h2>
                   <p>{{getLang.services.technology.s1p}}</p>
               </div>
           </div>
           
           <div class="row AnimateRight">
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2 id="branding">{{getLang.services.technology.s2t}}</h2>
                   <p>{{getLang.services.technology.s2p}}
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
                   <h2 id="product">{{getLang.services.technology.s3t}}</h2>
                   <p>{{getLang.services.technology.s3p}}
                   </p>
               </div>
           </div>
           <div class="row AnimateRight2">
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2 id="packaging">{{getLang.services.technology.s4t}}</h2>
                   <p>{{getLang.services.technology.s4p}}
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
                   <h2 id="prototyping">{{getLang.services.technology.s5t}}</h2>
                   <p>{{getLang.services.technology.s5p}}
                   </p>
               </div>
           </div>
           <div class="row call-btn">                  
                <div class="col-md-12 gdd-start-now">                   
                    <a class="typeform-share button -green plan-button" :href="link(getLang.global.form)" data-mode="popup" target="_blank">{{getLang.global.quoteButton}}<span id="plan-arrow"><i class="material-icons">navigation</i></span></a>
                </div>
            </div> 

       </div>
   </section>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    created () {
    },
    name: 'Design',
    data () {
      return {
        msg: 'Design'
      }
    },
    methods: {
      link (link) {
        return link
      }
    },
    computed: {
      ...mapGetters({
        getLang: 'getLang'
      })
    }
  }
</script>
<style scoped>
</style>