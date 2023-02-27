<template>
  <h1>MARKET PAGE</h1>
  <v-container>
    <v-row>
      <v-navigation-drawer
          v-model="drawer"
      >
        <v-list
            :items="items"
        ></v-list>
      </v-navigation-drawer>
      <v-col>
        <v-row>
          <MarketCard v-for="card in marketCards" :key="card"></MarketCard>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarketCard from "@/components/MarketCard";
export default {
  name: "MarketPage",
  components: {MarketCard},
  data() {
    return {
      marketCards:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},],
      drawer: true,
      group: null,
      items: [
        {
          title: 'APS Coin',
          value: '1',
        },
        {
          title: 'In-Game Store',
          value: '2',
        },
        {
          title: 'Ships',
          value: '3',
        },
        {
          title: 'Property',
          value: '4',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
