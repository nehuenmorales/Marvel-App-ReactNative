import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image, StyleSheet } from 'react-native';
import Home from './components/Home/Home.jsx'
import Detail from './components/DetaiCharacter/DetailCharacter.jsx';

const Stack = createStackNavigator();

export default function App() {
  function LogoTitle() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Image
          style={{ height: 35, width: 90, display: 'flex' }}
          source={require('./assets/marvel/marvel-logo.png')}
        />
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Avengers</Text> */}
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: 'grey',
          },
        }}
      >
        <Stack.Screen style={styles.home} name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  home: {
    backgroundColor: 'blue'
  },
})