<template>
  <div id='vDesign'>
  <navbar></navbar>
    <section class="inbound-hero">
    	<div class="container">
    		<div class="row">
                <div class="inbound-hero-background  design-hero-background"></div>
                <div class="inbound-hero-text">
        			<h1>{{getLang.services.design.h1}}</h1>
        			<p>{{getLang.services.design.h1p}}</p>	
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
            <div class="row DesignAnimateLeft">
            <div id="uiux" class='markup'></div>
                <div class="col-md-6  col-xs-12 service-feature-left service-image">
                    <img src="/static/img/sketch.png" alt="Diseño de Producto">
                </div>
                <div class="col-md-6 col-xs-12 service-text-right">
                   <h2>{{getLang.services.design.s1t}}</h2>
                   <p>{{getLang.services.design.s1p}}</p>
               </div>
           </div>
           
           <div class="row DesignAnimateRight">
                <div id="branding" class='markup'></div>
                <div class="col-md-6 col-xs-12 service-text-left">
                   <h2>{{getLang.services.design.s2t}}</h2>
                   <p>{{getLang.services.design.s2p}}
                   </p>
               </div>
               <div class="col-md-6 col-xs-12 service-feature-right">
                   <img src="/static/img/branding.png" alt="Diseño de marca">
               </div>
           </div>
           <div class="row DesignAnimateLeft2">
                <div id="product" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/38.png" alt="Diseño de Producto">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right">
                   <h2>{{getLang.services.design.s3t}}</h2>
                   <p>{{getLang.services.design.s3p}}
                   </p>
               </div>
           </div>
           <div class="row DesignAnimateRight2">
           <div id="packaging" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-text-left">
                   <h2>{{getLang.services.design.s4t}}</h2>
                   <p>{{getLang.services.design.s4p}}
                   </p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/packaging.png" alt="Diseño de Empaque">
                </div>
           </div>
           <div class="row DesignAnimateLeft3">
                <div id="prototyping" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/flows.png" alt="Noko Arts - sketch and design">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right">
                   <h2>{{getLang.services.design.s5t}}</h2>
                   <p>{{getLang.services.design.s5p}}
                   </p>
               </div>
           </div>
           <div class="row DesignAnimateRight3">
           <div id="ilustration" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-text-left">
                   <h2>{{getLang.services.design.s6t}}</h2>
                   <p>{{getLang.services.design.s6p}}
                   </p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/ilustracion.png" alt="Diseño de Empaque">
                </div>
           </div>
           <div class="row call-btn">                  
                <div class="col-md-12 gdd-start-now Design-button">                   
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
    components: {
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