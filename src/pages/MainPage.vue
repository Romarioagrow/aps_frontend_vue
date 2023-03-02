<template style="background-color: black">
  <v-container fluid style="padding: 0 ; margin: 0">

    <v-img :src="require('../assets/grid_0 (3d) - Copy-gigapixel-art-scale-2_00x.png')" style="opacity: 70%;">


      <v-container justify="center" >
        <v-row justify="center" align="center">
          <v-col sm="6">
            <v-card
                color="#385F73"
                theme="dark"
                style="margin-top: 42%; opacity: 90%; "
                height="270"
            >
              <v-card-title class="text-h5" color="red" style="color: aliceblue">
                APOSFERA SPACETRIPS
              </v-card-title>

              <v-card-subtitle class="text-h6">Procedural space generation.</v-card-subtitle>
              <v-card-subtitle ><v-card-text class="text-wrap" color="aliceblue" >Full-scaled. Interactive world. Celestials bodies.
                Spaceship trips. Colonies and Spaceports. Anomalies and Exploring.</v-card-text> </v-card-subtitle>

              <v-card-actions>
                <v-btn :rounded="0" height="100%" color="secondary" @click="goToView('/start')" style="font-family: 'Osiris'" >
                  START NOW
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>



    </v-img>




  </v-container>
</template>


<script>
import router from "@/router";
/* eslint-disable */
import PicSlider from "@/components/PicSlider";
export default {
  name: "MainPage",
  components: {PicSlider},
  methods: {
    goToView(view_url) {
      router.push(view_url)
    }
  },
}
</script>

<style scoped>
</style>
