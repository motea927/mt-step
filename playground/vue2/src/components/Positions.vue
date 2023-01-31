<template>
  <div class="positions">
    <h1 class="positions__title">Open positions</h1>
    <ul class="positions__card-container">
      <PositionsCard
        v-for="(position, index) in mockData.positions"
        :id="`position-card-${index}`"
        :key="position.title"
        v-bind="position"
      />
    </ul>
    <p class="positions__description">
      We are proud to be an equal opportunity employer that values diversity. We
      do not discriminate on the basis of race, religion, color, national
      origin, gender, sexual orientation, age, marital status, veteran status,
      or disability status.
    </p>
  </div>
</template>

<script>
// components
import PositionsCard from './PositionsCard.vue'

import mockData from '../mocks/mockData'

export default {
  components: { PositionsCard },
  data() {
    return { mockData }
  },
}
</script>

<style lang="scss">
.positions {
  &__title {
    font-size: 32px;
    font-weight: 900;
    color: #1e2246;
    margin-bottom: 72px;
  }

  &__card-container {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
    max-width: 1054px;
    margin-bottom: 61px;
  }

  &__description {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1e2246;
    opacity: 0.7;
    text-align: center;
    max-width: 845px;
    margin: 0 auto;
  }
}
</style>
