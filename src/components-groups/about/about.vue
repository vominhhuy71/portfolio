<template>
  <div class="about__wrapper">
    <div class="about__info">
      <div class="about__info__title"></div>
      <div class="about__info__content">
        After 4 years studying and working in IT field, I have gained experience
        in creating well-designed web applications and working with server. I
        enjoy working with different tools, including C++, JavaScript, Vue and
        React.
      </div>
    </div>
    <div class="about__experience__wrapper">
      <div class="about__experience fade-in">
        <div class="about__experience__item1">
          <div class="about__experience__title">
            Naava Oy
          </div>
          <div class="about__experience__position">
            Frontend developer
          </div>
          <div class="about__experience__time">
            08/2021 - now
          </div>
        </div>
        <div class="about__experience__item2">
          <div class="about__experience__title">
            Integrify
          </div>
          <div class="about__experience__position">
            Full Stack developer
          </div>
          <div class="about__experience__time">
            05/2021 - now
          </div>
        </div>
        <div class="about__experience__item3">
          <div class="about__experience__title">
            South-Eastern Finland University of Applied Sciences
          </div>
          <div class="about__experience__position">
            IT student
          </div>
          <div class="about__experience__time">
            08/2018 - now
          </div>
        </div>
      </div>
    </div>
    <div class="about__ability fade-in">
      <div class="about__ability__title">What can I do?</div>
      <div class="about__ability__content">
        <template v-for="(item, index) in abilities">
          <div :key="index">
            <ability
              :class="{ oddItem: index === 1 }"
              :desc="item.desc"
              :iconUrl="item.iconUrl"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Ability from '@/components-groups/about/ability.vue';

@Component({
  components: {
    Ability,
  },
})
export default class About extends Vue {
  private options: any = {
    threshold: 1,
    rootMargin: '-50px 0px -10px 0px',
  };

  private get abilities() {
    return [
      {
        desc: 'Design and create web applications',
        iconUrl: 'browser.svg',
      },
      {
        desc: 'Design and create mobile applications',
        iconUrl: 'mobile-application.svg',
      },
      {
        desc: 'Design and create desktop applications',
        iconUrl: 'desktop.svg',
      },
      {
        desc: 'Create and maintain API server',
        iconUrl: 'api.svg',
      },
    ];
  }

  private mounted() {
    const faders = document.querySelectorAll('.fade-in')!;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, this.options);

    faders.forEach((section) => {
      observer.observe(section);
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.about {
  &__wrapper {
    background: white;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding-bottom: 50px;
    & > div {
      flex: 1;
    }
  }
  &__info {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 75px;
    padding-bottom: 75px;

    @media #{$desktop} {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    &__title,
    &__content {
      grid-row: 1/2;
      align-self: center;
    }

    &__title {
      grid-column: 1/3;

      width: 150px;
      height: 250px;

      background: url('~@/assets/about/park.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      @media #{$phone} {
        display: none;
      }
    }
    &__content {
      grid-column: 2/-1;
      text-align: left;
      display: flex;
      align-items: center;
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 32px;
      padding: 20px;

      background: #fff;

      box-shadow: 4px 4px 10px rgba(20, 108, 117, 0.25);
      @media #{$desktop} {
        width: 789px;
      }
    }
  }
  &__ability {
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 75px;
    &__title {
      font-family: 'Ropa Sans', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 57px;
      margin: 0 auto;

      background-image: linear-gradient(
        90deg,
        #f9f871,
        #a0dc7a,
        #54b986,
        #189386,
        #146c75,
        #264653
      );
      background-clip: text;
      color: transparent;
    }
    &__content {
      display: flex;
      flex-wrap: wrap;

      & > div {
        flex: 50%;
        display: flex;
        justify-content: center;
      }
    }
  }
  &__experience {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      background: url('~@/assets/about/road.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      position: relative;
      z-index: 1;
      isolation: isolate;
    }

    margin: 0 auto;
    max-width: 1000px;

    @media #{$desktop} {
      padding: 100px;
    }

    @media #{$phone} {
      height: 70vh;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #344a53;
      z-index: -1;
      mix-blend-mode: multiply;

      margin: 50px 100px;

      @media #{$phone} {
        margin: 0 0;
      }
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'item1 blank1 '
      'blank2 item2'
      'item3 blank3';
    &__item1 {
      padding-right: 50px;

      grid-area: item1;

      &::before {
        content: '';
        position: absolute;
        top: 50px;
        right: 0px;
        width: 50px;
        border-bottom: 3px solid #98afba;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50px;
        right: -2px;
        height: 100%;
        border-right: 4px solid #98afba;
      }
    }
    &__item2 {
      padding-left: 50px;

      grid-area: item2;
      padding-top: 18px;
      &::before {
        content: '';
        position: absolute;
        top: 50px;
        left: 0px;
        width: 50px;
        border-bottom: 3px solid #98afba;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50px;
        left: -2px;
        height: 120%;
        border-right: 4px solid #98afba;
      }
    }
    &__item3 {
      padding-right: 50px;

      grid-area: item3;
      &::before {
        content: '';
        position: absolute;
        top: 65px;
        right: 0px;
        width: 50px;
        border-bottom: 3px solid #98afba;
      }
      &::after {
        content: '';
        position: absolute;
        top: 65px;
        right: -2px;
        height: 75%;
        border-right: 4px dashed #98afba;
        @media #{$phone} {
          height: 50%;
        }
      }
    }
    &__item1,
    &__item2,
    &__item3 {
      position: relative;
      height: 100%;
      width: 100%;
    }
    &__title,
    &__position,
    &__time {
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      line-height: 32px;
    }
    &__title {
      font-size: 25px;
      // max-width: 300px;
      color: #98afba;
    }
    &__position {
      font-size: 20px;
      color: #98afba;
    }
    &__time {
      font-size: 18px;
      color: #98afba;
    }
  }
}

.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}

.oddItem {
  @media #{$phone} {
    // margin-top: 10px;
  }
}
</style>
