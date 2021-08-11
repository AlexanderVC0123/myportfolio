<template>
  <div>
    <div class="full-height bg-black">
            <Introduction/>
        </div>
        <div class="full-height bg-gray-200">
            <About/>
        </div>
        <div class="full-height bg-gray-800">
            <Works/>
        </div>
        <div id="contact" class=" bg-gray-500">
            <Contact/>
        </div>

    
  </div>
</template>

<script>
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Introduction from "./Intro";

export default {
  name: "Home",
  components: {
    Contact,
    About,
    Works,
    Introduction,
  }
  
};
</script>

<style lang="css" >
.full-height {
  min-height: 100vh;
}

#contact {
  height: 40vh;
}
</style>