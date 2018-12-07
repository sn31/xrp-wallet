<template>
  <div class="home">
    <XrpIntro msg="One frictionless experience to send money globally"/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dl4OzGHNaGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import XrpIntro from "@/components/XrpIntro.vue";
import XrpIntroPanel from "@/components/XrpIntroPanel.vue";
export default {
  name: "home",
  components: {
    XrpIntro,
    XrpIntroPanel
  }
};
</script>
<style scoped>
iframe {
  margin: 30px;
}
</style>
