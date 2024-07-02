import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import FavoriteIconIMG from './Image/체크된_즐겨찾기_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';
import houseIMG3 from './Image/여행지3.png';
import houseIMG4 from './Image/여행지4.png';
import houseIMG5 from './Image/여행지5.png';
import houseIMG6 from './Image/여행지6.png';
import houseIMG7 from './Image/여행지7.png';
import houseIMG8 from './Image/여행지8.png';
import houseIMG9 from './Image/여행지9.png';

class FavoriteListScreen extends Component {
  render() {
    return (
        <LinearGradient
        colors={['#E8ECFF', '#FFFFFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0.8 }} 
        end={{ x: 0, y: 0}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('홈')}>
                        <Image style={styles.backBtnIcon} source={backBtnIMG}/>  
                    </TouchableOpacity>
                    <Text style={styles.reservationStateText}> 나의 예약 현황 </Text>
                </View>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG3}></Image>
                    <View style={styles.Info}>
                        <Text style={styles.Name}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.Address}> 상세주소</Text>
                        <Text style={styles.review}> 평점 및 후기</Text>
                        <Text style={styles.reservationState}> 요청수락 대기중..</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.myFavoriteListText}> 내가 찜한 숙소 </Text>
             
                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG4}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG5}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG6}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG7}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG8}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG9}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity style={styles.FavoriteView}>
                      <View style={styles.IconLayout}>
                        <Image 
                            style={styles.FavoriteIcon} 
                            source={FavoriteIconIMG}/>
                      </View>
                    </TouchableOpacity>
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
    background: {                   // 전체화면 설정
        flex: 1,
    },
    linearGradient: {               // 그라데이션
        flex: 0,
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center', 
    },
    tabBar: {                       // 상단 네비게이션 View
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '100%',
    },
    backBtnIcon: {                   // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 24,
        height: 24,
        marginTop: '5%',
        marginRight: '0.3%',
    },
    reservationStateText: {         // 나의 예약 현황 텍스트  
        marginBottom: '0.5%',
        fontSize: 26,
        width: '88%',
    },  
    content: {                      // 예약된 숙소 
        width: 370,
        height: 120,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: '3.3%',
        borderRadius: 20,
        elevation: 1,
    },
    houseIMG: {                      // 숙소 이미지
        alignItems: 'center',
        borderRadius: 10, 
        width: 100,
        height: 100,
        resizeMode: 'cover',
        margin: '3%',
    },
    Info: {                          // 숙소데이터 담는 View
        flex: 0,
        width: '58%',
        height: '100%',
        marginBottom: '4%',
    },
    Name: {                          // 숙소명 텍스트
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginTop: '12%',
        color:'black',
    },
    Address: {                 // 상세주소 텍스트
        width:'100%',
        textAlign: 'left',
        fontSize: 10,
        marginLeft: 5,
    },
    review: {                       // 별점 및 후기 텍스트
        width:'100%',
        textAlign: 'left',
        fontSize: 10,
        marginLeft: 5,
        marginTop: 2,
    },
    reservationState: {             // '요청수락대기중'같은 예약 상태 표시 텍스트
        width:'100%',
        textAlign: 'left',
        fontSize: 14,
        marginLeft: 3,
        marginTop: 8,
    },
    myFavoriteListText: {           // 내가 찜한 숙소 텍스트  
        marginBottom: '0.5%',
        marginTop: '5%',
        fontSize: 26,
        width: '88%',
    },  
    houseInfo: {                    // 찜한숙소 정보 View
        flex: 0,
        width: '55%',
        height: '100%',
    },      
    houseName:{                     // 찜한숙소 이름                        
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: 2,
    },
    houseAddress: {                 // 찜한숙소 주소
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2,
    },
    houseReview: {                  // 찜한숙소 리뷰
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },
    FavoriteIcon: {                 // 찜버튼 아이콘
        width: 26,
        height: 26,
        resizeMode: 'cover',
    },

    barMargin: {                    // 스크롤 여백
        height: 75,
    },
});

export default FavoriteListScreen;
