<template>
  <div class="notification-bar">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NotificationBar extends Vue {
  @Prop(String) private text!: string;
}
</script>

<style lang="scss" scoped>
.notification-bar {
  height: 25px;
  width: 100%;
  background: yellow;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
