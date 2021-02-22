<template>
  <div class="intro">
    <h1>This is an intro page</h1>
    <p>My name is {{name | prepend('Dr.') }}</p>
    {{`day la name -${name}`}}
    <p>index is {{index}}</p>
    <p>indexString is {{indexString}}</p>
    <button @click="changeName()">Change my name!</button>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  components: {
  },
  data() {
    return{
      message:'message',
      name: 'Flavio',
      index: 0,
    }
  },
  filters: {
    prepend: (name, prefix) => {
      return `${prefix} ${name}`
    },
    fallback: function (name) {
      console.log('name',name)
      return name ? name : 'khong co';
    }
  },
  computed: {
    indexString: function () {
      // console.log('run')
      // this.callBack('cb computed');
      return this.index;
    },
  },
  methods: {
    changeName: function () {
      this.index++;
      this.name = 'Flavius ' + this.index;
      // this.callBack('cb 1')
    },
    callBack: function (value='') {
      console.log('callBack '+ value)
    }
  },
  watch: {
    name: function(newValue, oldValue) {
      console.log('show name:', newValue, oldValue);
      this.callBack('cb 2');
    },
    index: function(newValue, oldValue) {
      console.log('show index:', newValue, oldValue)
    },
  }
}


</script>

<style>
  .underline { text-decoration: underline; }
</style>
