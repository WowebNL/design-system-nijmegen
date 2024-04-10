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
  // tags: ['autodocs'],
  parameters: {
    // docs: {
    //   // description: {
    //   //   component: readme,
    //   // },
    //   page : DocumentationTemplate
    // },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default button',
};
