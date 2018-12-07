<template>
  <div class="home">
    <Intro msg="One frictionless experience to send money globally"/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dl4OzGHNaGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <IntroPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import IntroPanel from "@/components/IntroPanel.vue";
export default {
  name: "home",
  components: {
    Intro,
    IntroPanel
  }
};
</script>
<style scoped>
iframe {
  margin: 30px;
}
</style>
