<template>
<el-container class="main-container">
  <el-aside>
    <SideBar @clicked="showView"></SideBar>
  </el-aside>
  <el-container class="main-content">
    <el-main id="main-view">
       <Profile :class="(show === 'Profile') ? '' : 'hide'"></Profile>
       <Wallet :class="(show === 'Wallet') ? '' : 'hide'"></Wallet>
      <Trade :class="(show === 'Trade') ? '' : 'hide'"></Trade>
      <Exchange :class="(show === 'Exchange') ? '' : 'hide'"></Exchange>
      <Analytics :class="(show === 'Analytics') ? '' : 'hide'"></Analytics>
    </el-main>
  </el-container>
</el-container>
</template>
<style scoped>
.main-container {
  height: 100vh;
}
.el-aside {
  color: #333;
}
#main-view {
  background-color: white;
}
.hide {
  display: none;
}
#main-view {
  padding: 0;
}
</style>

<script>
import SideBar from "@/components/SideBar.vue";
import Trade from "@/components/Trade.vue";
import Exchange from "@/components/Exchange.vue";
import Analytics from "@/components/Analytics.vue";
import Profile from "@/components/Profile.vue";
import Wallet from "@/components/Wallet.vue";
import axios from "axios";
import router from "@/router";

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

  data() {
    let show = "Wallet";
    return { show, user: { name: "Skye" } };
  },
  methods: {
    showView(menuClicked) {
      console.log(menuClicked);
      this.show = menuClicked;
    },
    getUserData: function() {
      let self = this;
      axios
        .get("/api/user")
        .then(response => {
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          router.push("/");
        });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>
