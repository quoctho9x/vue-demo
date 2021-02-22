<template>
  <div class="Example1">
    <h1>This is an Example1</h1>

    <button @click.left="clickExample('ClickExample click.left ', $event)">ClickExample click.left </button>
    <button @click.right="clickExample('ClickExample click.right', $event)"> ClickExample click.right</button>
    <button @click.middle="clickExample('ClickExample click.middle', $event)"> ClickExample click.middle</button>

    <input v-model.number="message" @keyup.enter="submit($event)">
    <p>Message is: {{ message }}</p>

    <div @click.meta="openNewTab">Mở tab mới</div>
  </div>
</template>

<script>
export default {
  name: 'Example1',
  components: {
  },
  data() {
    return{
      message:'message',
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
  }
    
  },

}


</script>

<style>
</style>
