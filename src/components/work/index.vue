<template>
  <div id="Work-module">
    <navbar></navbar>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <vfooter></vfooter>
  </div>
</template>
<script>
export default {
  name: 'Work',
  created () {
    $('#header').hide()
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
