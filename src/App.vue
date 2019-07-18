<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <h2>{{ counter }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    computed : {
      ...mapGetters({
        counter : 'getCountText'
      }),
      // counter() {
      //   // return this.$store.state.counter;      // stari nacin
      //   return this.$store.getters.getCountText
      // }
    },

    methods : {
      ...mapActions ({
        increment : 'incrementAfterTwoSeconds'
      })
      // incrementState() {
      //   // this.$store.commit('increment')
      //   this.$store.dispatch('incrementAfterTwoSeconds') // stari nacin
      // }
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
