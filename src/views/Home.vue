<template>
  <div class="home">
    <splash-screen class=" splash-screen" @close-screen="closeSplashScreen" />
    <div class="home__component introduction">
      <introduction />
    </div>
    <div class="gradient-background">
      <div class="home__component about">
        <about />
      </div>
      <div class="home__component">
        <experience />
      </div>
      <div class="home__component">
        <contact />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Introduction from '@/components-groups/introduction/introduction.vue';
import About from '@/components-groups/about/about.vue';
import BackToTop from '@/components/back-to-top/back-to-top.vue';
import SplashScreen from '@/components/splash-screen/splash-screen.vue';
import Experience from '@/components-groups/experience/experience.vue';
import Contact from '@/components-groups/contact/contact.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  components: {
    Introduction,
    About,
    BackToTop,
    SplashScreen,
    Experience,
    Contact,
  },
})
export default class extends Vue {
  private mounted() {
    //Change background
    // const bg = gsap.fromTo(
    //   '.gradient-background',
    //   { backgroundColor: '#e5e5e5' },
    //   { backgroundColor: '#000000' }
    // );
    // ScrollTrigger.create({
    //   trigger: '.gradient-background',
    //   scrub: 1,
    //   markers: true,
    //   start: '10% 70%',
    //   end: 'bottom bottom',
    //   animation: bg,
    // });
  }

  private closeSplashScreen() {
    const splashScreen = this.$el.querySelector(
      '.splash-screen'
    )! as HTMLElement;
    splashScreen.style.top = '-100vh';
  }
}
</script>

<style lang="scss" scoped>
.back-to-top_btn {
  display: none;
}
.back-to-top_btn.appear {
  display: block;
}

.home {
  position: relative;
  height: 100%;
  width: 100%;
  &__component {
    height: 100%;
    width: 100%;
    background: #e5e5e5;
  }
}

.splash-screen {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background-color: #e5e5e5;

  transition: 1s;

  z-index: 1000;
}

.gradient-background {
  background-color: #e5e5e5;
}
</style>
