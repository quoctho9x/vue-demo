<template>
  <div class="hello">
    <div>{{title}}</div>
    <button @click="handleClick" v-show="true">Phóng to</button>
    <slot></slot>

  </div>
</template>

<script>
  import '@/components/BlogPost/style.scss'

export default {
  name: 'BlogPost',
  props: {
    count: Number,
    title: String,
  },
  methods: {
    handleClick: function () {
      // console.log('this.$emit: ',this, this.$emit);
      this.$emit('enlarge-text', 0.1);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
