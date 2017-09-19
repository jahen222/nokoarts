<template>
  <div id="home">
  <navbar @currentLang="changeLang"></navbar>
    <section id="services" class="services bg-primary text-center">
        <div class="container service-table">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <h2 class="section-heading-home">{{getLang.Home.heading}}</h2>                    
                </div>
            </div>    
            <div class="row">    
                <div class="col-md-4 service-column icon-blue">
                    <img src="static/img/icons/pencil.svg" alt="Diseño Integral">
                    <a href="#"><h3  class="service-blue">{{getLang.Home.design}}</h3></a> 
                    <p>{{getLang.Home.designp}}</p>
                    <ul>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#uiux" target="_blank">{{getLang.Home.designLi.a}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#bandring" target="_blank">{{getLang.Home.designLi.b}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#product" target="_blank">{{getLang.Home.designLi.c}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#packaging" target="_blank">{{getLang.Home.designLi.d}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#prototyping" target="_blank">{{getLang.Home.designLi.e}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#ilustration" target="_blank">{{getLang.Home.designLi.f}}</a></li>
                    </ul>
                </div>
                <div class="col-md-4 service-column icon-blue">
                    <img src="static/img/icons/browser.svg" alt="Tecnología Integral">
                    <a href="#"><h3 class="service-blue">{{getLang.Home.technology}}</h3></a>
                    <p>{{getLang.Home.technologyp}}</p>
                    <ul>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank"> {{getLang.Home.technologyLi.a}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Aplicaciones Móviles</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">eCommerce y Websites</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="">Optimización de Landing Page</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Internet of Things</a></li>
                    </ul>
                </div>
                <div class="col-md-4 service-column icon-blue">
                    <img src="static/img/icons/worldwide.svg" alt="Marketing Integral">
                    <a href="#"><h3 class="service-blue">Marketing</h3></a>
                    <p>Más que palabras generamos estrategias con resultados.</p>
                    <ul>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Social Media</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Creación de Contenidos</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Analytics</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Adwords y PPC</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">Producción Audiovisual</a></li>
                    </ul>
                </div>            
            </div>
        </div>
    </section> 

    <section id="what-we-do" class="what-we-do">
        <div class="container">
            <div class="row">
                <div class="plant-container">
                    <img src="static/img/Plant.png">
                </div>
                <div class="col-lg-12 text-center">
                    <div class="section-heading">
                        <h2>Somos <br> #CrecimientoIntegral</h2>
                        <p class="text-muted">Nos comprometemos en hacer que tu negocio tenga un desarrollo digital próspero <br> y un crecimiento sano en todas sus plataformas.<br><br> <b>¡Somos tu socio digital para cambiar al mundo!</b></p> 
                    </div>
                <a class="button -dark center what-we-do-see-more" href="work.html">Ver Casos de Éxito</a>
                </div>                
            </div>            
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Eventos</h2>                    
                </div> 
            </div>
            <div class="row">                
                <div class="col-lg-4 text-center">
                    <a href="https://www.facebook.com/BehanceVenezuela/" target="_blank">
                     <img class="event-img" src="static/img/events/behance.png" alt="Behance Portfolio Review">
                    </a> 
                </div>
                <div class="col-lg-4 text-center">
                     <a href="https://www.facebook.com/nokoarts/videos/543905069138720/" target="_blank"> 
                        <img class="event-img" src="static/img/events/coursera.png" alt="Coursera Challenge Day">
                    </a> 
                </div>
                <div class="col-lg-4 text-center">
                     <a href="https://dribbble.com/meetups/951" target="_blank"> 
                        <img class="event-img" src="static/img/events/dribbble.png" alt="Dribbble San Cristobal Meetups">
                    </a> 
                </div>                                
            </div>
        </div>
    </section>    
    <section id="get-more" class="what-we-do services get-more">
        <div class="container">
            <div class="row">
            <div class="coffee-container">
                    <img src="static/img/Coffee.png">
                </div>
                <div class="col-lg-12">
                    <div class="section-heading">
                        <h2 class="section-heading">¡Crecer es la meta!</h2>
                        <p class="text-muted">Desarrollamos una nueva forma de ver el crecimiento, <br> un crecimiento armónico, que gira alrededor de objetivos organizacionales <br>y no solo de objetivos particulares y aislados estratégicamente. <br> hacemos que todo tu negocio crezca y veas tus metas comerciales cumplirse en diferentes contextos.</p> 
                    </div>                         
                </div>
            </div>                         
            <div class="row">
                <div class="col-lg-6 text-center marketing-plans">
                    <div class="service-column icon-orange">
                        <img src="static/img/icons/compass.svg" alt="Inbound Marketing">
                        <h3  class="service-orange">Inbound Marketing</h3> 
                        <p>Diseña un plan de juego para atraer y cautivar a tus visitantes y convertirlos en clientes a través de contenido enfocado al público de tu servicio o producto.</p>
                        <a class="button -dark center what-we-do-see-more" href="inbound.html">¿Quieres saber cómo?</a>
                    </div>
                </div>
                <div class="col-lg-6 text-center marketing-plans">    
                    <div class="service-column icon-orange">
                        <img src="static/img/icons/startup.svg" alt="Growth Driven Design">
                        <h3  class="service-orange">Growth Driven Design</h3> 
                        <p>Es una metodología de desarrollo web que logra poner en linea el website lo más rápido posible a la par de adaptarse a las necesidades del negocio y usar data para lograr más conversiones.</p>
                        <a class="button -dark center what-we-do-see-more" href="gdd.html">¿Quieres saber cómo?</a>
                    </div> 
                </div>
            </div>            
        </div>    
        
    </section >
    
    <!-- Blog posts -->

    <section class="blog-section">
        <div class="row">
            <div class="col-md-3 post">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">
                    <div class="post-title">
                        <h4>¿Qué es UI/UX design y por que debes considerarlo en tu website?</h4>
                    </div>
                    <div class="post-info">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*H5qp5CaAFGhJehhk5KhAoQ.jpeg" class="avatar-image avatar-image--small" alt="profile of Elba Sindoni"><br>
                        <span>Elba Sindoni</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/ux-bear/" target="_blank">Leer Post</a>   
                        </p>                        
                    </div>
                </div>
            </div>
            <div class="col-md-3 post ">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">
                    <div class="post-title">
                        <h4>Buyer Personas: ¿Que son y como diseñarlos para tu negocio?</h4>
                    </div>
                    <div class="post-info">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*wj04B7jY1D14sgp24Ywkzg.jpeg" class="avatar-image avatar-image--small" alt="profile of Luda"><br>
                        <span>Luis Daniel Casanova</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/buyer-personas-disenarlos-negocio/" target="_blank">Leer Post</a>   
                        </p>               
                    </div>
                </div>
            </div>
            <div class="col-md-3 post ">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">
                     <div class="post-title">
                        <h4>Social Media Fails For Brands: 5 Things</h4>
                    </div>
                    <div class="post-info">
                         <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*cDhTr_EHd0wIBgPAUFLENw.jpeg" class="avatar-image avatar-image--small" alt="profile of Andrés Aguilera"><br>
                        <span>Andrés Aguilera</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/social-media-fails-brands/" target="_blank">Leer Post</a>  
                        </p>      
                    </div>                                   
                </div>
            </div>
            <div class="col-md-3 post">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">                    
                     <div class="post-title">
                        <h4>Debranding ¿Ser o no protagonistas?</h4>
                    </div>
                    <div class="post-info">
                         <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*H5qp5CaAFGhJehhk5KhAoQ.jpeg" class="avatar-image avatar-image--small" alt="profile of Elba Sindoni"><br>
                        <span class="post-author">Elba Sindoni</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/debranding-ser-o-no-ser-protagonistas-de-nuestra-propia-marca/" target="_blank">Leer Post</a>   
                        </p>  
                    </div>                     
                </div>
            </div>            
        </div>    
    </section>
    <vfooter></vfooter>
    {{getLang}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  created () {
    $('#header').show()
  },
  computed: {
    ...mapGetters({
      getLang: 'getLang'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
