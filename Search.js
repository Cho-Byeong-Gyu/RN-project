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
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('홈')}>
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
                    <Text style={styles.filterBtn}> 지역 </Text>
                    <Text style={styles.filterBtn}> 기간 </Text>
                    <Text style={styles.filterBtn}> 관심온도 </Text>
                    <Text style={styles.filterBtn}> 가격 </Text>
                    <Text style={styles.filterBtn}> 필터링 </Text>
                    <Text style={styles.filterBtn}></Text>
                    <Text style={styles.filterBtn}></Text>
                </ScrollView>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG1}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG2}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG3}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG4}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG5}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG6}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG7}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG8}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>
               
                <View style={styles.content}>
                    <Image style={styles.houseIMG} source={houseIMG9}></Image>
                    <View style={styles.houseInfo}>
                        <Text style={styles.houseName}> ㅇㅇㅇ님의 거주지</Text>
                        <Text style={styles.houseAddress}> 상세주소</Text>
                        <Text style={styles.houseReview}> 평점(후기)</Text>
                    </View>
                    <TouchableOpacity>
                    <Image 
                        style={styles.FavoriteIcon} 
                        source={FavoriteIconIMG}/>

                    </TouchableOpacity>
                </View>

                <View style={styles.barMargin}><Text> </Text></View>
            </View>
            </ScrollView>

            <TouchableOpacity style={styles.fixedButton} onPress={this.onFixedButtonPress}>
                <Image style={styles.housePlusIcon} source={housePlusIconIMG}/>  
            </TouchableOpacity>
        </LinearGradient> 
    )
  }
}

// 스타일 시트
const styles = StyleSheet.create({
  background: {
        flex: 1,
    },
    linearGradient: {
        flex: 0,
        width: '100%',
        height: '100%',
    },
    container : {
        alignItems: 'center', 
    },
    searchView: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        height: 80,
        
    },
    backBtnIcon: {
        resizeMode: 'contain',
        opacity: 0.38,
        width: 30,
        height: 30,
        marginRight:'2%',
        
    },
    input: {
        width: '80%',
        height: 40,
        marginRight:'3%',
        borderRadius: 50, 
        backgroundColor: 'white',
        elevation: 3, 
        fontSize: 13,
        paddingLeft: 16,
    },
    filterView: {
        width: '90%',
        height: 30,
        marginBottom: '1.5%',
    },
    filterBtn: {
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: '3%',
        borderRadius: 10, 
        fontSize: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    content: {
        width: 370,
        height: 120,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: '3.3%',
        borderRadius: 20,
    },
    houseIMG:{
        alignItems: 'center',
        borderRadius: 10, 
        width: 100,
        height: 100,
        resizeMode: 'cover',
        margin: '2%',
    },
    houseInfo: {
        flex: 0,
        width: '55%',
        height: '100%',
    },
    houseName:{
        width:'100%',
        textAlign: 'left',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: 2,
    },
    houseAddress: {
        width:'100%',
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2,
    },
    houseReview: {
        width:'100%',
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 4,
    },
    FavoriteIcon: {
        width: 26,
        height: 26,
        resizeMode: 'cover',
    },
    barMargin: {
        height: 75,
    },
    fixedButton: {
        position: 'absolute',
        bottom: 90,
        right: 25,    
        height: 50,  
        widtth: 50,  
        justifyContent: 'center', 
        alignItems: 'center',     
        borderRadius: 50,      
    },
    housePlusIcon: {
        height: 50,  
        width: 50,
        resizeMode: 'contain',
    }

});

export default SearchScreen;