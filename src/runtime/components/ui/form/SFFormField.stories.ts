import type { StoryObj } from '@storybook/vue3'
import SFFormField from './SFFormField.vue'
import SFInputField from './SFInputField.vue'
import SFFormError from './SFFormError.vue'

type StoryArgs = {
  modelValue: string
  id: string
  placeholder: string
  errorMessages?: string[]
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
    placeholder: {
      description: 'Field placeholder',
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
    id: 'input',
    placeholder: 'Placeholder',
    errorMessages: [],
    hint: '',
  },
}

export const InError: Story = {
  args: {
    ...Default.args,
    errorMessages: ['Error message'],
  },
}

export const WithHint: Story = {
  args: {
    ...Default.args,
    hint: 'Hint text',
  },
}
