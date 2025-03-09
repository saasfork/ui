<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  type?: 'text' | 'email' | 'password' | 'number'
  autoComplete?: 'on' | 'off'
  isInError?: boolean
  placeholder?: string
  disabled?: boolean
  required?: boolean
}>()

const model = defineModel<string>()

const classes = computed(() => ({
  'is-in-error': props.isInError,
  'disabled': props.disabled,
}))
</script>

<template>
  <input
    :id="props.id"
    v-model="model"
    :placeholder="props.placeholder"
    :type="props.type || 'text'"
    :class="classes"
    :autocomplete="props.autoComplete || 'off'"
    :aria-invalid="!!props.isInError"
    :aria-required="!!props.required"
    :disabled="props.disabled"
    :required="props.required"
  >
</template>

<style lang="scss" scoped>
input {
  @apply block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:outline-indigo-600 sm:text-sm/6;

  &.is-in-error {
    @apply text-red-900 border-red-500 outline-red-300 placeholder:text-red-300 focus:outline-1 focus:outline-red-600;
  }

  &:disabled {
    @apply bg-gray-100 text-gray-500 cursor-not-allowed;
  }
}
</style>
