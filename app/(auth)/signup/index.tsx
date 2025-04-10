import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { API_URL } from '@/constants/apiUrl';

const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email' }),
    username: z.string().min(3, { message: 'At least 3 characters' }),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message:
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [isUserNameAvailable, setIsUserNameAvailable] = useState(true);

  const verifyUserNameAvailability = async (username: string) => {
    try {
      const response = await fetch(
        API_URL + `/is-username-available/${username}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
    } catch (error) {
      console.error('Error verifying username availability:', error);
    }
  };

  return (
    <View className="flex flex-col h-full gap-8 items-center justify-center w-9/12 mx-auto space-y-4">
      <View className={'flex-col flex gap-4 w-full'}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoComplete={'email'}
                onChangeText={onChange}
                value={value}
                className="w-full"
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                placeholder="Username"
                onChangeText={(userName: string) => {
                  onChange();
                  verifyUserNameAvailability(userName);
                }}
                value={value}
                className="w-full"
              />
              {errors.username && (
                <Text className="text-red-500">{errors.username.message}</Text>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={onChange}
                textContentType="oneTimeCode"
                value={value}
                className="w-full"
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                placeholder="Confirm Password"
                textContentType="oneTimeCode"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
                className="w-full"
              />
              {errors.confirmPassword && (
                <Text className="text-red-500">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </>
          )}
        />
      </View>
      <Button
        onPress={handleSubmit((data) => {
          console.log('Form data:', data);
        })}
        variant={'secondary'}
        className="w-full"
      >
        <Text className="text-white">Sign up</Text>
      </Button>
    </View>
  );
}
