<template>
  <q-page class="flex flex-center bg-primary text-white">
    <div class="column flex-center">
      <!-- Logo Placeholder -->
      <q-img
        src="src/assets/maid_hunt_logo.png"
        style="width: 300px; height: 300px"
      />
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
  }, 2000)
})
</script>

<style scoped>
.bg-primary {
  background-color: #1976d2; /* You can change later for branding */
}
</style>