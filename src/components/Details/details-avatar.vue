<template>
  <div :class="$style.avatar">
    <v-avatar text="БА" alt="avatar" :class="$style['avatar__text']"/>
    <div :class="$style['avatar-details']">
      <div :class="$style['avatar-details__title']">
        Баука
      </div>
      <div :class="$style['avatar-details__description']">
        Был в сети 10 мин назад
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.avatar {
  position: relative;
  width: 100%;
  height: 310px;
  border-bottom: 1px #F4F4F4 solid;

  img {
    width: 100%;
    height: 100%;
  }

  &__text {
    width: 100% !important;
    height: 100% !important;
    font-size: 5rem !important;
    border-radius: 0 !important;
  }


  &-details {
    position: absolute;
    bottom: 10px;
    left: 10px;

    &__title {
      font-size: 1.25rem;
    }

    &__description {
      font-size: 14px;
      color: #F4F4F4;
    }
  }
}
</style>
