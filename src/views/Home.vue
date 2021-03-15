<template v-if=awesome>
  <div class="home">
    <img alt="Vue logo" :src="iconLogo">
    <img alt="Vue logo 2" style="width: 100px; height: 100px" :src="iconGift">
    <HelloWorld msg="Welcome to Your Vue.js App"
                :count='count'
                @clickedSomething="handleClickInParent">
      <span>day la slot ne</span>
    </HelloWorld>
    <span v-once> {{count}}</span>
    <p :id="dynamicId">Using mustaches: {{ htmlRaw }}</p>
    <p :id='reverseddynamicId'>Using v-html directive: <span v-html="htmlRaw"></span></p>
    <button :disabled="!awesome">Button</button>
     <span>{{ awesome ? 'YES' : 'NO' }}</span>
    {{ awesome ? 'YES' : 'NO' }}
   
    <div v-if="count > 2 ">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <div :class="['car']">da la class</div>
    <div :class="{underline: true, weight: true}">da la class</div>
    <button @click='increment'> click vao di {{count}} {{count > 2 ? 'them vao ': ''}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '../components/HelloWorld/HelloWorld.vue'
import {iconGift, iconLogo} from "../utils/images";
// import AboutVue from './About.vue'

export default {
  name: 'Home',
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API
    console.log('mounted');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  components: {
    HelloWorld
  },

  data(){
    return {
      iconGift,
      iconLogo,
      count: this.$store.state.auth.count,
      awesome: function () {
      // `this` points to the vm instance
      console.log('run')
      return true;
    },
      htmlRaw: '<span style="color:red"> hello hihi</span>',
      dynamicId: 'tetsID'
    }
  },
  computed: {
      reverseddynamicId: function () {
      // `this` points to the vm instance
      console.log('run')
      return this.dynamicId.split('').reverse().join('')
    }
  },
  methods:{
    increment() {
      this.$store.dispatch('auth/increment');
      this.$store.dispatch('auth/change', {name:'hello', value: this.count+1});
      this.count = this.$store.state.auth.count;
      this.awesome = true;
      console.log(this.$store.state.auth.count);

    },
    handleClickInParent: function (params1, params2) {
      console.log(params1, params2)
    }
  }
}
</script>
