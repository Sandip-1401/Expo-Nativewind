import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signin = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Signin</Text>
      <Link href='/(auth)/Signup'>Create Account</Link>
    </View>
  )
}

export default Signin