import { Link } from 'react-aria-components';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { MdDoubleArrow } from 'react-icons/md';

const button = cva('', {
  variants: {
    style: {
      blueprint:
        'bg-blueprint text-white rounded-full px-5 py-2 hover:bg-blueprint-300 transition-colors duration-300 hover:text-white',
      icon: 'rounded-full text-white bg-blueprint hover:bg-blueprint-300 transition-colors duration-300 p-2 hover:text-white',
      ghost: '',
    },
  },
  defaultVariants: {
    style: 'ghost',
  },
});

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
  variant?: VariantProps<typeof button>;
  className?: string; // tailwind classes
} & React.ComponentProps<typeof Link>;

export default function LinkButton({
  children,
  href,
  newTab = false,
  variant,
  className = '',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={newTab ? '_blank' : undefined}
      className={cn(
        'group flex w-fit items-center font-bold text-blueprint transition-colors ease-in-out duration-300 hover:text-blueprint-300',
        button(variant),
        className
      )}
      {...props}
    >
      {children}
      {variant?.style === 'ghost' ? (
        <MdDoubleArrow className="ml-1 transition-spacing ease-in-out duration-300 group-hover:ml-2" />
      ) : null}
    </Link>
  );
}
