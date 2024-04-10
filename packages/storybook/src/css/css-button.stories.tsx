/* @license CC0-1.0 */

import readme from '@gemeentenijmegen/components-css/button/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import '@utrecht/components/button/css/index.scss';

const Button = ({ children }: PropsWithChildren<{}>) => (
  <button className="utrecht-button" type="button">
    {children}
  </button>
);

const meta = {
  title: 'Components/Button',
  id: 'css-button',
  component: Button,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Voorbeeld button',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Example button',
};
