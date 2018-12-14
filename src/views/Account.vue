<template>
<el-container class="main-container">
  <el-aside>
    <SideBar @clicked="showView"></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main>
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
  background-color:pink;
}
.hide {
  display:none;
}
.pink {
  background-color: purple;
}
</style>

<script>
import SideBar from "@/components/SideBar.vue";
import Trade from "@/components/Trade.vue";
import Exchange from "@/components/Exchange.vue";
import Analytics from "@/components/Analytics.vue";

export default {
  name: "account",
  components: {
    SideBar,
    Trade,
    Exchange,
    Analytics
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
