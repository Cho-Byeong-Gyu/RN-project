import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import searchIconIMG from './Image/검색창_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';
import houseIMG3 from './Image/여행지3.png';
import festivalIMG1 from './Image/축제1.png';
import festivalIMG2 from './Image/축제2.png';
import festivalIMG3 from './Image/축제3.png';

class HomeScreen extends Component {

  state = {
    searchText: ''
  }
    
  onChangeInput = (event)=>{
    this.setState({
        searchText: event ,
        houseIMG: {houseIMG3},
    })
  }

  render() {
    return (
        <LinearGradient
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={searchIconIMG}/>  
                    <TextInput style={styles.input} 
                        placeholder='어디로 떠나고 싶으신가요?' 
                        placeholderTextColor="#979797"
                        value={this.state.searchText} 
                        onChangeText={this.onChangeInput}/>
                </View>
                <View style={styles.contents}>
                    <Text style={styles.ContentText}>오늘의 추천코스</Text>
                    <ScrollView 
                        style={styles.todayContents}  
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={houseIMG1}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                            <Text style={styles.houseAddress}> 상세주소</Text>
                            <Text style={styles.price}> 가격</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={houseIMG2}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㅁㅁㅁ님의 거주지</Text>
                            <Text style={styles.houseAddress}> 상세주소</Text>
                            <Text style={styles.price}> 가격</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={houseIMG3}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㄹㄹㄹ님의 거주지</Text>
                            <Text style={styles.houseAddress}> 상세주소</Text>
                            <Text style={styles.price}> 가격</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <Text style={styles.ContentText}>주변축제 정보</Text>
                
                   
                    <ScrollView 
                        style={styles.todayContents}  
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={festivalIMG1}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㅇㅇ축제</Text>
                            <Text style={styles.houseAddress}> 축제장소</Text>
                            <Text style={styles.price}> 상세정보 (거리,가격 등)</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={festivalIMG2}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㅁㅁ축제</Text>
                            <Text style={styles.houseAddress}> 축제장소</Text>
                            <Text style={styles.price}> 상세정보 (거리,가격 등)</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Image style={styles.houseIMG} source={festivalIMG3}></Image>
                            <TouchableOpacity style={styles.TouchView} onPress={() => this.props.navigation.navigate('숙소정보')}>
                            <Text style={styles.houseName}> ㄹㄹ제</Text>
                            <Text style={styles.houseAddress}> 축제장소</Text>
                            <Text style={styles.price}> 상세정보 (거리,가격 등)</Text>
                            </TouchableOpacity>
                        </View>
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
    houseIMG:{                      // 숙소이미지
        flex: 5,
        alignItems: 'center',
        borderRadius: 20, 
        width: '98%',
        margin: 5,
        resizeMode: 'cover',
    },
    houseName:{                     // 숙소명
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
    },
    houseAddress: {                 // 숙소 위치
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 10,
        marginTop: 2,
    },
    price: {                        // 숙소 가격
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },
    barMargin: {                    // ScrollView 탭바에 대한 마진
        height: 80,
    },
});

export default HomeScreen;