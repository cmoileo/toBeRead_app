import { useFonts } from 'expo-font';
import {
  Theme,
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '~/global.css';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

SplashScreen.preventAutoHideAsync();

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-require-imports
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      setIsColorSchemeLoaded(true);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!isColorSchemeLoaded || !loaded) {
    return null;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
