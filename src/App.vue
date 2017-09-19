<template>
  <div id="app">
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  created () {
    this.defaultLang(window.navigator.language.substr(0, 2))
  },
  methods: mapActions(['defaultLang'])
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
