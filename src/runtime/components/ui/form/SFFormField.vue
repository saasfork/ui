<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, watch, ref, onMounted } from 'vue'

const props = defineProps<{
  id: string
  name: string
  labelHidden?: boolean
  required?: boolean
  rules?: unknown | null
  initialValue?: string
  validateOnMount?: boolean
}>()

const { value, errorMessage, handleBlur, handleChange, meta, validate, setTouched } = useField(
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
  'onBlur': (event) => {
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
    <div
      v-if="!hasError && $slots.hint"
      class="hint"
    >
      <p>
        <slot name="hint" />
      </p>
    </div>
    <div
      v-if="hasError"
      class="errors"
    >
      <p

        class="error-message"
      >
        {{ errorMessage }}
      </p>
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
    @apply mt-2 text-sm text-gray-500;
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
