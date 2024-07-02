import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import profileIMG from './Image/프로필_아이콘.png';
import nextBtnIMG from './Image/Next버튼_아이콘.png';

class MyInfoModifyScreen extends Component {
  render() {
    return (
        <LinearGradient
        colors={['#E8ECFF', '#FFFFFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.8}} >
            <ScrollView style={styles.background} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>                      
                <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <Text style={styles.myInfoText}> 내정보 수정</Text>
                </View>

                <View style={styles.myInfoCard}>     
                    <View style={styles.rowLayout}>
                        <TouchableOpacity style={styles.profileIMGView}>
                            <Image style={styles.profileIMG} source={profileIMG}/>
                        </TouchableOpacity>    
                        <View style={styles.columnLayout}>
                        <Text style={styles.nameInfo}> 박양순님 </Text>
                        <TouchableOpacity>
                            <Text style={styles.changeIMGText}> 프로필 사진 변경하기</Text>
                        </TouchableOpacity>
                        </View>
                    </View>     
                    <View>
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>이름</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>박양순</Text>

                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>나이</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>64세</Text>
       
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>성별</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>여자</Text>
       
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>연락처</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>010-1122-3344</Text>
       
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>거주지</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>경기도 ㅇㅇ시 ㅇㅇ구 ㅇㅇ동</Text>
       
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>출생 연도</Text>
                            <TouchableOpacity>
                            <Text style={styles.infoChangeBtn}> 수정하기</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.infoInputText}>1961년 5월 22일</Text>
                    </View>
                </View>



            </View>
            <View style={styles.logoutView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('홈')}>
                    <Text style={styles.logoutText}> 로그아웃 </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </LinearGradient> 
    )
  }
}

// 스타일 시트
const styles = StyleSheet.create({
    background: {               // 전체화면 세팅
        flex: 1,
    },
    linearGradient: {           // 그라데이션
        flex: 0,
        width: '100%',
        height: '100%',
    },
    container: {                // 컴포넌트 가운데 정렬 View
        alignItems: 'center', 
    },
    tabBar: {                   // 상단 네비게이션 View
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '100%',
    },
    backBtnIcon: {              // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 26,
        height: 26,
        marginTop: '5%',
        marginRight: '0.3%',
    },
    myInfoText: {               // 내정보 텍스트  
        marginBottom: '0.5%',
        fontSize: 28,
        width: '88%',
    },  
    myInfoCard: {               // 프로필 카드 View
        width: '92%',
        height: 720,
        alignItems: 'top',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: '2.8%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'gray',
    },
    profileIMGView:{            // 프로필 사진 담는 View
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1.5,
        margin: '5%',
    },
    profileIMG: {               // 프로필 사진
        borderRadius: 50,
        width: '100%',
        height: '100%',
        resizeMode: 'cover,',
    },
    columnLayout: {                     // 아이템들 세로로 배열
        // backgroundColor: 'gray',
        flexDirection: 'column',
        width:'60%',
        height: 140,
    },
    rowLayout: {                         // 아이템들 가로로 배열
        flexDirection: 'row',
    },
    nameInfo: {                          // 프로필 이름 텍스트
        fontSize: 22,
        color: 'black',
        marginTop: '22%',
    },
    changeIMGText: {                     // 프로필사진 변경하기 텍스트
        color: '#4285F4',   
        fontSize: 14,
        marginTop: '3.3%',
    },
    infoRowLayout:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    infoText:{                           // 이름, 나이등 텍스트
        fontSize: 22,
        marginTop: '8%',
        width: '72%',
    },
    infoInputText: {                     // 박양순, 64세등 텍스트
        fontSize: 14,
        marginTop: '1.5%',
        marginLeft: '7%',
    },
    infoChangeBtn:{                      // 수정하기 버튼
        color: '#4285F4',
        alignItems: 'flex-end',
        marginRight: '7%',
    },
    
    
    logoutView:{                         // 로그아웃 텍스트 담는 View
        marginTop: '1%',
        width: '92%',        
        alignItems: 'flex-end',
    },
    logoutText:{                        // 로그아웃 텍스트
        color: '#4285F4',
        fontSize: 16,
        marginTop: '1.1%',
    },
});

export default MyInfoModifyScreen;
