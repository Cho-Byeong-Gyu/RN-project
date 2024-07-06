import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import profileIMG from './Image/프로필_아이콘.png';
import nextBtnIMG from './Image/Next버튼_아이콘.png';

class MyInfoModifyScreen extends Component {

    state={
        name: '김갑순',
        gender: '여자',
        age: '64세',
        email: 'rkqtns61@gmail.com',
        phoneNumber: '010-1234-5678',
        birthday: '1961년 7월 28일',
        profile: profileIMG,
    }

    addImage = () => {

        launchImageLibrary({}, response => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.assets[0].uri };
                    this.setState({ profile: source });
                }
            });
    };

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
                            <Image style={styles.profileIMG} source={this.state.profile}/>
                        </TouchableOpacity>    
                        <View style={styles.columnLayout}>
                        <Text style={styles.nameInfo}> {this.state.name}</Text>
                        <TouchableOpacity onPress={this.addImage}>
                            <Text style={styles.changeIMGText}> 프로필 사진 변경하기</Text>
                        </TouchableOpacity>
                        </View>
                    </View>     

                    <View styel={styles.InfoView}>
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>이름</Text>
                            <Text style={styles.infoInputText}> {this.state.name} </Text>
                        </View>

                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>이메일</Text>
                            <Text style={styles.infoInputText}> {this.state.email} </Text>
                        </View>

                        {/* <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>나이</Text>
                            <Text style={styles.infoInputText}> {this.state.age} </Text>
                        </View>
       
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>성별</Text>
                            <Text style={styles.infoInputText}> {this.state.gender} </Text>
                        </View>
        */}
                        <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>연락처</Text>
                            <Text style={styles.infoInputText}> {this.state.phoneNumber} </Text>
                        </View>
       
                        {/* <View style={styles.infoRowLayout}>
                            <Text style={styles.infoText}>출생 연도</Text>
                            <Text style={styles.infoInputText}> {this.state.birthday} </Text>
                        </View> */}
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
        width: '88%',
        alignItems: 'top',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: '4.4%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'gray',
        alignItems: 'center',
        paddingBottom: '12%',
        // backgroundColor:'gray',
    },
    profileIMGView:{            // 프로필 사진 담는 View
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1.5,
        margin: '7%',
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
        color: '#606060',
        marginTop: '22%',
    },
    changeIMGText: {                     // 프로필사진 변경하기 텍스트
        color: '#4285F4',   
        fontSize: 14,
        marginTop: '3.3%',
    },
    InfoView:{                           // 프로필 정보 담는 View (프로필사진 아래부분) 
        alignItems: 'center',
        width: '94%',
    },
    infoRowLayout:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        width:'92%',
        // backgroundColor:'gray',
    },
    infoText:{                           // 이름, 나이등 텍스트
        fontSize: 20,
        marginTop: '12%',
        width: '26%',
        // backgroundColor:'yellow',
    },
    infoInputText: {                     // 박양순, 64세등 텍스트
        fontSize: 18,
        marginTop: '5%',
        width: '66%',
        backgroundColor:'white',
        textAlign: 'right',
    },

    logoutView:{                         // 로그아웃 텍스트 담는 View
        marginTop: '1%',
        width: '92%',        
        alignItems: 'flex-end',
    },
    logoutText:{                        // 로그아웃 텍스트
        color: '#4285F4',
        fontSize: 20,
        marginTop: '4.4%',
    },
});

export default MyInfoModifyScreen;
