import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class Header extends Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <Image source={require('../../assets/user.png')} 
          style={styles.leftIcon}/>
          <Text style={styles.rightText}>Novo Usuário</Text>
        </View>
        <View style={styles.titleArea}>
          <Image source={require('../../assets/profile.png')} 
            style={styles.mainIcon}/>
        </View>
      </View>      
    )
  };
}

const styles = StyleSheet.create({
  container: {
    height: 230,
    backgroundColor: '#de5a5b',
    //alignItems: 'center',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16
  },
  leftIcon: {
    width: 32,
    height: 32,
  },
  mainIcon: {
    width: 150,
    height: 150,
    marginTop: -30
  },
  rightText: {
    alignContent: 'center', 
    color: '#FFF',
    fontWeight: 'bold'
  },
  titleArea: {
    alignItems: 'center'
  },
  title: {
    padding: 8,
    fontSize: 32,
    color:'#FFFFFF',
  },  
});
