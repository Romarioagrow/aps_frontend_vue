<template>
  <v-container fluid class="gallery-page pa-0">
    <!-- Космический фон -->
    <div class="space-background">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <div class="nebula"></div>
    </div>

    <!-- Заголовок -->
    <v-container class="header-section py-8">
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-bold mb-2" style="color: #E3F2FD;">Gallery</h1>
          <p class="text-subtitle-1" style="color: #90CAF9;">Explore the beauty of APOSFERA universe</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Фильтры -->
    <v-container class="filters-section pb-6">
      <v-row justify="center">
        <v-col cols="12" md="8" class="d-flex flex-wrap justify-center">
          <v-btn
            v-for="category in categories"
            :key="category"
            :class="['ma-2', selectedCategory === category ? 'selected-category' : '']"
            @click="selectedCategory = category"
            text
            rounded
          >
            {{ category }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Галерея -->
    <v-container class="gallery-grid">
      <v-row>
        <v-col
          v-for="(image, index) in filteredImages"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="gallery-item"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="gallery-card"
              :class="{ 'on-hover': hover }"
              @click="openImage(image)"
            >
              <v-img
                :src="image.url"
                :aspect-ratio="16/9"
                class="gallery-image"
                gradient="to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-fade-transition>
                  <div
                    v-if="hover"
                    class="image-overlay d-flex flex-column justify-end"
                  >
                    <div class="pa-4">
                      <div class="text-subtitle-1 font-weight-bold white--text mb-1">
                        {{ image.title }}
                      </div>
                      <div class="text-caption white--text">
                        {{ image.description }}
                      </div>
                      <v-chip
                        x-small
                        class="mt-2"
                        :color="getCategoryColor(image.category)"
                        text-color="white"
                      >
                        {{ image.category }}
                      </v-chip>
                    </div>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- Диалог для просмотра изображения -->
    <v-dialog
      v-model="dialog"
      max-width="1200"
    >
      <v-card class="image-dialog" v-if="selectedImage">
        <v-img
          :src="selectedImage.url"
          max-height="80vh"
          contain
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title class="text-h5">{{ selectedImage.title }}</v-card-title>
        <v-card-text>
          <p>{{ selectedImage.description }}</p>
          <v-chip
            small
            class="mt-2"
            :color="getCategoryColor(selectedImage.category)"
            text-color="white"
          >
            {{ selectedImage.category }}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      selectedCategory: 'All',
      dialog: false,
      selectedImage: null,
      categories: ['All', 'Ships', 'Planets', 'Space Stations', 'Battles', 'Exploration'],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413',
          title: 'Nebula Exploration',
          description: 'A stellar nursery where new stars are born',
          category: 'Exploration'
        },
        {
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
          title: 'Deep Space Battle',
          description: 'Epic confrontation between rival factions',
          category: 'Battles'
        },
        {
          url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
          title: 'Stellar Explorer Mark IV',
          description: 'Latest generation of exploration vessels',
          category: 'Ships'
        },
        {
          url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
          title: 'Orbital Station Alpha',
          description: 'Main trading hub in the Centauri system',
          category: 'Space Stations'
        },
        {
          url: 'https://images.unsplash.com/photo-1614309138210-6c466faea401',
          title: 'Terra Nova',
          description: 'Recently discovered habitable planet',
          category: 'Planets'
        },
        {
          url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
          title: 'Quantum Drive Test',
          description: 'Testing new propulsion technology',
          category: 'Ships'
        },
        {
          url: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
          title: 'Fleet Assembly',
          description: 'Preparation for the annual space race',
          category: 'Ships'
        },
        {
          url: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13',
          title: 'Crystal Planet',
          description: 'Rare phenomenon of crystalline surface formation',
          category: 'Planets'
        }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.selectedCategory === 'All') {
        return this.images;
      }
      return this.images.filter(img => img.category === this.selectedCategory);
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'Ships': '#1976D2',
        'Planets': '#388E3C',
        'Space Stations': '#E64A19',
        'Battles': '#D32F2F',
        'Exploration': '#7B1FA2'
      };
      return colors[category] || '#64B5F6';
    },
    openImage(image) {
      this.selectedImage = image;
      this.dialog = true;
    }
  }
}
</script>

<style scoped>
.gallery-page {
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

.header-section, .filters-section, .gallery-grid {
  position: relative;
  z-index: 2;
}

.gallery-card {
  transition: all 0.3s ease;
  background: rgba(13, 13, 35, 0.85) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gallery-card.on-hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(100, 181, 246, 0.2) !important;
}

.image-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-item {
  padding: 8px;
}

.selected-category {
  background: rgba(100, 181, 246, 0.4) !important;
  color: #FFFFFF !important;
  font-weight: bold;
}

.v-btn {
  background: rgba(13, 13, 35, 0.7) !important;
  color: #FFFFFF !important;
  margin: 4px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.v-btn:hover {
  background: rgba(100, 181, 246, 0.3) !important;
  border-color: rgba(100, 181, 246, 0.5);
}

.image-dialog {
  background: rgba(13, 13, 35, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-dialog .v-card-title {
  color: #E3F2FD !important;
}

.image-dialog .v-card-text {
  color: #90CAF9 !important;
}

.text-subtitle-1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.text-h3 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.white--text {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
