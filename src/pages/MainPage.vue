<template>
  <v-container fluid class="main-container pa-0">
    <div class="space-background">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <div class="nebula"></div>
    </div>

    <!-- Hero Section -->
    <v-container class="hero-section">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <div class="text-center mb-16">
            <h1 class="text-h2 font-weight-bold main-title mb-6">APOSFERA</h1>
            <div class="text-h4 font-weight-light sub-title">SPACETRIPS</div>
          </div>
          
          <v-card class="main-card" elevation="10">
            <v-card-text>
              <div class="text-h5 mb-4 feature-text">Procedural Space Generation</div>
              <div class="features-grid mb-6">
                <div class="feature-item">
                  <v-icon color="primary" size="24">mdi-earth</v-icon>
                  <span>Full-scaled Universe</span>
                </div>
                <div class="feature-item">
                  <v-icon color="primary" size="24">mdi-rocket</v-icon>
                  <span>Spaceship Trips</span>
                </div>
                <div class="feature-item">
                  <v-icon color="primary" size="24">mdi-city</v-icon>
                  <span>Colonies & Spaceports</span>
                </div>
                <div class="feature-item">
                  <v-icon color="primary" size="24">mdi-telescope</v-icon>
                  <span>Anomalies & Exploring</span>
                </div>
              </div>
            </v-card-text>
            
            <v-card-actions class="justify-center pa-6">
              <v-btn 
                x-large 
                color="primary" 
                @click="goToView('/start')"
                class="start-button"
                elevation="8"
              >
                <span class="text-h6">START YOUR JOURNEY</span>
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Ship Showcase Section -->
    <v-container class="showcase-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">AVAILABLE SHIPS</h2>
          <div class="section-subtitle">Choose your vessel for space exploration</div>
        </v-col>
        <v-col cols="12">
          <v-carousel
            hide-delimiter-background
            show-arrows-on-hover
            height="500"
            class="ship-carousel"
          >
            <v-carousel-item
              v-for="(ship, i) in ships"
              :key="i"
            >
              <v-sheet class="ship-slide">
                <v-row>
                  <v-col cols="12" md="6" class="d-flex align-center">
                    <v-img 
                      :src="ship.image" 
                      class="ship-image" 
                      contain
                      @error="ship.image = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800'"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="6" class="d-flex align-center">
                    <div class="ship-info">
                      <h3 class="ship-name">{{ ship.name }}</h3>
                      <div class="ship-class">{{ ship.class }}</div>
                      <div class="ship-stats">
                        <div class="stat-item" v-for="(stat, index) in ship.stats" :key="index">
                          <v-icon color="primary">{{ stat.icon }}</v-icon>
                          <span>{{ stat.label }}: {{ stat.value }}</span>
                        </div>
                      </div>
                      <p class="ship-description">{{ ship.description }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <!-- Features Section -->
    <v-container class="features-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">GAME FEATURES</h2>
          <div class="section-subtitle">Discover the vast universe</div>
        </v-col>
        <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i">
          <v-card class="feature-card" elevation="10">
            <v-img 
              :src="feature.image" 
              height="200" 
              class="feature-image"
              @error="feature.image = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800'"
            ></v-img>
            <v-card-title class="feature-title">{{ feature.title }}</v-card-title>
            <v-card-text class="feature-description">{{ feature.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Interactive Galaxy Map -->
    <v-container class="map-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">GALAXY MAP</h2>
          <div class="section-subtitle">Preview the explorable regions</div>
        </v-col>
        <v-col cols="12">
          <div class="galaxy-map" ref="galaxyMap">
            <div class="galaxy-overlay">
              <div class="galaxy-stars"></div>
              <div class="galaxy-nebula"></div>
              <div class="galaxy-content">
                <div class="galaxy-region" v-for="(region, i) in galaxyRegions" :key="i">
                  <div class="region-name">{{ region.name }}</div>
                  <div class="region-stats">
                    <span>{{ region.systems }} Systems</span>
                    <span>{{ region.planets }} Planets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Community Section -->
    <v-container class="community-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">JOIN THE COMMUNITY</h2>
          <div class="section-subtitle">Connect with other explorers</div>
        </v-col>
        <v-col cols="12" md="4" v-for="(stat, i) in communityStats" :key="i">
          <v-card class="stat-card" elevation="5">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "MainPage",
  data() {
    return {
      ships: [
        {
          name: "Stellar Explorer",
          class: "Long Range Explorer",
          image: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&w=800",
          description: "Advanced exploration vessel equipped for long-range missions and detailed planetary scanning.",
          stats: [
            { icon: "mdi-speedometer", label: "Speed", value: "950 c" },
            { icon: "mdi-shield", label: "Shield", value: "Class A" },
            { icon: "mdi-gas-cylinder", label: "Fuel Capacity", value: "500k ly" }
          ]
        },
        {
          name: "Nebula Hunter",
          class: "Combat Explorer",
          image: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&w=800",
          description: "Combat-ready exploration ship with enhanced defensive capabilities and advanced scanning systems.",
          stats: [
            { icon: "mdi-speedometer", label: "Speed", value: "850 c" },
            { icon: "mdi-shield", label: "Shield", value: "Class S" },
            { icon: "mdi-gas-cylinder", label: "Fuel Capacity", value: "300k ly" }
          ]
        }
      ],
      features: [
        {
          title: "Procedural Planets",
          image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800",
          description: "Every planet is unique, with its own climate, resources, and challenges."
        },
        {
          title: "Space Combat",
          image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&w=800",
          description: "Engage in tactical space battles with advanced combat mechanics."
        },
        {
          title: "Trading System",
          image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800",
          description: "Dynamic economy system with real-time market fluctuations."
        }
      ],
      communityStats: [
        { value: "1M+", label: "Active Explorers" },
        { value: "10K+", label: "Discovered Planets" },
        { value: "500+", label: "Active Colonies" }
      ],
      galaxyRegions: [
        { name: "Alpha Centauri", systems: 12, planets: 45 },
        { name: "Orion's Belt", systems: 8, planets: 32 },
        { name: "Nebula Core", systems: 15, planets: 67 },
        { name: "Outer Rim", systems: 20, planets: 89 }
      ]
    }
  },
  methods: {
    goToView(view_url) {
      router.push(view_url)
    },
    initGalaxyMap() {
      // Здесь будет инициализация интерактивной карты
    }
  },
  mounted() {
    this.initGalaxyMap();
  }
}
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  background: linear-gradient(to bottom, #0B0B1F, #1B1B3A);
  position: relative;
  overflow: hidden;
}

.space-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.nebula {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(100, 0, 255, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(50, 0, 255, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(0, 50, 255, 0.1) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 255, 0.1) 0%, transparent 40%);
  filter: blur(30px);
  animation: nebula-move 30s ease infinite;
}

@keyframes nebula-move {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.stars {
  background: radial-gradient(1px 1px at 50% 50%, #fff, rgba(0,0,0,0));
  background-size: 100px 100px;
  animation: stars-move 10s linear infinite;
}

.stars2 {
  background: radial-gradient(1px 1px at 50% 50%, #fff, rgba(0,0,0,0));
  background-size: 200px 200px;
  animation: stars-move 15s linear infinite;
}

.stars3 {
  background: radial-gradient(2px 2px at 50% 50%, rgba(255,255,255,0.8), rgba(0,0,0,0));
  background-size: 300px 300px;
  animation: stars-move 20s linear infinite;
}

@keyframes stars-move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

.content-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.main-title {
  font-family: 'Osiris', sans-serif;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.5);
  position: relative;
}

.main-title::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle at center, rgba(100, 181, 246, 0.2), transparent 70%);
  filter: blur(10px);
  z-index: -1;
}

.sub-title {
  font-family: 'Discopia Regular', sans-serif;
  color: #90CAF9;
  letter-spacing: 0.5em;
  opacity: 0.9;
}

.main-card {
  background: rgba(13, 13, 35, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  position: relative;
}

.main-card::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, rgba(100, 181, 246, 0.3), transparent);
  border-radius: 15px;
  z-index: -1;
  opacity: 0.5;
}

.feature-text {
  color: #90CAF9;
  font-family: 'Discopia Regular', sans-serif;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #E3F2FD;
  font-size: 1.1em;
}

.start-button {
  min-width: 250px;
  height: 60px !important;
  background: linear-gradient(45deg, #1E88E5, #64B5F6) !important;
  border-radius: 30px;
  font-family: 'Osiris', sans-serif;
  transition: all 0.3s ease;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(33, 150, 243, 0.3) !important;
}

.star-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 600px) {
  .main-title {
    font-size: 2.5rem !important;
  }
  
  .sub-title {
    font-size: 1.5rem !important;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.section-title {
  font-family: 'Osiris', sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.3);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: 'Discopia Regular', sans-serif;
  color: #90CAF9;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.showcase-section, .features-section, .map-section, .community-section {
  padding: 100px 0;
  position: relative;
}

.ship-carousel {
  background: rgba(13, 13, 35, 0.7);
  border-radius: 15px;
  overflow: hidden;
}

.ship-slide {
  background: transparent !important;
  padding: 2rem;
}

.ship-image {
  max-height: 400px;
  filter: drop-shadow(0 0 20px rgba(100, 181, 246, 0.3));
}

.ship-info {
  padding: 2rem;
  color: #E3F2FD;
}

.ship-name {
  font-family: 'Osiris', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ship-class {
  font-family: 'Discopia Regular', sans-serif;
  color: #90CAF9;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.ship-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-card {
  background: rgba(13, 13, 35, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 181, 246, 0.2) !important;
}

.feature-title {
  font-family: 'Osiris', sans-serif;
  color: #E3F2FD;
}

.feature-description {
  color: #90CAF9;
}

.galaxy-map {
  height: 600px;
  background: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200') center/cover;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(100, 181, 246, 0.2);
}

.galaxy-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 35, 0.7);
  backdrop-filter: blur(5px);
}

.galaxy-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(1px 1px at 50% 50%, #fff, rgba(0,0,0,0));
  background-size: 50px 50px;
  animation: galaxy-stars-move 20s linear infinite;
}

.galaxy-nebula {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 40%, rgba(100, 0, 255, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(0, 100, 255, 0.2) 0%, transparent 50%);
  filter: blur(20px);
  animation: galaxy-nebula-move 30s ease infinite;
}

.galaxy-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  height: 100%;
}

.galaxy-region {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.galaxy-region:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(100, 181, 246, 0.2);
}

.region-name {
  font-family: 'Osiris', sans-serif;
  font-size: 1.5rem;
  color: #E3F2FD;
  margin-bottom: 10px;
}

.region-stats {
  display: flex;
  gap: 20px;
  color: #90CAF9;
  font-size: 1.1rem;
}

.stat-card {
  background: rgba(13, 13, 35, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
}

.stat-value {
  font-family: 'Osiris', sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-family: 'Discopia Regular', sans-serif;
  color: #90CAF9;
  font-size: 1.2rem;
}

@keyframes galaxy-stars-move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes galaxy-nebula-move {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
  
  .ship-image {
    max-height: 300px;
  }
  
  .galaxy-content {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  
  .galaxy-region {
    padding: 15px;
  }
  
  .region-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .ship-info {
    padding: 1rem;
  }
  
  .ship-stats {
    grid-template-columns: 1fr;
  }
}
</style>
