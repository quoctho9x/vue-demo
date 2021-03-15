<template>
  <div class="Example1">
    <h1>This is an Example1</h1>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost title="đây là BlogPost"
                v-on:enlarge-text="onEnlargeText">
        BlogPost
      </BlogPost>
    </div>


    <button @click.left="clickExample('ClickExample click.left ', $event)">ClickExample click.left </button>
    <button @click.right="clickExample('ClickExample click.right', $event)"> ClickExample click.right</button>
    <button @click.middle="clickExample('ClickExample click.middle', $event)"> ClickExample click.middle</button>

    <input v-model.number="message" @keyup.enter="submit">
    <p>Message is: {{ message }}</p>

    <div @click.meta="openNewTab">Mở tab mới</div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost/BlogPost";

export default {
  name: 'Example1',
  components: {
    BlogPost
  },
  data() {
    return{
      message:'message',
      postFontSize:1,
    }
  },
  computed: {
  },
  methods: {
    clickExample: function (message, event) {
    // now we have access to the native event
    console.log('message: ', message, event);
  },
    submit: function (event) {
    // now we have access to the native event
      alert('hello');
    console.log('value: ', event, this.message);
  },
    openNewTab: function () {
    // now we have access to the native event
      alert('openNewTab');
  },
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
    
  },

}


</script>

<style>
</style>
