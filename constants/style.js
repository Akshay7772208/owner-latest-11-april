// profileStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from './theme';

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor:COLORS.backGroundColor,
        // margin: 10,
        marginBottom:60,
        // borderWidth: 1,
        marginTop:50,
      

        
      },

      pageContainer1: {
        flex: 1,
        backgroundColor:COLORS.backGroundColor,
        // margin: 10,
        // marginBottom:20,
        // borderWidth: 1,
        // marginTop:50
        marginBottom:60,
        
      },


      container: {
        flex: 1,
        padding: 10,
        width: '100%',
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 13,
        overflow: 'hidden',
        marginTop: 17,
        marginBottom: 17,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
      },
      scrollContainer: {
        flexGrow: 1,
        //justifyContent: 'space-between',
        // paddingBottom: 70, // Adjust this value to set the margin at the bottom
      },
    
      labelContainer:{
        height:80,
        backgroundColor:COLORS.backGroundColor,
        marginTop:50
       },
       container1: {
        flex: 1,
      
        width: '100%',
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 13,
        overflow: 'hidden',
        marginTop: 13,
        // marginBottom: 13,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
        fontFamily:'ROBOTO',
        fontWeight:'bold'
      },
      
    
});
