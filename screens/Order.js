import { View, Text } from 'react-native'
import React from 'react'
import TitleBar from '../components/TitleBar'
import ExtraScreen from './ExtraScreen'

const Order = () => {
  return (
    <>
    <TitleBar title="Order"/>
    <View>
      <Text>Order</Text>
    </View>
    <ExtraScreen/>
    </>
  )
}

export default Order