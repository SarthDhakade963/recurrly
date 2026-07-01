import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
      <View>
          <Link href="/">Home</Link>
          <Text>Sign Up</Text>
          <Link href="/(auth)/sign-in">Login</Link>
    </View>
  )
}

export default SignUp