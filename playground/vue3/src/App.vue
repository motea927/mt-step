<template>
  <main class="main">
    <Positions />
    <button @click="showStep = true">show</button>
    <MtStep v-if="showStep" @close="showStep = false">
      <MtStepItem
        v-for="i in 3"
        :key="i"
        :stepItem="[
          {
            selector: `#position-card-${i - 1}`,
            hint: { text: `This is ${i}` },
            isPointerEventsDisabled: true,
          },
          {
            selector: `#position-card-${i}`,
          },
        ]"
      >
        <template v-if="i - 1 === 0" v-slot:hint-0>
          <div id="test" style="background: yellow">test slot</div>
        </template>

        <template v-if="i - 1 === 0" v-slot:main-hint>
          <div
            id="test"
            style="
              position: absolute;
              background: red;
              z-index: var(--z-index-hint);
            "
          >
            main-hint
          </div>
        </template>
      </MtStepItem>
    </MtStep>
  </main>
</template>

<script setup lang="ts">
import Positions from './components/Positions.vue'
import '../../../dist/mt-step.css'
import { MtStep, MtStepItem } from '../../../dist/mt-step'

import { ref } from 'vue'
const showStep = ref(false)
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f3f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
