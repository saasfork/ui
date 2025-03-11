import type { StoryObj } from '@storybook/vue3'
import SFButton from './SFButton.vue'

const meta = {
  title: 'UI/SFButton',
  component: SFButton,
  parameters: {
    docs: {
      description: {
        component: 'Le composant SFButton est utilisé pour créer des boutons interactifs au sein du système de design.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button HTML type',
    },
    readonly: {
      control: 'boolean',
      description: 'Button HTML readonly attribute',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'link'],
      description: 'Button color',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
  },
  render: (args: Record<string, unknown>) => ({
    components: { SFButton },
    setup() {
      return { args }
    },
    template: `
      <SFButton
        v-bind="args"
      >
        Button
      </SFButton>
    `,

  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'button',
    readonly: false,
    color: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Success: Story = {
  args: {
    ...Primary.args,
    color: 'success',
  },
}

export const Danger: Story = {
  args: {
    ...Primary.args,
    color: 'danger',
  },
}

export const Warning: Story = {
  args: {
    ...Primary.args,
    color: 'warning',
  },
}

export const LinkPrimary: Story = {
  args: {
    ...Primary.args,
    type: 'link',
  },
}

export const LinkSecondary: Story = {
  args: {
    ...LinkPrimary.args,
    color: 'secondary',
    type: 'link',
  },
}

export const LinkSuccess: Story = {
  args: {
    ...LinkPrimary.args,
    color: 'success',
    type: 'link',
  },
}

export const LinkDanger: Story = {
  args: {
    ...LinkPrimary.args,
    color: 'danger',
    type: 'link',
  },
}

export const LinkWarning: Story = {
  args: {
    ...LinkPrimary.args,
    color: 'warning',
    type: 'link',
  },
}

export const LinkInfo: Story = {
  args: {
    ...LinkPrimary.args,
    color: 'info',
    type: 'link',
  },
}
