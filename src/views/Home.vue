<template>
  <div>
    <!-- <nav-bar /> -->
    <introduction class="home__component" />
    <!-- <about class="home__component" />
    <skills class="home__component" />
    <projects class="home__component" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Introduction from '@/components-groups/introduction/introduction.vue';
import Skills from '@/components-groups/skills/skills.vue';
import Projects from '@/components-groups/projects/projects.vue';
import NavBar from '@/components/navbar/navbar.vue';
import About from '@/components-groups/about/about.vue';

@Component({
  components: {
    Introduction,
    Skills,
    NavBar,
    Projects,
    About,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  &__component {
    height: 100vh;
    width: 100vw;
  }
}
</style>
