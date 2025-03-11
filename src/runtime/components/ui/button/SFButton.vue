<script lang="tsx" setup>
import { computed } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset' | 'link' | undefined
  readonly?: boolean
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | undefined
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>()

const classes = computed(() => {
  return [
    'btn',
    props.color || 'primary',
    props.size || 'md',
    props.type || 'button',
  ]
})

const buttonType = computed(() => {
  return props.type === 'link' ? 'button' : props.type
})
</script>

<template>
  <div>
    <button
      :type="buttonType"
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
    @apply bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600;
  }

  &.secondary {
    @apply bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-300 text-gray-900;
  }

  &.danger {
    @apply bg-red-600 hover:bg-red-500 focus-visible:outline-red-600;
  }

  &.warning {
    @apply bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600;
  }

  &.success {
    @apply bg-green-600 hover:bg-green-500 focus-visible:outline-green-600;
  }

  &.info {
    @apply bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600;
  }

  &.link {
    @apply bg-transparent hover:bg-transparent ring-0 text-gray-600 hover:text-indigo-500 focus-visible:outline-indigo-600 shadow-none font-normal;

    &.primary {
      @apply text-indigo-800 hover:text-indigo-700 focus-visible:outline-indigo-600;
    }

    &.secondary {
      @apply text-indigo-800 hover:text-indigo-700 focus-visible:outline-gray-600;
    }

    &.danger {
      @apply text-red-800 hover:text-red-700 focus-visible:outline-red-600;
    }

    &.warning {
      @apply text-yellow-800 hover:text-yellow-700 focus-visible:outline-yellow-600;
    }

    &.success {
      @apply text-green-800 hover:text-green-700 focus-visible:outline-green-600;
    }

    &.info {
      @apply text-blue-800 hover:text-blue-700 focus-visible:outline-blue-600;
    }
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
