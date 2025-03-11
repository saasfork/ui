import type { StoryObj } from '@storybook/vue3'
import SFButton from '../button/SFButton.vue'
import SFAlert from './SFAlert.vue'

type StoryArgs = {
  type: 'info' | 'danger' | 'success' | 'warning'
  title: string
  message: string
  buttonLabel: string
}

const meta = {
  title: 'UI/Alert/SFAlert',
  component: SFAlert,
  parameters: {
    docs: {
      description: {
        component: 'Le composant SFAlert est utilisé pour afficher des messages informatifs, d\'erreur, de succès ou d\'avertissement.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'Type d\'alerte',
      options: ['info', 'danger', 'success', 'warning'],
      table: {
        type: {
          summary: 'select',
        },
      },
    },
    title: {
      description: 'Titre de l\'alerte',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    message: {
      description: 'Message de l\'alerte',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    buttonLabel: {
      description: 'Texte du bouton',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  render: (args: StoryArgs) => ({
    components: { SFAlert, SFButton },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 20vh;">
        <SFAlert
          v-bind="args"
        >
          <template #actions>
            <SFButton type="link" :color="args.type">
              {{ args.buttonLabel }}
            </SFButton>
          </template>
        </SFAlert>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'Voici une information importante.',
    buttonLabel: 'Compris',
  },
}
