<template>
    <div style="display: flex; justify-content: center">
    <div style="max-width: 500px">
      <span slot="header">
        Login
      </span>
        <div>
            <form @submit.prevent="login(user)">
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-envelope fa-fw"/></span>
                        </div>
                        <input
                                v-model="user.email"
                                type="email"
                                placeholder="Email"
                                class="form-control"
                        >
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend" @click="changeType()">
                            <span class="input-group-text"><i class="fa fa-lock fa-fw"/></span>
                        </div>
                        <input
                                v-model="user.password"
                                :type="type"
                                placeholder="Password"
                                class="form-control"
                        >
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-outline-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
        <div slot="footer">
            No account?
            <router-link :to="{ path: '/register'}"> Register</router-link>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {
      // VLayout,
      // VCard,
    },

    data() {
      return {
        type: 'text',
        user: {
          email: null,
          password: null,
        },
      };
    },

    methods: {
      changeType() {
        if(this.type === 'text'){
          this.type = 'password'
        }else {
          this.type = 'text';
        }
      },
      login(user) {
        // console.log('login', user);
        if(!user.email || !user.password) return;
        if(user.email.includes('quoctho') && user.password.includes('123')){
          this.$store.dispatch('auth/login', user);
        }else {
          alert('Tài khoản không hợp lệ')
        }
      },
    },
  };
</script>