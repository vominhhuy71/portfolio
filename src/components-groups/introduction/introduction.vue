<template>
  <div class="introduction">
    <div class="introduction__wrapper">
      <div class="introduction__info">
        <div class="introduction__info__hello">
          HELLO, I'M
          <span class="introduction__info__name">HUY VO</span>
        </div>
        <div class="introduction__info__title">
          FULL-STACK DEVELOPER
        </div>
        <compiler />
      </div>
    </div>
    <animated-div class="introduction__animated" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Compiler from '@/components/compiler/compiler.vue';
import AnimatedDiv from '@/components-groups/introduction/animated-div.vue';

@Component({
  components: {
    Compiler,
    AnimatedDiv,
  },
})
export default class Introduction extends Vue {
  private toAbout() {
    const el = document.getElementsByClassName('about')[0];
    el.scrollIntoView();
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.introduction {
  width: 100%;
  height: 100vh;

  background: #181719;

  position: relative;
  z-index: 10;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20vw), 0 100%);

  @media #{$touch} {
    flex-direction: column;
  }
  &__wrapper {
    min-width: 50vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;

    // &::after {
    //   content: '';
    //   position: absolute;
    //   inset: 0;
    //   background: #264653;
    //   z-index: -1;
    //   mix-blend-mode: multiply;
    // }

    @media (max-width: 1350px) {
      flex-direction: column;
      height: 60vh;
    }
  }
  &__img {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      @media #{$desktop} {
        width: 671px;
        padding-left: 83px;
      }
    }
    @media #{$phone} {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__info {
    max-width: 1045px;
    height: 413px;
    @media #{$phone} {
      padding-left: 0px;
    }
    &__hello {
      font-family: 'Fira Code', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 55px;
      text-align: left;
      color: #e9e7ea;
      text-transform: lowercase;
    }
    &__name {
      font-family: 'Fira Code', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 55px;
      color: #32cd32;

      border-bottom: 3px solid #32cd32;
    }
    &__title {
      font-family: 'Rowdies', serif;
      font-style: italic;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      text-align: left;
      color: #e9e7ea;
      text-transform: lowercase;

      @media #{$phone} {
        width: 10ch;
        font-size: 50px;
        line-height: 75px;
      }
    }
    &__spacer {
      width: 650px;
      height: 29px;
      background: #2a9d8f;
      animation: progress 2s ease-in-out;
      animation-fill-mode: both;
      -moz-animation: progress 2s ease-in-out;
      -moz-animation-fill-mode: both;
    }
  }
  &__more {
    position: absolute;
    margin: 0 auto;
    width: 100vw;
    bottom: 30px;
    & > p {
      font-family: 'Fira Code', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;

      color: #f39530;
    }
    &__arrow-down {
      animation: arrow 2s ease-out infinite;
      cursor: pointer;
    }

    @media (max-width: 1350px) {
      display: none;
    }
  }
  &__icon {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      width: 200px;
      margin-top: 20px;
    }
    cursor: pointer;
  }
  &__animated {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    @media #{$phone} {
      display: none;
    }
  }
}

@keyframes arrow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 650px;
  }
}
</style>
