import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { HeadingStory } from './Elements';

const meta = {
  title: 'Foundations/Typography/Elements',
  id: 'typography-heading',
  tags: ['!autodocs'],
  component: HeadingStory,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Heading text',
      defaultValue: '',
    },
    level: {
      name: 'Level',
      description: 'Heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
      table: {
        type: {
          summary: ['number'],
        },
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 1,
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
} satisfies Meta<typeof HeadingStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Heading ',
};
