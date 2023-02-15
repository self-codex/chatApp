import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      const unSubscription = await auth().onAuthStateChanged(user => {
        const isActive = user !== null ? 'Home' : 'Login';
        navigation.dispatch(StackActions.replace(isActive));
      });
      unSubscription();
    }, 2000);
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.text}>Splash</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28B463',
  },
  text: {
    fontSize: 35,
    color: '#D5D8DC',
  },
});

export default Splash;
