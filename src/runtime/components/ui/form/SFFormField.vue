<script setup lang="ts">
import { useFieldError } from 'vee-validate'
import { computed, useSlots } from 'vue'

defineProps<{
  id: string
  labelHidden?: boolean
  required?: boolean
}>()

const slots = useSlots()

const name = computed(() => {
  const defaultSlot = slots.default?.()
  if (!defaultSlot || defaultSlot.length === 0) return null
  return defaultSlot[0].props?.name || null
})

const hasErrorContent = computed(() => !!useFieldError(name).value)
</script>

<template>
  <div>
    <label
      :for="id"
      :class="{ 'is-in-error': hasErrorContent, 'ssrOnly': labelHidden }"
    >
      <slot name="label" />
      <span
        v-if="required"
        aria-hidden="true"
      >*</span>
    </label>
    <div class="input">
      <slot
        :id="id"
        :is-in-error="hasErrorContent"
        :required="required"
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
      <ErrorMessage
        :name="name"
        as="p"
      />
    </div>
  </div>
</template>

<style lang="scss">
label {
  @apply block text-sm/6 font-medium text-left text-gray-900;

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
  @apply mt-2 min-h-5;

  p {
    @apply mt-2 text-sm text-red-600;
  }
}

.ssrOnly {
  @apply sr-only;
}
</style>
