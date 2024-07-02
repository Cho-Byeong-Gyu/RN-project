import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import houseAddIMG from './Image/사진_아이콘.png';
import mapIMG from './Image/지도_미리보기.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';


class HouseInfoModifyScreen extends Component {

  render() {

    return (
        <LinearGradient
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.houseAddView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.houseAddText}> 숙소정보 수정하기 </Text>
                </View>

                <View style={styles.hostInfoView}> 
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 호스트명 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                   <Text style={styles.hostInfoText}> 이진태 </Text>
               
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 연락처 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                   <Text style={styles.hostInfoText}> 010-1122-3344 </Text>
                    
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 전체인원 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                   <Text style={styles.hostInfoText}> 2명 </Text>
               
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 숙소위치 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                   <Text style={styles.hostInfoText}> 강원도 속초시 신림면 </Text>
                   <Image style={styles.locationMap} source={mapIMG}></Image>
                  
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 숙소 소개 사진 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 사진 수정 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.houseIMGView}>
                        <ScrollView style={styles.addHouseIMGView}  
                            showsHorizontalScrollIndicator={false}  
                            horizontal={true}>
                            <Image style={styles.houseIMG} source={houseIMG1}/>
                            <Image style={styles.houseIMG} source={houseIMG2}/>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.hostNameInfoView}>
                        <Text style={styles.hostInfo}> 소개글 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                   <Text style={styles.hostIntroText}> 강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 
                    자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 
                    자세한 내용은 아래 연락처로 문의 부탁드립니다. </Text>
           
                    <View style={styles.hostFreeServiceView}>
                        <Text style={styles.hostInfo}> 무료 제공 서비스 </Text>
                        <TouchableOpacity style={styles.ModifySelectView}>
                            <Text style={styles.InfoModify}> 수정하기 </Text>
                        </TouchableOpacity>
                    </View>
                     
                    <View style={styles.tagView}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Text style={styles.tagText}> #와이파이 </Text>
                        <Text style={styles.tagText}> #침대 </Text>
                        <Text style={styles.tagText}> #욕실 </Text>
                        <Text style={styles.tagText}> #음료 </Text>
                        <Text style={styles.tagText}> #세면도구 </Text>
                        <Text style={styles.tagText}> #드라이기 </Text>
                        <Text style={styles.tagText}> #냉장고 </Text>
                        <Text style={styles.tagText}> #세탁기 </Text>
                        <Text style={styles.tagText}> #건조기 </Text>
                        <Text style={styles.tagTextmargin}> </Text>
                    </ScrollView>
                    </View>
                 


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

                <TouchableOpacity style={styles.reservationBtn} onPress={() => this.props.navigation.navigate('검색')}>
                    <Text style={styles.reservationBtnText}> 수정 완료</Text>
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
    houseAddView: {                   // 뒤로가기버튼,  숙소등록 제목 담는 View
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: 80,
        
    },  
    backBtnIcon: {                         // 뒤로가기 아이콘
        resizeMode: 'contain',
        opacity: 0.38,
        width: 30,
        height: 30,
        marginRight:'2%',
        
    },
    houseAddText: {                        // 최상단 숙소등록 제목 텍스트
        marginBottom: '0.5%',
        fontSize: 28,
        width: '88%',
    },  
    ModifySelectView: {                    // 수정하기 버튼 위쪾 마진 View
        marginTop: '4.4%',
    },
    hostNameInfoView: {                    // 숙소 정보 제목 테스트, 수정하기 버튼 가로배열 View
        marginTop: '3%',
        flexDirection: 'row',
        alignitems: 'center',
    },
    hostInfo: {                            // 호스트 정보 제목 텍스트 (호스트명, 연락처)
        marginTop: '4.8%',
        marginLeft: '3.3%',
        fontSize: 22,
        width:'74%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hostIntroText: {                       // 소개글 본문
        marginTop: '4.4%',
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
        width: 340,
    },
    InfoModify:{                           // 호스트 정보 수정하기
        fontSize: 17,
        color: '#4285F4',
    },
    houseIMGView:{                         // 숙소 사진 가운데 정렬 View
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%'
    },
    addHouseIMGView:{                      // 숙소 사진등록 View
        marginTop: '10%',
        marginBottom: '4%',
        backgroundColor:'#E2E2E2',
        width: 200,
        height: 200,
    },
    houseIMG: {                         // 숙소 사진 등록
        width: 200,
        height: 200,
    },
    hostInfoText: {                        // 호스트 정보 입력 value 텍스트
        marginTop: '2.2%',
        marginBottom: '2%',
        marginLeft: '4%',
        fontSize: 16,
        width: 340,
        // backgroundColor: 'gray',
    },
    hostInfoView: {                       // 호스트 정보 전체를 담는 View
        width: '90%',
        borderRadius: 15,
        marginTop: '1.8%',
        flexdirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    hostFreeServiceView:{                   // 무료 서비스 하단 마진
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        marginBottom: '8.8%',
        backgroundColor: 'white',
    },
    houseRuleText:{                          // 숙소 이용규칙 제목 텍스트
            marginTop: '8.8%',
            fontSize: 28,
            width: '100%',
            marginLeft: '10%',
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
    reservationBtn:{                          // 숙소등록 버튼
        backgroundColor : '#4285F4',  
        borderRadius: 16,
        width: '90%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,                     
        shadowColor: '#4285F4',
        shadowRadius: 10,
        marginTop: '10%',
    },
    reservationBtnText:{                        // 숙소등록하기 텍스트
        color: 'white', 
        fontSize: 24,
        marginBottom: '1.5%',
    },
    locationMap: {                             // 지도 미리보기 화면
        width: '68%',
        height: 210,    
        marginTop: '10%',
        borderRadius: 15,
    },
    barMargin: {                               // 스클롤 탭바 마진
        height: 75,
    },

    tagView: {                               // 무료제공서비스, 태그 담는 View
        flexDirection: 'row',
        marginLeft: '4.4%',
        width: '90%',
        // backgroundColor: 'gray',
    },
    tagText: {                               // 무료제공서비스, 태그 담는 View 텍스트
        fontSize: 16,
        color: '#4285F4',  
        marginBottom: '6.6%',
        // backgroundColor: 'green',
    },
    tagTextmargin: {                         // 태그 텍스트 스크롤뷰 마진
        width: 30,
    },
});

export default HouseInfoModifyScreen;