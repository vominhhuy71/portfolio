<template>
  <div class="experience">
    <div class="experience__title">experience</div>
    <div class="experience__climb"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@lottiefiles/lottie-player';

@Component
export default class Experience extends Vue {
  private mounted() {
    ScrollTrigger.create({
      trigger: '.experience',
      start: '200% 70%',
      end: '+=500',
      pin: '.experience__climb',
      pinSpacing: false,
      markers: true,
    });
  }
}
</script>

<style lang="scss" scoped>
.experience {
  height: 100vh;
  width: 100%;

  background: #181719;

  position: relative;
  &__title {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #e9e7ea;
    background: #181719;
  }

  &__climb {
    position: absolute;
    right: 0;
    top: -200px;
  }
}
</style>
