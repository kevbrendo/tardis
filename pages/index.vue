<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <VuetifyLogo  />
        
      </div>
    </v-flex>
    <Cards />
  </v-layout>
</template>

<script>
import VuetifyLogo from '../components/VuetifyLogo.vue'
export default {
  components: { VuetifyLogo }
};
</script>

<style scoped>
  h1 {
    align-items: left;
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  p {
    font-size: 30px;
  }
  
</style>
