import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Avatar from "../components/Avatar";
import Hours from "../components/Hours";
import PointOfStale from "../components/PointOfSale";
import { colors } from "../styles/colors";
import { useSelector } from "react-redux";
import Schedules from '../components/scheldules/index'
const PointOfSaleInformation = () => {
  const { pointOfSaleSelected } = useSelector((state) => state);
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
let day = weekday[date.getDay()];
const WeeksOpening =pointOfSaleSelected.center.publicInformation.officeInformation.openingSchedules
const toDayOpenning = WeeksOpening[day.toUpperCase()]
console.log("toDayOpenning => ", toDayOpenning)
  if (
    pointOfSaleSelected.center == undefined ||
    pointOfSaleSelected.center == null
  ) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          image={
            pointOfSaleSelected?.center?.publicInformation?.mainPicture
              ?.thumbnailS3Id
              ? pointOfSaleSelected.center.publicInformation.mainPicture
                  .thumbnailS3Id
              : null
          }
        />
        <View style={styles.secondHeaderContainer}>
          <PointOfStale
            title={pointOfSaleSelected.center.name}
            adress={
              pointOfSaleSelected.center.publicInformation.address.city +
              " " +
              pointOfSaleSelected.center.publicInformation.address.locality
                .postCode
            }
            position={"à 3 mètre"}
          />
          <Schedules morning={toDayOpenning.schedules[0]} afternoon={ toDayOpenning.schedules[1]} />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Disponibité :</Text>
        <View style={styles.hoursContainer}>
          <Hours />
          <Hours />
          <Hours />
          <Hours />
        </View>
        <View>
          <Text style={styles.title}>Addresse :</Text>
          <Text>
            {pointOfSaleSelected?.publicInformation?.address?.fullAddress
              ? pointOfSaleSelected.publicInformation.address.fullAddress
              : "Aucune addresse"}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  headerContainer: { flexDirection: "row" },
  secondHeaderContainer: {
    width: "70%",
    // alignItems: "flex-end",
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  hoursContainer: {
    width: "80%",
    height: 150,
    paddingVertical: 5,
    alignSelf: "center",
    justifyContent: "space-around",
  },
});
export default PointOfSaleInformation;
