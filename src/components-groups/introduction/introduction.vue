<template>
  <div class="introduction">
    <div class="introduction__wrapper">
      <div class="introduction__img__wrapper">
        <img
          src="@/assets/avatar.png"
          class="introduction__img"
          height="371px"
          width="395px"
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
        <div class="introduction__info__spacer"></div>

        <div class="introduction__info__typewriter">
          <div class="introduction__info__typewriter__line">1</div>
          <div class="introduction__info__typewriter__code__wrapper">
            <div class="introduction__info__typewriter__code">
              <span style="color:#9CDCFE">console</span
              ><span style="color:#DCDCAA">.log</span
              ><span style="color:yellow">(</span
              ><span style="color: #CE9178">'Hello world!'</span
              ><span style="color:yellow">)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="introduction__more">
      <p>LEARN MORE ABOUT ME!</p>
      <div class="introduction__more__arrow-down">
        <img src="@/assets/down-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

console.log('object');

@Component
export default class Introduction extends Vue {}
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
    margin-top: 75px;
    padding-left: 50px;
    &__hello {
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;
      text-align: left;
      color: #2a9d8f;
    }
    &__name {
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 40px;

      color: #e76f51;
    }
    &__title {
      font-family: Rowdies;
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
    &__typewriter {
      margin-top: 100px;
      font-family: 'Source Code Pro', monospace;

      text-align: left;
      background: #000;
      height: 50px;
      width: 600px;
      display: flex;
      align-items: center;
      &__line {
        width: 50px;
        display: flex;
        justify-content: center;
        color: grey;
      }
      &__code {
        &__wrapper {
          background-color: #1e1e1e;
          height: 100%;
          width: 100%;
          padding-left: 10px;
        }
        background-color: #1e1e1e;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        font-weight: normal;
        font-size: 25px;
        position: relative;
        width: max-content;
        letter-spacing: 0.5px;
        &::before,
        &::after {
          content: '';
          top: 9px;
          right: 0;
          left: 0;
          bottom: 0;
          position: absolute;
        }
        &::before {
          background: #1e1e1e;
          animation: typewriter 6s steps(27) 1s forwards;
        }
        &::after {
          height: 30px;
          width: 0.125em;
          background: #d4d4d4;
          animation: typewriter 6s steps(27) 1s forwards,
            blink 750ms steps(27) infinite;
        }
      }
    }
  }
  &__more {
    position: absolute;
    margin: 0 auto;
    width: 100vw;
    bottom: 0;
    & > p {
      font-family: Ropa Sans;
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

@keyframes typewriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
  to {
    background: transparent;
  }
}
</style>
