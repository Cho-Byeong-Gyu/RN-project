import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import profileIMG from './Image/프로필_아이콘.png';
import reviewScoreIcon from './Image/별_아이콘.png';
import reviewMenuIcon from './Image/목록_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';
import houseIMG3 from './Image/여행지3.png';
import houseIMG4 from './Image/여행지4.png';
import houseIMG5 from './Image/여행지5.png';
import houseIMG6 from './Image/여행지6.png';
import houseIMG7 from './Image/여행지7.png';
import houseIMG8 from './Image/여행지8.png';
import houseIMG9 from './Image/여행지9.png';


class ReviewScreen extends Component {

  render() {

    return (
        <LinearGradient
        colors={['#E8ECFF', '#FFFFFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 1 }} 
        end={{ x: 0, y: 0}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.reservationText}> 박양순님의 거주지 </Text>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('후기작성')}>
                        <Text style={styles.reviewWriteText}> 후기작성 </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.reviewView}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileIMG} source={profileIMG}/>
                        <View style={styles.profileInfoView}>
                            <Text style={styles.profileName}> 김철수 </Text>
                            <Text style={styles.profileDetail}> 27세, 남성 </Text>
                        </View>
                        <View style={styles.reviewScoreView}>
                            <Image style={styles.reviewScore} source={reviewScoreIcon}/>
                            <Text style={styles.reviewScoreText}> 4.5 </Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.reviewMenu} source={reviewMenuIcon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.reviewIMGView}>
                    <ScrollView styels={styles.reviewIMGScrollView}showsHorizontalScrollIndicator={false} horizontal={true}>
                        <Image style={styles.reviewIMG} source={houseIMG1}/>
                        <Image style={styles.reviewIMG} source={houseIMG2}/>
                        <Image style={styles.reviewIMG} source={houseIMG3}/>
                        <Image style={styles.reviewIMG} source={houseIMG9}/>
                        <Image style={styles.reviewIMG} source={houseIMG8}/>
                    </ScrollView>
                    </View>

                    <View style={styles.reviewTextView}>
                        <Text style={styles.reviewText}>강원도에서 귀농생각중이라 체험해볼겸 1박2일로 여행 갔다왔는데 정말 좋네요. 
                            특히 어르신께서 오랜만에 오는 손님이라고 이것저것 엄청 챙겨주시고 65년 토박이라고 하시면서 
                            주변 볼거리들도 추천해줬는데 강원도에 이렇게 자연경관이 아름다운 곳이 있었나 감탄만 하고 왔습니다... 
                            그리고 시골이라 쾌적한 숙소는 사실 기대안했는데 생각보다 내부는 엄청 깔끔해서 너무 잘 잤습니다. 
                            근데 확실히 시골이라 벌레가 많긴하더라구요  참고하시면 좋을 것 같아요. </Text>
                    </View>
                </View>
       
                <View style={styles.reviewView}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileIMG} source={profileIMG}/>
                        <View style={styles.profileInfoView}>
                            <Text style={styles.profileName}> 이지수 </Text>
                            <Text style={styles.profileDetail}> 24세, 여성 </Text>
                        </View>
                        <View style={styles.reviewScoreView}>
                            <Image style={styles.reviewScore} source={reviewScoreIcon}/>
                            <Text style={styles.reviewScoreText}> 5 </Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.reviewMenu} source={reviewMenuIcon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.reviewIMGView}>
                    <ScrollView styels={styles.reviewIMGScrollView}showsHorizontalScrollIndicator={false} horizontal={true}>
                        <Image style={styles.reviewIMG} source={houseIMG4}/>
                        <Image style={styles.reviewIMG} source={houseIMG5}/>
                    </ScrollView>
                    </View>

                    <View style={styles.reviewTextView}>
                        <Text style={styles.reviewText}>생각보다 내부가 깔끔했고 어르신이 요리를 너무 잘하셔서 놀랬어요
                             자연즐기면서 쉬고싶은분들은 꼭 한번 가보세요!</Text>
                    </View>
                </View>
       
                <View style={styles.reviewView}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileIMG} source={profileIMG}/>
                        <View style={styles.profileInfoView}>
                            <Text style={styles.profileName}> 박희수 </Text>
                            <Text style={styles.profileDetail}> 34세, 남성 </Text>
                        </View>
                        <View style={styles.reviewScoreView}>
                            <Image style={styles.reviewScore} source={reviewScoreIcon}/>
                            <Text style={styles.reviewScoreText}> 4 </Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.reviewMenu} source={reviewMenuIcon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.reviewIMGView}>
                    <ScrollView styels={styles.reviewIMGScrollView}showsHorizontalScrollIndicator={false} horizontal={true}>
                        <Image style={styles.reviewIMG} source={houseIMG8}/>
                    </ScrollView>
                    </View>

                    <View style={styles.reviewTextView}>
                        <Text style={styles.reviewText}>강원도 주변 시골스테이중에서 이 어르신집이 짱입니다. 
                            강원도 주변 시골스테이에서 리뷰가 가장 많은 이유가 있습니다. </Text>
                    </View>
                </View>
       
                <View style={styles.reviewView}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileIMG} source={profileIMG}/>
                        <View style={styles.profileInfoView}>
                            <Text style={styles.profileName}> 박희수 </Text>
                            <Text style={styles.profileDetail}> 34세, 남성 </Text>
                        </View>
                        <View style={styles.reviewScoreView}>
                            <Image style={styles.reviewScore} source={reviewScoreIcon}/>
                            <Text style={styles.reviewScoreText}> 4 </Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.reviewMenu} source={reviewMenuIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.reviewTextView}>
                        <Text style={styles.reviewText}> 좋네여 </Text>
                    </View>
                </View>
       
                <View style={styles.reviewView}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileIMG} source={profileIMG}/>
                        <View style={styles.profileInfoView}>
                            <Text style={styles.profileName}> 김석진 </Text>
                            <Text style={styles.profileDetail}> 27세, 남성 </Text>
                        </View>
                        <View style={styles.reviewScoreView}>
                            <Image style={styles.reviewScore} source={reviewScoreIcon}/>
                            <Text style={styles.reviewScoreText}> 4.5 </Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.reviewMenu} source={reviewMenuIcon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.reviewIMGView}>
                    <ScrollView styels={styles.reviewIMGScrollView}showsHorizontalScrollIndicator={false} horizontal={true}>
                        <Image style={styles.reviewIMG} source={houseIMG7}/>
                        <Image style={styles.reviewIMG} source={houseIMG6}/>
                        <Image style={styles.reviewIMG} source={houseIMG9}/>
                    </ScrollView>
                    </View>

                    <View style={styles.reviewTextView}>
                        <Text style={styles.reviewText}> 강원도 집밥으론 원탑입니다. </Text>
                    </View>
                </View>

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
    titleView: {                   // 뒤로가기버튼, 예약하기 텍스트 담는 View
        flex: 0,
        flexDirection: 'row',
        alignItems: 'flex-end', 
        justifyContent: 'flex-start',
        marginLeft: '4.4%',
        width: '100%',
        height: 50,
        // backgroundColor: 'yellow',
        
    },  
    backBtnIcon: {                  // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 26,
        height: 26,
        // marginRight:'2%',
        // backgroundColor: 'green',
        
    },
    reservationText: {              // 후기 제목 텍스트  (박양순님의 거주지)
        fontSize: 24,
        width: '66%',
        // backgroundColor: 'white',
    },  
    reviewWriteText: {              // 후기 작성하기 버튼 텍스트
        fontSize:20,
    },
    reviewView: {                   // 후기들 담는 View
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8%',
        // backgroundColor: 'gray',

    },  
    profileView: {                  // 프로필 정보 담는 View
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '98%',
        marginBottom: '5%',
        // backgroundColor: 'yellow',
    },
    profileIMG: {                         // 프로필 사진
        width: 50,
        height:50,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
    },
    profileInfoView: {                    // 프로필 정보 (이름, 나이, 성별) 담는 View
        flexDirection: 'column',
        justifyContent: 'center',
        width: '62%',
        // backgroundColor: 'white',
    },
    profileName: {                        // 프로필 이름(김철수) 텍스트 
        fontSize: 18,
        marginLeft: '2%',
        color: '#8D8D8D',
    },
    profileDetail: {                      // 프로필 세부 정보 (27세, 남성) 텍스트
        fontSize: 12,
        marginLeft: '3%',
        color: '#8D8D8D',
        marginBottom: '1.5%',
    },
    reviewScoreView: {                    // 후기 평점 및 평점 점수 텍스트 담는 View
        flexDirection: 'row',
        width:'16%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewScore: {                        // 후기 평점 별 아이콘
        width: 20,
        height: 20,
        opacity: 0.5,
    },
    reviewScoreText: {                    // 후기 평점 텍스트
        fontSize: 18,
    },
    reviewMenu: {                         // 후기 수정 및 삭제 버튼 담는 목록 아이콘
        width: 28,
        height: 28,
        opacity: 0.6,
    },
    reviewIMGView: {                       // 리뷰 이미지 담는 Scroll View 대신 스타일링
        width: '98%',
    },
    reviewIMGScrollView: {                 // 후기 이미지 담는 스크롤 뷰
        flexDirection: 'row',
    },
    reviewIMG: {                           // 리뷰 이미지 
        width: 160,
        height: 160,
    },
    reviewTextView: {                      //  후기 본문 담는 View
        width: '98%',
        marginTop: '5%',
    },
    reviewText: {                          // 후기 본문 내용 텍스트
        fontSize: 16,
    },
    barMargin: {                    // 스클롤 탭바 마진
        height: 40,
    },
    

});

export default ReviewScreen;