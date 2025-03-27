<template>
  <v-container fluid class="start-container pa-0">
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
            <h1 class="text-h2 font-weight-bold main-title mb-6">START YOUR JOURNEY</h1>
            <div class="text-h4 font-weight-light sub-title">Choose your path to the stars</div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Main Content -->
    <v-container class="content-section">
      <v-row>
        <v-col cols="12">
          <v-card class="main-card" elevation="10">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="primary"
              centered
              class="tabs-custom"
            >
              <v-tab value="play">Play Now</v-tab>
              <v-tab value="token">APOSFERA Token</v-tab>
              <v-tab value="support">Support Us</v-tab>
            </v-tabs>

            <v-card-text class="tab-content">
              <v-window v-model="tab">
                <v-window-item value="play">
                  <div class="play-section">
                    <v-row>
                      <v-col cols="12" md="6">
                        <div class="play-info">
                          <h2 class="text-h4 mb-4">Begin Your Space Adventure</h2>
                          <p class="text-body-1 mb-6">Download the game and start exploring the vast universe of APOSFERA. Create your character, choose your first ship, and embark on an epic journey through space.</p>
                          <v-btn
                            color="primary"
                            size="large"
                            class="download-btn"
                            @click="downloadGame"
                          >
                            <v-icon left>mdi-download</v-icon>
                            Download Game
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card class="system-requirements" elevation="5">
                          <v-card-title class="text-h5">System Requirements</v-card-title>
                          <v-card-text>
                            <v-list>
                              <v-list-item>
                                <v-list-item-title>OS: Windows 10/11</v-list-item-title>
                                <v-list-item-subtitle>64-bit operating system</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title>Processor: Intel i5-6600k / AMD Ryzen 5 2600</v-list-item-title>
                                <v-list-item-subtitle>or better</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title>Memory: 16 GB RAM</v-list-item-title>
                                <v-list-item-subtitle>minimum</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title>Graphics: NVIDIA GTX 1060 / AMD RX 580</v-list-item-title>
                                <v-list-item-subtitle>or better</v-list-item-subtitle>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-window-item>

                <v-window-item value="token">
                  <div class="token-section">
                    <v-row>
                      <v-col cols="12" md="6">
                        <div class="token-info">
                          <h2 class="text-h4 mb-4">APOSFERA Token</h2>
                          <p class="text-body-1 mb-6">Join our ecosystem with APOSFERA tokens. Use them to purchase ships, resources, and participate in the game's economy.</p>
                          <v-btn
                            color="primary"
                            size="large"
                            class="buy-token-btn"
                            @click="buyTokens"
                          >
                            <v-icon left>mdi-currency-usd</v-icon>
                            Buy Tokens
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card class="token-benefits" elevation="5">
                          <v-card-title class="text-h5">Token Benefits</v-card-title>
                          <v-card-text>
                            <v-list>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-rocket</v-icon>
                                <v-list-item-title>Exclusive Ships</v-list-item-title>
                                <v-list-item-subtitle>Access to premium spacecraft</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-shield</v-icon>
                                <v-list-item-title>Enhanced Protection</v-list-item-title>
                                <v-list-item-subtitle>Better ship insurance rates</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-trophy</v-icon>
                                <v-list-item-title>Special Events</v-list-item-title>
                                <v-list-item-subtitle>Access to exclusive tournaments</v-list-item-subtitle>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-window-item>

                <v-window-item value="support">
                  <div class="support-section">
                    <v-row>
                      <v-col cols="12" md="6">
                        <div class="support-info">
                          <h2 class="text-h4 mb-4">Support APOSFERA</h2>
                          <p class="text-body-1 mb-6">Help us build the future of space exploration. Your support helps us create new features, improve performance, and expand the universe.</p>
                          <v-btn
                            color="primary"
                            size="large"
                            class="support-btn"
                            @click="supportProject"
                          >
                            <v-icon left>mdi-heart</v-icon>
                            Support Project
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card class="support-options" elevation="5">
                          <v-card-title class="text-h5">Support Options</v-card-title>
                          <v-card-text>
                            <v-list>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-star</v-icon>
                                <v-list-item-title>Early Access</v-list-item-title>
                                <v-list-item-subtitle>Get early access to new features</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-account-group</v-icon>
                                <v-list-item-title>Community Influence</v-list-item-title>
                                <v-list-item-subtitle>Vote on future developments</v-list-item-subtitle>
                              </v-list-item>
                              <v-list-item>
                                <v-icon color="primary" class="mr-2">mdi-gift</v-icon>
                                <v-list-item-title>Exclusive Rewards</v-list-item-title>
                                <v-list-item-subtitle>Special supporter-only items</v-list-item-subtitle>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Game Progress Timeline -->
    <v-container class="timeline-section">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">YOUR JOURNEY AHEAD</h2>
          <div class="section-subtitle">Follow the path to becoming a legendary space explorer</div>
        </v-col>
        <v-col cols="12">
          <TimeLineGameplay></TimeLineGameplay>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import TimeLineGameplay from "@/components/TimeLineGameplay";

export default {
  name: "StartNowPage",
  components: {
    TimeLineGameplay
  },
  data: () => ({
    tab: 'play'
  }),
  methods: {
    downloadGame() {
      // Implement game download logic
      console.log('Downloading game...');
    },
    buyTokens() {
      // Implement token purchase logic
      console.log('Buying tokens...');
    },
    supportProject() {
      // Implement support logic
      console.log('Supporting project...');
    }
  }
}
</script>

<style scoped>
.start-container {
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
    radial-gradient(circle at 50% 50%, rgba(0, 50, 255, 0.1) 0%, transparent 60%);
  filter: blur(30px);
  animation: nebula-move 30s ease infinite;
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
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
}

@keyframes nebula-move {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hero-section {
  padding-top: 100px;
  position: relative;
  z-index: 2;
}

.main-title {
  font-family: 'Osiris', sans-serif;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.5);
}

.sub-title {
  font-family: 'Discopia Regular', sans-serif;
  color: #90CAF9;
  letter-spacing: 0.5em;
  opacity: 0.9;
}

.content-section {
  position: relative;
  z-index: 2;
  padding-top: 50px;
}

.main-card {
  background: rgba(13, 13, 35, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
}

.tabs-custom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tabs-custom .v-tab {
  color: #E3F2FD !important;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.tabs-custom .v-tab--selected {
  opacity: 1;
  color: #64B5F6 !important;
}

.tab-content {
  padding: 30px;
}

.play-section, .token-section, .support-section {
  color: #E3F2FD;
}

.system-requirements, .token-benefits, .support-options {
  background: rgba(13, 13, 35, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.system-requirements .v-card-title,
.token-benefits .v-card-title,
.support-options .v-card-title {
  color: #E3F2FD !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
  margin-bottom: 8px;
}

.system-requirements .v-list,
.token-benefits .v-list,
.support-options .v-list {
  background: transparent !important;
  color: #E3F2FD !important;
}

.system-requirements .v-list-item,
.token-benefits .v-list-item,
.support-options .v-list-item {
  background: transparent !important;
  color: #E3F2FD !important;
}

.system-requirements .v-list-item:hover,
.token-benefits .v-list-item:hover,
.support-options .v-list-item:hover {
  background: rgba(100, 181, 246, 0.1) !important;
}

.system-requirements .v-list-item-title,
.token-benefits .v-list-item-title,
.support-options .v-list-item-title {
  color: #E3F2FD !important;
  font-size: 1.1rem !important;
}

.system-requirements .v-list-item-subtitle,
.token-benefits .v-list-item-subtitle,
.support-options .v-list-item-subtitle {
  color: #90CAF9 !important;
  opacity: 0.8;
}

.system-requirements .v-icon,
.token-benefits .v-icon,
.support-options .v-icon {
  color: #64B5F6 !important;
}

.timeline-section {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 100px;
}

.section-title {
  font-family: 'Osiris', sans-serif;
  color: #E3F2FD;
  margin-bottom: 20px;
}

.section-subtitle {
  color: #90CAF9;
  font-size: 1.2rem;
  margin-bottom: 50px;
}

.download-btn, .buy-token-btn, .support-btn {
  text-transform: none;
  letter-spacing: 1px;
  font-weight: 500;
}

@media (max-width: 960px) {
  .hero-section {
    padding-top: 50px;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .sub-title {
    font-size: 1.2rem;
  }
  
  .tab-content {
    padding: 20px;
  }
}
</style>
