<template>
  <v-container fluid class="news-page pa-6">
    <div class="space-background">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <div class="nebula"></div>
    </div>
    <!-- Заголовок и фильтры -->
    <v-row class="mb-8">
      <v-col cols="12" md="8">
        <h1 class="text-h3 font-weight-bold mb-2" style="color: #E3F2FD;">Latest News</h1>
        <p class="text-subtitle-1" style="color: #90CAF9;">Stay updated with the latest developments in the APOSFERA universe</p>
      </v-col>
      <v-col cols="12" md="4" class="d-flex align-center">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Filter by Category"
          outlined
          dense
          dark
          class="category-select"
          @change="filterNews"
        ></v-select>
      </v-col>
    </v-row>

    <!-- Карточки новостей -->
    <v-row>
      <v-col v-for="(item, index) in displayedNews" :key="index" cols="12" md="6" lg="4">
        <v-card
          class="news-card"
          :style="{ 
            background: 'rgba(13, 13, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }"
          elevation="0"
          @click="openNews(item)"
        >
          <v-img
            :src="item.image"
            height="200"
            gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%"
          ></v-img>
          <v-card-title class="text-h6 white--text">{{ item.title }}</v-card-title>
          <v-card-subtitle class="pb-0">
            <v-chip
              small
              class="mr-2 mb-2"
              :color="getCategoryColor(item.category)"
              text-color="white"
            >
              {{ item.category }}
            </v-chip>
            <span class="white--text">{{ item.date }}</span>
          </v-card-subtitle>
          <v-card-text class="white--text">
            {{ item.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="#64B5F6"
              @click.stop="openNews(item)"
            >
              Read More
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Пагинация -->
    <v-row class="mt-6" justify="center">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="7"
        color="#64B5F6"
        dark
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
export default {
  /* eslint-disable */
  name: "NewsPage",
  data() {
    return {
      selectedCategory: 'All',
      currentPage: 1,
      itemsPerPage: 6,
      categories: ['All', 'Updates', 'Events', 'Development', 'Community'],
      news_items: [
        {
          title: 'Major Update: New Star Systems Discovered',
          description: 'Explorers have mapped three new star systems, each with unique characteristics and opportunities for brave space travelers.',
          category: 'Updates',
          date: 'March 28, 2025',
          image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Community Event: Space Race Championship',
          description: 'Join the biggest racing event of the year! Navigate through asteroid fields and nebulae to claim the grand prize.',
          category: 'Events',
          date: 'March 25, 2025',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Development Update: Enhanced Trading System',
          description: 'New features added to the trading system, including market analytics and automated trade routes.',
          category: 'Development',
          date: 'March 23, 2025',
          image: 'https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Community Spotlight: Player Achievements',
          description: 'Celebrating the most notable achievements of our players this month, from epic battles to economic success.',
          category: 'Community',
          date: 'March 20, 2025',
          image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'New Faction: The Stellar Alliance',
          description: 'A new faction has emerged in the outer regions, bringing unique ships and technologies.',
          category: 'Updates',
          date: 'March 18, 2025',
          image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Balance Changes: Combat System Update',
          description: 'Important changes to ship combat mechanics and weapon balance for a more engaging experience.',
          category: 'Development',
          date: 'March 15, 2025',
          image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]
    }
  },
  computed: {
    filteredNews() {
      if (this.selectedCategory === 'All') {
        return this.news_items;
      }
      return this.news_items.filter(item => item.category === this.selectedCategory);
    },
    totalPages() {
      return Math.ceil(this.filteredNews.length / this.itemsPerPage);
    },
    displayedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredNews.slice(start, end);
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'Updates': '#1976D2',
        'Events': '#7B1FA2',
        'Development': '#388E3C',
        'Community': '#D32F2F'
      };
      return colors[category] || '#64B5F6';
    },
    filterNews() {
      this.currentPage = 1;
    },
    openNews(item) {
      // TODO: Implement news detail view
      console.log('Opening news:', item.title);
    }
  },
  watch: {
    currentPage() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.space-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  z-index: 0;
}

.stars {
  animation: starMove 50s linear infinite;
  background-size: 500px 500px;
}

.stars2 {
  animation: starMove 100s linear infinite;
  background-size: 1000px 1000px;
  opacity: 0.4;
}

.stars3 {
  animation: starMove 150s linear infinite;
  background-size: 1500px 1500px;
  opacity: 0.2;
}

.nebula {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: radial-gradient(circle at 50% 50%, rgba(33, 58, 162, 0.3), transparent 100%),
              radial-gradient(circle at 20% 80%, rgba(33, 158, 188, 0.3), transparent 100%);
}

@keyframes starMove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.news-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  position: relative;
  z-index: 2;
  background: rgba(13, 13, 35, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(100, 181, 246, 0.2) !important;
}

.news-card .v-card-text {
  color: #E3F2FD !important;
}

.news-card .v-card-title {
  color: #E3F2FD !important;
}

.news-card .v-card-subtitle {
  color: #90CAF9 !important;
}

.category-select {
  background: rgba(13, 13, 35, 0.7);
  border-radius: 4px;
  position: relative;
  z-index: 2;
}

.category-select :deep(.v-input__slot) {
  border-color: rgba(255, 255, 255, 0.1) !important;
  background: rgba(13, 13, 35, 0.7) !important;
}

.category-select :deep(.v-label) {
  color: #90CAF9 !important;
}

.category-select :deep(.v-select__selection) {
  color: #E3F2FD !important;
}

.category-select :deep(.v-select__selections input) {
  color: #E3F2FD !important;
}

.category-select :deep(.v-menu__content) {
  background: rgba(13, 13, 35, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.category-select :deep(.v-list) {
  background: transparent !important;
  border: none !important;
}

.category-select :deep(.v-list-item) {
  color: #E3F2FD !important;
}

.category-select :deep(.v-list-item__title) {
  color: #E3F2FD !important;
}

.category-select :deep(.v-list-item:hover) {
  background: rgba(100, 181, 246, 0.1) !important;
}

.category-select :deep(.v-list-item--active) {
  background: rgba(100, 181, 246, 0.2) !important;
  color: #64B5F6 !important;
}

.category-select :deep(.v-list-item--active .v-list-item__title) {
  color: #64B5F6 !important;
}

.v-pagination {
  position: relative;
  z-index: 2;
}

.v-pagination :deep(.v-pagination__item) {
  background: rgba(13, 13, 35, 0.7) !important;
  color: #E3F2FD !important;
}

.v-pagination :deep(.v-pagination__item--active) {
  background: #64B5F6 !important;
}

.v-pagination :deep(.v-pagination__navigation) {
  background: rgba(13, 13, 35, 0.7) !important;
}

.v-pagination :deep(.v-pagination__navigation .v-icon) {
  color: #E3F2FD !important;
}
</style>
