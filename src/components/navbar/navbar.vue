<template>
  <div class="main-nav">
    <!-- <div @click="toSection('about')">About</div>
    <div>Skills</div>
    <div>Contact</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  private toSection(name: string) {
    let el = document.getElementsByClassName(name)[0];
    el.scrollIntoView(true);
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.main-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  z-index: 1000;

  height: 50px;
  width: 500px;

  position: absolute;
  top: 30px;
  right: 0;

  font-family: 'Ropa Sans', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  text-align: left;
  color: #ffeace;

  & > div {
    cursor: pointer;
  }

  @media #{$phone} {
    display: none;
  }
}
</style>
