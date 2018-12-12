<template>
<el-container class="main-container">
  <el-aside>
    <SideBar></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main>
      <h1>Hello</h1>
    </el-main>
  </el-container>
</el-container>
</template>
<style>

.main-container {
  height: 100vh;
  border: 1px solid #eee;
}

.el-aside {
  color: #333;
}
</style>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "account",
  components: {
    SideBar
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
