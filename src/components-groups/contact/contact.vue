<template>
  <div class="contact">
    <div class="contact__card">
      <div class="contact__img">
        <img src="@/assets/avatar.png" />
      </div>
      <div class="contact__content">
        <div>
          Contact me at
          <span @click="openLink('gmail')" class="contact__email"
            >huy.vminh71@gmail.com</span
          >
        </div>
        Learn more:
        <div class="contact__btn-list" @click="openLink('linkedin')">
          <div class="contact__button">
            <div class="contact__button__title">Linkedin</div>
            <div class="contact__button__icon">
              <img src="@/assets/linkedin_icon.svg" height="30" width="30" />
            </div>
          </div>
          <div class="contact__button" @click="openLink('github')">
            <div class="contact__button__title">Github</div>
            <div class="contact__button__icon">
              <img src="@/assets/Octocat.png" height="30" width="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@lottiefiles/lottie-player';

@Component
export default class Contact extends Vue {
  // TODO: add responsive

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

.contact {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Fira Code', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 55px;
  text-align: left;
  color: #e9e7ea;

  padding: 5rem;

  @media #{$phone} {
    font-size: 25px;
    line-height: 30px;
  }

  &__card {
    height: 100%;
    width: 100%;

    display: flex;

    align-items: center;

    @media #{$phone} {
      flex-direction: column;
    }
    @media #{$desktop} {
      flex-direction: row;
    }
  }
  &__img {
    transform: scale(0.5);
    margin-bottom: 10px;
  }

  &__button {
    width: 200px;
    height: 75px;

    @media #{$phone} {
      transform: scale(0.5);
    }

    background-color: white;

    font-size: 25px;

    text-align: left;
    color: #181719;

    display: flex;
    justify-content: space-around;
    flex-direction: row;

    border-radius: 10px;

    cursor: pointer;

    outline: 5px solid #00c0ff;

    &__icon,
    &__title {
      height: 100%;

      display: flex;
      align-items: center;
    }
  }

  &__btn-list {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    @media #{$phone} {
      flex-direction: column;
      width: 100%;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  &__email {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
