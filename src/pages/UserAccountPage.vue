<template>
    <UserInfo/>
    <LogoutButton/>
</template>


<script>

import UserInfo from "@/components/UserInfo.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "UserCabinet",
  components: {UserInfo, LogoutButton},
}
</script>

<style scoped>

</style>
