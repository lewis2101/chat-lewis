<template>
  <v-card :class="[$style.chat, active && $style['chat__active']]">
    <v-avatar :text="getAvatarName(title)" color="grey"></v-avatar>
    <div :class="$style['chat-content']">
      <div :class="$style['chat-content__title']">
        {{ title }}
      </div>
      <div :class="$style['chat-content__description']">
        {{ description }}
      </div>
      <div :class="$style['chat-content__date']">
        {{ date }}
      </div>
      <div v-if="counter" :class="$style['chat-content__counter']">
        {{ counter }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {getAvatarName} from "@/helpers";

const props = withDefaults(defineProps<{
  title: string,
  description: string,
  date: string,
  counter?: number | undefined,
  active?: boolean
}>(), {
  active: false
})

</script>

<style lang="scss" module>
.chat {
  display: flex !important;
  gap: 1rem;
  padding: 1rem !important;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.35)!important;
  }

  &__active {
    background: rgba(0, 0, 0, 0.35)!important;
  }

  &-content {
    position: relative;
    width: 100%;
    &__title {
      font-weight: bold;
    }
    &__description {
      color: #F4F4F4;
    }
    &__date {
      font-size: 12px;

      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__counter {
      font-size: 14px;

      position: absolute;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(79, 174, 78, 1);
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

}
</style>
