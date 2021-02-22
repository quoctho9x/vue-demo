<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul id="example-1">
      <li v-for="(item, index) of items" :key="item.message">
        {{parentMessage}} - {{index}} - {{ item.message }}
      </li>
    </ul>

    <ul id="example-2">
      <li v-for="(value, name, index) of object" :key="index">
        {{index}} - {{name}} - {{ value }}
      </li>
    </ul>
    
    <ul id="example-3">
     <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>

    <input v-model="message" placeholder="Enter a message">
    <p>Message is: {{ message }}</p>
    <p :style="{textDecoration : textDecoration}">test style</p>
    <p :style="styling">test style version 2</p>

    <p :class="{underline: false}">Hi!</p>

    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  data() {
    return{
      message:'message',
      parentMessage: 'Parent',
      number: 1,
      textDecoration: 'underline',
      textWeight: 'bold',
      isUnderlined: true,
      numbers: [1,2,3,4,5,6],
      items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
      object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
    }
  },
  computed: {
    evenNumbers: function (){
      return this.numbers.filter(function (number) {return number % 2 === 0})
    },
    styling: function() {
      return {
        textDecoration: this.textDecoration,
        fontWeight: this.textWeight
      }
    }
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    warn: function (message, event) {
    // now we have access to the native event
    console.log('event: ', event, this);
    if (event) {
      event.preventDefault()
    }
    this.number++;
    alert(message)
  }
    
  },

}


</script>

<style>
  .underline { text-decoration: underline; }
</style>
