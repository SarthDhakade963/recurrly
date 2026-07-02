import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams < {id: string}>();
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
          <Text>SubscriptionDetails</Text>
          <Link href="/" className='p-4 text-red bg-blue'>Home</Link>
          <Text>{id} subs</Text>
    </SafeAreaView>
  )
}

export default SubscriptionDetails;