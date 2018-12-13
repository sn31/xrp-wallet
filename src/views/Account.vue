<template>
<el-container class="main-container">
  <el-aside>
    <SideBar @clicked="onClickChild"></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main>
      <Trade :class="showView()"></Trade>
      <Exchange :class="showView()"></Exchange>
      <Analytics :class="showView()"></Analytics>
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
.showView {
  display:none;
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
  methods: {
    onClickChild(value){
      console.log(value)
    }
  }
};
</script>
