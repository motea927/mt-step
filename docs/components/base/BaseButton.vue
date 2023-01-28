<template>
  <button class="base-button">
    <slot> show demo </slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.base-button {
  background-color: #00b9e1;
  color: #fff;
  border-radius: 4px;
  padding: 8px;
}
</style>
