<template>
  <p class="error">
    <slot />
  </p>
</template>

<style lang="scss">
.error {
    @apply mt-2 text-sm text-red-600;
}
</style>
