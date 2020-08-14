<template>
  <div class="secure">
    <h1>Hello World</h1>
    <button v-on:click="logout()">Logout</button>
  </div>
</template>


<script>
    export default {
        name: 'Secure',
        methods: {
          logout() {
            this.$router.push( '/' )
          }
        }
    }
</script>