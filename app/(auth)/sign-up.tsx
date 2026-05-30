import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>signUp</Text>
      <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 bg-success text-white rounded">
        Already have an account? Sign in
      </Link>
    </View>
  )
}

export default SignUp