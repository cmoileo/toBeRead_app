const { hairlineWidth } = require('nativewind/theme');
const { Colors } = require('./constants/Colors');

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: Colors.light.border,
        input: Colors.light.border,
        ring: Colors.light.border,
        background: Colors.light.background,
        foreground: Colors.light.text,
        primary: Colors.light.primary,
        secondary: Colors.light.secondary,
        destructive: Colors.light.destructive,
        muted: Colors.light.muted,
        accent: Colors.light.accent,
        popover: Colors.light.card,
        card: Colors.light.card,
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
