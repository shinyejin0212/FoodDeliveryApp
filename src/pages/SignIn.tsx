import { NavigationRouteContext } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState, useRef } from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { RootStackParamList } from '../../App'; //로그인 안되었을때

//타입생성
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn( {navigation} : SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const emailRef = useRef<TextInput | null>(); // generic
  const passwordRef = useRef<TextInput | null>();

  const onChangeEmail  = useCallback( text => {
    setEmail(text);
  }, []);
  const onChangePassword  = useCallback( text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => { //제출하면
    if (!email || !email.trim()) { //trim() : 좌우 공백을 제거하는 함수
      return Alert.alert('알림', '이메일을 입력해주세요.'); 
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    Alert.alert('알림', '로그인 되었습니다.'); //로그인 버튼 누르면 알림창 뜸
  }, [email, password]);

  const toSignUp = useCallback( () => {
    navigation.navigate('SignIn');
  }, [navigation])

  const canGotext = email && password ;

  return (
    <View>

      <View style = {styles.inputWrapper}>
        <Text style = {styles.label}>이메일</Text>
        <TextInput
          style = {styles.textInput}
          placeholder="이메일을 입력해주세요" 
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill='yes'//지문 자동 로그인 등
          autoComplete='email' //자동완성 이메일로
          textContentType='emailAddress'
          keyboardType='email-address' //email 전용 키보드로 변경
          
           //공식문서에 TextInput 에 들어가면 목록 볼 수 있음
          returnKeyType='next'//키보드에 다음 버튼 생성 
          //(아이폰에선 다음 버튼 누르면 비밀번호 입력란으로 커서 옮겨짐 
          //but 안드XX이기 때문에 함수 만들어줌)
          onSubmitEditing={()=> {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false} //키보드 내려가는거 막기
          ref = {emailRef}
          clearButtonMode = "while-editing" //아이폰만 적용 (x표지 누르면 통째로 지워지는 기능)
          />
      </View>

      <View style = {styles.inputWrapper}>
        <Text style = {styles.label}>비밀번호</Text>
        <TextInput 
          style = {styles.textInput}
          placeholder="비밀번호를 입력해주세요" 
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry //비밀번호 입력값 안보이게

          //공식문서에 TextInput 에 들어가면 목록 볼 수 있음
          importantForAutofill='yes'//지문 자동 로그인 등
          autoComplete="password" 
          textContentType="password"
          //F12누르면 타입 정의 볼 수 있다
          keyboardType='numeric' //numeric 전용 키보드로 변경

          ref = {passwordRef}
          onSubmitEditing={onSubmit} // 키보드의 완료(Enter)눌렀을 때 submit(로그인) 되도록
        />
      </View>

      <View style = {styles.buttonZone}>

        <Pressable
          onPress={onSubmit} 
          style={
            !canGotext 
              ? styles.loginButton 
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
           } //styleSheet.compose (a,b) 중 b의 우선순위가 더 높음
          disabled= {!canGotext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>

        <Pressable onPress={toSignUp}>
          <Text>회원가입</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper : {
    padding : 20,
  },

  textInput : {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth, //가장 얇은 선인데 눈에 보이는
  },

  label : {
    fontWeight : 'bold',
    fontSize : 16,
    marginBottom: 20,
  },

  loginButton:{
    backgroundColor : 'gray',
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 5,
    marginBottom : 10,
  },
  loginButtonActive: {
    backgroundColor : 'blue',
  },

  loginButtonText : {
    color : 'white',
    fontSize : 16,
  },

  buttonZone : {
    alignItems: 'center',
  },
});

export default SignIn;
