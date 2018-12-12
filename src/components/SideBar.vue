<template>

  <el-col :span="6">
    <el-menu
      default-active="4"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="item in menuItems" index="2">
        
          <img :src="item.itemLogo"><br/>
          <span>{{item.itemName}}</span>
      
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
}
li.el-menu-item {
  margin-top: 40px; 
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
for (let i = 0; i < itemNames.length; i++) {
  menuItems.push({
    id: uuid.v1(),
    itemName: itemNames[i],
    itemLogo: itemLogos[i]
  });
}

export default {
  name: "SideBar",

  data() {
    return {
      menuItems
    };
  }
};
</script>
