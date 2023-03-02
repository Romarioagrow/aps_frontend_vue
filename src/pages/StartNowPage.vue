<template>
    <v-container>

      <v-row>
        <v-col>
          <v-banner><h1>Get Started</h1></v-banner>
        </v-col>
      </v-row>


      <v-row>

        <v-col>
          <v-card>
            <v-tabs
                v-model="tab"
                background-color="primary"
                centered="center"
            >
              <v-tab value="one">Play</v-tab>
              <v-tab value="two">Aposfera coin</v-tab>
              <v-tab value="three">Support us</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <TabContent></TabContent>
                </v-window-item>

                <v-window-item value="two">
                  <TabContent></TabContent>
                </v-window-item>
                <v-window-item value="three">
                  <TabContent></TabContent>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-sheet
              class="mx-auto"
              elevation="4"
          >
            <v-slide-group
                v-model="model"
                class="pa-4"
                selected-class="bg-success"
                show-arrows
            >
              <v-slide-group-item
                  v-for="n in 15"
                  :key="n"
                  v-slot="{ isSelected, toggle, selectedClass }"
              >
                <v-card
                    color="grey-lighten-1"
                    :class="['ma-4', selectedClass]"
                    height="200"
                    width="100"
                    @click="toggle"
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition >
                      <v-icon
                          v-if="isSelected"
                          color="white"
                          size="48"
                          icon="mdi-close-circle-outline"
                      ></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TimeLine></TimeLine>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TimeLineGameplay></TimeLineGameplay>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import TabContent from "@/components/TabContent";
import TimeLine from "@/components/TimeLine";
import TimeLineGameplay from "@/components/TimeLineGameplay";
export default {
  components: {TimeLineGameplay, TimeLine, TabContent},
  data: () => ({
    tab: null,
    model: null,
  }),
}
</script>

<style scoped>

</style>
