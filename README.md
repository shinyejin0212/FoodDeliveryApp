# FoodDeliveryApp
[인프런] 배달앱 클론코딩입니다.

[Delivery icons created by dreamicons - Flaticon](https://www.flaticon.com/free-icons/delivery)

- [읽어보면 좋은 벨로퍼트님의 글](https://ridicorp.com/story/react-native-1year-review/)

# 첫 시작 (Setting)

[**공식문서**](https://reactnative.dev/)

## 초기 세팅: [반드시 따라하기](https://reactnative.dev/docs/environment-setup)(공식 문서)

Expo CLI vs React Native CLI

- Expo는 학습용. 따라서 쉬움. but 웬만하면 React Native CLI로 설치할 것
- iOS 개발 시 Mac book 필요..

### **윈도우-안드로이드 환경 설정하기**

1. chocolaty 설치하기
    - powershell에 `choco` 입력 시
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfd6cfde-e3b4-4744-951f-1899391a80b0/Untitled.png)
        
        뜨면 이미 설치되어 있는 것. 
        
        - 안 뜰 경우 [chocolaty 공식 문서](https://chocolatey.org/install) 참고해서 설치하기
2. Node.js, JDK 설치하기
    
    `choco install -y nodejs-lts openjdk11`
    
    - java 17 버전 설치하면 안 됨(**11버전 설치할 것**), 환경 변수 설정도 잘 해 놓을 것(JAVA_HOME)
3. [Android Studio](https://developer.android.com/studio) 설치하기
    
    Android SDK - Android 11.0 (30 version) 이 있어야함
    
    Android SDJ Platorm - Android Enulator + Android SDK Platform-Tools
    
    Android Virtual Device - Intel x86 Emulator Accelerator
    
    - "C:\Users\82108\AppData\Local\Android\Sdk\platform-tools\adb.exe” 가 있어야함
        - 없을시 [adb](https://developer.android.com/studio/releases/platform-tools) 설치 필요
    - ANDROID_HOME 사용자 환경 변수 추가
        - C:\Users\82108\AppData\Local\Android\Sdk
            - `which adb`
            `which javac` 확인
        - Path에 `%ANDROID_HOME%\platform-tools` 와 `%JAVA_HOME\bin` 추가
4. react native 전역 설치
    
    `npm i -g react-native`
    

## 프로젝트 시작하기

- typescript가 적혀진 react-native template로 fooddeliveryapp 생성 및 시작
    
    `npx react-native init FoodDeliveryApp --template react-native-template-typescript`
    
    보통은 강의용으로 자동생성 안 좋아하는데 RN은 자동생성하지 않으면 네이티브단까지 처리하기 어려움
    
    `cd FoodDeliveryApp # 폴더로 이동`
    
- `npm run android # 안드로이드 실행 명령어`
- 실제 갤럭시 기기 연결하기
    
    
    - `adb devices`
        
        adb.exe: error: device unauthorized
        This adb server's $ADB_VENDOR_KEYS is not set
        Try 'adb kill-server' if that seems wrong.
        Otherwise check for a confirmation dialog on your device.
        
    - `adb reverse tcp:8081 tcp:8081`
        
        8081
        
    
     **Metro** 서버가 뜸. - Webpack dev server와 같은 역할을 한다
    

 여기서 소스 코드를 컴파일하고 앱으로 전송해줌. 기본 8081포트. 메트로 서버가 꺼져있다면 터미널을 하나 더 열어

`npm start`

개발은 iOS 기준으로 하는 게 좋다(개인 경험). 그러나 강좌는 어쩔 수 없이 Windows로 한다.

react-native@0.66 버전, 한 달에 0.1씩 올라가는데 요즘 개발 속도가 느려져서 규칙이 깨짐. 거의 완성 단계라 신규 기능은 npm에서 @react-native-community로부터 받아야 함. 버전 업그레이드 함부로 하지 말 것!

[맥 전용]npx pod-install도 미리 한 번, iOS 라이브러리 받는 용도

## 폴더 구조

- android: 안드로이드 네이티브 폴더
- ios: ios 네이티브 폴더
- node_modules: 노드 라이브러리
- app.json: name은 앱 컴포넌트 이름이니 함부로 바꾸면 안 됨, 이거 바꾸면 네이티브 컴포넌트 이름도 다 바꿔야함, displayName은 앱 이름 변경용
    - ios/FoodDeliveryApp/AppDelegate.m 의 moduleName
    - android/app/src/main/java/com/fooddeliveryapp/MainActivity.java 의 getMainComponentName
- babel.config.js: 바벨 설정
- index.js: 메인 파일
- App.tsx: 기본 App 컴포넌트
- metro.config.js: 메트로 설정 파일(웹팩 대신 사용)
- tsconfig.json: 타입스크립트 설정
- android/app/src/main/java/com/fooddeliveryapp/MainActivity.java: 안드로이드 액티비티에서 js엔진 통해 리액트 코드 실행 + bridge로 소통

## **앱 실행 후**

- cmd + R로 리로딩
- cmd + D로 디버그 메뉴
- Debugging with Chrome으로 개발자 도구 사용 가능
- Configure Bundler로 메트로 서버 포트 변경 가능
- Show Perf Monitor로 프레임 측정 가능

[Flipper](https://fbflipper.com/) 페이스북이 만든 모바일앱 디버거도 좋음(다만 연결 시 에러나는 사람 다수 발견)

- setup doctor 문제 해결할 것
    
    `choco openssl` - powershell
    

`npm i react-native-flipper redux-flipper rn-async-storage-flipper @react-native-async-storage/async-storage
npx pod-install # 아이폰 전용`

- flipper-plugin-async-storage
- flipper-plugin-redux-debugger
- Layout, Network, Images, Database(sqlite), React Devtools, Hermes Debugger 사용 가능

## **앱 이름 변경**

\android\app\src\main\res\values\strings.xml app.json의 displayName \ios\FoodDeliveryApp\Info.plist의 CF BundleDisplayName

## **리액트 네이티브 폴더 구조**

- src 폴더 생성(지금 바로 생성 안 하고 폴더 안에 파일이 들 때 생성해도 됨)
- src/assets: 이미지, 폰트 등
- src/constants: 상수
- src/pages: 페이지 단위 컴포넌트
- src/components: 기타 컴포넌트
- src/contexts: context api 모음
- src/hooks: 커스텀 훅 모음
- src/modules: 네이티브 모듈
- src/store: 리덕스 스토어 세팅
- src/slices: 리덕스 슬라이스
- types: 타입 정의

# **코딩 시작!**

- RN의 style은 css이지만 flex 기반
    - React 웹 서비스를 RN으로 가져다 쓰는 것 못함
- 웹의 Redux 같은 비즈니스 로직을 재사용하는 것이 가능

## **App.tsx 분석**

- View가 div, Text가 span이라고 생각하기(1대1 매칭은 아님)
- css는 dp 단위(density-independent pixels, 다양한 화면 크기에 영향받지 않음, 즉 웹처럼 pixel 단위가 아님!)
- [css 속성 리스트](https://github.com/vhpoet/react-native-styling-cheat-sheet): 좀 오래됨 or 타입스트립트 쓰는 걸 추천
- flex에서는 flexDirection- Column이 default
- `SafeAreaView` 노치 부분
- `StatusBar` 배터리 바 등
- `ScrollView` or `FlatList` : 화면에 비해 컨텐츠가 더 많을 때 자동 스크롤 생성. FlatList 성능이 더 좋음

---

## **React Navigation**

react-router-native도 대안임(웹에서 넘어온 개발자들에게 친숙, 웹처럼 주소 기반)

`npm i @react-navigation/native`

`npm i @react-navigation/native-stack
npm i react-native-screens react-native-safe-area-context
npx pod-install # 맥 전용`

- android/app/src/main/java/FoodDeliveryApp/MainActivity.java
    
    ```jsx
    import android.os.Bundle;
    ...
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }
    ```
    

App.tsx 교체

```jsx
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight onPress={onClick}>
              <Text>Home Screen</Text>
            </TouchableHighlight>
          </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight onPress={onClick}>
              <Text>Details Screen</Text>
            </TouchableHighlight>
          </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{title: 'Overview'}}
              />
              <Stack.Screen name="Details">
                {props => <DetailsScreen {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;
```

- safe-area가 적용되어 있음(설명)
- NavigationContainer: 내비게이션 상태 저장
- Navigator 안에 Screen들 배치
- Screen name 대소문자 상관 없음, component는 보통 두 가지 방식 사용(컴포넌트 그 자체 vs Render Callback)
- props로 navigation과 route가 전달됨
- **Pressable, Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback**
- navigation.navigate로 이동 가능
- navigation.push로 쌓기 가능
- navigation.goBack으로 이전으로 이동
- params 추가 가능(params에 user같은 객체를 통째로 넣지 말기, id를 넣고 user는 글로벌 스토어에 넣기)
- Screen options.title: 제목
- Screen options에 함수를 넣어 route.params로 params 접근 가능
- navigation.setOptions로 옵션 변경 가능
- Navigator screenOptions로 공통 옵션 설정
- Screen options.headerShown로 헤더표시여부
- Screen options.headerTitle로 커스텀 컴포넌트
- Screen options.headerRight로 우측 버튼(useLayoutEffect) [옵션 목록](https://reactnavigation.org/docs/screen-options)
