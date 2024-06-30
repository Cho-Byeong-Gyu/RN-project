import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import FavoriteIconIMG from './Image/체크된_즐겨찾기_아이콘.png';
import HouseReviewIconIMG from './Image/파란별_아이콘.png';
import ArrowIconIMG from './Image/화살표_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';
import mapIMG from './Image/지도_미리보기.png';

class HouseInfoScreen extends Component {


  render() {
    return (
        <LinearGradient
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.houseIMGView}  >
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <ImageBackground style={styles.houseIMG} source={houseIMG1}>
                            <TouchableOpacity style={styles.fixedBackButton} onPress={() => this.props.navigation.navigate('검색')}>
                                <Image style={styles.backBtnIcon} source={backBtnIMG}/>  
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fixedFavoriteButton}>
                                <Image style={styles.FavoriteIcon} source={FavoriteIconIMG}/>  
                            </TouchableOpacity>
                            </ImageBackground>
                         
                            <ImageBackground style={styles.houseIMG} source={houseIMG2}>
                            <TouchableOpacity style={styles.fixedBackButton} onPress={() => this.props.navigation.navigate('검색')}>
                                <Image style={styles.backBtnIcon} source={backBtnIMG}/>  
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fixedFavoriteButton}>
                                <Image style={styles.FavoriteIcon} source={FavoriteIconIMG}/>  
                            </TouchableOpacity>
                            </ImageBackground>

                    </ScrollView>

                </View>

                <View> 
                    <View style={styles.houseName}>
                        <Text style={styles.houseNameText}> 박양순님의 거주지</Text>
                    </View>
                    <View style={styles.houseReviewView}>
                        <TouchableOpacity style={styles.houseReview} onPress={() => this.props.navigation.navigate('후기')}>
                            <Image style={styles.houseReviewIcon} source={HouseReviewIconIMG}/>
                            <Text style={styles.houseReviewText}>4.2 (100개의 후기)</Text> 
                        </TouchableOpacity>
                    </View>

                    <View style={styles.introView} >
                        <Text style={styles.introText}>소개글</Text>
                        <Text style={styles.houseIntroText}>강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드립니다. </Text>
                    </View>

                                        
                    <View >
                        <Text style={styles.hostAttention}> 호스트님의 선호 관심온도</Text>
                        <Text style={styles.hostAttentionText}> 5 °C </Text>
                    </View>

                    <View >
                        <Text style={styles.tagTextView}> 무료 제공 서비스</Text>
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
                 
                    <View >
                        <Text style={styles.tagTextView}> 이런건 챙겨와주세요! </Text>
                        <View style={styles.tagView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={styles.tagText}> #매너 </Text>
                            <Text style={styles.tagText}> #인성 </Text>
                            <Text style={styles.tagText}> #개념 </Text>
                            <Text style={styles.tagText}> #핸드폰 충전기 </Text>
                            <Text style={styles.tagText}> #면도기 </Text>
                            <Text style={styles.tagText}> #고데기 </Text>
                            <Text style={styles.tagTextmargin}> </Text>
                        </ScrollView>
                        </View>
                    </View>

                    <View style={styles.locationView} >
                        <View style={styles.mapView}>
                            <Text style={styles.location}> 숙소 위치</Text>
                            <TouchableOpacity style={styles.mapTouchView}>
                                <Text style={styles.map}> 지도 보기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.locationText}> 도로명 주소 (강원도 원주시 신림면) </Text>
                        <Image style={styles.locationMap} source={mapIMG}></Image>
                    </View>

                    <View >
                        <Text style={styles.phoneNumber}> 연락처 </Text>
                        <Text style={styles.phoneNumberText}> 0504-1122-3344 </Text>
                    </View>
                                           
                    <View >
                        <Text style={styles.explanation}> ※ 관심온도란?</Text>
                        <Text style={styles.explanationText}> 0: 여행에 거의 관여하지 않으십니다.</Text>
                        <Text style={styles.explanationText}> 5: 소극적, 소극적이지도 적극적이지도 않습니다.</Text>
                        <Text style={styles.explanationText}> 10: 여행 가이드에 적극적이십니다.</Text>
                    </View>

                    <Text style={styles.houseRuleText}> 숙소 이용규칙 </Text>
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


                    <View style={styles.barMargin}><Text> </Text></View>
                </View>

            </View>
            </ScrollView>
               
                <View style={styles.reservationView}>
                    <Text style={styles.priceText}>₩43000원</Text>
                    <TouchableOpacity style={styles.reservationBtn} onPress={() => this.props.navigation.navigate('예약')}>
                        <Text style={styles.reservationText}>간편 예약하기</Text>
                        <Image style={styles.arrowIcon} source={ArrowIconIMG}/>
                    </TouchableOpacity>
                </View>
            
        </LinearGradient> 
    )
  }
}

// 스타일 시트
const styles = StyleSheet.create({
    background: {                   // 전체화면 세팅
        flex: 1,
    },
    linearGradient: {               // 그라데이션 
        flex: 0,
        width: '100%',
        height: '100%',
    },  
    container: {                    // 컴포넌트들 가운데 정렬시키는 View
        alignItems: 'center', 
    },
    houseIMGView:{                  // 숙소사진,뒤로가기버튼, 찜버튼,페이지 정보 담는 View
        width: 415,
        height: 380, 
        alignItems: 'center', 
    },
    backBtnIcon: {              // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 26,
        height: 26,
    },
    fixedBackButton: {                  // 뒤로가기 버튼 고정시키는 View
        position: 'absolute',
        top: '2.5%',
        left: '2.5%',    
        height: 34,  
        width: 34,  
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 50,   
        backgroundColor: 'rgba(255, 255, 255, 0.4)',   
    },
    FavoriteIcon: {                     // 즐겨찾기
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    fixedFavoriteButton: {              // 즐겨찾기 버튼 고정시키는 View
        position: 'absolute',
        top: '2.5%',
        right: '2.5%',    
        height: 36,  
        width: 36,  
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 50,   
        backgroundColor: 'rgba(255, 255, 255, 0.4)',   

    },
    houseIMG: {                                // 숙소사진
        width: 415, 
        height: 380,
        resizeMode: 'cover',
    },  
    houseName: {                               // 숙소명을 담는 View
        marginTop: '3.3%',
        marginLeft: '7%',
        width: 415,
        justifyContent: 'flex-start',
    },
    houseNameText: {                           // 숙소명
        fontSize: 28,
    },
    houseReviewView: {                         // 숙소 평점 및 후기 담는 View
        flexDirection: 'row',
        marginTop: '1%',
        marginLeft: '9.3%',
        width: 415,
        alignItems: 'center', 
        justifyContent: 'flex-start',
    },
    houseReview: {                             // 숙소 평점 및 후기 담는 ScrollView
        flexDirection: 'row',
        alignItems: 'center',
    },
    houseReviewIcon: {                         // 별 아이콘
        width: 13.6,
        height: 13.6,   
    },
    houseReviewText: {                         // 평점 및 후기 텍스트
        marginLeft: '4%',
        fontSize: 16,
        color: '#4285F4',   
    }, 
    introView:{                                // 소개글 제목, 본문 담는 View
        alignItems: 'center',
    },
    introText: {                               // 소개글 제목 텍스트
        marginTop: '6.6%',
        paddingLeft: '10%',
        fontSize: 22,
        width: '100%',
    },  
    houseIntroText: {                          // 숙소 소개글 본문 텍스트
        marginTop: '2.2%',
        fontSize: 16,
        width: 360,
        // backgroundColor: 'gray',
    },
    locationView: {                            // 숙소 위치 도로명과 미리보기 화면 담는 View
        alignItems: 'center',
    },
    mapView: {                                 // 숙소위치 제목 텍스트와 지도보러가기 텍스트 가로배치로 담는 View
        flexDirection: 'row',
        alignContent: 'center',
        // backgroundColor:'gray',
    },
    location: {                                // 숙소 위치 텍스트
        width: '74%',
        marginTop: '6.6%',
        paddingLeft: '9.2%',    
        fontSize: 22,
        // backgroundColor:'yellow',
    },
    mapTouchView: {                            // 지도 보러가기 터치 View
        marginTop: '7%',
        width: '26%',
    },
    map: {                                     // 지도 보러가기 텍스트
        fontSize: 16,
        color: '#4285F4',
        width: '100%',
        // backgroundColor: 'green'
    },
    locationText: {                            // 도로명 텍스트          
        width: '100%',
        marginTop: '3.3%',
        paddingLeft: '9.2%',    
        fontSize: 18,
    },
    locationMap: {                             // 지도 미리보기 화면
        width: '80%',
        height: 300,    
        marginTop: '4%',
        borderRadius: 15,
    },
    phoneNumber: {                             // 연락처 텍스트
        marginTop: '8%',
        marginLeft: '8.8%',
        fontSize: 22,
    },
    phoneNumberText: {                         // 010-0000-0000 텍스트          
        marginTop: '2.2%',
        marginLeft: '9.2%',    
        fontSize: 18,
    },
    reservationView: {                        // 가격및 예약버튼담는 View
        position: 'absolute',
        width: '100%',
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reservationBtn:{                          // 예약 버튼
        backgroundColor : '#4285F4',  
        borderRadius: 16,
        width: '55%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,                         // 높이를 설정하여 그림자 생성
        shadowColor: '#4285F4',
        shadowRadius: 10,
    },
    priceText: {                              // 가격 텍스트
        fontSize: 26,
        color: '#4285F4',  
        width: '40%',
        // backgroundColor: 'yellow',
        textAlign: 'center',
        marginBottom: '2%',
    },
    reservationText:{                         // 간편 예약하기 텍스트
        color: 'white', 
        fontSize: 16,
        marginBottom: '1.5%',
    },
    arrowIcon: {                              // 화살표 아이콘     
        width: 24,
        height: 24,
        marginLeft: '4%',
    },
    barMargin: {                             // ScrollView 탭바에 대한 마진
        height: 120,
    },
    hostAttention:{                          // '호스트님의 선호 관심온도' 텍스트
        marginTop: '6.6%',
        paddingLeft: '9%',
        fontSize: 22,
        width: '100%',
    },
    hostAttentionText: {                     // 호스트 관심온도 값 텍스트 (5도)
        marginTop: '1.5%',
        marginLeft: '9.3%',
        fontSize: 20,
        color: '#4285F4',
    },
    explanation: {                           // 관심온도란? 텍스트
        fontSize: 18,
        marginTop: '6.6%',
        marginBottom: '1%',
        marginLeft: '9.2%',
        color: '#C2C2C2'
    },
    explanationText: {                       // 관심온도 설명 텍스트
        fontSize: 12,
        marginTop: '1%',
        marginLeft: '10%',
        color: '#C2C2C2'
    },
    tagTextView:{                            // 무료제공 서비스, 이런건 챙겨와주세요! 텍스트
        marginTop: '6.6%',
        paddingLeft: '9%',
        fontSize: 22,
        width: '100%',
    },
    tagView: {                               // 무료제공서비스, 태그 담는 View
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '9.2%',
        width: '80%',
    },
    tagText: {                               // 무료제공서비스, 태그 담는 View
        fontSize: 14,
        color: '#4285F4',  
    },
    tagTextmargin: {                         // 태그 텍스트 스크롤뷰 마진
        width: 30,
    },
    houseRuleText:{                          // 숙소 이용규칙 제목 텍스트
        fontSize: 24,
        marginTop: '10%',
        paddingLeft: '10%',
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
    ruleAlertText: {                          // 숙소 이용규칙 패널디에 대한 텍스트
        fontSize: 14,
        width: 340,
        color: '#4285F4',
        marginTop: '5.5%',
        textAlign:'center',
    },
});


export default HouseInfoScreen;