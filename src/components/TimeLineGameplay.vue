<template>
  <v-timeline align="start" class="gameplay-timeline">
    <v-timeline-item
      v-for="(step, i) in gameSteps"
      :key="i"
      :dot-color="step.color"
      :icon="step.icon"
      fill-dot
      size="small"
    >
      <v-card class="timeline-card">
        <v-card-title :class="['text-h6', `bg-${step.color}`]">
          {{ step.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ step.description }}</p>
          <v-btn
            v-if="step.action"
            :color="step.color"
            variant="outlined"
            class="mt-2"
            @click="step.action"
          >
            {{ step.actionText }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "TimeLineGameplay",
  data: () => ({
    gameSteps: [
      {
        title: "Create Your Character",
        description: "Design your unique space explorer and choose your starting background. Will you be a daring pilot, a resourceful trader, or a skilled scientist?",
        color: "info",
        icon: "mdi-account-plus",
        action: () => console.log("Create character"),
        actionText: "Create Character"
      },
      {
        title: "Choose Your First Ship",
        description: "Select from a variety of starter ships, each with unique capabilities. From nimble scouts to sturdy cargo vessels, find the perfect ship for your playstyle.",
        color: "info",
        icon: "mdi-rocket",
        action: () => console.log("Select ship"),
        actionText: "View Ships"
      },
      {
        title: "Complete Tutorial",
        description: "Learn the basics of space navigation, combat, and trading in our comprehensive tutorial. Master essential skills before venturing into the unknown.",
        color: "info",
        icon: "mdi-school",
        action: () => console.log("Start tutorial"),
        actionText: "Begin Tutorial"
      },
      {
        title: "First Mission",
        description: "Embark on your first mission to deliver cargo, explore new systems, or engage in combat. Prove your worth and earn your place among the stars.",
        color: "info",
        icon: "mdi-flag",
        action: () => console.log("Start mission"),
        actionText: "View Missions"
      },
      {
        title: "Join a Faction",
        description: "Align yourself with one of the major factions in the galaxy. Each offers unique missions, ships, and opportunities for advancement.",
        color: "info",
        icon: "mdi-account-group",
        action: () => console.log("View factions"),
        actionText: "Explore Factions"
      }
    ]
  })
}
</script>

<style scoped>
.gameplay-timeline {
  padding: 20px;
}

.timeline-card {
  background: rgba(13, 13, 35, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-5px);
}

.timeline-card .v-card-title {
  background: rgba(100, 181, 246, 0.1) !important;
  color: #E3F2FD !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-card .v-card-text {
  color: #E3F2FD !important;
}

.timeline-card .v-btn {
  color: #64B5F6 !important;
  border-color: #64B5F6 !important;
}

.timeline-card .v-btn:hover {
  background: rgba(100, 181, 246, 0.1) !important;
}

.v-timeline-item__dot {
  box-shadow: 0 0 10px rgba(100, 181, 246, 0.3);
}

.v-timeline-item__inner-dot {
  background: #64B5F6 !important;
}

.v-timeline-item__body {
  max-width: 600px;
}

@media (max-width: 960px) {
  .gameplay-timeline {
    padding: 10px;
  }
  
  .v-timeline-item__body {
    max-width: 100%;
  }
}
</style>