import { Slot, Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function AuthLayout() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('token').then((value: string | null) => {
      setToken(value);
    });
  }, []);

  if (token === null) return <Slot />;
  else return <Redirect href="/(tabs)" />;
}
