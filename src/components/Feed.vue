<template>
  <div id="feed">
    <FeedItem v-for="item in feed" :key="item.id" :feeditem="item" />
    <router-view />
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue";
import axios from "axios";

export default {
  data() {
    return {
      feed: [],
      error: ""
    };
  },
  components: {
    FeedItem
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/Mueenullah/JsonFakeApi/feedItems"
      )
      .then(response => {
        this.feed = response.data;
      })
      .catch(e => {
        this.error = e.message;
      });
  }
};
</script>
