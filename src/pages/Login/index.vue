<template>
  <auth-layout @submit="submit" title="Вход">
    <input-text
      v-model="formObject.login"
      :disabled="loading"
      placeholder="Логин"
    />
    <input-password
      v-model="formObject.password"
      :disabled="loading"
      placeholder="Пароль"
    />
    <v-checkbox label="Оставаться в системе"/>
    <v-btn
      :class="$style.btn"
      type="submit"
      :loading="loading"
      to="/chat"
    >
      Войти
    </v-btn>
    <v-btn variant="plain" :class="$style.btn" to="/login/registration">
      Зарегестрироваться
    </v-btn>
  </auth-layout>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import AuthLayout from "@/layouts/auth-layout.vue";
import InputPassword from "@/components/Base/input-password.vue";
import InputText from "@/components/Base/input-text.vue";

const loading = ref(false)

const formObject = reactive({
  login: '',
  password: ''
})

const submit = () => {
  loading.value = true
}
</script>

<style lang="scss" module>
.btn {
  margin-right: 2rem;
}
</style>
