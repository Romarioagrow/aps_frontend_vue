<template>
  <h1>GALLERY PAGE</h1>

  <v-carousel hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <v-container>
    <v-carousel v-model="model">
      <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      model: 0,
      model_sheet: [],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
