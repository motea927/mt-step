<template>
  <li class="positions-card">
    <h2 class="positions-card__title">
      <img :src="image" :alt="title" class="positions-card__image" />
      {{ title }}
    </h2>
    <button class="positions-card__button">
      {{ openPositions }} open positions
    </button>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    openPositions: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.positions-card {
  list-style-type: none;
  background-color: #fff;
  padding: 48px 40px;
  box-shadow: 0px 24px 44px rgba(180, 191, 225, 0.4);
  border-radius: 16px;

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #1e2246;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
  }

  &__image {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  &__button {
    width: 250px;
    height: 59px;
    border: 1px solid #c2c5e2;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #1e2246;
  }

  &__button:hover {
    background-color: #1e2246;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
}
</style>
