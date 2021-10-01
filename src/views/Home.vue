<template>
  <div class="home">
    <splash-screen class=" splash-screen" @close-screen="closeSplashScreen" />
    <div class="home__component introduction">
      <introduction />
    </div>
    <div class="home__component about">
      <about />
    </div>
    <div class="home__component">
      <experience />
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

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  components: {
    Introduction,
    About,
    BackToTop,
    SplashScreen,
    Experience,
  },
})
export default class extends Vue {
  private mounted() {}

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
    background: #181719;
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
</style>
