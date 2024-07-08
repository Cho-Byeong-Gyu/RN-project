import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setToken = async (accessToken, refreshToken) => {       // 토큰 AsyncStorage 라이브러리에 저장하는 함수
    try {
      await AsyncStorage.setItem('userToken', accessToken);          // AsyncStorage의 setItem함수를 통해 userToken변수에 토큰값 저장
      await AsyncStorage.setItem('refreshToken', refreshToken);         // AsyncStorage의 setItem함수를 통해 userToken변수에 토큰값 저장
    } catch (error) {
      console.error('토큰 저장 실패:', error);
    }
};



export const getToken = async () => {               // 토큰을 AsyncStorage 라이브러리의 "userToken" 키값에 저장한 토큰 값 가져오는 함수
    try{
        const token = await AsyncStorage.getItem("userToken");
        return token;
    } catch (error) {
        console.log( '토큰 불러오기 실패' + error);
    }
}


export const refreshAccessToken = async () => {                      // access 토큰을 재발급 받는 함수
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }
  
      const response = await axios.post('http://223.130.131.166:8080/api/v1/auth/refresh', {
        token: refreshToken
      });
  
      const newAccessToken = response.data.accessToken;
      await AsyncStorage.setItem('userToken', newAccessToken);
  
      return newAccessToken;
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      throw error;
    }
  };