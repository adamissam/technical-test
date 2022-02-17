import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardPointOfSale from "../components/CardPointOfSale";

const URL =
  "https://www.maiia.com/api/pat-public/hcd?limit=500&locality=75001-PARIS&page=0&speciality.shortName=pharmacie";


const Page=()=>{
  const [data, setData]= useState([])
  const [totalLoaded,setTotalLoaded]= useState(0)
  
  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      setData(prevState=>{return [...json.items]});
     
    })
    .catch((error) => {
      console.error(error);
    });
  
  }, [])

  useEffect(() => {
    setTotalLoaded(data.length)
  }, [data])
  
  const render=useCallback(
    ({item}) => {
    return  <CardPointOfSale item={item}/>
    },
    [],
  )
  
  const Separator=useCallback(()=>{
    return <View style={styles.itemSeparator} />
  },[])

  return (
    <View style={styles.container}>
      <Text>Nombre de résultat :</Text>
      <Text>{totalLoaded}</Text>
      <FlatList data={data} keyExtractor={(item, index)=> 'page'+index+item.id} renderItem={render} ItemSeparatorComponent={Separator}/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  itemSeparator:{
    height:5
  }
})

export default Page;
