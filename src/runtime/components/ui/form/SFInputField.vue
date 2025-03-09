<script setup lang="ts">
defineProps<{
  type?: 'text' | 'email' | 'password'
  id?: string
  isInError?: boolean
  placeholder?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <input
    :id="id"
    v-model="model"
    :placeholder="placeholder"
    :type="type || 'text'"
    :class="{ 'is-in-error': isInError }"
  >
</template>

<style lang="scss" scoped>
input {
  @apply block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-transparent outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6;

  &.is-in-error {
    @apply text-red-900 border-red-500 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600;
  }
}
</style>
