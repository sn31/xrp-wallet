<template>
  <el-col>
    <el-menu
      default-active="4"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="item in menuItems" :index = "item.id"  @click="handleClick">
        <div>
          <router-link :to="item.route">
          <img :src="item.itemLogo">
          <span>{{item.itemName}}</span></router-link>
          </div>
      </el-menu-item><br/><br/><br/>
    </el-menu>
  </el-col>
</template>

<style scoped>
template {
  background-color: transparent;
}
img {
  width: 20%;
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}
li.el-menu-item {
  margin-top: 30px;
}
span {
  margin: auto 0 auto 0;
}
</style>
<script>
import { uuid } from "vue-uuid";
let menuItems = [];
let itemNames = ["Home", "Wallet", "Trade", "Exchange", "Analytics"];
let itemLogos = [
  require("../assets/home-logo.png"),
  require("../assets/wallet-logo.png"),
  require("../assets/trade-logo.png"),
  require("../assets/exchange-logo.png"),
  require("../assets/analytics-logo.png")
];
let routes = ["/","","","","",""]
for (let i = 0; i < itemNames.length; i++) {
  menuItems.push({
    id: uuid.v1(),
    itemName: itemNames[i],
    itemLogo: itemLogos[i],
    route:routes[i]
  });
}

export default {
  name: "SideBar",

  data() {
    return {
      menuItems
    };
  },
  methods: {
      handleClick(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
