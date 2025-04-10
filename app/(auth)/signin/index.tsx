import { Text } from '~/components/ui/text';
import { View } from 'react-native';

export default function SignIn() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        variant={'primary'}
        size={'lg'}
        weight={'normal'}
        className={'text-primary mt-36'}
      >
        Sign In Screen
      </Text>
    </View>
  );
}
