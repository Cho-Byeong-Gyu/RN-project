import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import houseIMG1 from './Image/여행지1.png';


class ReservationScreen extends Component {

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
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('숙소정보')}>
                    <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.reservationText}> 예약화면 </Text>
                </View>
               
                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG1}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                </TouchableOpacity>
               
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
    content: {                      // 예약버튼 누른 컨텐츠
        width: 370,
        height: 120,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: '3.3%',
        borderRadius: 20,
    },
    houseIMG:{                      // 숙소 이미지
        alignItems: 'center',
        borderRadius: 10, 
        width: 100,
        height: 100,
        resizeMode: 'cover',
        margin: '2%',
    },
    houseInfo: {                    // 숙소정보 Text담는 View
        flex: 0,
        width: '55%',
        height: '100%',
    },
    houseName:{                     // 숙소명
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: 2,
    },
    houseAddress: {                 // 숙소주소
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2,
    },
    houseReview: {                  // 숙소리뷰
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },
    barMargin: {                    // 스클롤 탭바 마진
        height: 75,
    },
    reservationText: {                   // 예약하기 텍스트  
        marginBottom: '0.5%',
        fontSize: 28,
        width: '88%',
    },  

});

export default ReservationScreen;