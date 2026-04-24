import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionsDetails = () => {

   const { id } = useLocalSearchParams<{id: string}>();

  return (
    <View className='bg-amber-100 text-black'>
      <Text>Subscriptions Details: {id}</Text>
      <Link href='/'>Go Home</Link>
    </View>
  )
}

export default SubscriptionsDetails