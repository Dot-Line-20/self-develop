import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Process from './Process'
import { Text, Button } from 'native-base'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<any, any>
// const Stack = createNativeStackNavigator()

export default function Login({navigation}: Props) {
  return (
    <Process title="로그인" info="some info">
      <Button onPress={() => navigation.goBack()}>go back</Button>
      <Text>hi!!</Text>
    </Process>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="login" component={} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}