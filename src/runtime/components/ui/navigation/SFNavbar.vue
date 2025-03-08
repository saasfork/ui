<script lang="ts" setup>
defineProps<{
  links: {
    name: string
    url: string
  }[]
  current: string
  logoTitle?: string
}>()
</script>

<template>
  <nav>
    <div class="main">
      <div class="desktop">
        <div class="menus">
          <div
            v-if="$slots.logo || logoTitle"
            class="logo"
          >
            <slot name="logo">
              {{ logoTitle }}
            </slot>
          </div>
          <div class="links">
            <a
              v-for="link in links"
              :key="link.url"
              :href="link.url"
              :class="{ selected: current === link.url }"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  @apply bg-white shadow-sm;

  .main {
    @apply relative flex h-16 justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8;

    .desktop {
      @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-start;

      .menus {
        @apply flex-1 flex items-center;

        .logo {
          @apply flex shrink-0 items-center;
        }

        .links {
          @apply hidden sm:ml-6 sm:flex sm:space-x-8;

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
}
</style>
