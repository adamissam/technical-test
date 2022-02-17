import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import Page from "../screens/Page";
import { colors } from "../styles/colors";
import PointOfSaleInformation from "../screens/PointOfSaleInformation";

const Router = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Maiia"
    screenOptions={{
      tabBarActiveTintColor: colors.secondary,
    }}
  >
    <BottomTab.Screen
      name="Maiia"
      component={Home}
      options={() => ({
        title: "Test technique Maiia",
        tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "#fff",
      })}
    />
    <BottomTab.Screen
      name="Code !"
      component={PageNavigation}
      options={{
        title: "Code !",
        tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
      }}
    />
  </BottomTab.Navigator>
);

const PageNavigation=()=>{
  return(
    <Stack.Navigator initialRouteName="page">
      <Stack.Screen
        name="page"
        component={Page}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sale"
        component={PointOfSaleInformation}
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack.Navigator>
  )
}
const TabBarIcon = (props) => {
  return <FontAwesome size={25} {...props} />;
};

export default Router;
