<template>
  <div :class="$style.container">
    <div :class="$style.img">
      <img src="@/assets/logo.svg" alt="">
    </div>
    <div :class="$style.title">{{ title }}</div>
    <v-form
      :class="$style.form"
      @submit.prevent="$emit('submit')"
    >
      <slot/>
    </v-form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 500px;

  padding: 2rem;

  @media (max-width: 720px) {
    top: 1rem;
    transform: translate(-50%, 0);
  }
}
.title {
  margin-right: 2rem;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 2rem;
  width: 100%;
  img {
    width: 100px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
