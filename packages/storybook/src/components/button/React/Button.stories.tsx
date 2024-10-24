/* @license CC0-1.0 */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react';
import { argTypes } from './../story-template';
import '@utrecht/components/button/css/index.scss';

const meta = {
  title: 'Components/Button/React Implementation',
  id: 'button',
  component: Button,
  argTypes: argTypes,
  args: {},
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Button' },
};

export const Primary: Story = {
  args: { children: 'Primaire button', appearance: 'primary-action-button' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Secondary: Story = {
  args: { children: 'Secundaire button', appearance: 'secondary-action-button' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Subtle: Story = {
  args: { children: 'Aanvullende button', appearance: 'subtle-button' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};
