<template>
  <v-text-field
    v-model="model"
    prefix=" "
    v-bind="$attrs"
    :type="type"
    :class="$style.field"
  >
    <template #append-inner>
      <v-icon :icon="icon" :class="$style.icon" @click="isShow = !isShow"/>
    </template>
  </v-text-field>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import {computed, ref} from "vue";

const isShow = ref(false)

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

const type = computed(() => isShow.value ? 'text' : 'password')
const icon = computed(() => isShow.value ? 'mdi-eye-outline' : 'mdi-eye-off-outline')
</script>

<style lang="scss" module>
.field {
  padding-top: 0 !important;
}
.icon {
  cursor: pointer;
}
</style>
