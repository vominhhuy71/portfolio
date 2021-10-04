<template>
  <div class="projects">
    <div class="projects__title">projects</div>
    <div class="projects__container">
      <div class="projects__item">
        <div class="projects__img">
          <img
            src="@/assets/projects/portfolio.png"
            height="200px"
            width="400px"
          />
        </div>
        <div class="projects__info">
          <div class="projects__info__title">Porfolio</div>
          Made with VueJS and TypeScript
          <div>
            <a href="https://github.com/vominhhuy71/portfolio" target="_blank">
              <img
                src="@/assets/projects/github.svg"
                height="24px"
                width="24px"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="projects__item vertical-image-div">
        <div class="projects__img">
          <img src="@/assets/projects/track.png" height="400px" width="200px" />
        </div>
        <div class="projects__info">
          <div class="projects__info__title">Mobile Tracking Application</div>
          Made with React Native and JavaScript
          <div>
            <a href="https://github.com/vominhhuy71/track" target="_blank">
              <img
                src="@/assets/projects/github.svg"
                height="24px"
                width="24px"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="projects__item">
        <div class="projects__img">
          <img src="@/assets/projects/more.png" height="200px" width="400px" />
        </div>
        <div class="projects__info">
          <div class="projects__info__title">And more...</div>
          Made with React, Vue, TS, C++, node.js, etc.
          <div>
            <a href="https://github.com/vominhhuy71" target="_blank">
              <img
                src="@/assets/projects/github.svg"
                height="24px"
                width="24px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <lottie-player
      class="shape1"
      src="https://assets3.lottiefiles.com/packages/lf20_av3q9bm1.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px;"
      loop
      mode="bounce"
      autoplay
    ></lottie-player>
    <lottie-player
      class="shape2"
      src="https://assets8.lottiefiles.com/packages/lf20_4qiecwbu.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px;"
      loop
      mode="bounce"
      autoplay
    ></lottie-player>
    <lottie-player
      class="shape3"
      src="https://assets9.lottiefiles.com/packages/lf20_4hht5fjk.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px;"
      loop
      mode="bounce"
      autoplay
    ></lottie-player>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@lottiefiles/lottie-player';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component
export default class Projects extends Vue {
  private mounted() {
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();

    tl1.from('.projects__img', {
      x: -100,
      opacity: 0,
      duration: 1,
    });
    tl1.to('.projects__img', { x: 0, opacity: 1, duration: 1 });

    tl2.from('.projects__info', {
      x: 100,
      opacity: 0,
      duration: 1,
    });
    tl2.to('.projects__info', { x: 0, opacity: 1, duration: 1 });

    ScrollTrigger.create({
      trigger: '.projects',
      start: '-30% 50%',
      end: 'bottom bottom',
      animation: tl1,
    });

    ScrollTrigger.create({
      trigger: '.projects',
      start: '-25% 50%',
      end: 'bottom bottom',
      animation: tl2,
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.projects {
  height: 100%;
  width: 100%;

  position: relative;

  @media #{$phone} {
    height: 150vh;
  }

  &__title {
    font-size: 50px;
    line-height: 55px;
    align-self: flex-start;
    justify-self: flex-start;
    color: #181719;
    margin-bottom: 100px;
  }

  &__item {
    display: flex;
    flex-direction: row;

    height: 25vh;

    @media #{$phone} {
      flex-direction: column;
      height: 40vh;
    }

    @media #{$desktop} {
      margin-left: 30vw;
    }
  }
  &__info {
    height: 25vh;

    margin-left: 30px;

    font-size: 25px;
    line-height: 40px;
    color: #181719;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    @media #{$phone} {
      align-items: center;
    }
  }
  &__container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
}

.shape1,
.shape2,
.shape3 {
  position: absolute;

  @media (max-width: 1360px) {
    display: none;
  }
}

.shape1 {
  top: 10vh;
  left: -10vw;
}
.shape2 {
  bottom: 0;
  right: 0;
}
.shape3 {
  top: -50vh;
  right: 0;
}

.vertical-image-div {
  height: 450px;
  @media #{$phone} {
    align-items: center;
    height: 550px;
  }
}
</style>
