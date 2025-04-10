import { Redirect, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function AuthLayout() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('token').then((value) => setToken(value));
  }, []);

  if (token === null) {
    return (
      <Stack
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signup/index" />
      </Stack>
    );
  }

  return <Redirect href="/(tabs)" />;
}
