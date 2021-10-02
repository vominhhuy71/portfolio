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
      <p class="about__content__p">
        After 4 years studying and working in IT field, I have gained experience
        in creating well-designed web applications and working with server. I
        enjoy working with different tools, including C++, JavaScript, Vue and
        React.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@lottiefiles/lottie-player';

@Component
export default class About extends Vue {
  // TODO: add responsive

  private mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.about__waving', {
      scrollTrigger: {
        trigger: '.about__wrapper',
        start: 'top 70%',
        end: '+=500',
        scrub: 1,
      },
      rotation: 30,
      duration: 2,
      transformOrigin: 'bottom 50%',
    });

    ScrollTrigger.create({
      trigger: '.about__wrapper',
      start: '10% 70%',
      end: '+=280',
      pin: '.about__content__title',
      pinSpacing: false,
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.about {
  &__wrapper {
    position: relative;

    height: 50vh;

    overflow: hidden;

    display: flex;
    align-items: center;
    width: 100%;

    z-index: 10;
    background: transparent;
  }
  &__waving {
    overflow: hidden;
    position: absolute;
    left: -450px;
    top: -200px;
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
    color: #181719;

    height: 50vh;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media #{$phone} {
      flex-direction: column;
    }
    &__title {
      font-size: 50px;
      line-height: 55px;
      color: #32cd32;
      @media #{$desktop} {
        align-self: flex-start;
        height: 50px;
      }
    }
    &__p {
      width: 50vw;
    }
  }
}
</style>
