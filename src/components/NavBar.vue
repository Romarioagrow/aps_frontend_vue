<template>
  <v-app-bar
    app
    flat
    height="80"
    class="nav-bar"
  >
    <div class="nav-background">
      <div class="nav-stars"></div>
      <div class="nav-glow"></div>
    </div>

    <v-btn
      class="brand-button"
      @click="goToView('/')"
      text
    >
      <span class="brand-text">APOSFERA</span>
      <span class="brand-subtext">SPACETRIPS</span>
    </v-btn>

    <v-spacer></v-spacer>

    <div class="nav-links">
      <v-btn
        v-for="(item, i) in menuItems"
        :key="i"
        text
        :disabled="item.disabled"
        @click="goToView(item.route)"
        class="nav-link"
      >
        <v-icon left v-if="item.icon" class="nav-icon">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-btn
        @click="goToView('/start')"
        class="start-nav-button"
        elevation="4"
      >
        START NOW
        <v-icon right>mdi-rocket-launch</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      menuItems: [
        { title: 'News', route: '/news', icon: 'mdi-newspaper-variant' },
        { title: 'Market', route: '/market', icon: 'mdi-store', disabled: true },
        { title: 'Gallery', route: '/gallery', icon: 'mdi-image-multiple' },
      ]
    }
  },
  methods: {
    goToView(view_url) {
      router.push(view_url)
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background: transparent !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.nav-stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0)) 0 0 / 100px 100px,
    radial-gradient(2px 2px at 30% 30%, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0)) 0 0 / 120px 120px;
  opacity: 0.3;
}

.nav-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, 
    rgba(13, 13, 35, 0.7) 0%,
    rgba(30, 136, 229, 0.1) 50%,
    rgba(13, 13, 35, 0.7) 100%
  );
}

.brand-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  height: 100%;
  min-width: 200px;
  transition: all 0.3s ease;
}

.brand-button:hover {
  transform: scale(1.02);
}

.brand-text {
  font-family: 'Osiris', sans-serif;
  font-size: 24px;
  background: linear-gradient(120deg, #ffffff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.5);
}

.brand-subtext {
  font-family: 'Discopia Regular', sans-serif;
  font-size: 12px;
  letter-spacing: 0.3em;
  color: #90CAF9;
  opacity: 0.9;
  margin-top: -5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
}

.nav-link {
  font-family: 'Osiris', sans-serif;
  color: #E3F2FD !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  padding: 0 15px;
  height: 40px;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64B5F6, transparent);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.nav-icon {
  margin-right: 5px;
  color: #90CAF9;
}

.start-nav-button {
  font-family: 'Osiris', sans-serif;
  background: linear-gradient(45deg, #1E88E5, #64B5F6) !important;
  color: white !important;
  padding: 0 25px;
  height: 40px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  margin-left: 20px;
  transition: all 0.3s ease;
}

.start-nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
}

@media (max-width: 960px) {
  .brand-button {
    min-width: auto;
  }
  
  .brand-subtext {
    display: none;
  }
  
  .nav-link {
    padding: 0 10px;
  }
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
}
</style>
