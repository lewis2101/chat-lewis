<template>
  <v-toolbar>
    <div :class="$style.header">
      <v-btn icon="mdi-menu"/>
      <input-text density="compact" class="search-input" placeholder="Поиск">
        <template #prepend-inner>
          <v-icon icon="mdi-magnify"/>
        </template>
      </input-text>
    </div>
    <template v-slot:extension>
      <v-tabs
        v-model="model"
        density="compact"
      >
        <v-tab
          v-for="item in menuItems"
          :key="item.value"
          :value="item.value"
        >
          {{ item.title }}
          <span v-if="item.count" :class="$style.count">{{ item.count }}</span>
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script setup lang="ts">
import InputText from "@/components/Base/input-text.vue";
import {computed} from "vue";

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

const menuItems = [
  {
    title: 'Все',
    value: 'all',
    count: 10
  },
  {
    title: 'Избранные',
    value: 'favourite'
  },
  {
    title: 'Закрепленные',
    value: 'pinned',
    count: 5
  },
  {
    title: 'Группы',
    value: 'groups'
  }
]

</script>

<style lang="scss" module>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 1rem;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(79, 174, 78, 1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 5px;
}
</style>
