import React from 'react'
import { View, Text } from 'react-native'

import styles from './company.style'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../constants'

const Company = () => {
  const router = useRouter();

  return (
    <SafeAreaView
    style={{flex: 1, backgroundColor: COLORS.lightWhite}}
    >
      <Stack.Screen 
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite}
        }}
      />
    </SafeAreaView>
  )
}

export default Company