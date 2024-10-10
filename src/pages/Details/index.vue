<template>
  <v-card style="width: 100%; height: 100%;">
    <details-header @close="detailsShow = false"/>
    <details-avatar/>
    <details-info/>
  </v-card>
</template>

<script setup lang="ts">
import DetailsHeader from "@/components/Details/details-header.vue";
import {storeToRefs} from "pinia";
import {useDetailsStore} from "@/store/details-store";
import DetailsInfo from "@/components/Details/details-info.vue";
import DetailsAvatar from "@/components/Details/details-avatar.vue";

const { detailsShow } = storeToRefs(useDetailsStore())

</script>

<style lang="scss" module>

</style>
