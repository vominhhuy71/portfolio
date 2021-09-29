<template>
  <div class="home">
    <nav-bar class="top" />
    <introduction />
    <about class="about" />
    <!-- <skills class="home__component" />
    <projects class="home__component" /> -->
    <back-to-top class="back-to-top_btn" @click.native="backToTop" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Introduction from '@/components-groups/introduction/introduction.vue';
import Skills from '@/components-groups/skills/skills.vue';
import Projects from '@/components-groups/projects/projects.vue';
import NavBar from '@/components/navbar/navbar.vue';
import About from '@/components-groups/about/about.vue';
import BackToTop from '@/components/back-to-top/back-to-top.vue';

@Component({
  components: {
    Introduction,
    Skills,
    NavBar,
    Projects,
    About,
    BackToTop,
  },
})
export default class extends Vue {
  private options: any = {
    threshold: 0,
    rootMargin: '-50px 0px -10px 0px',
  };
  private mounted() {
    const top = document.querySelector('.top')!;
    const backToTop = document.querySelector('.back-to-top_btn')!;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backToTop.classList.remove('appear');
        } else {
          backToTop.classList.add('appear');
        }
      });
    }, this.options);

    observer.observe(top);
  }

  private backToTop() {
    let el = this.$el.getElementsByClassName('top')[0];
    el.scrollIntoView();
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
</style>
