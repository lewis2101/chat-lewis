<template>
  <v-text-field prefix=" " v-bind="$attrs" :class="$style.field">
    <template #prepend-inner><slot name="prepend-inner"/></template>
  </v-text-field>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<style scoped lang="scss">
.search-input:deep(.v-input__details) {
  padding-inline: 0;
}
</style>

<style module lang="scss">
.field {
  padding-top: 0 !important;
}
</style>
