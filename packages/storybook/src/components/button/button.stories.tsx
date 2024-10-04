/* @license CC0-1.0 */
import type { Meta, StoryObj } from '@storybook/react';
import { argTypes, Button, defaultArgs } from './story-template';
import '@utrecht/components/button/css/index.scss';

const meta = {
  title: 'Components/Button',
  id: 'button',
  component: Button,
  argTypes: argTypes,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: 'Button', appearance: 'Default' },
};

export const Primary: Story = {
  args: { content: 'Primaire button', appearance: 'Primary' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Secondary: Story = {
  args: { content: 'Secundaire button', appearance: 'Secondary' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Subtle: Story = {
  args: { content: 'Aanvullende button', appearance: 'Subtle' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};
