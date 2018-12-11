<template>
  <div class="home">
    <Intro msg="One frictionless experience to send money globally"/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dl4OzGHNaGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <IntroPanel v-for="panel in panels" :panel="panel"/>>
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
  },
  

  data: function() {
    let panels = [];
  let titles = [
    "Today’s Payment Rails Don’t Cut It",
    "Meet RippleNet",
    "Better Than Any Blockchain",
  ];
  let descriptions = [
    "In a world where three billion people are connected online, cars drive themselves and appliances can communicate, global payments are still stuck in the disco era. Why? The payment infrastructure was built before the Internet with few updates.",
    "Ripple connects banks and payment providers via RippleNet to provide one frictionless experience for sending and receiving money globally.",
    "RippleNet runs on the most advanced blockchain technology. It is scaleable, secure and interoperates with different networks. Customers have optional access to source liquidity using the world's fastest and most reliable digital asset for payments: XRP.",
  ];
  let images = [require('../assets/problem-section.gif'),require('../assets/ripplenet-section.gif'),require('../assets/blockchain.png')];
    for (let i =0; i< titles.length;i++){
      panels.push({title:titles[i],description:descriptions[i],image:images[i]})
    };
    return {
      panels
    };
  }
};
</script>
<style scoped>
iframe {
  margin: 30px;
}
</style>
