<template>
  <div :class="$style.layout">
    <div v-if="asSideShow" :class="[$style.aside, asSideFull && $style['aside-full']]">
      <aside-menu/>
    </div>
    <transition :name="isMobile ? 'slide-fade' : 'static'" mode="out-in">
      <div v-if="isChatOpened" :class="$style.content">
        <router-view/>
      </div>
    </transition>
    <transition name="slide">
      <div v-if="detailsShow" :class="$style.details" ref="detailsRef">
        <details-menu/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import AsideMenu from '@/pages/Aside/index.vue'
import DetailsMenu from '@/pages/Details/index.vue'
import {storeToRefs} from "pinia";
import {useDetailsStore} from "@/store/details-store";
import {onClickOutside, useWindowSize} from "@vueuse/core";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {TABLET_SIZE} from "@/data/breakpoints";

const route = useRoute()

const {width} = useWindowSize()
const detailsRef = ref()
onClickOutside(detailsRef, () => detailsShow.value = false)
const {detailsShow} = storeToRefs(useDetailsStore())

const isMobile = computed(() => width.value < TABLET_SIZE)
const isChatOpened = computed(() => !!route.params.chatId)

const asSideShow = computed(() => (isChatOpened.value && !isMobile.value) || !isChatOpened.value)
const asSideFull = computed(() => isMobile.value && !isChatOpened.value)


</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
  position: absolute;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-100%);
}

.slide-fade-leave-to {
  transform: translateX(100%);
}


.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>

<style lang="scss" module>
.layout {
  display: flex;
  height: calc(100svh - 10px);
}

.aside {
  width: 40%;
  max-width: 400px;
  border-right: 1px rgba(0, 0, 0, 0.6) solid;

  &-full {
    width: 100%;
    max-width: 100%;
  }
}

.content {
  width: 100%;
}

.details {
  width: 100%;
  max-width: 320px;
  height: 100svh;

  position: fixed;
  top: 0;
  right: 0;
}
</style>
