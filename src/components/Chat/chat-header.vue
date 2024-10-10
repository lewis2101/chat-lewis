<template>
  <v-toolbar>
    <div :class="$style.header">
      <div :class="$style['header-content']">
        <v-btn v-if="backShow" icon="mdi-arrow-left" @click="router.push('/chat')"/>
        <v-avatar
          :text="getAvatarName(title)"
          color="grey"
          :class="$style.avatar"
          @click="detailsShow = true"
        />
        <div>
          <div :class="$style['header-content__title']">
            {{ title }}
          </div>
          <div :class="$style['header-content__description']">
            {{ status }}
          </div>
        </div>
      </div>
      <div :class="$style['header-menu']">
        <v-btn icon="mdi-magnify"/>
        <v-btn icon="mdi-dots-vertical"/>
      </div>
    </div>
  </v-toolbar>
</template>

<script setup lang="ts">
import {getAvatarName} from "@/helpers";
import {useDetailsStore} from "@/store/details-store";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import {useWindowSize} from "@vueuse/core";
import {computed} from "vue";
import {TABLET_SIZE} from "@/data/breakpoints";

const { width } = useWindowSize()

defineProps<{
  title: string,
  status: string
}>()

const router = useRouter()
const { detailsShow } = storeToRefs(useDetailsStore())

const backShow = computed(() => width.value < TABLET_SIZE)

</script>

<style lang="scss" module>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  padding: 10px 1rem;

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    &__title {
      font-weight: bold;
    }
    &__description {
      font-size: .875rem;
      color: #F4F4F4;
    }
  }
  &-menu {
    display: flex;
  }
}

@media (max-width: 420px) {
  .header {
    gap: 0;
    padding: 5px .5rem;
    &-content {
      &__description {
        font-size: .75rem;
      }
    }
  }
}

.avatar {
  cursor: pointer;
}
</style>
