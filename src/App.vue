<template>
  <div id="app">
    <Header/>
    <div id="router-wiew">
      <router-view/>
    </div>
  </div>
</template>

<script>

  import Header from "./components/Header/Header";

  export default {
    name: 'App',
    props: {

    },
    components: {
      Header
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#router-wiew {
  padding-top: 70px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
