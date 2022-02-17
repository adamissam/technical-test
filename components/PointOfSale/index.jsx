import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../styles/colors";
const PointOfStale = ({title, adress, position}) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{title}</Text>
      <Text>{adress}</Text>
      <Text style={styles.position}>{position}</Text>
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
    position:{
        color:colors.text,
        fontSize:12,
        opacity: 0.5
    }
})
export default PointOfStale
