<template>
  <div id="app">
    <div id="nav">
      <router-link to ="/"><img id="logo" alt="Ripple logo" src="./assets/ripple-logo-white.png"></router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/auth">Authentication</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
}
#nav {
  padding: 30px;
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
#logo {
  width: 8%;
  float: left;
}
</style>
