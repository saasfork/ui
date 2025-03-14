<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  links?: {
    name: string
    url: string
  }[]
  current?: string
  logoTitle?: string
}>()

const open = ref(false)

const activeLinks = computed(() =>
  props.links?.map(link => ({
    ...link,
    isActive: link.url === props.current,
  })) || [],
)

const toggleMenu = () => {
  open.value = !open.value
}
</script>

<template>
  <nav>
    <div class="main">
      <div
        v-if="props.links && props.links.length > 0"
        class="mobile"
      >
        <button
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <span class="sronly">{{ open ? 'Close' : 'Open' }} main menu</span>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="desktop">
        <div class="menus">
          <!-- Logo -->
          <div
            v-if="$slots.logo || props.logoTitle"
            class="logo"
          >
            <slot name="logo">
              {{ props.logoTitle }}
            </slot>
          </div>

          <!-- Desktop links -->
          <div
            v-if="props.links"
            class="links"
          >
            <NuxtLink
              v-for="link in activeLinks"
              :key="link.url"
              :to="link.url"
              :class="{ selected: link.isActive }"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop actions -->
        <div class="actions">
          <slot name="actions" />
        </div>
      </div>

      <!-- Mobile menu (outside desktop div) -->
      <transition name="fade">
        <div
          v-show="open"
          id="mobile-menu"
          class="sm:hidden"
        >
          <div>
            <NuxtLink
              v-for="link in activeLinks"
              :key="link.url"
              :to="link.url"
              :class="{ selected: link.isActive }"
              @click="toggleMenu"
            >
              {{ link.name }}
            </NuxtLink>

            <div class="actions">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style lang="scss">
.sronly {
  @apply sr-only;
}

nav {
  @apply bg-white shadow-sm;

  .main {
    @apply relative flex h-16 justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8;

    .mobile {
      @apply absolute inset-y-0 left-0 flex items-center sm:hidden;

      svg {
        @apply block size-6 ml-3;
      }
    }

    .desktop {
      @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-start;

      .menus {
        @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-start;

        .logo {
          @apply flex shrink-0 items-center;
        }

        .links {
          @apply hidden sm:ml-6 sm:flex sm:space-x-8 h-16;

          a {
            @apply inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700;

            &.selected {
              @apply border-indigo-500;
            }
          }
        }
      }

      .actions {
        @apply hidden sm:ml-6 sm:flex sm:items-center sm:space-x-2;
      }
    }
  }

  #mobile-menu {
    @apply sm:hidden absolute inset-x-0 top-0 z-10 bg-white shadow-sm mt-14;

    div {
      @apply space-y-1 pt-2 pb-4;

      a {
        @apply block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium;

        &.selected {
          @apply bg-indigo-50 border-indigo-500 text-indigo-700;
        }
      }

      .actions {
        @apply ml-4;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-200 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 transform -translate-y-2;
}
</style>
