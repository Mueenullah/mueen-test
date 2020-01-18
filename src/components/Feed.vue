<template>
  <div id="feed">
    <FeedItem />
    <FeedItem />

    <router-view />
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue";

export default {
  name: "app",
  components: {
    FeedItem
  }
};
</script>

<style lang="scss">
// feed styles
#feed {
  margin: 60px auto 0 auto;
  width: 300px;
}
</style>
