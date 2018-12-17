<template>
  <div id="app">
    <div id="nav" :class="show()">
      <router-link to ="/"><img id="logo" alt="Ripple logo" src="./assets/ripple-logo-white.png"></router-link>
      <div id="nav-items">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/auth">Authentication</router-link>
     
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: "app",
  beforeCreate() {
    console.log(this.$route);
  },
  methods: {
    show() {
      if (this.$route.fullPath === "/account") {
        console.log(this.$route.fullPath === "/account");
        return "hide";
      }
      return "";
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #1b4883;
  height: 100vh;
  background-image: url("./assets/bg.jpg");
  background-repeat: none;
  background-size: cover;
}
#nav {
  padding: 30px 10px 10px 10px;
  margin-left: auto;
  margin-right: auto;
}
#nav a {
  font-weight: bold;
  color: white;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#nav-items {
  float: right;
}
#logo {
  width: 8%;
  float: left;
}
.hide {
  height: 0;
  display: none;
}
</style>