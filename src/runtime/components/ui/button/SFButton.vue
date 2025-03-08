<script lang="tsx" setup>
import { computed } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  readonly?: boolean
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

const classes = computed(() => {
  return [
    'btn',
    props.color || 'primary',
    props.size || 'md',
  ]
})
</script>

<template>
  <div>
    <button
      class="btn"
      :type="type || 'button'"
      :disabled="readonly"
      :class="classes"
    >
      <slot />
    </button>
  </div>
</template>

<style lang="scss">
.btn {
  @apply block w-full rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white px-3 py-1.5 text-sm/6 font-semibold;

  &.primary {
    @apply bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white;
  }

  &.secondary {
    @apply bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-300 text-gray-900;
  }

  &.danger {
    @apply bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white;
  }

  &.warning {
    @apply bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600 text-white;
  }

  &.success {
    @apply bg-green-600 hover:bg-green-500 focus-visible:outline-green-600 text-white;
  }

  &.link {
    @apply text-gray-600 hover:text-indigo-500 focus-visible:outline-indigo-600 shadow-none font-normal;
  }

  &.xs {
    @apply px-2 py-1 text-xs;
  }

  &.sm {
    @apply px-2 py-1 text-sm;
  }

  &.md {
    @apply px-2.5 py-1.5 text-sm;
  }

  &.lg {
    @apply px-3 py-2 text-sm;
  }

  &.xl {
    @apply px-3.5 py-2.5 text-sm;
  }

  &:disabled {
    @apply bg-gray-300 text-gray-500 cursor-not-allowed;
  }
}
</style>
