import type { StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SFInputField from './SFInputField.vue'

type StoryArgs = {
  id: string
  name: string
  type?: 'text' | 'email' | 'password' | 'number'
  autoComplete?: 'on' | 'off'
  isInError?: boolean
  placeholder?: string
  disabled?: boolean
  required?: boolean
  modelValue?: string
}

const meta = {
  title: 'UI/Form/SFInputField',
  component: SFInputField,
  parameters: {
    docs: {
      description: {
        component: 'Input field component',
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
    type: {
      description: 'Field type',
      options: ['text', 'email', 'password', 'number'],
      table: {
        type: {
          summary: 'select',
        },
      },
    },
    required: {
      description: 'Field required state',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    autoComplete: {
      description: 'Field autocomplete',
      options: ['on', 'off'],
      table: {
        type: {
          summary: 'select',
        },
      },
    },
    isInError: {
      description: 'Field error state',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    placeholder: {
      description: 'Field placeholder',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      description: 'Field disabled state',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    modelValue: {
      description: 'Field value',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  render: (args: StoryArgs) => ({
    components: { SFInputField },
    setup() {
      const modelValue = ref(args.modelValue || '')

      return { args, modelValue }
    },
    template: `
      <SFInputField
        :id="args.id"
        :name="args.name"
        :type="args.type"
        :auto-complete="args.autoComplete"
        :is-in-error="args.isInError"
        :placeholder="args.placeholder"
        :disabled="args.disabled"
        :required="args.required"
        v-model="modelValue"
      />

      <p style="margin-top: 10px; margin-left: 5px;">Model value: {{ modelValue }}</p>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'input',
    name: 'input',
    type: 'text',
    placeholder: 'Placeholder',
    autoComplete: 'off',
    isInError: false,
    required: false,
    disabled: false,
    modelValue: '',
  },
}

export const Email: Story = {
  args: {
    ...Default.args,
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'example@email.com',
  },
}

export const Password: Story = {
  args: {
    ...Default.args,
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'new-password',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    isInError: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
}
