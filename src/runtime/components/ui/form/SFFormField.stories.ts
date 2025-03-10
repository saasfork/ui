import type { StoryObj } from '@storybook/vue3'
import SFFormField from './SFFormField.vue'
import SFInputField from './SFInputField.vue'

type StoryArgs = {
  modelValue: string
  id: string
  required: boolean
  placeholder: string
  labelHidden?: boolean
  hint?: string
}

const meta = {
  title: 'UI/Form/SFFormField',
  component: SFFormField,
  parameters: {
    docs: {
      description: {
        component: 'Form field component',
      },
      source: {
        code: `
          <SFFormField>
            <template #label>
              Label
              </template>
              <template #default="{ id }">
                <SFInputField v-bind="{ id }"  />
              </template>
              <template #hint>
                  hint text
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
    hint: {
      description: 'Field hint text',
      table: {
        type: {
          summary: 'string',
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
  },
  render: (args: StoryArgs) => ({
    components: { SFFormField, SFInputField },
    setup() {
      return { args }
    },
    template: `
        <SFFormField v-bind="args">
          <template #label>
              Label
          </template>
          <template #default="props">
            <SFInputField 
            v-model="args.modelValue" 
            :placeholder="args.placeholder" 
            v-bind="props"  />
          </template>
          <template #hint>
              {{ args.hint }}
          </template>
        </SFFormField>

      <p v-if="args.modelValue">Model value: {{ args.modelValue }}</p>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    required: true,
    id: 'input',
    placeholder: 'Placeholder',
    hint: '',
  },
}

export const WithHint: Story = {
  args: {
    ...Default.args,
    required: false,
    hint: 'Hint text',
  },
}

export const WithHiddenLabel: Story = {
  args: {
    ...Default.args,
    labelHidden: true,
  },
}
