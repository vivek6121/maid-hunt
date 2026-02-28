<template>
  <q-page class="flex flex-center bg-grey-2">
    <div class="column q-pa-md" style="width: 90%; max-width: 400px;">
      <!-- App Logo -->
      <q-img
        src="src/assets/quasar-logo-vertical.svg"
        style="width: 100px; height: 100px"
        class="q-mb-lg"
      />

      <!-- Login Heading -->
      <div class="text-h5 text-center q-mb-md">Login to MaidHunt</div>

      <!-- Mobile Number Input -->
      <q-input
        filled
        v-model="mobile"
        label="Mobile Number"
        type="tel"
        maxlength="10"
        class="q-mb-md"
      />

      <!-- Password Input -->
      <q-input
        filled
        v-model="password"
        label="Password"
        type="password"
        class="q-mb-md"
      />

      <!-- Login Button -->
      <q-btn
        label="Login"
        color="primary"
        unelevated
        class="full-width q-mb-md"
        @click="login"
      />

      <!-- Forgot / Signup Links -->
      <div class="row justify-between">
        <q-btn flat label="Forgot Password?" @click="forgotPassword" />
        <q-btn flat label="Sign Up" @click="signup" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const mobile = ref('')
const password = ref('')

// Dummy login function (replace with API later)
const login = () => {
  if (!mobile.value || !password.value) {
    alert('Enter mobile and password')
    return
  }
  // For MVP, redirect to RoleSelect
  router.push('/role')
}

const forgotPassword = () => {
  alert('Forgot Password Clicked')
}

const signup = () => {
  alert('Sign Up Clicked')
}
</script>

<style scoped>
.bg-grey-2 {
  background-color: #f5f5f5;
}
</style>