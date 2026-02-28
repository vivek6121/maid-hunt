<template>
  <q-page class="flex flex-center bg-grey-2">
    <div class="column q-pa-md" style="width: 90%; max-width: 400px">
      <!-- Heading -->
      <div class="text-h5 text-center q-mb-xl">Select your role</div>

      <!-- Maid Button -->
      <q-btn
        label="I am a Maid"
        color="primary"
        unelevated
        class="full-width q-mb-md"
        @click="selectRole('maid')"
      />

      <!-- Employer Button -->
      <q-btn
        label="I am an Employer"
        color="secondary"
        unelevated
        class="full-width q-mb-md"
        @click="selectRole('employer')"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const selectRole = (role) => {
  if (role === 'maid') {
    router.push('/maid/setup') // go to maid profile setup
  } else {
    router.push('/search') // go to employer search
  }
}
</script>

<style scoped>
.bg-grey-2 {
  background-color: #f5f5f5;
}
</style>
