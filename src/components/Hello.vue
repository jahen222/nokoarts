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
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><router-link class="service-link" to="/services/design#uiux">{{getLang.Home.designLi.a}}</router-link></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><router-link class="service-link" to="/services/design#bandring">{{getLang.Home.designLi.b}}</router-link></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#product" target="_blank">{{getLang.Home.designLi.c}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#packaging" target="_blank">{{getLang.Home.designLi.d}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="diseño.html#prototyping" target="_blank">{{getLang.Home.designLi.e}}</a></li>
                    </ul>
                </div>
                <div class="col-md-4 service-column icon-blue">
                    <img src="static/img/icons/browser.svg" alt="Tecnología Integral">
                    <a href="#"><h3 class="service-blue">{{getLang.Home.technology}}</h3></a>
                    <p>{{getLang.Home.technologyp}}</p>
                    <ul>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank"> {{getLang.Home.technologyLi.a}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.technologyLi.b}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.technologyLi.c}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="">{{getLang.Home.technologyLi.d}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.technologyLi.e}}</a></li>
                    </ul>
                </div>
                <div class="col-md-4 service-column icon-blue">
                    <img src="static/img/icons/worldwide.svg" alt="Marketing Integral">
                    <a href="#"><h3 class="service-blue">{{getLang.Home.marketing}}</h3></a>
                    <p>{{getLang.Home.marketingp}}</p>
                    <ul>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.marketingLi.a}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.marketingLi.b}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.marketingLi.c}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.marketingLi.d}}</a></li>
                        <li><i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="#" target="_blank">{{getLang.Home.marketingLi.e}}</a></li>
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
                        <h2> {{getLang.Home.weare}} <br> {{getLang.Home.hashtag}}</h2>
                        <p class="text-muted">{{getLang.Home.wP}} <br> {{getLang.Home.wP1}}<br><br> <b>{{getLang.Home.wP2}}</b></p> 
                    </div>
                <router-link class="button -dark center what-we-do-see-more" to="/work">{{getLang.Home.wPb}}</router-link>
                </div>                
            </div>            
        </div>
    </section>

    <section id="events" class="events">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{getLang.Home.Events}} </h2>                    
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
                        <h2 class="section-heading">{{getLang.Home.Growth}}</h2>
                        <p class="text-muted">{{getLang.Home.Growthp}} <br> {{getLang.Home.Growthp2}} <br>{{getLang.Home.Growthp3}} <br> {{getLang.Home.Growthp4}}</p> 
                    </div>                         
                </div>
            </div>                         
            <div class="row">
                <div class="col-lg-6 text-center marketing-plans">
                    <div class="service-column icon-orange">
                        <img src="static/img/icons/compass.svg" alt="Inbound Marketing">
                        <h3  class="service-orange">Inbound Marketing</h3> 
                        <p>{{getLang.Home.inboundp}}</p>
                        <router-link class="button -dark center what-we-do-see-more" to="/solutions/inbound">{{getLang.Home.qb}}</router-link>
                    </div>
                </div>
                <div class="col-lg-6 text-center marketing-plans">    
                    <div class="service-column icon-orange">
                        <img src="static/img/icons/startup.svg" alt="Growth Driven Design">
                        <h3  class="service-orange">Growth Driven Design</h3> 
                        <p>{{getLang.Home.gddp}}</p>
                        <router-link class="button -dark center what-we-do-see-more" to="/solutions/gdd">{{getLang.Home.qb}}</router-link>
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
                        <h4>{{getLang.Home.post1}}</h4>
                    </div>
                    <div class="post-info">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*H5qp5CaAFGhJehhk5KhAoQ.jpeg" class="avatar-image avatar-image--small" alt="profile of Elba Sindoni"><br>
                        <span>Elba Sindoni</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/ux-bear/" target="_blank">{{getLang.Home.read_post}}</a>   
                        </p>                        
                    </div>
                </div>
            </div>
            <div class="col-md-3 post ">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">
                    <div class="post-title">
                        <h4>{{getLang.Home.post2}}</h4>
                    </div>
                    <div class="post-info">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*wj04B7jY1D14sgp24Ywkzg.jpeg" class="avatar-image avatar-image--small" alt="profile of Luda"><br>
                        <span>Luis Daniel Casanova</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/buyer-personas-disenarlos-negocio/" target="_blank">{{getLang.Home.read_post}}</a>   
                        </p>               
                    </div>
                </div>
            </div>
            <div class="col-md-3 post ">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">
                     <div class="post-title">
                        <h4>{{getLang.Home.post3}}</h4>
                    </div>
                    <div class="post-info">
                         <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*cDhTr_EHd0wIBgPAUFLENw.jpeg" class="avatar-image avatar-image--small" alt="profile of Andrés Aguilera"><br>
                        <span>Andrés Aguilera</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/social-media-fails-brands/" target="_blank">{{getLang.Home.read_post}}</a>  
                        </p>      
                    </div>                                   
                </div>
            </div>
            <div class="col-md-3 post">
                <div class="inner-border">
                    <span>Blog post</span>
                    <hr class="divider">                    
                     <div class="post-title">
                        <h4>{{getLang.Home.post4}}</h4>
                    </div>
                    <div class="post-info">
                         <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*H5qp5CaAFGhJehhk5KhAoQ.jpeg" class="avatar-image avatar-image--small" alt="profile of Elba Sindoni"><br>
                        <span class="post-author">Elba Sindoni</span>
                        <p>
                            <i class="material-icons service-icon">keyboard_arrow_right</i><a class="service-link" href="http://nokoarts.com/blog/debranding-ser-o-no-ser-protagonistas-de-nuestra-propia-marca/" target="_blank">{{getLang.Home.read_post}}</a>   
                        </p>  
                    </div>                     
                </div>
            </div>            
        </div>    
    </section>
    <vfooter></vfooter>
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
