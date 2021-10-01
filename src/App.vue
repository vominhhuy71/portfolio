<template>
  <div id="app">
    <!-- <notification-bar :text="'Under contruction!'" v-if="true" /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NotificationBar from '@/components/notification-bar/notification-bar.vue';
import Component from 'vue-class-component';

@Component({
  components: {
    NotificationBar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e5e5e5;
}
body {
  height: 100vh;
}
html,
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #181719;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
