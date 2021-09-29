<template>
  <div class="introduction">
    <div class="introduction__wrapper">
      <div class="introduction__img__wrapper">
        <img src="@/assets/avatar.png" class="introduction__img" />
      </div>
      <div class="introduction__info">
        <div class="introduction__info__hello">
          HELLO, I'M
          <span class="introduction__info__name">HUY VO</span>
        </div>
        <div class="introduction__info__title">
          FULL-STACK DEVELOPER
        </div>
        <compiler />
        <!-- <div class="introduction__icon__wrapper">
          <img
            src="@/assets/linkedin_icon.svg"
            class="introduction__icon"
            height="30px"
            width="30px"
            @click="openLink('linkedin')"
            title="LinkedIn"
          />
          <img
            src="@/assets/gmail_icon.svg"
            class="introduction__icon"
            height="30px"
            width="30px"
            @click="openLink('gmail')"
            title="Mail"
          />
          <img
            src="@/assets/Octocat.png"
            class="introduction__icon"
            height="30px"
            width="30px"
            @click="openLink('github')"
            title="GitHub"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Compiler from '@/components/compiler/compiler.vue';

@Component({
  components: {
    Compiler,
  },
})
export default class Introduction extends Vue {
  private openLink(link: string) {
    if (link === 'linkedin') {
      window.open('https://www.linkedin.com/in/minh-huy-vo/', '_blank');
    } else if (link === 'github') {
      window.open('https://github.com/vominhhuy71', '_blank');
    } else if (link === 'gmail') {
      window.open('mailto:huy.vminh71@gmail.com', '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.introduction {
  width: 100%;
  height: 100%;
  position: relative;

  /**Background */
  background: url('~@/assets/introduction/background1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  z-index: 1;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    align-items: center;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #264653;
      z-index: -1;
      mix-blend-mode: multiply;
    }

    @media (max-width: 1350px) {
      flex-direction: column;
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
    padding-left: 100px;
    @media #{$phone} {
      padding-left: 0px;
    }
    &__hello {
      font-family: 'Ropa Sans', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;
      text-align: left;
      color: #2a9d8f;
    }
    &__name {
      font-family: 'Ropa Sans', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;

      color: #f39530;
    }
    &__title {
      font-family: 'Rowdies', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 75px;
      line-height: 100px;
      text-align: left;
      color: #f9f871;
      width: 500px;
      text-shadow: 0.025em 0.025em 0 yellow, 0.05em 0.05em 0 blue,
        0.075em 0.075em 0 red, 0.1em 0.1em 0 black;

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
    bottom: 0;
    & > p {
      font-family: 'Ropa Sans', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;

      color: #f39530;
    }
    &__arrow-down {
      animation: arrow 2s ease-out infinite;
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
