import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

//1. 로그인 완료 했을 때
export type LoggedInParamList = {
  Orders: undefined; //주문화면
  Settings: undefined; // 로그아웃, 정산 등 화면
  Delivery: undefined; // 배달 : 지도 화면
  // 완료 (사진 업로드)
  Complete: {orderId: string}; // 문자열인 orderId 파라미터(변수)를 주문화면에서 넘겨줄 거임
};

//2. 로그인 안했을 때 로 나눔
export type RootStackParamList = {
  SignIn: undefined; // 로그인 화면
  SignUp: undefined; // 회원가입 화면
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? ( //조건문, 로그인 되어있으면 
        <Tab.Navigator>
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{title: '오더 목록'}}
          />
          <Tab.Screen
            name="Delivery" // 안에 complete 있음
            component={Delivery}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
        // 로그인 안되어있으면
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;