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

    state = {

        places: [                                   // 목록에 띄울 데이터들 관
            { id: 1, name: "김갑순님의 거주지", address:'강원도 속초시 신림면', streetAddress: '강원도 속초시 중도문길 95', reviewScore: "4.2", reviewCount: 48, imageUrl: require('./Image/여행지1.png'), favoriteState: true, price: 43000, reservaionState: false, clearReservation: false, phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "#와이파이 #침대, 욕실, 음료, 세면도구, 드라이기 # 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 2, name: "김경민님의 거주지", address:'강원도 원주시 신림면', streetAddress: '강원도 원주시 신림면 치악로 28',reviewScore: "3.8", reviewCount: 23, imageUrl: require('./Image/여행지2.png'), favoriteState: true, price: 38000, reservaionState: false,  clearReservation: false, phoneNumber: '010-6543-4567', clearReservation: false, maximumGuestNumber: 3, freeService:  "##음료 #세면도구, 드라이기 #냉장고", introText: "강원도에서 나고 자라서 서울에서 직장생활하고 다시 귀농하러 온지 2년째입니다. 귀농 생활 미리 체험해보고 싶은분들 많이 놀러와주세요!"},
            { id: 3, name: "강진석님의 거주지", address:'강원도 철원군 동송읍', streetAddress: '강원도 철원군 동송읍 양지길 45',reviewScore: "4.0", reviewCount: 31, imageUrl: require('./Image/여행지3.png'), favoriteState: false, price: 88000, reservaionState: false,  clearReservation: false, phoneNumber: '010-4321-5678', clearReservation: false, maximumGuestNumber: 2,  freeService:  ",,#와이파이, #음료, 세면도구, 드라이기# 냉장고", introText: "3회 숙식제공은 힘들어서 아침만 식사제공해드리고 점심,저녁은 주변 맛집 추천해드립니다. "},
            { id: 4, name: "오진태님의 거주지", address:'강원도 강릉시 옥계면', streetAddress: '강원도 강릉시 입암로 16-21 ', reviewScore: "4.4", reviewCount: 18, imageUrl: require('./Image/여행지4.png'), favoriteState: true, price: 26000, reservaionState: false,  clearReservation: false, phoneNumber: '010-5678-9876', clearReservation: false, maximumGuestNumber: 4,  freeService:  ",,##와이파이, 세면도구, 드라이기, 냉장고", introText: "겉은 허름해보여도 내부는 깔끔하고 근방에서 가장 관리 잘 된 집입니다."},
            { id: 5, name: "박경숙님의 거주지", address: '경상남도 부산광역시 김해시 진영읍', streetAddress: '강원도 속초시 중도문길 95', reviewScore: "4.2", reviewCount: 66, imageUrl: require('./Image/여행지5.png'), favoriteState: false, price: 40000, reservaionState: true,  clearReservation: true,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 7, name: "이창민님의 거주지", address:'경상남도 부산광역시 금정구 구서2동',streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지6.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 9, name: "오경숙님의 거주지", address:'경상북도 울산광역시 울주군 둔기리', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지8.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 8, name: "양민우님의 거주지", address:'전라남도 전주시 덕진구', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지7.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 10, name: "이정민님의 거주지", address:'경기도 화성시 남양읍', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지9.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 11, name: "박범석님의 거주지", address:'제주도 서귀포시 남원읍', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지10.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 12, name: "황진영님의 거주지", address:'전라남도 광주광역시 북구 오치1동', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지11.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 13, name: "박우석님의 거주지", address:'전라남도 나주시 영강동', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지12.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false ,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 14, name: "이현숙님의 거주지", address:'충천남도 공주시 우성면', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지13.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 15, name: "황지석님의 거주지", address:'충천남도 아산시 신창면 남성리', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지14.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
            { id: 16, name: "이미연님의 거주지", address:'충천남도 당진시 순성면', streetAddress: '강원도 속초시 중도문길 95',reviewScore: "4.6", reviewCount: 20, imageUrl: require('./Image/여행지15.png'), favoriteState: false, price: 54000, reservaionState: false,  clearReservation: false,phoneNumber: '010-1122-3344', clearReservation: false , maximumGuestNumber: 2, freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드려요."},
        ],
    }
    
    placeInfoDelivery = (houseId) => {             // 간편예약버튼 클릭시 해당 숙소 정보를 같이 보내 예약화면으로 이동
        this.props.navigation.navigate('예약', { houseId: houseId });
    }


   
    
    render() {

        const { houseId } = this.props.route.params;
        const { places } = this.state;

        const filteredPlaces = places.filter(place => place.id === houseId);
        

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

                                {filteredPlaces.map((place) => (
                                    <ImageBackground key={place.id} style={styles.houseIMG} source={place.imageUrl}>
                                        <TouchableOpacity style={styles.fixedBackButton} onPress={() => this.props.navigation.goBack()}>
                                            <Image style={styles.backBtnIcon} source={backBtnIMG}/>  
                                        </TouchableOpacity>
                                    </ImageBackground>
                                ))}
               

                    </ScrollView>

                </View>

                <View> 
                    {filteredPlaces.map(place => (
                    <View key={place.id}>
                        <View style={styles.houseName}>
                            <Text style={styles.houseNameText}>{place.name}</Text>
                        </View>
                        <View style={styles.houseReviewView}>
                            <TouchableOpacity style={styles.houseReview} onPress={ ()=>this.props.navigation.navigate('후기', { name: place.name })}>
                                <Image style={styles.houseReviewIcon} source={HouseReviewIconIMG} />
                                <Text style={styles.houseReviewText}>{place.reviewScore} ({place.reviewCount}개의 후기)</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.introView} >
                            <Text style={styles.introText}>소개글</Text>
                            <Text style={styles.houseIntroText}>{place.introText}</Text>
                        </View>
                        <View>
                            <Text style={styles.hostAttention}>최대 인원</Text>
                            <Text style={styles.hostAttentionText}>{place.maximumGuestNumber}명</Text>
                        </View>
                        <View>
                            <Text style={styles.tagTextView}>무료 제공 서비스</Text>
                            <View style={styles.tagView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {place.freeService.replace(/^[\s#,\s]*/, '').split(/[\s#,]+/).map((service, index) => (
                                        <Text key={index} style={styles.tagText}> #{service.trim()}</Text>
                                    ))}
                                    <Text style={styles.tagTextmargin}> </Text>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.locationView} >
                            <View style={styles.mapView}>
                                <Text style={styles.location}>숙소 위치</Text>
                                <TouchableOpacity style={styles.mapTouchView}>
                                    <Text style={styles.map} onPress={() => alert('API버전 호환에러 고치는중')}>지도 보기</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.locationText}>{place.address} ({place.streetAddress})</Text>
                            <Image style={styles.locationMap} source={mapIMG}></Image>
                        </View>
                        <View>
                            <Text style={styles.phoneNumber}>연락처</Text>
                            <Text style={styles.phoneNumberText}>{place.phoneNumber}</Text>
                        </View>
                    </View>
                    ))}


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
                    <TouchableOpacity style={styles.reservationBtn} onPress={this.placeInfoDelivery}>
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
        marginTop: '8%',
        paddingLeft: '10.5%',
        fontSize: 22,
        width: '100%',
    },  
    houseIntroText: {                          // 숙소 소개글 본문 텍스트
        marginTop: '2.2%',
        fontSize: 16,
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
        marginTop: '12%',
        fontSize: 22,
        // marginLeft: '1%',
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
        width: '88%',
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
        marginTop: '3.3%',
        fontSize: 22,
        paddingLeft: '1%',
        // backgroundColor: 'yellow'
        
    },
    phoneNumberText: {                         // 010-0000-0000 텍스트          
        marginTop: '2.2%',
        marginLeft: '10%',    
        fontSize: 19,
        paddingLeft: '1%',
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
        height: 120,
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


export default HouseInfoScreen;