<template>
  <div id='vNavbar'>
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <router-link class="navbar-brand page-scroll" to="/"><img class="nav_logo" src="/static/img/logo_horizontal.svg" alt="Noko Arts logo"/></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right navbar-logo">
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">{{translate.services}}</a>
                    <ul class="dropdown-menu">
                      <li><router-link to="/services/design"> {{translate.design}} </router-link></li>
                      <li><router-link to="/services/technology"> {{translate.technology}} </router-link></li>
                      <li><router-link to="/services/marketing"> {{translate.marketing}} </router-link></li>                      
                    </ul>
                  </li>
                   <ul class="nav navbar-nav navbar-right navbar-logo">
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">{{translate.solutions}}</a>
                    <ul class="dropdown-menu">
                      <li><router-link to="/solutions/inbound"> Inbound Marketing </router-link></li>
                      <li><router-link to="/solutions/gdd">Growth Driven Design</router-link></li>                      
                    </ul>
                    <li>
                        <router-link to="/work">{{translate.projects}}</router-link>
                    </li>
                    <li>
                        <a class="" href="#">{{translate.about}}</a>
                    </li>
                    <li>
                        <a href="http://nokoarts.com/blog/" target="_blank">Blog</a>
                    </li>
                    <li>                       
                        <a class="typeform-share button -green centered-button" :href="translate.form" data-mode="popup" target="_blank">{{translate.quote}}</a>
                    </li>
                    <li>
                  
                        <div class="switch-lang"> 
                            <div v-if="currentLang === 'en'">
                              <div v-bind:class="[currentLang === 'en' ? 'current-lang' : 'selecting-lang']" @click="lang('en')"><a><img class="lang-flag" src="/static/img/usa.svg"/>
                                <p class="lang-text">EN</p></a>
                              </div> 
                              </div>   
                              <div v-if="currentLang === 'es'">
                                <div v-bind:class="[currentLang === 'es' ? 'current-lang' : 'selecting-lang']" @click="lang('es')"><a><img class="lang-flag" src="/static/img/spain.svg"/>
                                  <p class="lang-text">ES</p></a>
                                </div>
                              </div>

                            <div class="lang-dropdown">
                              <div v-if="currentLang === 'es'">
                              <div v-bind:class="[currentLang === 'en' ? 'current-lang' : 'selecting-lang']" @click="lang('en')"><a><img class="lang-flag" src="/static/img/usa.svg"/>
                                <p class="lang-text">EN</p></a>
                              </div> 
                              </div>   
                              <div v-if="currentLang === 'en'">
                                <div v-bind:class="[currentLang === 'es' ? 'current-lang' : 'selecting-lang']" @click="lang('es')"><a><img class="lang-flag" src="/static/img/spain.svg"/>
                                  <p class="lang-text">ES</p></a>
                                </div>
                              </div>
                            </div>
                        </div>
                    </li>
                    </ul>

                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    created () {
      this.lang(this.$store.state.lang)
    },
    data () {
      return {
        translate: {},
        currentLang: 'es',
        es: {
          form: 'https://esindoni.typeform.com/to/Df2Id9',
          services: 'Servicios',
          solutions: 'Soluciones',
          design: 'Diseño',
          technology: 'Tecnología',
          marketing: 'Marketing',
          projects: 'Proyectos',
          about: 'Acerca de NokoArts',
          quote: 'Pedir Presupuesto'
        },
        en: {
          form: 'https://esindoni.typeform.com/to/ZLJAfU',
          services: 'Services',
          solutions: 'Solutions',
          design: 'Design',
          technology: 'Technology',
          marketing: 'Marketing',
          projects: 'Work',
          about: 'About NokoArts',
          quote: 'Get Free Quote'
        }
      }
    },
    methods: {
      lang (lang) {
        this.currentLang = lang
        if (lang === 'es') {
          this.translate = this.es
        } else {
          this.translate = this.en
        }
      }
    },
    watch: {
      currentLang () {
        this.$store.dispatch('changeLang', this.currentLang)
        if (this.$store.state.lang === 'es') {
          window.translateHeader('es')
        } else if (this.$store.state.lang === 'en') {
          window.translateHeader('en')
        }
      }
    }
  }
</script>
<style scoped>
</style>