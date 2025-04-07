import { ImageBackground, View } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <View>
      <View className="h-[55%] overflow-hidden rounded-b-3xl">
        <ImageBackground
          source={require('../../assets/images/onboarding-bg.jpg')}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>

      <View className="mt-12 px-8 w-full flex flex-col items-center justify-between">
        <View className={'flex flex-col'}>
          <Text size="4xl" weight={'bold'}>
            Nice to see you 👋
          </Text>
          <Text
            size="lg"
            weight={'normal'}
            className={'text-primary opacity-70'}
          >
            Share your reading journey with your friends
          </Text>
        </View>
        <View className="flex flex-col gap-4 mt-8 w-full">
          <Button variant={'default'} className={'w-full'}>
            <Text
              onPress={() => router.push('/(auth)/signin')}
              size="lg"
              weight={'bold'}
              className={'text-secondary'}
            >
              Sign in
            </Text>
          </Button>
          <View className={'flex flex-row items-center gap-4 w-full'}>
            <View className={'h-[1px] bg-primary opacity-20 flex-1'} />
            <Text
              size="lg"
              weight={'normal'}
              className={'text-primary opacity-50 text-center'}
            >
              or
            </Text>
            <View className={'h-[1px] bg-primary opacity-20 flex-1'} />
          </View>
          <Button
            onPress={() => router.push('/(auth)/signup')}
            variant={'secondary'}
            className={'w-full'}
          >
            <Text size="lg" weight={'bold'} className={'text-primary'}>
              Sign up
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
