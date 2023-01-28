<template>
  <div class="mt-step-overlay"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.mt-step-overlay {
  background: #000;
  position: fixed;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  z-index: var(--z-index-overlay);
}
</style>
