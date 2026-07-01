import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams < {id: string}>();
  return (
    <View>
          <Text>SubscriptionDetails</Text>
          <Link href="/" className='p-4 text-red bg-blue'>Home</Link>
          <Text>{id} subs</Text>
    </View>
  )
}

export default SubscriptionDetails;