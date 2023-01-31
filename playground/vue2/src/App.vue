<template>
  <div id="app">
    123
    <MtStepItem :stepItem="[]" />
    <button @click="show = true">show</button>
    <MtStep v-if="show">
      <MtStepItem />
    </MtStep>
  </div>
</template>

<script>
import { MtStep, MtStepItem } from '../../../dist/mt-step'

export default {
  name: 'App',
  data() {
    return { show: false }
  },
  components: {
    MtStep,
    MtStepItem,
  },
}
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
</style>
