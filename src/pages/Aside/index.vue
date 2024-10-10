<template>
  <v-app>
    <aside-header v-model="tab"/>
    <v-card>
      <v-card-text :class="$style.content">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="all">
            <div :class="$style['chat-wrapper']">
              <aside-chat
                v-for="item in chats"
                :key="item.id"
                :title="item.title"
                :date="item.date"
                :description="item.description"
                :counter="item.count"
                :active="item.id === currentChat"
                @click="router.push(`/chat/${item.id}`)"
              />
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="favourite">
            Two
          </v-tabs-window-item>

          <v-tabs-window-item value="pinned">
            Three
          </v-tabs-window-item>

          <v-tabs-window-item value="groups">
            Three
          </v-tabs-window-item>

        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import AsideChat from "@/components/Aside/aside-chat.vue";
import AsideHeader from "@/components/Aside/aside-header.vue";
import {useRoute, useRouter} from "vue-router";

const tab = ref('one')
const currentChat = computed(() => route.params.chatId as string)

const route = useRoute()
const router = useRouter()

const chats = [
  {
    id: '11234123',
    title: 'Баука',
    description: 'Пойдем катать?',
    date: 'Ср',
    count: 10
  },
  {
    id: '153452',
    title: 'Асем',
    description: 'Дома',
    date: 'Чт',
    count: 1
  },
  {
    id: '65347653',
    title: 'Алибек',
    description: 'кс',
    date: '10:10',
    count: 3
  },
  {
    id: '47654745',
    title: 'Баука',
    description: 'Пойдем катать?',
    date: 'Ср',
  }
]

</script>

<style scoped lang="scss">
.tab-button:deep(.v-btn__overlay) {
  pointer-events: auto !important;
}

.tab-button:deep(.v-btn__underlay) {
  pointer-events: auto !important;
}
</style>

<style scoped lang="scss">
.search-input:deep(.v-input__details) {
  padding-inline: 0;
}
</style>

<style lang="scss" module>
.content {
  overflow: auto !important;
  height: calc(100svh - 112px);
  padding: .5rem !important;
}

.chat {
  display: flex !important;
  gap: 1rem;
  padding: 1rem !important;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &__active {
    background: rgba(0, 0, 0, 0.6);
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
      right: 5px;
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
      background: green;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

}
</style>
