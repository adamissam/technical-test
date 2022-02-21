import React, { useState, useEffect, useCallback, memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CardPointOfSale from "../components/CardPointOfSale";

const URL =
  "https://www.maiia.com/api/pat-public/hcd?limit=20&locality=75001-PARIS&page=0&speciality.shortName=pharmacie";

let page = 0

const Page=()=>{
  const [data, setData]= useState([])
  const [totalLoaded,setTotalLoaded]= useState(0)
  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      setData([...json.items]);
     
    })
    .catch((error) => {
      console.error(error);
    });
  
  }, [])

  useEffect(() => {
    setTotalLoaded(data.length)
  }, [data])

  const requestMoreData=()=>{
    const nextPage = page+1
    fetch(`https://www.maiia.com/api/pat-public/hcd?limit=10&locality=75001-PARIS&page=${nextPage}&speciality.shortName=pharmacie`)
    .then((response) => response.json())
    .then((json) => {
      
      page= nextPage
      setData(prevState=> [...prevState,...json.items]);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  const render=useCallback(
    ({item}) => {
    return  <CardPointOfSale item={item}/>
    },
    [],
  )
  const renderFooter = useCallback(()=>{
    return <View style={styles.itemSeparator}/>
  },[])
  const Separator=useCallback(()=>{
    return <View style={styles.itemSeparator} />
  },[])
  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item, index)=> 'page'+index+item.id} renderItem={render} ItemSeparatorComponent={Separator} onEndReached={requestMoreData}
            onEndReachedThreshold ={0.2} ListFooterComponent={renderFooter}/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingTop:5
  },
  itemSeparator:{
    height:5
  },
})

export default memo(Page);
