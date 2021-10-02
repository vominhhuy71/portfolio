<template>
  <div class="contact">
    <div class="contact__card">
      <div style="height: 100%;">
        <img class="contact__img" src="@/assets/avatar.png" />
      </div>
      <div class="contact__content">
        <div>
          Find me at
          <span @click="openLink('gmail')" class="contact__email"
            >huy.vminh71@gmail.com</span
          >
        </div>
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

@Component
export default class Contact extends Vue {
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
  height: 50vh;

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

  &__card {
    height: 100%;
    width: 100%;

    background: #181719;

    display: flex;

    @media #{$phone} {
      flex-direction: column;
    }
    @media #{$desktop} {
      flex-direction: row;
    }
  }
  &__img {
    transform: scale(0.5);
  }

  &__button {
    width: 200px;
    height: 75px;

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
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__email {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
