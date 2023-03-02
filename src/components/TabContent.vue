<template>
  <v-card
      class="mx-auto"
      height="420"
      variant="outlined"
  >

    <v-container>
      <v-row>
        <v-col>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                OVERLINE
              </div>
              <div class="text-h6 mb-1">
                Headline
              </div>
              <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
          </v-card-item>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <SteamBanner
                :gameUrl="'https://store.steampowered.com/app/2209980'"
                :imageUrl="'https://cdn.akamai.steamstatic.com/steam/apps/2209980/header.jpg?t=1673372837'"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import SteamBanner from "@/components/SteamBanner.vue";
export default {
  name: "TabContent",
  components: {SteamBanner}
}
</script>

<style scoped>

</style>