<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, ref, onMounted } from 'vue'

const props = defineProps<{
  id: string
  name: string
  labelHidden?: boolean
  required?: boolean
  rules?: unknown | null
  initialValue?: string
  validateOnMount?: boolean
}>()

const { value, errorMessage, handleBlur, handleChange, validate, setTouched } = useField(
  () => props.name,
  props.rules || undefined,
  {
    initialValue: props.initialValue || '',
    validateOnMount: props.validateOnMount || false,
  },
)

const hasError = computed(() => {
  return !!errorMessage.value
})

const formSubmitted = ref(false)

const forceValidateOnSubmit = () => {
  let parent = document.getElementById(props.id)?.parentElement
  while (parent && parent.tagName !== 'FORM') {
    parent = parent.parentElement
  }

  if (parent) {
    parent.addEventListener('submit', async () => {
      formSubmitted.value = true
      await validate()
      setTouched(true)
    })
  }
}

onMounted(forceValidateOnSubmit)

const fieldProps = computed(() => ({
  'id': props.id,
  'name': props.name,
  'modelValue': value.value,
  'onUpdate:modelValue': (val: string) => {
    value.value = val
    handleChange(val)
  },
  'onBlur': (event: unknown) => {
    handleBlur(event)
    validate()
    setTouched(true)
  },
  'isInError': hasError.value,
  'required': props.required,
}))
</script>

<template>
  <div>
    <label
      :for="id"
      :class="{ 'is-in-error': hasError, 'ssrOnly': labelHidden }"
    >
      <slot name="label" />
      <span
        v-if="required"
        aria-hidden="true"
      >*</span>
    </label>
    <div class="input">
      <slot v-bind="fieldProps" />
    </div>

    <!-- Conteneur unique pour hint et erreurs avec hauteur fixe -->
    <div class="message-container">
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="!hasError && $slots.hint"
          key="hint"
          class="hint"
        >
          <p>
            <slot name="hint" />
          </p>
        </div>
        <div
          v-else-if="hasError"
          key="error"
          class="errors"
        >
          <p class="error-message">
            {{ errorMessage }}
          </p>
        </div>
        <div
          v-else
          key="empty"
          class="empty-space"
        />
      </transition>
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

.input {
  @apply mt-2;
}

// Nouveau conteneur avec hauteur fixe
.message-container {
  @apply mt-2 min-h-[1.75rem]; // Hauteur fixe pour éviter les sauts

  .hint p {
    @apply text-sm text-gray-500;
  }

  .errors p {
    @apply text-sm text-red-600;
  }

  .empty-space {
    @apply h-5; // Hauteur minimale pour éviter les sauts
  }
}

// Animation pour une transition fluide
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-150;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.ssrOnly {
  @apply sr-only;
}
</style>
