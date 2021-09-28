<template>
  <div class="about__wrapper">
    <div class="about__info">
      <div class="about__info__title">Who am I?</div>
      <div class="about__info__content">
        After 4 years studying and working in IT field, I have gained experience
        in creating well-designed web applications and working with server. I
        enjoy working with different tools, including C++, JavaScript, Vue and
        React.
      </div>
    </div>
    <div class="about__ability">
      <div class="about__ability__title">What can I do?</div>
      <div class="about__ability__content">
        <template v-for="(item, index) in abilities">
          <div :key="index">
            <ability :desc="item.desc" :iconUrl="item.iconUrl" />
          </div>
        </template>
      </div>
    </div>
    <div class="about__experience">
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
}
</script>

<style lang="scss" scoped>
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
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    &__title {
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 57px;

      color: #4c4d1b;
      width: 111px;
      height: 144px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__content {
      max-width: 789px;
      text-align: left;
      display: flex;
      align-items: center;
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 32px;
      padding-left: 50px;
    }
  }
  &__ability {
    max-width: 1000px;
    margin: 0 auto;

    &__title {
      font-family: Ropa Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 57px;

      color: #4c4d1b;
      margin: 0 auto;
      margin-top: 25px;
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
    margin: 0 auto;
    padding-top: 25px;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'item1 blank1 '
      'blank2 item2'
      'item3 blank3';
    &__item1 {
      grid-area: item1;

      &::before {
        content: '';
        position: absolute;
        top: 50px;
        right: 0px;
        width: 75px;
        border-bottom: 3px solid #000;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50px;
        right: -2px;
        height: 100%;
        border-right: 4px solid #000;
      }
    }
    &__item2 {
      grid-area: item2;
      padding-top: 18px;
      &::before {
        content: '';
        position: absolute;
        top: 50px;
        left: -2px;
        width: 75px;
        border-bottom: 3px solid #000;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50px;
        left: -2px;
        height: 120%;
        border-right: 4px solid #000;
      }
    }
    &__item3 {
      grid-area: item3;
      &::before {
        content: '';
        position: absolute;
        top: 65px;
        right: 0px;
        width: 75px;
        border-bottom: 3px solid #000;
      }
      &::after {
        content: '';
        position: absolute;
        top: 65px;
        right: -2px;
        height: 75%;
        border-right: 4px solid #000;
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
      max-width: 300px;
    }
    &__position {
      font-size: 20px;
    }
    &__time {
      font-size: 18px;
    }
  }
}
</style>
