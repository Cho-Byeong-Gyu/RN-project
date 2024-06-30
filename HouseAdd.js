import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';


class HouseAddScreen extends Component {

  render() {

    return (
        <LinearGradient
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('검색')}>
                    <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.reservationText}> 숙소 등록하기 </Text>
                </View>

                <Text style={styles.reservationText}> 만드는중</Text>


                <View style={styles.barMargin}><Text> </Text></View>
            </View>
            </ScrollView>

        </LinearGradient> 
    )
  }
}

// 스타일 시트
const styles = StyleSheet.create({
  background: {                     // 전체화면 세팅                     
        flex: 1,
    },
    linearGradient: {               // 그라데이션
        flex: 0,
        width: '100%',
        height: '100%',
    },
    container : {                   // 컴포넌트들 가운데 정렬
        alignItems: 'center', 
    },
    searchView: {                   // 뒤로가기버튼, 예약하기 텍스트 담는 View
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: 80,
        
    },  
    backBtnIcon: {                  // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 30,
        height: 30,
        marginRight:'2%',
        
    },
    reservationText: {              // 숙소등록 제목 텍스트  
        marginBottom: '0.5%',
        fontSize: 28,
        width: '88%',
    },  
    barMargin: {                    // 스클롤 탭바 마진
        height: 75,
    },

});

export default HouseAddScreen;