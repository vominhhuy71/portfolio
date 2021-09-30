<template>
  <div class="skills">
    <div class="skills__title">
      Skills
    </div>
    <div class="skills__content">
      <div>
        <div>Front-end</div>
        <ul>
          <li>Vue</li>
          <li>React</li>
          <li>React Native</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div>
        <div>Back-end</div>
        <ul>
          <li>Flask</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>ASP.NET</li>
        </ul>
      </div>
      <div>
        <div>Cloud</div>
        <ul>
          <li>Azure</li>
          <li>AWS</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div>
        <div>Test</div>
        <ul>
          <li>Jest</li>
          <li>Cypress</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Skills extends Vue {}
</script>

<style scoped></style>
