<template>
  <b-row v-for="panel in panels" id="panel">
      <b-col lg="4"><img src="../assets/ripplenet-section.gif"/></b-col>
      <b-col id="info" lg="8">
          <h1>{{panel.title}}</h1>
          <p>{{panel.description}}</p>
          <ul>
              <li><img class="sm-logo" src="../assets/access.png"></li>
              <li><img class="sm-logo" src="../assets/cost.png"></li>
              <li><img class="sm-logo" src="../assets/certainty.png"></li>
              <li><img class="sm-logo" src="../assets/speed.png"></li>
          </ul>
      </b-col>
  </b-row>
</template>
<script>
export default {
  name: "IntroPanel",
  data() {
    return {
      panels:[],
      titles:["Today’s Payment Rails Don’t Cut It","Meet RippleNet","Better Than Any Blockchain","Growing Global Network"],
      descriptions:["In a world where three billion people are connected online, cars drive themselves and appliances can communicate, global payments are still stuck in the disco era. Why? The payment infrastructure was built before the Internet with few updates.",
    "Ripple connects banks and payment providers via RippleNet to provide one frictionless experience for sending and receiving money globally.","RippleNet runs on the most advanced blockchain technology. It is scaleable, secure and interoperates with different networks. Customers have optional access to source liquidity using the world's fastest and most reliable digital asset for payments: XRP.",
    "Banks, payment providers and digital asset exchanges process and provide liquidity for payments on RippleNet, creating new, competitive cross-border payments services for their customers."]
    }
  }
}
</script>
<style scoped>
img {
  width: 70%;
}
h1 {
  padding-top: 30px;
  color: #066b98;
}
p {
  color: #808080;
}
#panel {
  background-color: #e6eaee;
  text-align: center;
  margin: 0;
}
.sm-logo {
  width: 30%;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}

#info {
  padding: 30px 10px 30px 10px;
}
</style>
