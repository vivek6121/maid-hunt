<template>
  <q-page class="flex flex-center bg-primary text-white">
    <div class="column flex-center">
      <!-- Logo Placeholder -->
      <q-img
        src="src/assets/quasar-logo-vertical.svg"
        style="width: 120px; height: 120px"
      />

      <!-- App Name -->
      <div class="text-h5 q-mt-md">MaidHunt</div>

      <!-- Tagline -->
      <div class="text-subtitle2 q-mt-xs">Find trusted maids in your area</div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Auto-redirect to login after 2 seconds
onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 1000)
})
</script>

<style scoped>
.bg-primary {
  background-color: #1976d2; /* You can change later for branding */
}
</style>