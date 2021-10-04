<template>
  <div class="experience">
    <div class="experience__title">experience</div>
    <div class="experience__content__wrapper">
      <div class="experience__content naava__wrapper">
        <div class="naava">
          Naava
        </div>
        <div class="naava__desc job_title">
          Front end developer
        </div>
      </div>
      <div class="experience__content  integrify__wrapper">
        <div class="integrify" style="background: black">
          <div class="integrify__logo">
            Integrify
          </div>
        </div>
        <div class="integrify__desc job_title">
          Full stack developer
        </div>
      </div>
      <div class="experience__content xamk__wrapper">
        <div class="xamk">
          XAMK
        </div>
        <div class="xamk__desc job_title">
          IT student
        </div>
      </div>
    </div>
    <lottie-player
      class="shape1"
      src="https://assets10.lottiefiles.com/packages/lf20_wkgiytpm.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px;"
      loop
      mode="bounce"
      autoplay
    ></lottie-player>
    <lottie-player
      class="shape2"
      src="https://assets3.lottiefiles.com/packages/lf20_oaquvmss.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px;"
      autoplay
    ></lottie-player>
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
    //Timeline
    this.fadeInItems();
  }

  private fadeInItems() {
    let tl1 = gsap.timeline();

    tl1.from('.naava, .integrify, .xamk', {
      x: -200,
      opacity: 0,
      duration: 1,
    });
    tl1.to('.naava, .integrify, .xamk', {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: '.experience',
      start: '20% 70%',
      end: '-=100',
      animation: tl1,
      scrub: 1,
    });

    let tl2 = gsap.timeline();

    tl2.from('.naava__desc, .integrify__desc, .xamk__desc', {
      x: -200,
      opacity: 0,
      duration: 1,
    });
    tl2.to('.naava__desc, .integrify__desc, .xamk__desc', {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: '.experience',
      start: '30% 70%',
      end: 'bottom bottom',
      animation: tl2,
      scrub: 1,
    });

    let tl3 = gsap.timeline();

    tl3.from('.experience__title', {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 2,
    });
    tl3.to('.experience__title', {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    // Experience title
    ScrollTrigger.create({
      trigger: '.experience',
      start: '10% 70%',
      end: '+=200',
      animation: tl3,
      scrub: 1,
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.experience {
  padding-top: 30px;
  width: 100%;

  // background: #454655;

  position: relative;

  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 50px;
    line-height: 55px;
    margin-right: 30px;
    align-self: flex-start;
    justify-self: flex-start;
    color: #181719;
    @media #{$phone} {
      display: none;
    }
  }

  &__content {
    height: 20vh;

    font-family: 'Fira Code', monospace;
    font-style: bold;
    font-weight: 400;
    font-size: 50px;
    line-height: 55px;
    text-align: left;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    &__wrapper {
      width: 50vw;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      position: relative;
    }
  }
}
.naava {
  background: #005b3d;
  color: white;
  padding: 5px;
  text-transform: uppercase;
  &__wrapper {
    height: 15vh;
  }
}

.integrify {
  &__logo {
    background-image: linear-gradient(173deg, #fdda16 50%, white 0%);
    background-clip: text;
    color: transparent;
    padding: 5px;
    text-transform: lowercase;
  }
  &__desc {
    background: #91f6d5;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  &__wrapper {
    height: 15vh;
  }
}

.xamk {
  background: #489be1;
  color: white;
  padding: 5px;
  &__wrapper {
    height: 15vh;
  }
}

.job_title {
  font-family: 'Fira Code', monospace;
  font-style: bold;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
  text-align: left;
  color: #007f7d;

  text-transform: lowercase;
  &__wrapper {
    height: 100%;
  }
}

.shape1,
.shape2 {
  position: absolute;

  @media #{$phone} {
    display: none;
  }
}
.shape1 {
  right: -10vw;
  top: 0;
}

.shape2 {
  left: 0;
  top: 100px;
}
</style>
