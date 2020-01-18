<template>
  <div class="feed-item-wrapper">
    <div class="feed-item-header">
      <div class="author-image">
        <img :src="feeditem.author.avatarUrl" :alt="feeditem.author.username" />
      </div>
      <span class="author-name">
        <router-link
          :to="{ name: 'profile', params: { id: feeditem.author.id } }"
          >{{ feeditem.author.username }}</router-link
        >
      </span>
    </div>
    <div class="feed-item-body">
      <div class="feed-item-img">
        <img :src="feeditem.imageUrl" :alt="feeditem.itemName" />
        <div class="feed-item-overlay">
          <span class="feed-item-name">
            <router-link
              :to="{ name: 'itemdetails', params: { id: feeditem.id } }"
              >{{ feeditem.itemName }}</router-link
            >
          </span>
        </div>
      </div>
      <div class="feed-item-footer">
        <span class="feed-item-price">
          <i class="fa fa-euro-sign fa-xs"></i>{{ feeditem.price }}
        </span>
        <div class="feed-item-cta">
          <span class="feed-item-comments">
            <span class="comments" @click="showComments">{{
              comments.length
            }}</span>
            <i class="far fa-comment"></i>
          </span>
          <span class="feed-item-likes" :class="disliked ? 'disliked' : ''">
            <span
              class="likes"
              :class="liked ? 'liked' : ''"
              @click="likeDislike"
              >{{ likes > 0 ? calculateLikes : "" }}</span
            >
            <i class="far fa-heart" :class="liked || disliked ? 'fas' : ''"></i>
          </span>
        </div>
      </div>
      <div class="feed-item-comments-wrapper" v-if="activeCommentBox">
        <div class="feed-item-comment-box">
          <form @submit.prevent="addComment">
            <input
              ref="commentField"
              type="text"
              placeholder="write comment here"
              v-model="comment"
              autofocus
            />
            <button type="submit" class="comment-button">
              <i class="comment-icon fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
        <div class="feed-item-comments" v-if="comments.length > 0">
          <ul class="feed-item-comments-list">
            <li
              class="comment-item"
              v-for="(comment, index) in comments"
              :key="index"
            >
              <div class="commenter-details">
                <img
                  class="image"
                  :src="comment.commenterAvatarUrl"
                  :alt="comment.commenterName"
                />
                <span class="username">
                  <router-link
                    :to="{
                      name: 'profile',
                      params: { id: comment.commenterId }
                    }"
                    >{{ comment.commenterName }}</router-link
                  >
                </span>
              </div>
              <p class="comment-text">{{ comment.comment }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      comments: this.feeditem.comments,
      activeCommentBox: false,
      disliked: this.feeditem.disliked,
      liked: this.feeditem.liked,
      likes: this.feeditem.likes
    };
  },
  props: ["feeditem"],
  computed: {
    calculateLikes() {
      if (this.likes >= 1000) {
        return (this.likes / 1000).toFixed(1) + "k";
      }
      return this.likes;
    }
  },
  methods: {
    showComments() {
      this.activeCommentBox = !this.activeCommentBox;
      if (this.activeCommentBox) {
        setTimeout(() => {
          this.$refs.commentField.focus();
        }, 1);
      }
    },
    addComment() {
      this.comments.push({
        commenterId: 22,
        commenterName: "test",
        commenterAvatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
        comment: this.comment
      });
      this.comment = "";
    },
    likeDislike() {
      if (this.disliked && !this.liked) {
        this.disliked = false;
        this.liked = true;
        this.likes++;
      } else if (this.liked && !this.disliked) {
        this.disliked = true;
        this.liked = false;
        this.likes--;
      } else if (!this.disliked && !this.liked) {
        this.liked = true;
        this.disliked = false;
        this.likes++;
      }
    }
  }
};
</script>

