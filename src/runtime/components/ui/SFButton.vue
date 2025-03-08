<template>
  <div>
    <button class="btn">
      <slot />
    </button>
  </div>
</template>

<style lang="scss">
.btn {
  @apply block w-full rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white px-3 py-1.5 text-sm/6 font-semibold;
}
</style>
