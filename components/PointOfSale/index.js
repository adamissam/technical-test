import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { Entypo } from '@expo/vector-icons';

const PointOfStale = ({title, adress, position, postalCode}) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{title}</Text>
      <View style={styles.position}>
      <Text style={styles.address}>{adress}</Text>
      <Text style={styles.postalCode}>{' '+postalCode}</Text>
      </View>
      <View style={styles.position}>
      <Entypo name="location-pin" size={14} color={colors.text} />
      <Text style={styles.textPosition}>{position}</Text>
      </View>
     
    </View>
  );
};

const styles=StyleSheet.create({
    constainer:{
        flex: 1
    },
    title:{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:17,
    },
    textPosition:{
        color:colors.text,
        fontSize:12,
        opacity: 0.7,
        fontFamily:'SpaceMono'
    },
    position:{
      flexDirection:'row',
      alignItems:'center',
      opacity: 0.5
    },
    address:{
      fontFamily:'SpaceMono',
      fontSize:13
    },
    postalCode:{
      fontSize:13
    }
})
export default PointOfStale
