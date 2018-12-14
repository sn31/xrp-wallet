<template>
<el-container class="main-container">
  <el-aside>
    <SideBar @clicked="showView"></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main id="main-view">
       <Profile :class="(show === 'Profile') ? 'pink' : 'hide'"></Profile>
       <Wallet :class="(show === 'Wallet') ? 'pink' : 'hide'"></Wallet>
      <Trade :class="(show === 'Trade') ? 'pink' : 'hide'"></Trade>
      <Exchange :class="(show === 'Exchange') ? 'pink' : 'hide'"></Exchange>
      <Analytics :class="(show === 'Analytics') ? 'pink' : 'hide'"></Analytics>
    </el-main>
  </el-container>
</el-container>
</template>
<style>

.main-container {
  height: 100vh;
}
.el-aside {
  color: #333;
}
.el-main {
  background-color:white;
}
.hide {
  display:none;
}
#main-view {
  padding:0;
}
</style>

<script>
import SideBar from "@/components/SideBar.vue";
import Trade from "@/components/Trade.vue";
import Exchange from "@/components/Exchange.vue";
import Analytics from "@/components/Analytics.vue";
import Profile from "@/components/Profile.vue";
import Wallet from "@/components/Wallet.vue";

export default {
  name: "account",
  components: {
    SideBar,
    Trade,
    Exchange,
    Analytics,
    Wallet,
    Profile
  },
  
  data(){
    let show = "";
    return {show};
  },
  methods: {
    showView(menuClicked)
    {
      console.log(menuClicked);
      this.show = menuClicked;
    }
  }
};
</script>
