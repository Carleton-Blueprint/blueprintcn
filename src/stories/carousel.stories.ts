import type { Meta, StoryObj } from '@storybook/react-vite';

import Carousel from '@/components/Carousel';

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "This is a carousel",
    numItems: 3,
  },
};