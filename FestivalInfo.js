import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';

class FestivalInfoScreen extends Component {

    state = {
        places: [                                   // 목록에 띄울 주변 숙소 컨텐츠 데이터들 
            { id: 1, 
                name: "김갑순님의 거주지",
                address:'강원도 속초시 신림면', 
                reviewScore: "4.2", 
                reviewCount: 48, 
                imageUrl: require('./Image/여행지1.png'), 
                favoriteState: true, 
                price: 43000, 
                reservaionState: false, 
                clearReservation: false },
        ],
        
        festivals: [                                   // 목록에 띄울 주변 축제 컨텐츠 데이터들
            { id: 1,
                name: "제주 민속촌 메밀꽃 축제", 
                address:'제주민속촌', 
                streetAddress: '제주도 서귀포시 표선면 민속해안로 631-34',  
                imageUrl: require('./Image/축제1.png'), 
                homepages: "https://www.mcst.go.kr/kor/main.jsp", 
                tel:'02-2602-8602', 
                introText: "메밀꽃 축제기간에 민속촌을 방문하면 제주초가를 배경으로 새하얗게 만개한 메밀꽃을 만나 볼 수 있고, 페이스 페인팅과 삐에로 풍선 아트 공연도 진행"},
        ],
    }
    
    placeInfoDelivery = (festivalId) => {             // 간편예약버튼 클릭시 해당 숙소 정보를 같이 보내 예약화면으로 이동
        this.props.navigation.navigate('예약', { festivalId: festivalId });
    }
   
    
    render() {

        const { festivalId } = this.props.route.params;
        const { festivals } = this.state;

        const filteredPlaces = festivals.filter(festival => festival.id === festivalId);
        

        return (
        <LinearGradient
        colors={['#E8ECFF', '#FFFFFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.8}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.houseIMGView}  >
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {filteredPlaces.map((festival) => (
                            <ImageBackground key={festival.id} style={styles.houseIMG} source={festival.imageUrl}>
                                <TouchableOpacity style={styles.fixedBackButton} onPress={() => this.props.navigation.goBack()}>
                                    <Image style={styles.backBtnIcon} source={backBtnIMG}/>  
                                </TouchableOpacity>
                            </ImageBackground>
                        ))}
                    </ScrollView>
                </View>
                <View> 
                    {filteredPlaces.map(festival => (
                    <View key={festival.id}>
                        <View style={styles.houseName}>
                            <Text style={styles.houseNameText}>{festival.name}</Text>
                        </View>
                        <View style={styles.introView} >
                            <Text style={styles.introText}>축제 정보</Text>
                            <Text style={styles.houseIntroText}>{festival.introText}</Text>
                        </View>
                        <View style={styles.introView} >
                            <Text style={styles.introText}>홈페이지 주소</Text>
                            <Text style={styles.houseIntroText}>{festival.homepages} </Text>
                        </View>
                        <View >
                            <Text style={styles.phoneNumber}>문의 전화</Text>
                            <Text style={styles.phoneNumberText}>{festival.tel}</Text>
                        </View>
                        <View style={styles.locationView} >
                            <View style={styles.mapView}>
                                <Text style={styles.location}>축제 장소</Text>
                                <TouchableOpacity style={styles.mapTouchView}>
                                    <Text style={styles.map} onPress={() => alert('API버전 호환에러 고치는 중')}>지도 보기</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.locationText}>{festival.address} ({festival.streetAddress})</Text>
                            {/* <Image style={styles.locationMap} source={mapIMG}></Image> */}
                            <MapView
                                provider={PROVIDER_GOOGLE} 
                                initialRegion={{
                                latitude: 37.541,
                                longitude: 126.986,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}
                                style={styles.locationMap}
                            />
                        </View>
                    </View>
                    ))}

                    <View style={styles.barMargin}><Text> </Text></View>
                </View>

            </View>
            </ScrollView>
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
        marginLeft: '8%',
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
        marginTop: '1.5%',
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
        marginTop: '12%',
        paddingLeft: '10.5%',
        fontSize: 22,
        width: '100%',
    },  
    houseIntroText: {                          // 숙소 소개글 본문 텍스트
        marginTop: '2.2%',
        fontSize: 17,
        width: 358,
        // backgroundColor: 'gray',
    },
    locationView: {                            // 숙소 위치 도로명과 미리보기 화면 담는 View
        alignItems: 'flex-start',
        paddingLeft: '9.8%',    
    },
    mapView: {                                 // 숙소위치 제목 텍스트와 지도보러가기 텍스트 가로배치로 담는 View
        flexDirection: 'row',
        alignitems: 'center',
        // backgroundColor:'gray',
    },
    location: {                                // 숙소 위치 텍스트
        width: '70%',
        marginTop: '14%',
        fontSize: 22,
        marginLeft: '1%',
        // backgroundColor:'yellow',
    },
    mapTouchView: {                            // 지도 보러가기 터치 View
        marginTop: '14.5%',
        width: '26%',
    },
    map: {                                     // 지도 보기 텍스트
        fontSize: 16,
        color: '#4285F4',
        width: '100%',
        // backgroundColor: 'green'
    },
    locationText: {                            // 도로명 본문 텍스트          
        marginLeft: '1.5%',
        width: '86%',
        marginTop: '5.5%',
        fontSize: 18,
        // backgroundColor: 'yellow'
    },
    locationMap: {                             // 지도 미리보기 화면
        width: '68%',
        height: 210,    
        marginLeft: '2.2%',
        borderRadius: 15,
        marginTop: '10%',
        marginBottom: '10%',
        // backgroundColor: 'yellow'
    },
    phoneNumber: {                             // 연락처 텍스트
        marginLeft: '10%',
        marginTop: '14%',
        fontSize: 22,
        paddingLeft: '1%',
        // backgroundColor: 'yellow'
        
    },
    phoneNumberText: {                         // 010-0000-0000 텍스트          
        marginTop: '2.2%',
        marginLeft: '10%',    
        fontSize: 19,
        paddingLeft: '1.3%',
        // backgroundColor: 'yellow'

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
        elevation: 5,                       
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
        fontSize: 18,
        marginBottom: '1.5%',
    },
    arrowIcon: {                              // 화살표 아이콘     
        width: 24,
        height: 24,
        marginLeft: '4%',
    },
    barMargin: {                             // ScrollView 탭바에 대한 마진
        height: 30,
    },
    hostAttention:{                          // '최대 인원' 텍스트
        marginTop: '11%',
        marginLeft: '9.5%',
        fontSize: 22,
        width: '100%',
    },
    hostAttentionText: {                     // 최대인원 본문 값 텍스트 (2명)
        marginTop: '1.5%',
        marginLeft: '10%',
        fontSize: 20,
        color: '#4285F4',
    },

    tagTextView:{                            // 무료제공 서비스, 이런건 챙겨와주세요! 
        marginTop: '11%',
        paddingLeft: '10%',
        fontSize: 22,
        width: '100%',
    },
    tagView: {                               // 무료제공서비스, 태그 담는 View
        flexDirection: 'row',
        marginTop: '2.5%',
        marginLeft: '9.2%',
        width: '78%',
        // backgroundColor: 'yellow',
    },
    tagText: {                               // 무료제공서비스, 태그 담는 View 텍스트
        fontSize: 18,
        color: '#4285F4',  
    },
    tagTextmargin: {                         // 태그 텍스트 스크롤뷰 마진
        width: 30,
    },
    houseRuleText:{                          // 숙소 이용규칙 제목 텍스트
        fontSize: 24,
        marginTop: '22%',
        paddingLeft: '10%',
    },
    columnMiidle:{                           // 가로 가운데 정렬 - 숙소 이용규칙 본문담는 View 가운데 정렬
        alignItems: 'center',
    },
    houseRuleView: {                          // 숙소 이용규칙 본문 담는 View
        marginTop: '4.4%',
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


export default FestivalInfoScreen;