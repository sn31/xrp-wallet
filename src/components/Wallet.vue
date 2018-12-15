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
            <el-tab-pane label="Balance" name="first"></el-tab-pane>
            <el-tab-pane label="Transactions" name="second"></el-tab-pane>
            <el-tab-pane label="Open Orders" name="third"></el-tab-pane>
        </el-tabs>
     </div>
  </div>
  <div class="bottom">
    <Balance :class="(show === 'pane-first') ? '' : 'hide'"></Balance>
    <Transactions :class="(show === 'pane-second') ? '' : 'hide'"></Transactions>
    <OpenOrders :class="(show === 'pane-third') ? '' : 'hide'"></OpenOrders>
  </div>
</div>
</template>


<script>
import Balance from "@/components/Balance.vue";
import Transactions from "@/components/Transactions.vue";
import OpenOrders from "@/components/OpenOrders.vue";
export default {
  name: "wallet",
  components: {
    Balance,
    Transactions,
    OpenOrders
  },
  data() {
    let show = "";
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
      value: "",
      show
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(tab["$el"]["id"]); 
      this.show = (tab["$el"]["id"]);
      console.log(this.show);
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
  color: black;
}

.el-tabs {
  display: inline-block;
  margin: 3vh auto 2vh auto;
}

.hide {
  display: none;
}
</style>