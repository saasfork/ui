<script setup lang="ts">
defineProps<{
  links: {
    label: string
    children?: Array<{
      label: string
      url: string
    }>
  }[]
  current: string
}>()
</script>

<template>
  <ul role="list">
    <li
      v-for="(link, index) in links"
      :key="index"
    >
      <h3>
        {{ link.label }}
      </h3>
      <ul v-if="link.children">
        <li
          v-for="child in link.children"
          :key="child.url"
        >
          <NuxtLink
            :to="child.url"
            :class="{ current: child.url === current }"
          >
            {{ child.label }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
ul {
    @apply flex flex-col gap-8;

    li {
        @apply flex flex-col gap-3;

        h3 {
            @apply text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6;
        }

        ul {
            @apply flex flex-col gap-2 border-l border-gray-950/10;

            li {
                @apply -ml-px flex flex-col items-start gap-2;

                a {
                    @apply inline-block border-l border-transparent pl-5 text-base/8 text-gray-500 hover:border-gray-950/25 hover:text-gray-950 aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 sm:pl-4 sm:text-sm;
                }
            }
        }
    }
}

.current {
    @apply font-semibold text-gray-950;
}
</style>
