import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect,useCallback } from "react";

const Schedules = ({morning, afternoon}) => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();

  const checkIfTimePassed = useCallback((time) => {
    const endTimeHours =new Date().setHours(time?.endTime?.split(":")[0], time?.endTime?.split(":")[1])
    const startTimeHours = new Date().setHours(time?.startTime?.split(":")[0], time?.startTime?.split(":")[1])
    return date.getTime() > startTimeHours && date.getTime() < endTimeHours
      ? true
      : false;
  }, []);

  useEffect(() => {
    let isOpenMorning = false;
    let isOpenForAfterNoon = false;
    if (morning) {
      isOpenMorning = checkIfTimePassed(morning);
    }
    if (afternoon) {
      isOpenForAfterNoon = checkIfTimePassed(afternoon);
    }
    if (isOpenMorning === true || isOpenForAfterNoon === true) {
      setIsOpen(true);
    }
  }, [morning, afternoon]);

  return (
    <View>
      <Text style={isOpen ? styles.isOpen:styles.isClose}>{isOpen ?'OUVERT':'FERMER'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  isOpen: {
    color: "green",
  },
  isClose: {
    color: "red",
  },
});

export default Schedules;
