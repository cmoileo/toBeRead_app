/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#11181C';
const tintColorDark = '#ECEDEE';

export const Colors = {
  light: {
    text: 'hsl(var(--foreground))',
    background: 'hsl(var(--background))',
    card: 'hsl(var(--card))',
    border: 'hsl(var(--border))',
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    muted: 'hsl(var(--muted))',
    destructive: 'hsl(var(--destructive))',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: 'hsl(var(--foreground))',
    background: 'hsl(var(--background))',
    card: 'hsl(var(--card))',
    border: 'hsl(var(--border))',
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    muted: 'hsl(var(--muted))',
    destructive: 'hsl(var(--destructive))',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
