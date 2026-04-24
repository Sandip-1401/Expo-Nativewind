import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Signup</Text>
      <Link href='/(auth)/Signin'>Sign In</Link>
    </View>
  )
}

export default Signup