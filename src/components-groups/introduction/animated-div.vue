<template>
  <div class="animated__wrapper">
    <div class="animated__icons">
      <img
        class="vue icon"
        src="@/assets/introduction/vue.svg"
        width="50px"
        height="50px"
      />
      <img
        class="react icon"
        src="@/assets/introduction/react.png"
        width="50px"
        height="50px"
      />
      <img
        class="sass icon1"
        src="@/assets/introduction/sass.svg"
        width="50px"
        height="50px"
      />
      <img
        class="nodejs icon1"
        src="@/assets/introduction/nodejs.svg"
        width="50px"
        height="50px"
      />
      <img
        class="ts icon2"
        src="@/assets/introduction/typescript.svg"
        width="50px"
        height="50px"
      />
      <img
        class="js icon2"
        src="@/assets/introduction/javascript.svg"
        width="50px"
        height="50px"
      />
      <img
        class="cpp icon3"
        src="@/assets/introduction/cpp.svg"
        width="50px"
        height="50px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import anime from 'animejs';

@Component
export default class AnimatedDiv extends Vue {
  private mounted() {
    const delayTime = '-=500';

    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
      loop: true,
    });
    tl.add(this.timelineItem('.icon'), delayTime);
    tl.add(this.timelineItem('.icon1'), delayTime);
    tl.add(this.timelineItem('.icon2'), delayTime);
    tl.add(this.timelineItem('.icon3'), delayTime);
  }

  private timelineItem(itemClass: string) {
    return {
      targets: itemClass,
      translateY: 2000,
      translateX: function() {
        return anime.random(-50, 50);
      },
      loop: true,
      easing: 'linear',
      rotate: function() {
        return anime.random(-360, 360);
      },
      duration: function() {
        return anime.random(4000, 6000);
      },
      borderRadius: function() {
        return ['50%', anime.random(10, 35) + '%'];
      },
      scale: function() {
        return anime.random(1, 2);
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.animated {
  &__wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  &__icons {
    position: absolute;
    top: -50px;
    right: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 3rem;
  }
}
</style>
