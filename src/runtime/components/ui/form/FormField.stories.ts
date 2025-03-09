import type { StoryObj } from '@storybook/vue3'
import SFFormField from './SFFormField.vue'
import SFInputField from './SFInputField.vue'
import SFFormError from './SFFormError.vue'

type StoryArgs = {
  modelValue: string
  id: string
  isInError: boolean
  placeholder: string
  errorMessages?: string[]
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
    <template #default="{ id, isInError }">
      <SFInputField v-bind="{ id, isInError }"  />
    </template>
    <template #error>
        <SFFormError v-for="error in args.errorMessages" :key="error">
            {{ error }}
        </SFFormError>
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
  },
  render: (args: StoryArgs) => ({
    components: { SFFormField, SFInputField, SFFormError },
    setup() {
      return { args }
    },
    template: `
      <SFFormField v-bind="args">
        <template #label>
            Label
        </template>
        <template #default="props">
          <SFInputField v-model="args.modelValue" :placeholder="args.placeholder" v-bind="props"  />
        </template>
        <template #error>
            <SFFormError v-for="error in args.errorMessages" :key="error">
                {{ error }}
            </SFFormError>
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
    id: 'input',
    placeholder: 'Placeholder',
    isInError: false,
    errorMessages: [],
  },
}

export const InError: Story = {
  args: {
    ...Default.args,
    isInError: true,
    errorMessages: ['Error message'],
  },
}
