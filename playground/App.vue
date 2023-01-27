<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MtStep from '../src/MtStep'
import MtStepItem from '../src/MtStepItem.vue'
</script>

<template>
  <header>
    <img
      id="logo"
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld id="hello-world" msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <button id="show">show</button>
    <MtStep>
      <MtStepItem
        :step-item="[{ selector: '#logo' }, { selector: '#hello-world' }]"
      />
      <MtStepItem :step-item="[{ selector: '#show' }]" />
    </MtStep>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
