<template>
  <auth-layout title="Регистрация">
    <input-text
      v-model="regObject.login"
      placeholder="Логин"
    />
    <input-text
      v-model="regObject.email"
      placeholder="Email"
    />
    <input-password
      v-model="regObject.password"
      placeholder="Пароль"
    />
    <input-password
      v-model="regObject.repeatPassword"
      placeholder="Повторите пароль"
    />
    <v-btn :class="$style.btn">
      Зарегестрироваться
    </v-btn>
    <v-btn variant="plain" :class="$style.btn" to="/login">
      Войти
    </v-btn>
  </auth-layout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/auth-layout.vue";
import InputText from "@/components/Base/input-text.vue";
import InputPassword from "@/components/Base/input-password.vue";
import {reactive} from "vue";

const regObject = reactive({
  login: '',
  email: '',
  password: '',
  repeatPassword: ''
})

</script>

<style lang="scss" module>
.btn {
  margin-right: 2rem;
}
</style>
