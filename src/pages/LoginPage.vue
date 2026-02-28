<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="column q-pa-lg" flat bordered style="width: 90%; max-width: 400px;">

      <!-- App Logo -->
      <div class="row justify-center q-pb-sm">
        <q-img
          src="~assets/maid_hunt_logo.png"
          style="width: 200px; height: 200px"
          contain
          class="q-mb-md"
        />
      </div>

      <!-- Login Heading -->
      <div class="text-h5 text-center q-mb-lg text-weight-medium">
        Login to MaidHunt
      </div>

      <!-- Mobile Number Input -->
      <q-input
        filled
        v-model="mobile"
        label="Mobile Number"
        type="tel"
        maxlength="10"
        lazy-rules
        :rules="[
          val => !!val || 'Mobile number is required',
          val => val.length === 10 || 'Enter valid 10 digit number'
        ]"
        class="q-mb-md"
      />

      <!-- Password Input -->
      <q-input
        filled
        v-model="password"
        label="Password"
        :type="isPwd ? 'password' : 'text'"
        lazy-rules
        :rules="[val => !!val || 'Password is required']"
        class="q-mb-md"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <!-- Login Button -->
      <q-btn
        label="Login"
        color="primary"
        unelevated
        class="full-width q-mb-md"
        :loading="loading"
        @click="login"
      />

      <!-- Forgot / Signup Links -->
      <div class="row justify-between">
        <q-btn flat label="Forgot Password?" @click="forgotPassword" />
        <q-btn flat label="Sign Up" @click="signup" />
      </div>

    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const mobile = ref('')
const password = ref('')
const isPwd = ref(true)
const loading = ref(false)

const login = async () => {
  loading.value = true

  try {
    // API call here
    console.log('Mobile:', mobile.value)
    console.log('Password:', password.value)
    router.push('/role')
  } finally {
    loading.value = false
  }
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