import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { VStack, Text, HStack } from 'cdmn-ui-rn';

export default function App() {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderColor: 'green',
        borderWidth: 8,
      }}
    >
      <VStack className="border-4 border-red-400">
        <Text className="text-red-400">vertical text</Text>
        <Text>test 1</Text>
      </VStack>
      <HStack>
        <Text className="text-red-400">horizontal text</Text>
        <Text>test 2</Text>
      </HStack>
    </SafeAreaView>
  );
}
