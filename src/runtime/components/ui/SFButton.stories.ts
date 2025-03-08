import type { StoryObj } from '@storybook/vue3'
import SFButton from './SFButton.vue'

const meta = {
  title: 'UI/SFButton',
  component: SFButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Le composant SFButton est utilisé pour créer des boutons interactifs au sein du système de design.',
      },
    },
  },
  render: (args: Record<string, unknown>) => ({
    components: { SFButton },
    setup() {
      return { args }
    },
    template: `
      <SFButton>
        Button
      </SFButton>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
