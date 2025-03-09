import type { StoryObj } from '@storybook/vue3/*'
import SFInputField from './SFInputField.vue'

type StoryArgs = {
  id: string
  type?: 'text' | 'email' | 'password' | 'number'
  autoComplete?: 'on' | 'off'
  isInError?: boolean
  placeholder?: string
  disabled?: boolean
  required?: boolean
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
  },
  render: (args: StoryArgs) => ({
    components: { SFInputField },
    setup() {
      return { args }
    },
    template: `
      <SFInputField
        v-bind="args"
        v-model="args.modelValue"
      />

      <p style="margin-top: 10px; margin-left: 5px;">Model value: {{ args.modelValue }}</p>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'input',
    type: 'text',
    placeholder: 'Placeholder',
    autoComplete: 'off',
    isInError: false,
    required: false,
    disabled: false,
    modelValue: '',
  },
}
