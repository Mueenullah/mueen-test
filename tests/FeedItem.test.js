/* eslint-env node, jest */
import { shallowMount } from "@vue/test-utils";
import FeedItem from "../src/components/FeedItem.vue";

describe("Testing Component Methods", () => {
  const feeditem = {
    id: 1,
    author: {
      id: 3,
      username: "gabriel",
      avatarUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png"
    },
    itemName: "Mountain fox notebook",
    imageUrl:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",
    price: 18.09,
    likes: 5,
    disliked: false,
    liked: true,
    comments: [
      {
        commenterId: 12,
        commenterName: "nadeem",
        commenterAvatarUrl:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
        comment: "wow! nice photo"
      }
    ]
  };
  const wrapper = shallowMount(FeedItem, {
    propsData: {
      feeditem
    }
  });

  it("correctly updates the activeCommentBox when showComments is called", () => {
    expect(wrapper.vm.activeCommentBox).toBe(false); //initial vaue false
    wrapper.vm.showComments(); // calling component method
    expect(wrapper.vm.activeCommentBox).toBe(true); // update value true
  });
});
