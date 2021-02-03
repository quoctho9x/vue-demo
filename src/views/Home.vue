<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :count='count' />
    <div v-if="count > 2 ">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <button @click='increment'> click vao di {{count}} {{count > 2 ? 'them vao ': ''}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {count: this.$store.state.count, awesome: false}
  },
  methods:{
    increment() {

      this.$store.commit('increment');
      this.count = this.$store.state.count;
      this.awesome = true;
      console.log(this.$store.state.count)

    }
  }
}
</script>
