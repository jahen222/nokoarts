<template>
  <div id='vGdd'>
   <section class="inbound-hero">
    	<div class="container">
    		<div class="row">
                <div class="inbound-hero-background gdd-hero-background"></div>
                <div class="inbound-hero-text">
        			<h1>Growth Driven Design</h1>
        			<p>Rediseño web basado en datos que aumentan ventas</p>	
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
                 	<h2>¿Como funciona?</h2>
                 	<p>Menor riesgo y mejores resultados en solo tres pasos:</p>                 
                </div>        	
    		</div>
            <div class="row">
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/pie-chart.svg" alt="">
                    <h3  class="inbound-feature">Estrategia</h3> 
                    <p>Identifica las metas del negocio, investiga los buyer personas, audita tu sitio actual y diseña un plan.</p>       
                    <strong>2 semanas</strong>              
                </div>
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/browser.svg" alt="">
                    <h3  class="inbound-feature">Launchpad Website</h3> 
                    <p>Diseña la lista de deseos y necesisdades del website. Implementa un la versión más simple y efectiva en poco tiempo.</p>
                    <strong>6 - 8 semanas</strong>                                
                </div>
                <div class="col-md-4 inbound-item">
                    <img src="/static/img/icons/compass.svg" alt="">
                    <h3  class="inbound-feature">Mejora Continua</h3> 
                    <p>Implementa pruebas, documenta y aprende como tus clientes y usuarios interactuan con tu sitio web para ofrecer una mejor experiencia de venta</p>
                    <strong>Cada 2 - 4 semanas</strong>
                </div>
            </div>            
        </div>
    </section>

    <section class="gdd-process-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 inbound-process gdd-description">
                    <h2>Proceso de mejora contínua de tu sitio web </h2>                    
                    <img src="/static/img/wesite-redesign-process-ES.png" alt="Proceso Growth Driven Desgin">
                </div>  
                <div class="col-md-12 inbound-process gdd-description">
                    <h2>Growth Driven Design vs Diseño Web Tradicional</h2>
                    <p>Growth Driven Design es un proceso que aplicamos para adaptar tu página web constantemente y que le permite mantener la competitividad de su empresa en internet. Mientras que tu competencia cambia y mejora su sitio web cada 2-3 años con costosas inversiones, tú lo mantienes siempre optimizado y en sintonía con el contexto tecnológico y las necesidades de los principales actores: compradores, clientes, empleados, accionistas, proveedores...</p>
                    <img src="/static/img/gdd-vs-trad-ES.png" alt="Growth Driven Desgin vs Diseño web Tradicional">
                </div> 
            </div>
        </div>              
    </section>   

    <section class="gdd-process-grey">
        <div class="container">
            <div class="row">
                <div class="col-md-12 inbound-process gdd-description">
                    <img src="/static/img/GDD-Cycles-ES.png" alt="Proceso GDD - Noko Arts">
                </div>                                 
                <div class="col-md-12 inbound-process">
                    <h2>Beneficios del Growth Driven Design</h2>
                </div>
            </div>  
            <div class="row inbound-items gdd-items-row">
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/piggy-bank.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Reduce inversión inicial</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/startup.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Menor tiempo de implementación</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/network-1.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Posiciona tu marca en un mejor ranking</h3> 
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/laptop-2.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Mejora las conversiones y ROI</h3> 
                </div>                  
            </div>
            <div class="row inbound-items gdd-items-row">
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/money-1.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Más y mejores ventas de tu empresa</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/user-11.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Obtiene información de usuarios y preferencias</h3>
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/bar-chart.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Mayor impacto y resultados a largo plazo</h3> 
                </div>
                <div class="col-md-3 inbound-item">
                    <img src="/static/img/icons/strategy.svg" alt="Beneficio del Growth Driven Design">
                    <h3  class="inbound-feature">Estrategia flexible y resultados medibles</h3> 
                </div>                  
            </div>
            <div class="row">                  
                <div class="col-md-12 gdd-start-now">                   
                    <a class="typeform-share button -green plan-button" href="https://nokoarts.typeform.com/to/waE9gv" data-mode="popup" target="_blank">Comenzar Ahora</a>
                </div>
            </div>              
        </div>
    </section>    
  </div>
</template>
<script>
  export default {
    components: {
    },
    name: 'gdd',
    created () {
      $('#header').hide()
    },
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