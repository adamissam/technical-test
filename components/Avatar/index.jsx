import React from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import { colors } from "../../styles/colors";
const address = 'https://www.maiia.com/files/'
const defaultImage = require('../../assets/images/client_default_avatar.png')
const Avatar = ({image}) => {
  return (
    <View style={styles.container} >
      <Image source={ image?{ uri: address + image }:defaultImage} resizeMode="cover" style={styles.image} />
      <View>
      <Text style={styles.date}>Lun.</Text>
      <Text style={styles.time}>13/09</Text>
      </View>
    </View>
  );
};
export default Avatar;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  date:{
      color:colors.primary,
      fontSize:13,
      fontWeight:'bold'
  },
  time:{
      color: colors.text,
      fontSize:11,
        opacity: 0.5,
  }
});
