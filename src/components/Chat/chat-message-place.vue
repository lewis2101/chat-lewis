<template>
  <div :class="$style['message-place']">
    <v-textarea no-resize density="compact" rows="2" placeholder="Сообщение" class="search-input"/>
    <!--        <input-text placeholder="Сообщение" class="search-input"/>-->
    <v-btn icon="mdi-send" :class="$style['send-button']"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.search-input {
  width: 100%!important;
  max-width: 600px;
}
.search-input:deep(.v-input__details) {
  padding-inline: 0!important;
}
</style>

<style lang="scss" module>
.message-place {
  width: 100%;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.send-button {
  margin-top: 15px;
}
</style>
