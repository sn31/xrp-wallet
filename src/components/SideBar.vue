<template>
  <el-col>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#2d323a"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div id="logo-container">
      <router-link  to="/"> 
      <img id="logo" src="../assets/digi-logo.png">
      </router-link>
      </div>
       <a href="#" v-on:click="logout" >Logout</a>  
      
      <el-menu-item v-for="item in menuItems" :index = "item.id"  @click="handleClick(item.itemName)">
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
  height: 100vh;
}
img {
  width: 20%;
  float: left;
  clear: both;
}
li.el-menu-item {
  margin-top: 10vh;
}
span {
  margin: auto 0 auto 0;
}
a {
  text-decoration: none;
  color: white;
}
.el-menu {
  height: 100vh;
  overflow: hidden;
  border-right: none;
}
#logo {
  width: 100%;
}

#logo-container {
  height: 6vh;
  margin-bottom: 4vh;
}
</style>
<script>
import { uuid } from "vue-uuid";
import router from "@/router";
import axios from "axios";
let menuItems = [];
let itemNames = ["Profile", "Wallet", "Trade", "Exchange", "Analytics"];
let itemLogos = [
  require("../assets/home-logo.png"),
  require("../assets/wallet-logo.png"),
  require("../assets/trade-logo.png"),
  require("../assets/exchange-logo.png"),
  require("../assets/analytics-logo.png")
];
let routes = ["", "", "", "", ""];
for (let i = 0; i < itemNames.length; i++) {
  menuItems.push({
    id: uuid.v1(),
    itemName: itemNames[i],
    itemLogo: itemLogos[i],
    route: routes[i]
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
    handleClick(itemName) {
      this.$emit("clicked", itemName);
    },
    logout(e) {
      console.log("Logging out");
      axios.get("/api/logout").then(() => {
        router.push("/");
      });
    }
  }
};
</script>
