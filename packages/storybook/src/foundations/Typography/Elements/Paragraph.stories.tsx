import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { ParagraphStory } from './Elements';

const meta = {
  title: 'Foundations/Typography/Elements',
  id: 'typography-paragraph',
  tags: ['!autodocs'],
  component: ParagraphStory,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Paragraph text',
      defaultValue: '',
    },
    lead: {
      name: 'Lead paragraph',
      description: 'classify the paragraph as a lead paragraph',
      defaultValue: false,
      control: 'boolean',
      table: {
        type: {
          summary: ['boolean'],
        },
      },
    },
    small: {
      name: 'Small paragraph',
      description: 'small text paragraph',
      defaultValue: false,
      control: 'boolean',
      table: {
        type: {
          summary: ['boolean'],
        },
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis vulputate leo et rutrum. Morbi ultrices lectus nec facilisis varius. Donec non iaculis quam. Duis imperdiet odio eget nisl tincidunt dignissim. Nunc varius sapien quis nisl tincidunt viverra. Maecenas nec nisi ullamcorper, commodo tortor et, commodo neque. Aliquam at libero ante. Suspendisse vestibulum egestas finibus. Cras sagittis maximus nisl, quis pharetra elit dignissim sit amet. Aliquam ac vulputate orci. Aenean cursus odio id libero convallis iaculis. Sed dolor urna, consectetur vel sagittis ut, luctus a orci. Integer eleifend nulla sit amet arcu cursus, ut iaculis ipsum finibus.',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      source: {
        transform: (src: string, storyContext: StoryContext<any>): string => {
          // Ensure valid HTML in the Preview source
          const render =
            typeof storyContext.component === 'function'
              ? storyContext.component
              : typeof storyContext.component?.render === 'function'
                ? storyContext.component?.render
                : null;

          if (render) {
            return prettier.format(ReactDOMServer.renderToStaticMarkup(render(storyContext.args)), {
              parser: 'babel',
              plugins: [prettierBabel],
            });
          }
          return src;
        },
      },
      autodocs: false,
    },
  },
} satisfies Meta<typeof ParagraphStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Paragraph ',
};
