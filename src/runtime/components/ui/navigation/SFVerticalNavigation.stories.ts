import type { StoryObj } from '@storybook/vue3/*'
import SFVerticalNavigation from './SFVerticalNavigation.vue'

type StoryArgs = {
  links: Array<{ label: string, children?: Array<{ label: string, url: string }> }>
  current: string
}

const meta = {
  title: 'UI/Navigation/SFVerticalNavigation',
  component: SFVerticalNavigation,
  parameters: {
    docs: {
      description: {
        component: 'Vertical navigation component',
      },
    },
  },
  argTypes: {
    links: {
      description: 'Navigation links',
      table: {
        type: {
          summary: 'Array<{ name: string, href: string }>',
        },
      },
    },
    current: {
      description: 'Current page',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  render: (args: StoryArgs) => ({
    components: { SFVerticalNavigation },
    setup() {
      return { args }
    },
    template: `
            <SFVerticalNavigation v-bind="args" />
        `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links: [
      {
        label: 'Home', children: [
          { label: 'Sub 1', url: '#1' },
          { label: 'Sub 2', url: '#2' },
        ],
      },
      {
        label: 'About', children: [
          { label: 'Sub 3', url: '#3' },
          { label: 'Sub 4', url: '#4' },
        ],
      },
      { label: 'Contact', children: [] },
    ],
    current: '#1',
  },
}
