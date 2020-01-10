import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Colors from '../../config/Colors';

export default class Footer extends Component {

  render(){
    return(
      <View style={styles.content}>
          <Text style={styles.title}>Desenvolvido por Heider Lopes</Text>
      </View>      
    )
  };
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.footerBackground,
    alignItems: 'center',
  },
  title: {
    padding: 8,
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.footerText
  },  
});
