import { View, Text } from 'react-native'
import React from 'react'
import BottomBar from '../components/BottomBar'
import TitleBar from '../components/TitleBar'

const Menu = () => {
  return (
    <>
    <TitleBar title="Menu"/>
    <View style={{height:'90%'}}>
      <Text>Menu</Text>
    </View>

    <BottomBar/>
    </>
  )
}

export default Menu