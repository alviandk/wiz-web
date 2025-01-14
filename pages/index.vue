<script setup lang="ts">
import InputText from 'primevue/inputtext'

function onFormSubmit() {
  alert('submit') // eslint-disable-line
}
</script>
<template>
  <div class="card flex justify-center mt-10">
    <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onFormSubmit">
      <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
      </div>
      <div class="flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" fluid />
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
    </form>
  </div>
</template>
