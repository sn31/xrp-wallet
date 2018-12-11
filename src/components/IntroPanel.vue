
<template>
  <b-row class="panel">
      <b-col lg="4"><img :src="panel.image"/></b-col>
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
   
  props: {
   panel: {
    type: Object,
    required: true
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
.panel {
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
