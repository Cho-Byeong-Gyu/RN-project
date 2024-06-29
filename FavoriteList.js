import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class FavoriteListScreen extends Component {
  render() {
    return (
        <LinearGradient
        colors={['#E6EAFF', '#FCFDFF']} 
        style={styles.linearGradient} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.88 }} >
            <ScrollView style={styles.background} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.text}> 찜 목록 화면</Text>
            </View>
            </ScrollView>
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
    container: {
        alignItems: 'center', 
    },
    text: {
        fontSize: 40,
    }
});

export default FavoriteListScreen;
