<template>
  <v-container fluid class="market-page pa-0">
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
          <h1 class="text-h3 font-weight-bold mb-2 gradient-text">Stellar Market</h1>
          <p class="text-subtitle-1 mb-6" style="color: #90CAF9;">Trade, upgrade, and customize your space adventure</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Фильтры и поиск -->
    <v-container class="filters-section pb-6">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="searchQuery"
            label="Search items"
            prepend-inner-icon="mdi-magnify"
            outlined
            dense
            dark
            class="search-field"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="8" class="d-flex flex-wrap justify-end align-center">
          <v-btn-toggle
            v-model="selectedCategory"
            mandatory
            class="transparent-toggle"
          >
            <v-btn
              v-for="category in categories"
              :key="category.value"
              :value="category.value"
              text
              class="category-btn"
            >
              <v-icon left>{{ category.icon }}</v-icon>
              {{ category.label }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>

    <!-- Сетка товаров -->
    <v-container class="items-grid">
      <v-row>
        <v-col
          v-for="item in filteredItems"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="market-card"
              :class="{ 'on-hover': hover }"
              @click="openItemDetails(item)"
            >
              <v-img
                :src="item.image"
                height="200"
                class="market-item-image"
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
                <div class="item-rarity" :class="item.rarity">
                  {{ item.rarity }}
                </div>
              </v-img>

              <v-card-title class="item-title">
                {{ item.name }}
                <v-spacer></v-spacer>
                <v-chip
                  small
                  :color="getCategoryColor(item.category)"
                  text-color="white"
                  class="ml-2"
                >
                  {{ item.category }}
                </v-chip>
              </v-card-title>

              <v-card-text class="item-details">
                <p class="item-description">{{ item.description }}</p>
                <div class="specs-container">
                  <div v-for="(spec, index) in item.specifications" :key="index" class="spec-item">
                    <v-icon class="spec-icon">{{ spec.icon }}</v-icon>
                    <span class="spec-label">{{ spec.label }}:</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
                <div class="d-flex align-center mt-2">
                  <div class="rating-value">
                    <v-icon small>mdi-star</v-icon>
                    {{ item.rating }}
                  </div>
                  <v-spacer></v-spacer>
                  <div class="price-tag">
                    {{ item.price }} CR
                  </div>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  @click.stop="addToCart(item)"
                >
                  <v-icon left>mdi-cart-plus</v-icon>
                  Add to Cart
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click.stop="toggleFavorite(item)"
                  :color="item.isFavorite ? 'red' : 'grey'"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- Диалог с деталями товара -->
    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-card class="item-dialog" v-if="selectedItem">
        <v-img
          :src="selectedItem.image"
          max-height="400"
          contain
        ></v-img>
        <v-card-title class="text-h4">{{ selectedItem.name }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="8">
              <p class="text-body-1">{{ selectedItem.description }}</p>
              <v-divider class="my-4"></v-divider>
              <h3 class="text-h6 mb-2">Specifications</h3>
              <v-list dense class="specifications-list">
                <v-list-item v-for="(spec, index) in selectedItem.specifications" :key="index" class="specification-item">
                  <v-list-item-icon>
                    <v-icon class="spec-icon">{{ spec.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="spec-text">{{ spec.label }}: {{ spec.value }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="price-card pa-4" dark>
                <div class="text-h5 mb-2 price-value">{{ selectedItem.price }} CR</div>
                <v-chip
                  :color="getRarityColor(selectedItem.rarity)"
                  text-color="white"
                  class="mb-4"
                >
                  {{ selectedItem.rarity }}
                </v-chip>
                <v-btn
                  block
                  color="primary"
                  class="mb-2"
                  @click="addToCart(selectedItem)"
                >
                  <v-icon left>mdi-cart-plus</v-icon>
                  Add to Cart
                </v-btn>
                <v-btn
                  block
                  outlined
                  class="wishlist-btn"
                  @click="toggleFavorite(selectedItem)"
                >
                  <v-icon left :color="selectedItem.isFavorite ? 'red' : 'grey'">
                    mdi-heart
                  </v-icon>
                  {{ selectedItem.isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist' }}
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
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
  name: "MarketPage",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      dialog: false,
      selectedItem: null,
      categories: [
        { label: 'All', value: 'all', icon: 'mdi-view-grid' },
        { label: 'Ships', value: 'ships', icon: 'mdi-rocket' },
        { label: 'Weapons', value: 'weapons', icon: 'mdi-pistol' },
        { label: 'Equipment', value: 'equipment', icon: 'mdi-shield' },
        { label: 'Resources', value: 'resources', icon: 'mdi-cube' }
      ],
      items: [
        {
          id: 1,
          name: "Stellar Voyager X-1",
          category: "ships",
          description: "Advanced exploration vessel with quantum drive capabilities",
          price: "150,000",
          rating: 4.8,
          rarity: "Legendary",
          image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
          isFavorite: false,
          specifications: [
            { label: "Speed", value: "1200 m/s", icon: "mdi-speedometer" },
            { label: "Shield", value: "Grade A", icon: "mdi-shield" },
            { label: "Cargo", value: "500 units", icon: "mdi-package" }
          ]
        },
        {
          id: 2,
          name: "Plasma Cannon MK-III",
          category: "weapons",
          description: "High-powered energy weapon with advanced targeting system",
          price: "75,000",
          rating: 4.5,
          rarity: "Epic",
          image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
          isFavorite: false,
          specifications: [
            { label: "Damage", value: "2500/hit", icon: "mdi-flash" },
            { label: "Range", value: "2000m", icon: "mdi-crosshairs" },
            { label: "Rate", value: "2 shots/s", icon: "mdi-timer" }
          ]
        },
        {
          id: 3,
          name: "Quantum Shield Generator",
          category: "equipment",
          description: "Next-gen defensive system with adaptive protection",
          price: "45,000",
          rating: 4.7,
          rarity: "Rare",
          image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9",
          isFavorite: false,
          specifications: [
            { label: "Protection", value: "95%", icon: "mdi-shield" },
            { label: "Regen", value: "50/s", icon: "mdi-refresh" },
            { label: "Power", value: "100 MW", icon: "mdi-flash" }
          ]
        },
        {
          id: 4,
          name: "Dark Matter Crystals",
          category: "resources",
          description: "Rare resource used in quantum drive manufacturing",
          price: "25,000",
          rating: 4.3,
          rarity: "Epic",
          image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13",
          isFavorite: false,
          specifications: [
            { label: "Purity", value: "99.9%", icon: "mdi-atom" },
            { label: "Weight", value: "100g", icon: "mdi-weight" },
            { label: "Origin", value: "Nebula", icon: "mdi-star" }
          ]
        }
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'ships': '#1976D2',
        'weapons': '#D32F2F',
        'equipment': '#388E3C',
        'resources': '#7B1FA2'
      };
      return colors[category] || '#64B5F6';
    },
    getRarityColor(rarity) {
      const colors = {
        'Common': '#78909C',
        'Uncommon': '#43A047',
        'Rare': '#1E88E5',
        'Epic': '#8E24AA',
        'Legendary': '#FFB300'
      };
      return colors[rarity] || '#78909C';
    },
    openItemDetails(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
    addToCart(item) {
      // TODO: Implement cart functionality
      console.log('Added to cart:', item.name);
    },
    toggleFavorite(item) {
      item.isFavorite = !item.isFavorite;
    }
  }
}
</script>

<style scoped>
.market-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #0a0a1a;
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

.header-section, .filters-section, .items-grid {
  position: relative;
  z-index: 2;
}

.gradient-text {
  background: linear-gradient(45deg, #64B5F6, #1976D2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.market-card {
  transition: all 0.3s ease;
  background: rgba(13, 13, 35, 0.95) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 181, 246, 0.1);
}

.market-card.on-hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(100, 181, 246, 0.3) !important;
  border: 1px solid rgba(100, 181, 246, 0.2);
}

.item-title {
  font-size: 1.2rem !important;
  line-height: 1.4 !important;
  color: #E3F2FD !important;
  font-weight: 500 !important;
}

.item-description {
  color: #90CAF9;
  font-size: 0.9rem;
  margin-bottom: 8px;
  opacity: 0.9;
}

.item-rarity {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.item-rarity.Common { 
  background: linear-gradient(45deg, #78909C, #90A4AE);
}
.item-rarity.Uncommon { 
  background: linear-gradient(45deg, #43A047, #66BB6A);
}
.item-rarity.Rare { 
  background: linear-gradient(45deg, #1E88E5, #42A5F5);
}
.item-rarity.Epic { 
  background: linear-gradient(45deg, #8E24AA, #AB47BC);
}
.item-rarity.Legendary { 
  background: linear-gradient(45deg, #FFB300, #FFD54F);
}

.price-tag {
  font-weight: 600;
  font-size: 1.1rem;
  color: #FFD54F;
  text-shadow: 0 0 10px rgba(255, 213, 79, 0.3);
}

.search-field {
  background: rgba(13, 13, 35, 0.7) !important;
  border-radius: 8px;
  border: 1px solid rgba(100, 181, 246, 0.1) !important;
}

.search-field:hover {
  border: 1px solid rgba(100, 181, 246, 0.2) !important;
}

.search-field:focus-within {
  border: 1px solid rgba(100, 181, 246, 0.3) !important;
}

.category-btn {
  background: rgba(13, 13, 35, 0.7) !important;
  color: #E3F2FD !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  margin: 4px !important;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.category-btn:hover {
  background: rgba(100, 181, 246, 0.1) !important;
  border: 1px solid rgba(100, 181, 246, 0.2) !important;
}

.category-btn.v-btn--active {
  background: rgba(100, 181, 246, 0.2) !important;
  border: 1px solid rgba(100, 181, 246, 0.3) !important;
}

.transparent-toggle {
  background: transparent !important;
  border: none !important;
}

.item-dialog {
  background: rgba(13, 13, 35, 0.95) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(100, 181, 246, 0.1);
}

.item-dialog .v-card-title {
  color: #E3F2FD !important;
  font-size: 1.5rem !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px !important;
}

.item-dialog .v-card-text {
  color: #90CAF9 !important;
  padding: 20px !important;
}

.specifications-title {
  color: #E3F2FD;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 16px;
}

.specifications-list {
  background: transparent !important;
  padding: 0 !important;
}

.specification-item {
  background: rgba(13, 13, 35, 0.5) !important;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid rgba(100, 181, 246, 0.1);
}

.specification-item:hover {
  background: rgba(13, 13, 35, 0.7) !important;
  border-color: rgba(100, 181, 246, 0.2);
}

.spec-icon {
  color: #64B5F6 !important;
  font-size: 20px !important;
  filter: drop-shadow(0 0 4px rgba(100, 181, 246, 0.3));
}

.spec-text {
  color: #E3F2FD !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
}

/* Стили для иконок в основной карточке */
.damage-icon, .range-icon, .rate-icon {
  color: #64B5F6 !important;
  font-size: 24px !important;
  margin-right: 8px;
  filter: drop-shadow(0 0 4px rgba(100, 181, 246, 0.3));
}

/* Стили для значений спецификаций */
.spec-value {
  color: #90CAF9 !important;
  font-weight: 500;
}

/* Обновляем стили для списка в диалоге */
.v-list-item {
  min-height: 48px !important;
}

.v-list-item__icon {
  margin: 12px !important;
}

.v-list-item__content {
  padding: 12px 0 !important;
}

.v-list-item__title {
  color: #E3F2FD !important;
  font-size: 1rem !important;
  line-height: 1.4 !important;
}

/* Рейтинг */
.rating-container {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating-value {
  color: #FFC107;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.rating-value .v-icon {
  color: #FFC107 !important;
  margin-right: 4px;
  filter: drop-shadow(0 0 2px rgba(255, 193, 7, 0.3));
}

.specs-container {
  margin: 12px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
}

.spec-item {
  display: flex;
  align-items: center;
  padding: 6px;
  background: rgba(13, 13, 35, 0.5);
  border-radius: 6px;
  border: 1px solid rgba(100, 181, 246, 0.1);
}

.spec-item:hover {
  background: rgba(13, 13, 35, 0.7);
  border-color: rgba(100, 181, 246, 0.2);
}

.spec-label {
  color: #90CAF9;
  margin: 0 4px;
  font-size: 0.9rem;
}

.spec-value {
  color: #E3F2FD;
  font-weight: 500;
  font-size: 0.9rem;
}

.spec-icon {
  color: #64B5F6 !important;
  font-size: 18px !important;
  margin-right: 4px;
  filter: drop-shadow(0 0 4px rgba(100, 181, 246, 0.3));
}

.price-card {
  background: rgba(13, 13, 35, 0.95) !important;
  border: 1px solid rgba(100, 181, 246, 0.2) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  border-radius: 8px;
}

.price-card .price-value {
  color: #FFD54F !important;
  text-shadow: 0 0 10px rgba(255, 213, 79, 0.3);
  font-weight: bold;
}

.price-card .v-btn {
  background: rgba(25, 118, 210, 0.2);
  border: 1px solid rgba(100, 181, 246, 0.3);
  color: #E3F2FD !important;
}

.price-card .v-btn:hover {
  background: rgba(25, 118, 210, 0.3) !important;
  border-color: rgba(100, 181, 246, 0.4) !important;
}

.price-card .wishlist-btn {
  background: rgba(13, 13, 35, 0.7) !important;
  border: 1px solid rgba(100, 181, 246, 0.2) !important;
  color: #90CAF9 !important;
}

.price-card .wishlist-btn:hover {
  background: rgba(13, 13, 35, 0.9) !important;
  border-color: rgba(100, 181, 246, 0.3) !important;
}
</style>
