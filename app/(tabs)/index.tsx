import { View } from 'react-native';
import { Text } from '~/components/ui/text';

export default function HomeScreen() {
  return (
    <View>
      <Text
        variant={'primary'}
        size={'lg'}
        weight={'normal'}
        className={'text-primary mt-36'}
      >
        Welcome to the Home Screen!
      </Text>
    </View>
  );
}
