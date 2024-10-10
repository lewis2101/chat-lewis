<template>
  <v-toolbar>
    <div :class="$style.header">
      <v-btn icon="mdi-close" @click="$emit('close')"/>
      <div :class="$style['header-title']">
        Информация
      </div>
      <v-btn icon="mdi-pencil"/>
    </div>
  </v-toolbar>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.header {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;

  &-title {
    font-size: 1.2rem;
  }
}
</style>
