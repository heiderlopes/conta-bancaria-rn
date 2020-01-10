import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Colors from '../../config/Colors';

export default class Divider extends Component {

    render(){
        return(
            <View style={styles.divider}/>
        )
  };
}

const styles = StyleSheet.create({
  divider:{
    height: 0.5,
    marginVertical: 8,
    backgroundColor: Colors.accentColor
  }
});
