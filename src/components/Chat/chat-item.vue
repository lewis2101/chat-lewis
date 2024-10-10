<template>
  <div :class="[$style[`${type}`], $style.container]">
    {{ text }}
    <span
      v-if="type !== 'date'"
      :class="$style.time"
    >
      23:39
    </span>
    <v-icon
      v-if="type !== 'date'"
      :class="$style.status"
      :icon="icon" size="15"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const iconMapper = {
  'read': 'mdi-check-all',
  'send': 'mdi-check',
  'error': 'mdi-alert-circle-outline'
}

const props = defineProps<{
  type: 'date' | 'owner' | 'sender',
  text: string,
  status?: 'error' | 'read' | 'send'
}>()

const icon = computed(() => props.status && iconMapper[props.status])

</script>

<style lang="scss" module>
.date {
  position: sticky;
  top: 0;
  border-radius: 20px;
  padding: 5px 10px;
  align-self: center;
  background: #F4F4F4;
  color: #000000;
}

.status {
  position: relative;
  top: 3px;
  left: 3px;
}

.time {
  font-size: 12px;
  position: relative;
  top: 5px;
}

.owner {
  border-radius: 20px 0 20px 20px;
  padding: 5px 10px;
  align-self: flex-end;
  background: rgb(79, 174, 78, 1);
}
.sender {
  border-radius: 0 20px 20px 20px;
  padding: 5px 10px;
  align-self: flex-start;
  background: rgb(79, 174, 78, 1);
}
</style>
