import type { StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import * as yup from 'yup'
import { Form } from 'vee-validate'
import SFButton from '../button/SFButton.vue'
import SFFormField from './SFFormField.vue'
import SFInputField from './SFInputField.vue'

type StoryArgs = {
  modelValue: string
  id: string
  name: string
  required: boolean
  placeholder: string
  labelHidden?: boolean
  hint?: string
  rules?: any
  validateOnMount?: boolean
}

const meta = {
  title: 'UI/Form/SFFormField',
  component: SFFormField,
  parameters: {
    docs: {
      description: {
        component: 'Form field component with integrated validation',
      },
      source: {
        code: `
          <SFFormField
            id="email"
            name="email"
            :rules="emailRules"
            required
          >
            <template #label>
              Email
            </template>
            <template #default="{ id, isInError, onBlur, modelValue, 'onUpdate:modelValue': updateModel }">
              <SFInputField
                :id="id"
                name="email"
                placeholder="exemple@email.com"
                :is-in-error="isInError"
                autocomplete="email"
                :model-value="modelValue"
                @update:model-value="updateModel"
                @blur="onBlur"
              />
            </template>
            <template #hint>
              Nous ne partagerons jamais votre email.
            </template>
          </SFFormField>
        `.trim(),
      },
    },
  },
  argTypes: {
    id: {
      description: 'Field ID',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description: 'Field name',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hint: {
      description: 'Field hint text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    rules: {
      description: 'Validation rules (yup or custom function)',
      table: {
        type: {
          summary: 'yup.Schema | Function',
        },
      },
    },
    labelHidden: {
      description: 'Hide label',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    validateOnMount: {
      description: 'Validate on component mount',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
  },
  render: (args: StoryArgs) => ({
    components: { SFFormField, SFInputField, SFButton },
    setup() {
      const submittedValue = ref('')
      const handleSubmit = (values: unknown) => {
        submittedValue.value = JSON.stringify(values, null, 2)
      }

      return { args, submittedValue, handleSubmit }
    },
    template: `
        <SFFormField 
          :id="args.id"
          :name="args.name"
          :required="args.required"
          :rules="args.rules"
          :label-hidden="args.labelHidden"
          :validate-on-mount="args.validateOnMount"
        >
          <template #label>
              {{ args.name.charAt(0).toUpperCase() + args.name.slice(1) }}
          </template>
          <template #default="props">
            <SFInputField 
              :placeholder="args.placeholder" 
              v-bind="props"
              :required="false"
            />
          </template>
          <template #hint v-if="args.hint">
              {{ args.hint }}
          </template>
        </SFFormField>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    id: 'input',
    name: 'input',
    required: true,
    placeholder: 'Placeholder',
    hint: '',
  },
}

export const WithHint: Story = {
  args: {
    ...Default.args,
    id: 'email',
    name: 'email',
    required: false,
    hint: 'This is a helpful hint about the field',
    placeholder: 'example@email.com',
  },
}

export const WithValidation: Story = {
  args: {
    ...Default.args,
    id: 'email',
    name: 'email',
    required: true,
    rules: yup.string()
      .required('Email is required')
      .email('Please enter a valid email address'),
    placeholder: 'example@email.com',
    hint: 'Enter a valid email address',
  },
}

export const WithValidationOnMount: Story = {
  args: {
    ...WithValidation.args,
    validateOnMount: true,
  },
}

export const Password: Story = {
  args: {
    id: 'password',
    name: 'password',
    required: true,
    rules: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    placeholder: '••••••••',
    hint: 'Must be at least 8 characters',
  },
}

export const WithHiddenLabel: Story = {
  args: {
    ...Default.args,
    labelHidden: true,
  },
}
