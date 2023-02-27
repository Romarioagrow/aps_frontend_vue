<template style="background-color: black">
<!--  <NavDrawer></NavDrawer>-->
<!--  <PicSlider></PicSlider>-->
  <v-container fluid style="padding: 0 ; margin: 0">

<!--    <v-img src="https://cdn.discordapp.com/attachments/933565701162168371/1053345367929913415/Romarioagrow_design_of_web_site_with_unreal_engine_space_simula_8e6308c2-4769-457f-a7f9-36b8e6b29e23.png"/>-->
<!--    <v-img src="C:\Projects\aps_frontend_vue\src\assets\main-pic-gigapixel.png"/>-->
    <v-img :src="require('../assets/grid_0 (3d) - Copy-gigapixel-art-scale-2_00x.png')" style="opacity: 70%;" >

<!--      <v-btn style="margin-top: 25%">LEL</v-btn>&ndash;&gt;-->

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
                <v-btn variant="text"  block>
                  Start Now
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
/* eslint-disable */
import NavDrawer from "@/components/NavBar";
import PicSlider from "@/components/PicSlider";
export default {
  name: "MainPage",
  components: {NavDrawer ,PicSlider}
}
</script>

<style scoped>
</style>
