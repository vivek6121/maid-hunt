<template>
  <q-page class="flex flex-center bg-primary text-white">
    <div class="column flex-center">
      <!-- Logo Placeholder -->
      <q-img :src="logo" style="width: 300px; height: 300px" contain />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logo from 'assets/maid_hunt_logo.png'

const router = useRouter()

// Auto-redirect to login after 2 seconds
onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 2000)
})
</script>

<style scoped>
.bg-primary {
  background-color: #1976d2; /* You can change later for branding */
}
</style>
