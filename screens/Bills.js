import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Bills = () => {
  return (
    <View>
      <Text style={styles.text}>Bill</Text>
    </View>
  )
}
const styles = StyleSheet.create({
text:{
  fontFamily:'MadimiOne',
  fontSize:20
}
})

export default Bills