import type { Meta, StoryObj } from '@storybook/react';
import { Title } from 'components/Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    label: 'Title',
    size: 'text-h1',
    weight: 'font-extrabold',
    color: "#000000",
  }
};
