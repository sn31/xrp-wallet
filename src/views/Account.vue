<template>
  <div class="about">
    <h1>This is the profile page</h1>
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "account",
  components: {
    SideBar
  },
}
  </script>