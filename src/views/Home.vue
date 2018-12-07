<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <XrpIntro msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import XrpIntro from "@/components/XrpIntro.vue";

export default {
  name: "home",
  components: {
    XrpIntro
  }
};
</script>
