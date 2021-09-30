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
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import anime from 'animejs';

@Component
export default class AnimatedDiv extends Vue {
  private mounted() {
    let tl = anime.timeline({
      easing: 'cubicBezier(.5, .05, .1, .3)',
      loop: true,
    });
    tl.add(this.timelineItem('.icon'), 100);
    tl.add(this.timelineItem('.icon1'), 500);
    tl.add(this.timelineItem('.icon2'), 1000);
    tl.add(this.timelineItem('.icon3'), 2000);
  }

  private timelineItem(itemClass: string) {
    return {
      targets: itemClass,
      translateY: 1500,
      translateX: function() {
        return anime.random(-100, 100);
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
      opacity: function() {
        return anime.random(0.25, 1);
      },
    };
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.animated {
  &__wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    @media #{$touch} {
      flex-direction: column;
      height: 10vh;
    }
  }

  &__icons {
    position: absolute;
    top: -50px;
    right: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 3rem;
    z-index: 2;
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(24, 23, 25);
  background: linear-gradient(
    90deg,
    rgba(24, 23, 25, 1) 0%,
    rgba(63, 62, 56, 1) 80%
  );
  overflow: hidden;
}

.background span {
  width: 20vmin;
  height: 20vmin;
  border-radius: 20vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 45;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #bbbe37;
  top: 47%;
  left: 51%;
  animation-duration: 12s;
  animation-delay: -19s;
  transform-origin: 6vw -11vh;
  box-shadow: -40vmin 0 5.666267211545854vmin currentColor;
}
.background span:nth-child(1) {
  color: #2fa257;
  top: 76%;
  left: 60%;
  animation-duration: 43s;
  animation-delay: -27s;
  transform-origin: 15vw 11vh;
  box-shadow: -40vmin 0 5.816812117800131vmin currentColor;
}
.background span:nth-child(2) {
  color: #2fa257;
  top: 78%;
  left: 66%;
  animation-duration: 9s;
  animation-delay: -47s;
  transform-origin: -3vw -24vh;
  box-shadow: 40vmin 0 5.168493897080064vmin currentColor;
}
.background span:nth-child(3) {
  color: #2340d1;
  top: 13%;
  left: 44%;
  animation-duration: 38s;
  animation-delay: -17s;
  transform-origin: -19vw -18vh;
  box-shadow: -40vmin 0 5.842495469993416vmin currentColor;
}
.background span:nth-child(4) {
  color: #2fa257;
  top: 13%;
  left: 52%;
  animation-duration: 21s;
  animation-delay: -22s;
  transform-origin: -14vw -19vh;
  box-shadow: -40vmin 0 5.9032885786238625vmin currentColor;
}
.background span:nth-child(5) {
  color: #2fa257;
  top: 57%;
  left: 95%;
  animation-duration: 10s;
  animation-delay: -8s;
  transform-origin: -2vw -17vh;
  box-shadow: -40vmin 0 5.474210402959709vmin currentColor;
}
.background span:nth-child(6) {
  color: #bbbe37;
  top: 51%;
  left: 90%;
  animation-duration: 29s;
  animation-delay: -9s;
  transform-origin: 8vw -17vh;
  box-shadow: 40vmin 0 5.452597372865654vmin currentColor;
}
</style>
