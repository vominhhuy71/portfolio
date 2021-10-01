<template>
  <div class="experience">
    <div class="experience__content__wrapper">
      <div class="experience__content__title">experience</div>
      <div class="experience__content">
        Hi!
      </div>
    </div>
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
      start: '50% 70%',
      end: '+=500',
      pin: '.experience__content__title',
      pinSpacing: false,
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

  &__content {
    width: 50vw;
    &__wrapper {
      font-family: 'Fira Code', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 30px;
      text-align: left;
      color: #e9e7ea;

      height: 100vh;

      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
    }
    &__title {
      font-size: 25px;
      line-height: 30px;
      background: #181719;
      margin-right: 30px;
      align-self: flex-start;
      color: #32cd32;
    }
  }
}
</style>
