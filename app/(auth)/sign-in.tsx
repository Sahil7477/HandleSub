import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up" className="mt-4 px-4 py-2 bg-success text-white rounded">
        Create an account
      </Link>

      
    </View>
  )
}

export default SignIn