<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
};
</script>

<style>

</style>
