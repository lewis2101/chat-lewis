<template>
  <div :class="$style.info">
    <div :class="$style['info-item']">
      <v-icon icon="mdi-phone" :class="$style['info-item__icon']"/>
      <div>
        <div>
          +7 (707) 379-54-84
        </div>
        <div style="font-size: .875rem; color: #F4F4F4;">
          Номер телефона
        </div>
      </div>
    </div>
    <div :class="$style['info-item']">
      <v-icon icon="mdi-email-outline" :class="$style['info-item__icon']"/>
      <div>
        <div>
          фыващзфшытващш
        </div>
        <div style="font-size: .875rem; color: #F4F4F4;">
          Email
        </div>
      </div>
    </div>
    <div :class="$style['info-item']">
      <v-icon icon="mdi-information-outline" :class="$style['info-item__icon']"/>
      <div>
        <div>
          фыващзфшытващш
        </div>
        <div style="font-size: .875rem; color: #F4F4F4;">
          О себе
        </div>
      </div>
    </div>
    <label :class="$style['info-item']">
      <v-checkbox :class="$style['info-item__notification']"/>
      <span>
          Уведомление
        </span>
    </label>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.info {
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    gap: 1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.35);
    }

    &__icon {
      margin: 1rem;
    }
    &__notification {
      padding: 0 .5rem;
    }
  }
}
</style>
