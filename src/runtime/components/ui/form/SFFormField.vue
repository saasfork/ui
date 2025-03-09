<script setup lang="ts">
import { computed, useSlots } from 'vue'

defineProps<{
  id: string
}>()

const slots = useSlots()

const hasErrorContent = computed(() => {
  const errorSlot = slots.error?.()

  if (!errorSlot || errorSlot.length === 0) {
    return false
  }

  // Vérifie si au moins un nœud du slot a des enfants
  return errorSlot.some((node) => {
    // Vérifie s'il y a des enfants textuels
    const textContent = node.children !== undefined && node.children !== null
      ? typeof node.children === 'string'
        ? node.children.trim() !== ''
        : Array.isArray(node.children) ? node.children.length > 0 : false
      : false

    return textContent
  })
})
</script>

<template>
  <div>
    <label
      :for="id"
      :class="{ 'is-in-error': hasErrorContent }"
    >
      <slot name="label" />
    </label>
    <div class="input">
      <slot
        :id="id"
        :is-in-error="hasErrorContent"
      />
    </div>
    <div
      v-if="!hasErrorContent"
      class="hint"
    >
      <p>
        <slot name="hint" />
      </p>
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

.hint {
  p {
    @apply mt-1 text-sm text-gray-500;
  }
}

.input {
  @apply mt-2;
}

.errors {
  @apply mt-2 min-h-7;
}
</style>
