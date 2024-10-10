<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script setup lang="ts">
import {signIntoFireBase, subscribeUser} from '@/utils/firebase'
import {onMounted} from "vue"
import {getIdToken} from "firebase/auth"
import {getNotificationPermission} from "@/utils/service-worker";

onMounted(async () => {
  console.log('PROJECT RAN')
  // const user = await signIntoFireBase(EMAIL, PASSWORD)
  //@ts-ignore
  // await getIdToken(user)
  getNotificationPermission()
  // await subscribeUser()
})

</script>

<style module lang="scss">

</style>
