import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import portOneIcon from './Image/포트원_로고.png';
import naverPayIcon from './Image/네이버페이_로고.png';
import kakaoPayIcon from './Image/카카오페이_로고.png';
import tossPayIcon from './Image/토스페이_로고.png';
import houseIMG1 from './Image/여행지1.png';


class ReservationScreen extends Component {

    state = {
        value: 1,
        labels: ["소극", "보통", "적극"]
    }

    sliderValueChange = (value) => {
        const roundedValue = parseFloat(value.toFixed(1));
        this.setState({ value: roundedValue });
    }

    render() {

        const { value, labels } = this.state;

        return (
            <LinearGradient
            colors={['#F0F4FF', '#FFFFFF']} 
            style={styles.linearGradient} 
            start={{ x: 0, y: 0.8 }} 
            end={{ x: 0, y: 0}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>    
                        <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.reservationText}> 예약하기 </Text>
                </View>
               
                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG1}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                </TouchableOpacity>
               
                <Text style={styles.reservationDateText}> 예약 날짜 </Text>
                <View style={styles.reservationView}>
                    <View style={styles.reservationSelectView}>
                        <Text style={styles.reservationDate}> 예약 날짜 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                        <Text style={styles.reservationDateSelect}> 날짜 선택하기 </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.reservationDateInput}> 2024년 7월 11일 ~ 12일 </Text>
                </View>

                <Text style={styles.reservationInfoText}> 예약 정보 </Text>
                   
                <View style={styles.reservationInfoView}> 
                    <View style={styles.nameInfoView}>
                        <Text style={styles.nameInfo}> 이름 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                        <Text style={styles.nameInfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.nameInfoText}> 이진태 </Text>
                  
                        <View style={styles.phoneNumberInfoView}>
                            <Text style={styles.phoneNumberInfo}> 게스트 연락처 </Text>
                            <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.phoneNumberInfoModify}> 수정하기 </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.phoneNumberInfoText}> 010-1122-3344 </Text>
                      
                        <View style={styles.hostAttentionInfoView}>
                            <Text style={styles.hostAttentionInfo}> 호스트 관심도 </Text>
                            <TouchableOpacity style={styles.ModifySelectView}>
                            <Slider
                                style={styles.slider}
                                value = {this.state.value}
                                minimumValue={0}
                                maximumValue={2}
                                onValueChange={this.sliderValueChange}
                                step={1}
                                thumbTintColor="#4285F4"
                                
                            />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.hostAttentionInfoText}>  {labels[value]} </Text>
                     
                        <View style={styles.requestInfoView}>
                            <Text style={styles.requestInfo}> 요청사항 </Text>
                            <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.requestInfoModify}> 수정하기 </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.requestInfoText}>  1박 2일동안 잘 부탁드립니다~! </Text>

                    </View>

                    <View>
                        <Text style={styles.explanation}> ※ 관심도란?</Text>
                        <Text style={styles.explanationText}> 소극: 저희끼리 여행하는게 편해요. 터치하지 말아주세요</Text>
                        <Text style={styles.explanationText}> 보통: 너무 관심없지도 너무 과하지 않게만 가이드해주세요</Text>
                        <Text style={styles.explanationText}> 적극: 이것저것 적극적으로 해당 지역에 대해 가이드해주세요</Text>
                    </View>

                    <Text style={styles.payText}> 결제하기 </Text>
                    <View style={styles.payMethodView}>
                        <TouchableOpacity style={styles.payMethodTouchView}>
                        <View style={styles.payMethod}>
                            <Image style={styles.portOneIcon} source={portOneIcon}/>
                            <Text style={styles.protOneText}> 포트원으로 결제하기 </Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.payMethodTouchView}>
                        <View style={styles.payMethod}>
                            <Image style={styles.naverPayIcon} source={naverPayIcon}/>
                            <Text style={styles.naverPayText}> 네이버 페이로 결제하기 </Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.payMethodTouchView}>
                        <View style={styles.payMethod}>
                            <Image style={styles.kakaoPayIcon} source={kakaoPayIcon}/>
                            <Text style={styles.kakaoPayText}> 카카오 페이로 결제하기 </Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.payMethodTouchView}>
                        <View style={styles.payMethod}>
                            <Image style={styles.tossPayIcon} source={tossPayIcon}/>
                            <Text style={styles.tossPayText}> 토스 페이로 결제하기 </Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.houseRuleText}> 유의사항 </Text>
                    <View style={styles.columnMiidle}>
                        <View style={styles.houseRuleView}>
                            <Text style={styles.houseRuleOptionText}>●  욕설 및 공격적인 언행은 삼가해주세요. </Text>
                            <Text style={styles.houseRuleOptionText}>●  소음제한 시간대에는 소음을 자제해주세요 </Text>
                            <Text style={styles.houseRuleOptionText}>●  객실 내에서 흡연은 금지합니다. </Text>
                            <Text style={styles.houseRuleOptionText}>●  호스트를 존중하고 배려해주세요. </Text>
                            <Text style={styles.houseRuleOptionTextMargin}> </Text>
                        </View>
                    
                        <Text style={styles.ruleAlertText}> ※위 규칙을 3회이상 어길 시, 호스트에게 숙박비의 30%에 해당하는 벌금이 발생할 수 있습니다. </Text>
                    </View>

                <TouchableOpacity style={styles.reservationBtn} onPress={() => this.props.navigation.navigate('숙소정보')}>
                    <Text style={styles.reservationBtnText}>예약하기</Text>
                </TouchableOpacity>


                <View style={styles.barMargin}><Text> </Text></View>
            </View>
            </ScrollView>

        </LinearGradient> 
    )
  }
}

// 스타일 시트
const styles = StyleSheet.create({
  background: {                                // 전체화면 세팅                     
        flex: 1,
    },
    linearGradient: {                         // 그라데이션
        flex: 0,
        width: '100%',
        height: '100%',
    },
    container : {                             // 컴포넌트들 가운데 정렬
        alignItems: 'center', 
    },
    titleView: {                             // 뒤로가기버튼, 예약하기 텍스트 담는 View
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: 80,
        
    },  
    backBtnIcon: {                            // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 30,
        height: 30,
        marginRight:'2%',
        
    },
    content: {                                // 예약버튼 누른 컨텐츠
        width: 370,
        height: 120,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: '1.1%',
        borderRadius: 20,
    },
    houseIMG:{                                // 숙소 이미지
        alignItems: 'center',
        borderRadius: 10, 
        width: 100,
        height: 100,
        resizeMode: 'cover',
        margin: '2%',
    },
    houseInfo: {                             // 숙소정보 Text담는 View
        flex: 0,
        width: '55%',
        height: '100%',
    },
    houseName:{                              // 숙소명
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: 2,
    },
    houseAddress: {                         // 숙소주소
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2,
    },
    houseReview: {                          // 숙소리뷰
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },

    reservationText: {                      // 예약하기 텍스트  
        marginBottom: '0.5%',
        fontSize: 28,
        width: '88%',
    },  
    reservationDateText: {                  // 예약날짜 제목 텍스트
        marginTop: '6.6%',
        fontSize: 28,
        width: '88%',
    },
    reservationView: {                      // 예약날짜 본문 텍스트 담는 view
        width: '90%',
        borderRadius: 15,
        marginTop: '6.6%',
        flexdirection: 'row',
        backgroundColor: 'white',
    },
    reservationSelectView:{                 // 예약날짜, 예약날짜 선택 가로로 배치하는 View
        flexDirection: 'row',
        alignitems: 'center',
    },
    reservationDate: {                      // 예약날짜 본문 텍스트
        marginTop: '3.3%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'66%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ModifySelectView: {                    // 날짜 선택, 수정하기 세로 위치조절 ToucableOpacity View
        marginTop: '4.4%',
    },
    reservationDateSelect: {               // 날짜 선택하기 텍스트
        fontSize: 16,
        color: '#4285F4',
    },
    reservationDateInput: {                // 입력한 날짜 본문 텍스트
        marginTop: '2.2%',
        marginBottom: '5%',
        marginLeft: '4%',
        fontSize: 16,
    },
    reservationInfoText:{                  // 예약 정보 제목 텍스트
        marginTop: '6.6%',
        fontSize: 28,
        width: '88%',
    },
    reservationInfoView: {                 // 예약 정보 본문 View
        width: '90%',
        borderRadius: 15,
        marginTop: '6.6%',
        flexdirection: 'row',
        backgroundColor: 'white',
    },
    nameInfoView: {                        // 이름 , 수정하기 텍스트담는 가로 배치 View
        flexDirection: 'row',
        alignitems: 'center',
    },
    nameInfo: {                            // '이름' 텍스트
        marginTop: '3.3%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'74%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameInfoModify:{                       // 수정하기 텍스트
        fontSize: 17,
        color: '#4285F4',
    },
    nameInfoText: {                        // 이름 본문 텍스트
        marginTop: '2.2%',
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
    },
    phoneNumberInfoView: {                 // 게스트 연락처 , 수정하기 텍스트담는 가로 배치 View
        flexDirection: 'row',
        alignitems: 'center',
    },
    phoneNumberInfo: {                     // '게스트 연락처' 텍스트
        marginTop: '3.3%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'74%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneNumberInfoModify:{                // 수정하기 텍스트
        fontSize: 17,
        color: '#4285F4',
    },
    phoneNumberInfoText: {                 // 게스트 연락처 본문 텍스트
        marginTop: '2.2%',
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
    },
    hostAttentionInfoView: {                 // 호스트 관심도 , 수정하기 텍스트담는 가로 배치 View
        flexDirection: 'row',
        alignitems: 'center',
    },
    hostAttentionInfo: {                     // '호스트 관심도' 텍스트
        marginTop: '3.3%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'72%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {                                // 호스트 관심도 설정 슬라이더
        width: 90,
        color:'red',
    },
    hostAttentionInfoText: {                 // 호스트 관심도 본문 텍스트
        marginTop: '2.2%',
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
    },
    requestInfoView: {                       // 요청사항 , 수정하기 텍스트담는 가로 배치 View
        flexDirection: 'row',
        alignitems: 'center',
    },
    requestInfo: {                           // '요청사항' 텍스트
        marginTop: '3.3%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'74%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    requestInfoModify:{                      // 수정하기 텍스트
        fontSize: 17,
        color: '#4285F4',
    },
    requestInfoText: {                      // 요청 사항 본문 텍스트
        marginTop: '2.2%',      
        marginBottom: '2.2%',      
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
    },
    payText: {                              // 결제하기 제목 텍스트
        marginTop: '8.8%',
        fontSize: 28,
        width: '88%',
    },
    payMethodTouchView:{                   // 결제수단 touchableOpacity View
        width: '90%',
        // backgroundColor: 'gray',
    },
    payMethodView: {                       // 결제수단 VIew들 정렬하는 view
        width: '90%',
        borderRadius: 15,
        marginTop: '6.6%',
        paddingBottom: '7.3%',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'gray',
    },
    payMethod: {                           // 결제수단 아이콘, 텍스트 가로로 배치하는 View
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7.3%',
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 18,
        width: '100%',
        height: 66,
    },
    portOneIcon: {                         // 포트원 아이콘
        width: 60,
        height: 60,
        // backgroundColor: 'green',
    },
    protOneText: {                         // 포트원으로 결제하기 텍스트
        width: '72%',
        textAlign: 'center',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },
    naverPayIcon: {                         // 네이버페이 아이콘
        width: 60,
        height: 60,
    },
    naverPayText: {                         // 네이버페이로 결제하기 텍스트
        width: '72%',
        textAlign: 'center',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },
    kakaoPayIcon: {                         // 카카오페이 아이콘
        width: 60,
        height: 60,
    },
    kakaoPayText: {                         // 카카오페이로 결제하기 텍스트
        width: '72%',
        textAlign: 'center',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },
    tossPayIcon: {                         // 토스페이 아이콘
        width: 60,
        height: 60,
    },
    tossPayText: {                         // 토스페이로 결제하기 텍스트
        width: '72%',
        textAlign: 'center',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },

    columnMiidle:{                           // 가로 가운데 정렬 - 숙소 이용규칙 본문담는 View 가운데 정렬
        alignItems: 'center',
    },
    houseRuleView: {                          // 숙소 이용규칙 본문 담는 View
        marginTop: '6.6%',
        paddingLeft: '4%',
        width: 360,
        heigh: 400,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    houseRuleOptionText: {                    // 숙소 이용규칙 본문 텍스트
        marginTop: '5.5%',
        fontSize: 16,
        color: '#939393',
        // backgroundColor:'yellow',
    },
    houseRuleOptionTextMargin: {              // 숙소 이용규칙 하단 마진
        marginBottom: '1%',
    },
    ruleAlertText: {                          // 숙소 이용규칙 패널디에 대한 텍스트
        fontSize: 14,
        width: 340,
        color: '#4285F4',
        marginTop: '8.8%',
        textAlign:'center',
    },
    barMargin: {                              // 스클롤 탭바 마진
        height: 40,
    },
    reservationBtn:{                          // 예약 버튼
        backgroundColor : '#4285F4',  
        borderRadius: 16,
        width: '90%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,                     
        shadowColor: '#4285F4',
        shadowRadius: 10,
        marginTop: '10%',
    },
    reservationBtnText:{                         // 예약하기 텍스트
        color: 'white', 
        fontSize: 24,
        marginBottom: '1.5%',
    },
    explanation: {                           // 관심온도란? 텍스트
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '1%',
        color: '#7C7C7C',
        width: 360,
        },
    explanationText: {                       // 관심온도 설명 텍스트
        fontSize: 14,
        marginTop: '1%',
        color: '#7C7C7C'
    },
    houseRuleText:{                          // 유의사항 제목 텍스트
            marginTop: '8.8%',
            fontSize: 28,
            width: '100%',
            marginLeft: '9%',
    },
    columnMiidle:{                           // 가로 가운데 정렬 - 숙소 이용규칙 본문담는 View 가운데 정렬
        alignItems: 'center',
    },
    houseRuleView: {                          // 숙소 이용규칙 본문 담는 View
        marginTop: '5.5%',
        paddingLeft: '4%',
        width: 360,
        heigh: 400,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    houseRuleOptionText: {                    // 숙소 이용규칙 본문 텍스트
        marginTop: '4.4%',
        fontSize: 16,
        color: '#939393',
        // backgroundColor:'yellow',
    },
    houseRuleOptionTextMargin: {              // 숙소 이용규칙 하단 마진
        marginBottom: '1%',
    },
    ruleAlertText: {                          // 숙소 이용규칙 패널티에 대한 텍스트
        fontSize: 14,
        width: 340,
        color: '#4285F4',
        marginTop: '5.5%',
        textAlign:'center',
    },
});

export default ReservationScreen;