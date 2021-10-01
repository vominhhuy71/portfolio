<template>
  <div>
    <div class="splash-screen">
      <img src="@/assets/HUY_VO.svg" />
      <div class="splash-screen__progress">
        {"progress": "0%"}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import anime from 'animejs';

@Component
export default class extends Vue {
  private mounted() {
    const object = {
      progress: '0%',
    };

    const progressDiv = document.querySelector('.splash-screen__progress')!;

    anime({
      targets: object,
      progress: '100%',
      easing: 'linear',
      round: 1,
      duration: 2000,
      update: function() {
        progressDiv.innerHTML = JSON.stringify(object);
      },
    });

    setTimeout(() => {
      this.$emit('close-screen', false);
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.splash-screen {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__progress {
    margin-top: 30px;

    font-family: 'Fira Code', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
  }
}
</style>
