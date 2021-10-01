<template>
  <div class="animated__wrapper">
    <div class="animated__icons">
      <img
        width="50"
        height="50"
        class="vue icon "
        src="@/assets/introduction/vue.svg"
      />
      <img
        width="50"
        height="50"
        class="react icon "
        src="@/assets/introduction/react.png"
      />
      <img
        width="50"
        height="50"
        class="sass icon "
        src="@/assets/introduction/sass.svg"
      />
      <img
        width="50"
        height="50"
        class="nodejs icon "
        src="@/assets/introduction/nodejs.svg"
      />
      <img
        width="50"
        height="50"
        class="ts icon "
        src="@/assets/introduction/typescript.svg"
      />
      <img
        width="50"
        height="50"
        class="js icon"
        src="@/assets/introduction/javascript.svg"
      />
      <img
        width="50"
        height="50"
        class="cpp icon "
        src="@/assets/introduction/cpp.svg"
      />
      <img
        width="50"
        height="50"
        class="jest icon "
        src="@/assets/introduction/jest.svg"
      />
      <img
        width="50"
        height="50"
        class="azure icon "
        src="@/assets/introduction/azure.svg"
      />
      <img
        width="50"
        height="50"
        class="bootstrap icon "
        src="@/assets/introduction/bootstrap.svg"
      />
      <img
        width="50"
        height="50"
        class="c icon "
        src="@/assets/introduction/c.svg"
      />
      <img
        width="50"
        height="50"
        class="csharp icon "
        src="@/assets/introduction/csharp.svg"
      />
      <img
        width="50"
        height="50"
        class="figma icon "
        src="@/assets/introduction/figma.svg"
      />
      <img
        width="50"
        height="50"
        class="css icon "
        src="@/assets/introduction/css.svg"
      />
      <img
        width="50"
        height="50"
        class="firebase icon "
        src="@/assets/introduction/firebase.svg"
      />
      <img
        width="50"
        height="50"
        class="git icon "
        src="@/assets/introduction/git.svg"
      />
      <img
        width="50"
        height="50"
        class="html icon "
        src="@/assets/introduction/html.svg"
      />
      <img
        width="50"
        height="50"
        class="kubernetes icon "
        src="@/assets/introduction/kubernetes.svg"
      />
      <img
        width="50"
        height="50"
        class="mongodb icon "
        src="@/assets/introduction/mongodb.svg"
      />
      <img
        width="50"
        height="50"
        class="mysql icon "
        src="@/assets/introduction/mysql.svg"
      />
      <img
        width="50"
        height="50"
        class="cypress icon "
        src="@/assets/introduction/cypress.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import anime from 'animejs';

@Component
export default class AnimatedDiv extends Vue {
  private items: any = [
    '.vue',
    '.react',
    '.sass',
    '.nodejs',
    '.ts',
    '.js',
    '.cpp',
    '.azure',
    '.jest',
    '.bootstrap',
    '.c',
    '.csharp',
    '.figma',
    '.css',
    '.firebase',
    '.git',
    '.html',
    '.kubernetes',
    '.mongodb',
    '.mysql',
    '.cypress',
  ];

  private mounted() {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    for (const item of this.items) {
      const rand = Math.floor(Math.random() * 10);
      let times = 1;
      if (rand % 2 === 0) {
        times = 1.4;
      }
      anime({
        targets: item,
        top: {
          value: [-1000, anime.random(0, times * vh - 100)],
          duration: 2300,
        },
        delay: 2000,
        easing: 'easeOutExpo',
      }).finished.then(() => anime(this.animateItem(item)));
    }
  }

  private animateItem(itemName: string) {
    return {
      targets: itemName,
      rotate: {
        value: function() {
          let rand = anime.random(0, 10);
          if (rand % 2 === 0) {
            return 360;
          } else {
            return -360;
          }
        },
        duration: () => {
          return anime.random(2000, 8000);
        },
        easing: 'linear',
      },
      loop: true,
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
    // overflow: hidden;
    // position: relative;
    @media #{$touch} {
      flex-direction: column;
      height: 10vh;
    }
  }

  &__icons {
    position: absolute;
    width: 40%;
    right: 0;
    @media #{$phone} {
      height: 100vh;
    }
    @media #{$desktop} {
      height: 200vh;
    }
    .icon {
      position: absolute;
      z-index: -1;
      @for $i from 1 through 21 {
        &:nth-child(#{$i}) {
          top: random(1000) - 2000 + px;
          right: random(500) + 10 + px;

          opacity: (random(10) / 10 + 0.5);
          @media #{$touch} {
            right: random(100) + vw;
          }
        }
      }
    }
  }
}
</style>
