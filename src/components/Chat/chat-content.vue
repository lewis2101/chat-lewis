<template>
  <div :class="$style.chat">
    <div :class="$style.history">
      <chat-item type="date" text="4 сентября"/>
      <chat-item type="owner" text="Привет как дела?" status="read"/>
      <chat-item type="sender" text="Привет как дела?" status="read"/>
      <chat-item type="owner" text="Привет как дела?" status="read"/>
      <chat-item type="date" text="10 сентября"/>
      <chat-item type="sender" text="Привет как дела?" status="read"/>
      <chat-item type="sender" text="Привет как дела?" status="read"/>
      <chat-item type="owner" text="Привет как дела?" status="send"/>
      <chat-item type="sender" text="Привет как дела?" status="send"/>
    </div>
    <chat-message-place/>
  </div>
</template>

<script setup lang="ts">
import ChatItem from "@/components/Chat/chat-item.vue";
import ChatMessagePlace from "@/components/Chat/chat-message-place.vue";
</script>

<style lang="scss" module>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem .5rem;
}

.history {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  max-width: 650px;
  overflow: auto;
  height: calc(100svh - 180px);
}

</style>
