import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//이미지
import backBtnIMG from './Image/뒤로가기_아이콘.png';
import FavoriteIconIMG from './Image/즐겨찾기_아이콘.png';
import housePlusIconIMG from './Image/추가_아이콘.png';
import houseIMG1 from './Image/여행지1.png';
import houseIMG2 from './Image/여행지2.png';
import houseIMG3 from './Image/여행지3.png';
import houseIMG4 from './Image/여행지4.png';
import houseIMG5 from './Image/여행지5.png';
import houseIMG6 from './Image/여행지6.png';
import houseIMG7 from './Image/여행지7.png';
import houseIMG8 from './Image/여행지8.png';
import houseIMG9 from './Image/여행지9.png';

class SearchScreen extends Component {
    
  state = {
    searchText: '',
    isFavorite: false,
  }
    
    onChangeInput = (event)=>{
        this.setState({
            searchText: event 
        })
    }

  render() {

    return (
        <LinearGradient
        colors={['#E8ECFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0.88 }} 
        end={{ x: 0, y: 0 }} >
            <ScrollView 
            style={styles.background} 
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.titleView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.backBtnIcon} source={backBtnIMG} />  
                    </TouchableOpacity>
                    <TextInput style={styles.input} 
                        placeholder='시골여행 / 농촌체험' 
                        placeholderTextColor="#979797"
                        value={this.state.searchText} 
                        onChangeText={this.onChangeInput}/>
                </View>
              
                <ScrollView  
                style={styles.filterView} 
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                    <TouchableOpacity style={styles.filterTouch}>
                        <Text style={styles.filterBtn}> 지역 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterTouch}>
                        <Text style={styles.filterBtn}> 기간 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterTouch}>
                        <Text style={styles.filterBtn}> 관심도</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterTouch}>
                        <Text style={styles.filterBtn}> 가격 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterTouch}>
                        <Text style={styles.filterBtn}> 필터링 </Text>
                    </TouchableOpacity>
                </ScrollView>


                <TouchableOpacity style={styles.content} onPress={() => this.props.navigation.navigate('숙소정보')} >
                    <Image style={styles.houseIMG} source={houseIMG1}></Image>
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
                    <Image style={styles.houseIMG} source={houseIMG2}></Image>
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
                    <Image style={styles.houseIMG} source={houseIMG3}></Image>
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

            <TouchableOpacity style={styles.fixedButton}  onPress={() => this.props.navigation.navigate('숙소등록')}>
                <Image style={styles.housePlusIcon} source={housePlusIconIMG}/>  
            </TouchableOpacity>
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
    titleView: {                   // 뒤로가기버튼, 검색창 담는 View
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: 80,
        
    },  
    backBtnIcon: {                  // 뒤로가기 버튼
        resizeMode: 'contain',
        opacity: 0.38,
        width: 30,
        height: 30,
        marginRight:'2%',
        
    },
    input: {                        // 검색창
        width: '80%',
        height: 40,
        marginRight:'3%',
        borderRadius: 50, 
        backgroundColor: 'white',
        elevation: 2.2, 
        fontSize: 13,
        paddingLeft: 16,
    },
    filterView: {                   // 필터 컴포넌트 담는 View
        width: '90%',
        height: 40,
        marginBottom: '1.5%',
        // backgroundColor: 'gray',
    },
    filterTouch: {                  // 필터 TouchableOpacity View
        justifyContent: 'center',
        height: 40,
        // backgroundColor: 'blue',
        marginHorizontal: 7, // 각 필터 버튼의 좌우 마진
    },
    filterBtn: {                    // 필터 버튼
        height: 32,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        fontSize: 16,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#CBCBCB',
    },
    content: {                      // 검색 리스트 컴포넌트
        width: 370,
        height: 120,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: '3.3%',
        borderRadius: 20,
        elevation: 1,
    },
    houseIMG:{                      // 숙소 이미지
        alignItems: 'center',
        borderRadius: 10, 
        width: 100,
        height: 100,
        resizeMode: 'cover',
        margin: '2%',
    },
    houseInfo: {                    // 숙소정보 Text담는 View
        flex: 0,
        width: '53%',
        height: '100%',
    },
    houseName:{                     // 숙소명
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: 2,
    },
    houseAddress: {                 // 숙소주소
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2,
    },
    houseReview: {                  // 숙소리뷰
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },
    FavoriteView:{                  // 즐겨찾기 아이콘 터치 범위 View
        width: 50,
        height: 50,
    },
    IconLayout: {                   // 아이콘 터치스크린에서 가운데 정렬하는 View
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    FavoriteIcon: {                 // 즐겨찾기 아이콘
        width: 26,
        height: 26,
        resizeMode: 'cover',
    },
    barMargin: {                    // 스클롤 탭바 마진
        height: 75,
    },
    fixedButton: {                  // 숙소등록 버튼 고정시키는 View
        position: 'absolute',
        bottom: 90,
        right: 25,    
        height: 50,  
        width: 50,  
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 50,      
    },
    housePlusIcon: {                // 호스트 숙소등록 버튼
        height: 50,  
        width: 50,
        resizeMode: 'contain',
    }

});

export default SearchScreen;