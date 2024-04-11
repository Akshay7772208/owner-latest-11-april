import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation'

const HotelStaff = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hotel Staff</Text>
   
      
 

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular', // Change this to the desired Roboto style
fontSize:20
  },
 
});

export default HotelStaff