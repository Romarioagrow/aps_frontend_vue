<template>
  <v-container>
    <h1>NEWS PAGE!!!</h1>
    <v-container>
      <v-row v-for="item in news_items" :key="item.header">
        <v-col>
          <v-card >
            <v-card-text>
              {{ item.header }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  /* eslint-disable */
  name: "NewsPage",
  data() {
    return {
      news_items:[{header:'NEWS 1'},{header:'NEWS 1'},{header:'NEWS 1'}],

    }
  }
}
</script>

<style scoped>

</style>
