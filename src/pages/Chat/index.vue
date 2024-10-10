<template>
  <v-app>
    <chat-header title="Баука" status="Был в сети 10 мин назад"/>
    <chat-content/>
  </v-app>
</template>

<script setup lang="ts">
import ChatHeader from "@/components/Chat/chat-header.vue";
import ChatContent from "@/components/Chat/chat-content.vue";

</script>

<style lang="scss" module>

</style>
