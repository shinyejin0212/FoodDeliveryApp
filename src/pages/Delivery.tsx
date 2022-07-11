import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Text, View} from 'react-native'
import Complete from './Complete';
import Ing from './Ing';
const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ing" component={Ing} options={{ headerShown: false }}/>
      {/* 지도 Ing 위에 Complete를 Stack으로 쌓음. 즉 충첩
      다른 네비게이터 안에 또다른 네비게이터가 들어갈 수 있다. */}
      <Stack.Screen
        name = "Complete"
        component={Complete}
        options = {{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


export default Delivery
