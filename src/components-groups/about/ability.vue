<template>
  <div class="ability">
    <img
      :src="require('@/assets/about/' + iconUrl)"
      width="50px"
      height="50px"
    />
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
.ability {
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 500px;
  margin-top: 30px;
  &__content {
    padding-left: 20px;
    display: flex;
    align-items: center;
    font-family: Ropa Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
    padding-left: 25px;
    text-align: left;
  }
}
</style>
