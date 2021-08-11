<template>
    <div class="full-height bg-gray-200">
        <div>
            {{tittleAbout}}
        </div> 
        <div>
            {{$store.state.textAbout}}
        </div> 


    </div>
   


</template>

<script>

    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "About",

        computed: {
            ...mapState('about', ['textAbout']),

            ...mapGetters(
                ['tittleAbout']
            )
        }, 

        
    }
</script>

<style lang="css" scoped>
    .full-height {
  min-height: 100vh;
}
</style>