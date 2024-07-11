import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from '@react-native-community/geolocation';


//이미지
import searchIconIMG from './Image/검색창_아이콘.png';
import reviewIconIMG from './Image/회색_별_아이콘.png';
import checkFavoriteIconIMG from './Image/체크된_즐겨찾기_아이콘.png';
import FavoriteIconIMG from './Image/즐겨찾기_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지10.png';
import houseIMG3 from './Image/여행지11.png';
import festivalIMG1 from './Image/축제1.png';
import festivalIMG2 from './Image/축제2.png';
import festivalIMG3 from './Image/축제3.png';

class HomeScreen extends Component {

    state = {
        searchText: '',
        addr1: '',
        addr2: '',
    
        places: [                                   // 목록에 띄울 주변 숙소 컨텐츠들
            { id: 1, 
                name: "김갑순님의 거주지", 
                address:'강원도 속초시 도문동', 
                streetAddress: '강원도 속초시 중도문길 95', 
                reviewScore: "4.2", 
                reviewCount: 108, 
                imageUrl: require('./Image/여행지1.png'), 
                favoriteState: true, 
                price: '43000원', 
                reservaionState: false, 
                clearReservation: false , 
                maximumGuestNumber: '2명', 
                freeService: "와이파이, 침대, 욕실, 음료, 세면도구, 드라이기, 냉장고", 
                introText: "강원도 60년 토박이 생활로 어지간한 맛집, 관광지, 자연경관들은 꿰고 있고, 식사는 강원도 현지 음식으로 삼시세끼 대접해드립니다. 자세한 내용은 아래 연락처로 문의 부탁드립니다."},
        ],
       
        festivals: [                                   // 목록에 띄울 주변 축제 컨텐츠들
            { id: 1, 
                name: "제주 민속촌 메밀꽃 축제", 
                address:'제주민속촌', 
                streetAddress: '제주도 서귀포시 표선면 민속해안로 631-34',  
                imageUrl: require('./Image/축제1.png'), 
                homepages: "https://www.mcst.go.kr/kor/s_culture/festival/festivalView.jsp?pSeq=12498&pRo=7&pCurrentPage=2&pOrder=01up&pPeriod=&fromDt=&toDt=&pSido=&pSearchType=01&pSearchWord=", tel:'02-2602-8602', introText: "메밀꽃 축제기간에 민속촌을 방문하면 제주초가를 배경으로 새하얗게 만개한 메밀꽃을 만나 볼 수 있고, 페이스 페인팅과 삐에로 풍선 아트 공연도 진행"},
        ],

        
    }

    // async getFestivalList()  {                          // 주변 축제 정보 리스트 axios를 활용한 api 통신을 통해 서버로 부터 불러오기
    //     try {
    //         const data = {
    //             addr1: '경기도',
    //             addr2: '용인시',
    //           }
            
    //         const token = await getToken();
            
    //         const response = await axios.get('http://223.130.131.166:8080/api/v1/api/v1/festival/around', data ,{
    //             headers: { 'Authorization': `Bearer ${token}`}
    //         })
            
    //         console.log(response.data);
    //     } catch(error) {
    //         if (error.response) {
    //           console.log('Error status:', error.response.status);
    //           console.log('Error data:', error.response.data);
    //           console.log('Error headers:', error.response.headers);
    //         } else if (error.request) {
    //           console.log('No response received:', error.request);
    //         } else {
    //           console.log('Error message:', error.message);
    //         }
    //         console.log('Error config:', error.config);
    //       }
    // }


    onChangeInput = (event)=>{
        const trimmedText = event.replace(/\s+$/, '');
        this.setState({
            searchText: trimmedText,
        })
    }

    goToHomeSearch = () => {                   // 검색창에 입력한 textInput값을 같이 전달하여 홈전용 검색화면으로 전환 
        this.props.navigation.navigate('홈검색', { searchText: this.state.searchText, changeFavoriteState: this.changeFavoriteState});
    }

    placeInfoDelivery = (houseId) => {             // 숙소 컨텐츠 클릭시 해당 숙소 정보를 같이 보내 숙소정보화면으로 이동
        this.props.navigation.navigate('숙소정보', { houseId: houseId });
    }
   
    festivalInfoDelivery = (festivalId) => {             // 축제 컨텐츠 클릭시 해당 축제 정보를 같이 보내 축제정보화면으로 이동
        this.props.navigation.navigate('축제정보', { festivalId: festivalId });
    }
   

    // LocationService () {
    //     sendLocationData = async (coords) => {
    //         const { latitude, longitude } = coords;
    
    //         try {
    //             const response = await axios.post('https://your-api-url.com/location', {
    //                 x: longitude,
    //                 y: latitude
    //             }, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 }
    //             });
    //             console.log('Location data sent successfully:', response.data);
    //             this.setState({
    //                 latitude: latitude,
    //                 longitude: longitude,    
    //             })
    //         } catch (error) {
    //             console.error('Failed to send location data:', error);
    //         }
    //     }
    // }

  render() {


    return (
        <LinearGradient
        colors={['#E8ECFF', '#FFFFFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0.8 }} 
        end={{ x: 0, y: 0}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false} animationType="slide">
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={searchIconIMG}/>  
                    <TextInput style={styles.input} 
                        placeholder='어디로 떠나고 싶으신가요?' 
                        placeholderTextColor="#979797"
                        value={this.state.searchText} 
                        onChangeText={this.onChangeInput}
                        onSubmitEditing={this.goToHomeSearch}/>
                </View>
                <View style={styles.contents}>
                    <Text style={styles.ContentText}>주변 숙소 정보</Text>
                    <ScrollView 
                        style={styles.todayContents}  
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                        {    Geolocation.getCurrentPosition(
                            (position) => {
                            console.log(position);
                            },
                            (error) => {

                                console.log(error.code, error.message);
                            },
                            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                        )}


                        {this.state.places.map((place) => (    
                            <View key={place.id} style={styles.content}>
                                <Image source={place.imageUrl} style={styles.houseIMG}/>
                                <TouchableOpacity style={styles.TouchView} onPress={() => this.placeInfoDelivery(place.id)}>
                                    <View style={styles.houseReviewView}>
                                        <Text style={styles.houseName}>{place.name}</Text>
                                        <Text style={styles.housePrice}>₩{place.price}</Text>
                                    </View>
                                    <Text style={styles.houseAddress}>{place.address}</Text>
                                    <View style={styles.houseReviewView}>
                                        <Image style={styles.reviewIcon} source={reviewIconIMG} />
                                        <Text style={styles.houseReview}>{place.reviewScore}</Text>
                                        <Text style={styles.houseReview}>({place.reviewCount})</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}

                    </ScrollView>

                    <Text style={styles.ContentText}>주변 축제 정보</Text>

                    <ScrollView 
                        style={styles.todayContents}  
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {this.state.festivals.map((festival) => (    
                            <View key={festival.id} style={styles.content}>
                                <Image source={festival.imageUrl} style={styles.houseIMG}/>
                                <TouchableOpacity style={styles.TouchView} onPress={() => this.festivalInfoDelivery(festival.id)} >
                                    <View style={styles.houseReviewView}>
                                        <Text style={styles.festivalName}>{festival.name}</Text>
                                    </View>
                                    <Text style={styles.houseAddress}>{festival.address} ({festival.streetAddress})</Text>
                                    <View style={styles.houseReviewView}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>

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
    search: {                       // 검색창, 검색 아이콘 담는 View
        flex: 0,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '90%',
        height: 45,
        borderRadius: 50, 
        backgroundColor: 'white',
        elevation: 5, 
    },
    searchIcon: {                   // 검색창 검색 아이콘
        flex: 1,
        width: 20,
        height: 20,
        opacity: 0.5,
        paddingLeft: '5%',
        resizeMode: 'contain',
    },
    input: {                        // 검색창
        flex: 10,
        fontSize: 16,
        width: '75%',
        height: '100%',
        paddingRight: '5%',
        color: '#979797',
    },
    contents: {                     // 컨텐츠들 남는 ScrillView
        flex: 1,
        width: 370,
        height:'100%',
        // backgroundColor: 'gray'
    },
    ContentText:{                   // 컨텐츠 주제 Text
        fontSize: 25,
        height: 40,
        marginTop: '7%',
        marginLeft: '1.5%',
    },
    todayContents:{                 // 오늘의 추천코스 컨텐츠 담는 View
        flex: 1,
        width: 370,
        height: 330,
        borderRadius: 20, 
        marginTop: '3%',
      //  backgroundColor:'gray'
    },
    content: {                      // 오늘의 추천코스 컨텐츠담는 스크롤 한개단위 View
        flex: 1,
        width: 370,
        alignItems: 'center',
    },
    TouchView:{                     // 터치 View 이미지포함안되게 지정하는 View
        width:'100%',
        // backgroundColor: 'gray',
    },
    houseIMG: {                      // 숙소 이미지
        flex: 5,
        alignItems: 'center',
        borderRadius: 20, 
        width: '98%',
        resizeMode: 'cover',
    },
    houseName: {                        // 숙소명 텍스트
        width:'44.5%',
        textAlign: 'left',
        marginLeft: '2.2%',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },
    festivalName: {                        // 축제명 텍스트
        width:'64%',
        textAlign: 'left',
        marginLeft: '2.2%',
        fontSize: 20,
        // backgroundColor: 'yellow',
    },  
    festivalPrice: {                        // 축제 입장료 유뮤 텍스트
        width: '32%',
        fontSize: 22,
        textAlign: 'right',
        color: '#7E7E7E',
        // backgroundColor: 'green',
    },
    houseAddress: {                  // 찜한숙소 상세 주소
        textAlign: 'left',
        fontSize: 12,
        marginLeft: '2.2%',
        marginTop: 2,
        // backgroundColor: 'green',
    },
    houseReviewView: {              // 평점 아이콘, 평점 텍스트 담는 View
        flexDirection: 'row',
        alignItems:'center',
        marginTop: '1.1%',  
        alignItems: 'flex-start',
        // backgroundColor: 'gray',
    },
    houseReview: {                  // 찜한숙소 평점및 리뷰 갯수
        textAlign: 'left',
        fontSize: 12,
        marginLeft: '1.5%',
        color: '#777777',
        // backgroundColor: 'yellow',
    },
    reviewIcon:{                    // 리뷰 별 아이콘
        marginLeft: '2.2%',
        marginTop: '0.8%',
        width: 11,
        height: 11,
        // backgroundColor: 'yellow',
    },
    housePrice:{                    // 숙소 가격
        width: '48%',
        fontSize: 22,
        marginLeft: '3.3%',
        color: '#7E7E7E',
        // fontWeight: 'bold',
        textAlign: 'right',
        // backgroundColor: 'yellow',
    },
    barMargin: {                    // ScrollView 탭바에 대한 마진
        height: 80,
    },
});

export default HomeScreen;