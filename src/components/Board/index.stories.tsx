import type { Meta, StoryObj } from '@storybook/react';
import Board from 'components/Board';

const meta: Meta<typeof Board> = {
    title: 'Components/Board',
    component: Board,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;

type Story = StoryObj<typeof Board>;

export const Default: Story = {
    args: {
        bgColor: "#F2F2F2"
    }
};
