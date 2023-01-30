<template>
  <div id="app">
    <MtStep>
      <MtStepItem />
    </MtStep>
  </div>
</template>

<script>
import { MtStep, MtStepItem } from '../../../dist/mt-step'

export default {
  name: 'App',
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
