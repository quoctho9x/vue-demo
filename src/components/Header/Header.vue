<template>
    <div class="header header-fixed">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <router-link class="navbar-brand" to="/">Home Page</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 mr-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav " style="margin-right: 80px">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/intro">Intro</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/example1">Example1</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
<!--                    </li>-->
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  import '@/components/BlogPost/style.scss'

  export default {
    name: 'Header',
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
.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>
