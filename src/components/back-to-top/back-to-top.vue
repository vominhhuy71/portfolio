<template>
  <div class="back-to-top">
    Top
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BackToTop extends Vue {}
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #00c6a9;
  color: #f1f1e6;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
</style>
