<script setup lang="ts">
defineProps<{
  id: string
  isInError?: boolean
}>()
</script>

<template>
  <div>
    <label
      :for="id"
      :class="{ 'is-in-error': isInError }"
    >
      <slot name="label" />
    </label>
    <div class="input">
      <slot
        :id="id"
        :is-in-error="isInError"
      />
    </div>
    <div class="errors">
      <slot name="error" />
    </div>
  </div>
</template>

<style lang="scss">
label {
  @apply block text-sm/6 font-medium text-gray-900;

  &.is-in-error {
    @apply text-sm/6 text-red-600;
  }
}

.input {
  @apply mt-2;
}

.errors {
  @apply mt-2 min-h-7;
}
</style>
