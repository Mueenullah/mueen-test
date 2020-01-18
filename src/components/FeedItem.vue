<template>
  <div class="feed-item-wrapper">
    <div class="feed-item-header">
      <div class="author-image">
        <img src="../assets/user.png" alt="author-image" />
      </div>
      <span class="author-name">
        <!-- <router-link :to="{name: 'student', params: {id: 2}}">Student</router-link> -->
        <a href>gabriel</a>
      </span>
    </div>
    <div class="feed-item-body">
      <div class="feed-item-img">
        <img src="../assets/feed-item.jpg" alt />
        <div class="feed-item-overlay">
          <span class="feed-item-name">
            <!-- <router-link :to="{name: 'student', params: {id: 2}}">Student</router-link> -->
            <a href>Mountain fox notebook</a>
          </span>
        </div>
      </div>
      <div class="feed-item-footer">
        <span class="feed-item-price">
          <i class="fa fa-euro-sign fa-xs"></i>18.09
        </span>
        <div class="feed-item-cta">
          <span class="feed-item-comments">
            <span class="comments">{{ comments.length }}</span>
            <i @click="showComments" class="far fa-comment"></i>
          </span>
          <span class="feed-item-likes">
            <span class="likes">2</span>
            <i class="far fas fa-heart"></i>
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
                  :src="comment.userimg"
                  :alt="comment.username"
                />
                <span class="username">
                  <a href>{{ comment.username }}</a>
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
      comments: [
        {
          username: "Mueen",
          userimg:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",
          comment: "This is commnet one"
        },
        {
          username: "Baig",
          userimg:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
          comment: "This is comment two"
        }
      ],
      activeCommentBox: false
    };
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
      this.comments.push(0, {
        username: "test",
        userimg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
        comment: this.comment
      });
      this.comment = "";
    }
  }
};
</script>

<style lang="scss">
.feed-item-wrapper {
  margin: 10px 0;
  .feed-item-header {
    display: flex;
    align-items: center;
    padding: 10px;
    .author-image {
      height: 25px;
      width: 25px;
      img {
        width: 100%;
        height: auto;
        border-radius: 50%;
      }
    }
    .author-name {
      margin-left: 10px;
      text-transform: capitalize;
      a {
        text-decoration: none;
        color: #2c3e50;
      }
    }
  }
  .feed-item-body {
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 4px -4px;
    .feed-item-img {
      position: relative;
      img {
        width: 100%;
        height: auto;
        border-radius: 5px 5px 0 0;
      }
      .feed-item-overlay {
        position: absolute;
        bottom: 10%;
        left: 0;
        right: 0;
        margin-left: 20px;
        a {
          color: #ffffff;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    .feed-item-footer {
      padding: 5px 10px 10px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .feed-item-cta {
        .feed-item-comments,
        .feed-item-likes {
          position: relative;
          width: 20px;
          margin: 0 10px;
          display: inline-block;
          .comments,
          .likes {
            font-size: 10px;
            display: block;
            text-align: center;
          }
          i {
            position: absolute;
            top: -4px;
            left: 0px;
            bottom: 0;
            right: 0;
            font-size: 22px;
            cursor: pointer;
          }
        }
      }
    }
    .feed-item-comments-wrapper {
      width: 100%;
      border-top: 1px solid #eee;
      .feed-item-comment-box {
        padding: 10px;
        form {
          display: flex;
          input {
            width: calc(100% - 30px);
            border: none;
            padding-right: 5px;
          }
          .comment-button {
            width: 30px;
            border: none;
            background: transparent;
            padding: 0;
            margin: 0;
            .comment-icon {
              cursor: pointer;
            }
          }
        }
      }
      .feed-item-comments {
        .feed-item-comments-list {
          list-style: none;
          padding: 0;
          margin: 0;
          .comment-item {
            padding: 5px 10px;
            border-top: 1px solid #eeeeee36;
            .commenter-details {
              display: flex;
              align-items: center;
              .image {
                height: 15px;
                width: 15px;
                border-radius: 50%;
              }
              .username {
                display: flex;
                margin-left: 5px;
                a {
                  font-size: 10px;
                  text-decoration: none;
                }
              }
            }
            .comment-text {
              margin: 0 0 0 20px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
