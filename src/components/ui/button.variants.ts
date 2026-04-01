import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[4px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-tx-heading hover:bg-[#f0bf33]',
        secondary: 'border border-white/80 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#111]',
        danger: 'bg-error text-tx-body',
        ghost: 'bg-transparent text-tx-primary hover:bg-white/6',
        outline: 'border border-white/80 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#111]',
        link: 'bg-transparent text-tx-primary',
      },

      size: {
        sm: 'px-3 h-9 py-1.5 text-sm gap-1.5',
        md: 'px-4 h-10 py-2 text-base gap-2',
        lg: 'px-[26px] h-12  py-4 text-lg gap-2.5',
        xl: 'px-8 h-14 py-4 text-xl gap-3',
        icon: 'size-12',
        'icon-sm': 'size-9',
      },
    },

    compoundVariants: [
      {
        variant: 'primary',
        size: 'lg',
        class: '',
      },
    ],

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
