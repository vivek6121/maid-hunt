<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="column" style="max-width: 400px; margin: auto;">
      <div class="text-h5 text-center q-mb-lg">Maid Profile Setup</div>

      <!-- Name -->
      <q-input
        filled
        v-model="name"
        label="Full Name"
        class="q-mb-md"
      />

      <!-- Age -->
      <q-input
        filled
        v-model="age"
        label="Age"
        type="number"
        class="q-mb-md"
      />

      <!-- Experience -->
      <q-input
        filled
        v-model="experience"
        label="Years of Experience"
        type="number"
        class="q-mb-md"
      />

      <!-- Availability toggle -->
      <q-toggle
        v-model="openToWork"
        label="Open to Work"
        color="primary"
        class="q-mb-md"
      />

      <!-- Submit Button -->
      <q-btn
        label="Submit"
        color="primary"
        unelevated
        class="full-width"
        @click="submitProfile"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const age = ref('')
const experience = ref('')
const openToWork = ref(false)

// Dummy submit function (replace with API later)
const submitProfile = () => {
  if (!name.value || !age.value || !experience.value) {
    alert('Please fill all fields')
    return
  }

  console.log({
    name: name.value,
    age: age.value,
    experience: experience.value,
    openToWork: openToWork.value
  })

  // Redirect to maid dashboard
  router.push('/maid/dashboard')
}
</script>

<style scoped>
.bg-grey-2 {
  background-color: #f5f5f5;
}
</style>