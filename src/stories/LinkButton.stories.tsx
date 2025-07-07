import type { Meta, StoryObj } from '@storybook/react-vite';

import LinkButton from '@/components/LinkButton';
import { Plus } from 'lucide-react';
import { BiChevronRight } from 'react-icons/bi';

const meta = {
  title: 'LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Click Me',
    href: 'https://cublueprint.org',
    newTab: true,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['blueprint', 'icon', 'ghost'],
      mapping: {
        blueprint: { style: 'blueprint' },
        icon: { style: 'icon' },
        ghost: { style: 'ghost' },
      },
      description: 'Button style variant',
      table: {
        type: { summary: 'blueprint | icon | ghost' },
        defaultValue: { summary: 'blueprint' },
      },
    },
    children: {
      control: {
        type: 'select',
      },
      options: [
        'Click Me',
        'Learn More',
        'Visit Site',
        'Plus',
        'Chevron Right',
      ],
      mapping: {
        'Click Me': 'Click Me',
        'Learn More': 'Learn More',
        'Visit Site': 'Visit Site',
        Plus: <Plus className="size-10 inline" />,
        'Chevron Right': <BiChevronRight className="size-10 inline" />,
      },
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: { style: 'ghost' },
  },
};

export const Blueprint: Story = {
  args: {
    variant: { style: 'blueprint' },
  },
};

export const Icon: Story = {
  args: {
    variant: { style: 'icon' },
    children: "Plus",
  },
};
