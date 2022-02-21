import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './navigation/Router';
import store from "./redux/store";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
const App = () =>{ 
    let [fontsLoaded] = useFonts({
        'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return <ActivityIndicator animating={true} />;
      }
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar />
                <Router />
            </SafeAreaProvider>
        </Provider>
    )}

export default App;
