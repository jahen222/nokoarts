<template>
  <div id='vGdd'>
   <section class="inbound-hero">
    	<div class="container">
    		<div class="row">
                <div class="inbound-hero-background gdd-hero-background"></div>
                <div class="inbound-hero-text">
        			<h1>{{getLang.gdd.hTtitle}}</h1>
        			<p>{{getLang.gdd.hSubtitle}}</p>	
                     <div class="arrow-scroll arrow-inbound">
                        <div class="arrow-scroll__wrap arrow-scroll__wrap_animated">
                            <a class="Home__next arrow-inbound" href="#inbound-plans"><img src="/static/img/chevron.svg" alt="Next Section"></a>
                        </div>
                    </div>
                </div>     	
    		</div>
    	</div>
    </section>
    <section class="inbound-process">
    	<div class="container">
    		<div class="row">
                 <div class="col-md-12 ">
                 	<h2>{{getLang.gdd.title}}</h2>
                 	<p>{{getLang.gdd.subtitle}}</p>                 
                </div>        	
    		</div>
            <div class="row">
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/pie-chart.svg" alt="">
                    <h3  class="inbound-feature">{{getLang.gdd.strategy}}</h3> 
                    <p>{{getLang.gdd.strategyp}}</p>       
                    <strong>{{getLang.gdd.strategys}}</strong>              
                </div>
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/browser.svg" alt="">
                    <h3  class="inbound-feature">{{getLang.gdd.launchpad}}</h3> 
                    <p>{{getLang.gdd.launchpadp}}</p>
                    <strong>{{getLang.gdd.launchpads}}</strong>                                
                </div>
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/compass.svg" alt="">
                    <h3  class="inbound-feature">{{getLang.gdd.conti}}</h3> 
                    <p>{{getLang.gdd.contip}}</p>
                    <strong>{{getLang.gdd.contis}}</strong>
                </div>
            </div>            
        </div>
    </section>

    <section class="gdd-process-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 inbound-process gdd-description">
                    <h2>{{getLang.gdd.s2}}</h2>                    
                    <img :src=getImg(getLang.gdd.s2img) alt="Proceso Growth Driven Desgin">
                </div>  
                <div class="col-md-12 inbound-process gdd-description">
                    <h2>{{getLang.gdd.s3}}</h2>
                    <p>{{getLang.gdd.s3p}}</p>
                    <img :src=getImg(getLang.gdd.s3img) alt="Growth Driven Desgin vs Diseño web Tradicional">
                </div> 
            </div>
        </div>              
    </section>   

    <section class="gdd-process-grey">
        <div class="container">
            <div class="row">
                <div class="col-md-12 inbound-process gdd-description">
                    <img :src=getImg(getLang.gdd.s4img) alt="Proceso GDD - Noko Arts">
                </div>                                 
                <div class="col-md-12 inbound-process">
                    <h2>{{getLang.gdd.s4}}</h2>
                </div>
            </div>  
            <div class="row inbound-items gdd-items-row">
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/piggy-bank.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.a}}</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/startup.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.b}}</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/network-1.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.c}}</h3> 
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/laptop-2.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.d}}</h3> 
                </div>                  
            </div>
            <div class="row inbound-items gdd-items-row">
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/money-1.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.e}}</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/user-11.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.f}}</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/bar-chart.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.g}}</h3> 
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/strategy.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">{{getLang.gdd.s4Li.h}}</h3> 
                </div>                  
            </div>
            <div class="row">                  
                <div class="col-md-12 gdd-start-now">                   
                    <a class="typeform-share button -green plan-button" href="https://nokoarts.typeform.com/to/waE9gv" data-mode="popup" target="_blank">{{getLang.gdd.s4b}}</a>
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
      window.goTop()
      $('#header').hide()
    },
    components: {
    },
    name: 'gdd',
    data () {
      return {
        msg: 'Design'
      }
    },
    methods: {
      getImg (img) {
        return '/static/img/' + img
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