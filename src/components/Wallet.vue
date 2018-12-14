<template>
<div class="container">
<div class="top">
    <h1>Wallet Net Worth</h1>
    <div>
    <span>Number goes here</span>
    <el-select v-model="value" placeholder="Select">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
     </el-select>
    </div>
    <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Balance" name="first">Balance</el-tab-pane>
            <el-tab-pane label="Transactions" name="second">Transactions</el-tab-pane>
            <el-tab-pane label="Open Orders" name="third">Open Orders</el-tab-pane>
        </el-tabs>
     </div>
    
</div>
<div class="bottom">

</div>
</div>
</template>


<script>
export default {
  data() {
    return {
      activeName: "first",
      options: [
        {
          value: "XRP",
          label: "XRP"
        },
        {
          value: "USD",
          label: "USD"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
span {
  margin-right: 1em;
}
.container {
  width: 100%;
  padding: 0;
}
.top {
  background-color: #156bbf;
  height: 30vh;
  padding: 0;
}
.bottom {
  background-color: white;
  height: 70vh;
  padding: 0;
}

.el-tabs {
    display: inline-block;
    margin: 3vh auto 2vh auto;
}
</style>