<template>
  <div id="Service-module">
  <transition name="fade">
    <router-view></router-view>
  </transition>
   <vfooter></vfooter>
  </div>
</template>
<script>
export default {
  name: 'Services',
  created () {
    $('#header').hide()
    window.goTop()
    this.anima()
  },
  methods: {
    anima () {
      $('.DesignAnimateRight, .DesignAnimateLeft2, .DesignAnimateRight2, .DesignAnimateLeft3, .gdd-start-now').css('visibility', 'hidden')
      $('.animate-text').hide()
      var options = [
        {
          selector: '.DesignAnimateLeft',
          offset: 200,
          callback: function (el) {
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.DesignAnimateRight',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.DesignAnimateLeft2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.DesignAnimateRight2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.DesignAnimateLeft3',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.DesignAnimateRight3',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.Design-button',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('a').addClass('animate-plan')
          }
        },
        {
          selector: '.MarkAnimateLeft',
          offset: 200,
          callback: function (el) {
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.MarkAnimateRight',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.MarkAnimateLeft2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.MarkAnimateRight2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.MarkAnimateLeft3',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.mark-button',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('a').addClass('animate-plan')
          }
        },
        {
          selector: '.AnimateLeft',
          offset: 200,
          callback: function (el) {
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.AnimateRight',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.AnimateLeft2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.AnimateRight2',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-right')
          }
        },
        {
          selector: '.AnimateLeft3',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('.animate-text').fadeIn(2000)
            $(el).children('div').children('img').addClass('animation-left')
          }
        },
        {
          selector: '.gdd-start-now',
          offset: 200,
          callback: function (el) {
            $(el).css('visibility', 'visible')
            $(el).children('a').addClass('animate-plan')
          }
        }
      ]
      window.Materialize.scrollFire(options)
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
