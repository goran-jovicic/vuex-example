<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <h2>{{ counter }}</h2>
    <button @click="incrementState">Increment</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    computed : {
      ...mapGetters({
        counter : 'getCountText'
      }),
      // counter() {
      //   // return this.$store.state.counter;      // novi nacin
      //   return this.$store.getters.getCountText
      // }
    },

    methods : {
      incrementState() {
        // this.$store.commit('increment')
        this.$store.dispatch('incrementAfterTwoSeconds')
      }
    }
  }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
