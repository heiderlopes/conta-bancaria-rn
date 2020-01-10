/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  Fragment
} from 'react-native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import FormNewUser from './src/components/FormNewUser';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from './src/config/Colors';

export default class App extends Component {

  render(){

    return(
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: Colors.safeAreaBackgroundTopColor }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.safeAreaBackgroundBottomColor }}>
          <StatusBar barStyle="dark-content" backgroundColor={Colors.statusBar}/>
          <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex:1}}>
              <Header />
              <FormNewUser />
            </KeyboardAwareScrollView>
            <Footer />
          </View>
        </SafeAreaView>
      </>
    )
  };
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#de5a5b',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {
    flex: 1,
    marginTop: -48,
    marginBottom: 4,
    margin: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  contentText: {
    margin: 16
  },
  title: {
    fontSize: 32,
    color:'#AFFAAF',
    alignItems: 'center'
  },  
});
