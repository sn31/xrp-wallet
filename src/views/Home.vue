<template>
  <div class="home">
    <img alt="Ripple logo" src="../assets/ripple-logo-white.png">
    <XrpIntro msg="One frictionless experience to send money globally"/>
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
