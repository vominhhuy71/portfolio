<template>
  <div class="home">
    <splash-screen class=" splash-screen" @close-screen="closeSplashScreen" />
    <div class="home__component introduction">
      <introduction />
    </div>
    <div class="home__component about">
      <about />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Introduction from '@/components-groups/introduction/introduction.vue';
import Skills from '@/components-groups/skills/skills.vue';
import Projects from '@/components-groups/projects/projects.vue';
import About from '@/components-groups/about/about.vue';
import BackToTop from '@/components/back-to-top/back-to-top.vue';
import SplashScreen from '@/components/splash-screen/splash-screen.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  components: {
    Introduction,
    Skills,
    Projects,
    About,
    BackToTop,
    SplashScreen,
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
  &__component {
    height: 100vh;
    width: 100vw;
    background: #181719;
  }
}

.splash-screen {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  background-color: #e5e5e5;

  transition: 1s;

  z-index: 2;
}
</style>
