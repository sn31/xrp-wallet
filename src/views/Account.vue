<template>
<el-container class="main-container">
  <el-aside>
    <SideBar></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main>
      
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
</style>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "account",
  components: {
    SideBar
  }
};
</script>
