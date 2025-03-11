<script setup lang="ts">
import { h } from 'vue'

defineProps<{
  type: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  message: string
  buttonLabel?: string
}>()

const createSvgIcon = (pathD: string) => {
  return h('svg', {
    'viewBox': '0 0 20 20',
    'fill': 'currentColor',
    'aria-hidden': true,
    'data-slot': 'icon',
  }, [
    h('path', {
      'fill-rule': 'evenodd',
      'd': pathD,
      'clip-rule': 'evenodd',
    }),
  ])
}

const iconPaths = {
  info: 'M10 18a8 8 0 100-16 8 8 0 000 16zm0-9a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm0-3a1 1 0 100 2 1 1 0 000-2z',
  success: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
  warning: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
  danger: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
}
</script>

<template>
  <div
    role="alert"
    :class="type"
  >
    <div>
      <div class="icon">
        <component :is="createSvgIcon(iconPaths[type] || iconPaths.info)" />
      </div>
      <div class="body">
        <h3 v-if="title">
          {{ title }}
        </h3>
        <div class="message">
          <p>{{ message }}</p>
        </div>
        <div class="actions">
          <slot name="actions" />
          <!-- <button
            type="button"
            @click="emit('close')"
          >
            {{ buttonLabel || 'Close' }}
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div[role="alert"] {
    @apply fixed top-0 right-0 mt-4 mr-4 max-w-lg w-full rounded-md p-4 z-50;

    >div {
        @apply flex;

        svg {
            @apply size-5;
        }

        .icon {
            @apply shrink-0;
        }

        .body {
            @apply ml-3 flex-1;

            h3 {
                @apply text-sm font-medium;
            }

            .message {
                @apply mt-1 text-sm;
            }

            .actions {
                @apply mt-4 -mx-2 -my-1.5 flex justify-end;

                button {
                    @apply rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2;
                }
            }

        }
    }

    &.info {
        @apply bg-blue-50;

        h3,
        button {
            @apply text-blue-800;
        }

        .message {
            @apply text-blue-700;
        }

        button {
            @apply bg-blue-50 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50;
        }

        svg {
            @apply text-blue-400;
        }
    }

    &.success {
        @apply bg-green-50;

        h3,
        button {
            @apply text-green-800;
        }

        .message {
            @apply text-green-700;
        }

        button {
            @apply bg-green-50 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50;
        }

        svg {
            @apply text-green-400;
        }
    }

    &.warning {
        @apply bg-yellow-50;

        h3,
        button {
            @apply text-yellow-800;
        }

        .message {
            @apply text-yellow-700;
        }

        button {
            @apply bg-yellow-50 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50;
        }

        svg {
            @apply text-yellow-400;
        }
    }

    &.danger {
        @apply bg-red-50;

        h3,
        button {
            @apply text-red-800;
        }

        .message {
            @apply text-red-700;
        }

        button {
            @apply bg-red-50 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50;
        }

        svg {
            @apply text-red-400;
        }
    }
}
</style>
