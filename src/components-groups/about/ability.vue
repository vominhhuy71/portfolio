<template>
  <div class="ability">
    <div class="ability__icon">
      <img
        :src="require('@/assets/about/' + iconUrl)"
        width="50px"
        height="50px"
      />
    </div>
    <div class="ability__content">
      {{ desc }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Ability extends Vue {
  @Prop(String) private iconUrl!: string;
  @Prop(String) private desc!: string;
}
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints.abstracts';

.ability {
  display: flex;
  flex-direction: row;

  margin-top: 30px;
  &__content {
    display: flex;
    align-items: center;

    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
    text-align: justify;

    @media #{$desktop} {
      padding-left: 25px;
    }
    @media #{$phone} {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  &__icon {
    @media #{$phone} {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;
    }
  }

  @media #{$phone} {
    flex-direction: column;
    justify-content: baseline;
    width: 100%;
  }

  @media #{$desktop} {
    height: 50px;
    width: 500px;
  }
}
</style>
