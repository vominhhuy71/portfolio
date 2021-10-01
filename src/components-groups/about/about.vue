<template>
  <div class="about__wrapper">
    <div class="about__waving">
      <lottie-player
        class="waving"
        src="https://assets3.lottiefiles.com/packages/lf20_FYx0Ph.json"
        background="transparent"
        speed="1"
        style="width: 800px; height: 800px;"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="about__content">
      <div class="about__content__title">about</div>
      After 4 years studying and working in IT field, I have gained experience
      in creating well-designed web applications and working with server. I
      enjoy working with different tools, including C++, JavaScript, Vue and
      React.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'; // import lottie-vuejs
import '@lottiefiles/lottie-player';

@Component
export default class About extends Vue {
  private mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.about__waving', {
      scrollTrigger: {
        trigger: '.about__wrapper',
        start: 'top 50%',
        // markers: true,
      },
      rotation: 30,
      duration: 3,
      transformOrigin: 'bottom 50%',
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.about {
  &__wrapper {
    position: relative;

    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: flex;
    align-items: center;
  }
  &__waving {
    position: absolute;
    left: -450px;
    top: -100px;
    width: 800px;
    height: 800px;
    @media (max-width: 1350px) {
      display: none;
    }
  }
  &__content {
    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: left;
    color: #e9e7ea;
    width: 50vw;
    margin: 0 auto;

    &__title {
      font-size: 35px;
      line-height: 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
