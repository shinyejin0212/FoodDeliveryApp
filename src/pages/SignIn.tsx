import React, { useCallback } from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

function SignIn() {
  const onSubmit = useCallback(()=> {
    Alert.alert();
  }, [])
  return (
    <View>
      <View>
        <Text>이메일</Text>
        <TextInput placeholder="이메일을 입력해주세요"></TextInput>
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput placeholder="비밀번호를 입력해주세요"></TextInput>
      </View>
      <View>
        <Pressable onPress={onSubmit} style={StyleSheet.loginButton}>
          <Text style={StyleSheet.loginButtonText}>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default SignIn;
