<template>
  <div class="home ">
    <splash-screen class=" splash-screen" @close-screen="closeSplashScreen" />
    <main>
      <section class=" introduction">
        <introduction />
      </section>
      <section data-color="#faf8fb" class="home__component">
        <about />
      </section>
      <section data-color="#91f6d5" class="home__component  ">
        <experience />
      </section>
      <section data-color="#00b8f1" class="home__component projects">
        <projects />
      </section>
      <section data-color="#124fb4" class="home__component ">
        <contact />
      </section>
    </main>
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
import Projects from '@/components-groups/projects/projects.vue';

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
    Projects,
  },
})
export default class extends Vue {
  private mounted() {
    gsap.utils.toArray('.home__component').forEach(function(elem) {
      let color = (elem as any).getAttribute('data-color');
      ScrollTrigger.create({
        trigger: elem as any,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to('main', { backgroundColor: color }),
        onLeave: () => gsap.to('main', { backgroundColor: '#faf8fb' }),
        onLeaveBack: () => gsap.to('main', { backgroundColor: '#faf8fb' }),
        onEnterBack: () => gsap.to('main', { backgroundColor: color }),
      });
    });
  }

  private closeSplashScreen() {
    const splashScreen = this.$el.querySelector(
      '.splash-screen'
    )! as HTMLElement;
    splashScreen.style.top = '-200vh';
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/breakpoints.abstracts';

.home {
  position: relative;
  height: 100%;
  width: 100%;
  &__component {
    height: 100vh;
    width: 100%;
    // background: #e5e5e5;
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

.projects {
  @media #{$phone} {
    height: 150vh;
  }
}
</style>
