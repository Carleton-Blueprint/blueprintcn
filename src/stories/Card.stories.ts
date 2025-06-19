import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from '@/components/Card';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Card Title',
    time: 10,
  },
};
