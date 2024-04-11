import { View, Text } from 'react-native'
import React from 'react'
//import AppNavigation from '../AppNavigation'
import TitleBar from '../components/TitleBar'
import BottomBar from '../components/BottomBar'

const Bills = () => {
  return (
    <>
    <TitleBar title="Manage Bills"/>
    <View>
      
      <Text>Bills</Text>
    </View>
    <BottomBar/>
    </>
  )
}

export default Bills