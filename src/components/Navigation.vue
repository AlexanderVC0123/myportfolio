<template>
  <div class="Navigation bg-gray-700 text-white flex justify-between items-center p-4 text-lg w-full fixed">
    
        <img src="../assets/img/logo_av_White2.svg" class="w-14 h-14 ml-4" alt="Logo"> 
      
      <ul class="nav space-x-4 flex flex-row font-medium mr-4">
          <li class="nav-item hover:text-green-600">
            <router-link to="/home" class="nav-link " active-class="active">Home</router-link>
          </li>
          <li class="nav-item hover:text-green-600">
            <router-link to="/about" class="nav-link " active-class="active">About me</router-link>
          </li>
          <li class="nav-item hover:text-green-600 ">
            <router-link to="/works" class="nav-link " active-class="active">Works</router-link>
          </li>
          <li class="nav-item hover:text-green-600 ">
            <router-link to="/contact" class="nav-link " active-class="active">Contact me</router-link>
          </li>
      </ul>
     
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="css" scoped>
    .Navigation {
    
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    }
</style>