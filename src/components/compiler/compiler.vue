<template>
  <div class="typewriter">
    <div class="typewriter__line">1</div>
    <div class="typewriter__code__wrapper">
      <div class="typewriter__code">
        <span style="color:#9CDCFE">console</span
        ><span style="color:#DCDCAA">.log</span
        ><span style="color:yellow">(</span
        ><span style="color: #CE9178">'Welcome to my portfolio!'</span
        ><span style="color:yellow">)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Compiler extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.typewriter {
  margin-top: 100px;
  font-family: 'Source Code Pro', monospace;

  text-align: left;
  background: #000;
  height: 50px;
  max-width: 700px;
  display: flex;
  align-items: center;
  &__line {
    width: 50px;
    display: flex;
    justify-content: center;
    color: grey;
  }
  @media #{$phone} {
    display: none;
  }
  &__code {
    &__wrapper {
      background-color: #1e1e1e;
      height: 100%;
      width: 100%;
      padding-left: 10px;
    }
    background-color: #1e1e1e;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 25px;
    position: relative;
    width: max-content;
    letter-spacing: 0.5px;
    &::before,
    &::after {
      content: '';
      top: 9px;
      right: 0;
      left: 0;
      bottom: 0;
      position: absolute;
    }
    &::before {
      background: #1e1e1e;
      animation: typewriter 6s steps(39) 3s forwards;
    }
    &::after {
      height: 30px;
      width: 0.125em;
      background: #d4d4d4;
      animation: typewriter 6s steps(39) 3s forwards,
        blink 750ms steps(39) infinite;
    }
  }
}
@keyframes typewriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
  to {
    background: transparent;
  }
}
</style>
