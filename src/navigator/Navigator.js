import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import {StatusBar, View, Text} from 'react-native';
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#28B463" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={({route}) => ({
              title:
                route.params.item.name,
                // <View>
                //   <Text>{route.params.item.name}</Text>
                //   <Text>{route.params.item.status.toDate().toString()}</Text>
                // </View>
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
