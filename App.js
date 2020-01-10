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

export default class App extends Component {

  render(){
    return(
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#de5a5b"/>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            style={styles.scrollView}>
              <Header /> 
            <FormNewUser />
            <Footer />
          </ScrollView>
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
