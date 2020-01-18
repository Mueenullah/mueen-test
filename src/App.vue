<template>
  <div id="app">
    <!-- <FeedItem />
    <FeedItem /> -->

    <router-link to="/">Home</router-link>
    <router-view />
  </div>
</template>

<script>
// import Feed from "./components/Feed.vue";

export default {
  name: "app",
  components: {
    // Feed
  }
};
</script>

<style lang="scss">
// import fontawesome cdn link for icons
@import "https://use.fontawesome.com/releases/v5.0.9/css/all.css";

// variables
$primary-color: #2c3e50;

// body styles
body {
  background-color: #eee;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-color;
}
#app {
  margin: 60px auto 0 auto;
  width: 300px;
}
</style>
