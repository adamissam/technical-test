import { useNavigation } from "@react-navigation/native";
import React,{useCallback} from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { selectPointOfSale } from "../../redux/action";
import Avatar from "../Avatar";
import Hours from "../Hours";
import PointOfStale from "../PointOfSale";

const CardPointOfSale = (props) => {
    const {item}= props
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handlePress=useCallback(()=>{
        dispatch(selectPointOfSale(item))
        navigation.navigate('sale')
    },[item])
 const adress = item?.publicInformation?.address?.city ? item.publicInformation.address.city :''
 const postalCode = item?.publicInformation?.address?.inseeCode ? item.publicInformation.address.inseeCode : ''
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Avatar
        image={
            item?.center?.publicInformation?.mainPicture?.thumbnailS3Id ?item.center.publicInformation.mainPicture.thumbnailS3Id: null
        }
      />
      <View style={styles.secondContainer}>
        <PointOfStale
          title={item?.center?.name}
          adress={adress}
          postalCode={postalCode}
          position={"à 752 mètres"}
        />
        <Hours />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 140,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 10,
    padding:10
  },
  secondContainer: {
      width: '70%',
      flexDirection:'column',
      paddingRight:10
  }
});
export default CardPointOfSale;
