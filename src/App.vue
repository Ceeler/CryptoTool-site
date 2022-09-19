<template>
  <div id="app">
<!--    <h1>-->
<!--      <router-link to="/"> HOME PAGE </router-link>-->
<!--    </h1>-->
<!--    <hr>-->
<!--    <Portfolio-->
<!--      v-bind:Coins="Coins"-->
<!--      v-bind:Currency = "Currency"-->
<!--    />-->
    <router-view />
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    components: {
      Vue
    }
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500&display=swap');

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

    h2{
        font-weight: 700;
        font-size: 2rem;
    }

    input {
        -moz-appearance:textfield;
        border-radius: 10px;
        border: black solid 1px;
        margin: 0rem .2rem;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
    }

    input::-moz-placeholder { color: #f1f1f1; }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input::-webkit-input-placeholder { color: #bbb9b9; }

    body {
        margin: 0;
    }

</style>
