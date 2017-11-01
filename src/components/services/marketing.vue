<template>
  <div id='vMarketing'>
  <navbar></navbar>
    <section class="inbound-hero">
    	<div class="container">
    		<div class="row">
                <div class="inbound-hero-background  marketing-hero-background"></div>
                <div class="inbound-hero-text">
        			     <h1>{{getLang.services.marketing.h1}}</h1>
                   <p>{{getLang.services.marketing.h1p}}</p>
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
            <div class="row MarkAnimateLeft">
                 <div id="socialMedia" class='markup'></div>
                <div class="col-md-6  col-xs-12 service-feature-left service-image">
                    <img src="/static/img/social-media.png" alt="Noko Arts - Social Media">
                </div>
                <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2>{{getLang.services.marketing.s1t}}</h2>
                   <p>{{getLang.services.marketing.s1p}}</p>
               </div>
           </div>
           
           <div class="row MarkAnimateRight">
                <div id="content" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2>{{getLang.services.marketing.s2t}}</h2>
                   <p>{{getLang.services.marketing.s2p}}</p>
               </div>
               <div class="col-md-6 col-xs-12 service-feature-right">
                   <img src="/static/img/content-book.png" alt="Creacion de Contenido">
               </div>
           </div>
           <div class="row MarkAnimateLeft2">
              <div id="Analytics" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/analytics.png" alt="Noko Arts - Analytics">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2>{{getLang.services.marketing.s3t}}</h2>
                   <p>{{getLang.services.marketing.s3p}}</p>
               </div>
           </div>
           <div class="row MarkAnimateRight2">
                    
               <div class="col-md-6 col-xs-12 service-text-left animate-text">
                   <h2>{{getLang.services.marketing.s4t}}</h2>
                   <p>{{getLang.services.marketing.s4p}}</p>
                </div>
                <div class="col-md-6 col-xs-12 service-feature-right">
                    <img src="/static/img/ppc.png" alt="Adwords y PPC">
                </div>
           </div>
           <div class="row MarkAnimateLeft3">
                <div id="audiovisual" class='markup'></div>
               <div class="col-md-6 col-xs-12 service-feature-left">
                   <img src="/static/img/Camera.png" alt="Noko Arts - Audiovisuales" style="max-height: 400px; margin-top: -80px;">
               </div>
               <div class="col-md-6 col-xs-12 service-text-right animate-text">
                   <h2>{{getLang.services.marketing.s5t}}</h2>
                   <p>{{getLang.services.marketing.s5p}}</p>
               </div>
           </div>
           <div class="row call-btn">                  
                <div class="col-md-12 gdd-start-now mark-button">                   
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
    name: 'Marketing',
    data () {
      return {
        msg: 'Marketing'
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