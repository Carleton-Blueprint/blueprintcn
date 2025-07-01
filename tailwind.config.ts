import type { Config } from 'tailwindcss';

const config = {
  theme: {
    extend: {
      colors: {
        blueprint: {
          50: '#E7F2FE',
          100: '#aed9ff',
          200: '#7dbdff',
          300: '#4aa3ff',
          400: '#1a89ff',
          500: '#006fdc',
          600: '#0056b4',
          700: '#003e82',
          800: '#002551',
          900: '#000d21',
          DEFAULT: '#006fdc',
        },
      },
    },
  },
} satisfies Config;
export default config as Config;
