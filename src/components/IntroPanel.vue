
<template>
  <b-row :class="panel.title ==  'Today’s Payment Rails Don’t Cut It' ? 'panel-light' :
  panel.title ==  'Meet RippleNet' ? 'panel-dark': 'panel-white'">
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
};
</script>
<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1 {
  padding-top: 30px;
  color: #066b98;
}
p {
  color: #808080;
}
.panel-light {
  padding: 50px 0 0;
  border-bottom: 1px solid #ccc;
  background-color: #f3f5f7;
}
.panel-dark {
  padding: 50px 0 0;
  background-color: #e6eaee;
  border-bottom: 1px solid #ccc;
}

.panel-white {
  border-bottom: 1px solid #ccc;
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
