import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

export const useDetailsStore = defineStore('details-store', () => {
  const detailsShow = ref(false)
  const route = useRoute()

  watch(() => route, () => detailsShow.value = false)

  return {
    detailsShow
  }
})
