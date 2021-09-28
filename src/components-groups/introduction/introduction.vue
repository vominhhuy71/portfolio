<template>
  <div class="introduction">
    <div class="introduction__wrapper">
      <div class="introduction__img__wrapper">
        <img
          src="@/assets/avatar.png"
          class="introduction__img"
          height="782px"
          width="420px"
        />
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

    <div class="introduction__more">
      <!-- <p>LEARN MORE ABOUT ME!</p> -->
      <div class="introduction__more__arrow-down">
        <img src="@/assets/down-arrow.svg" />
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
.introduction {
  height: 100%;
  position: relative;
  &__wrapper {
    display: flex;
    flex-direction: row;
  }
  &__img {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 83px;
      width: 671px;
    }
  }
  &__info {
    width: 1045px;
    height: 413px;
    margin-top: 150px;
    padding-left: 100px;
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

      color: #e76f51;
    }
    &__title {
      font-family: 'Rowdies', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 75px;
      line-height: 100px;
      text-align: left;
      color: #264653;
      // background-image: linear-gradient(
      //   90deg,
      //   #264653,
      //   #2a9d8f,
      //   #e9c46a,
      //   #f4a261,
      //   #e76f51
      // );
      // background-clip: text;
      // color: transparent;
      width: 500px;
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

      color: #e76f51;
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
