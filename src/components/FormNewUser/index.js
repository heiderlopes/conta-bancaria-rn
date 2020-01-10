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
  ScrollView,
  View,
  Text,
  TextInput,
  Picker,
  Platform,
} from 'react-native';

import Button from '../Button';

export default class FormNewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            gender: ''

        }
    };

    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.titleForm}>Preencha os dados do cliente</Text>
                        
                        <Text style={styles.titleField}>Qual seu nome?</Text>
                        <TextInput
                            placeholder="Ex: Heider Lopes"
                            style={styles.input}
                        />

                        <Text style={styles.titleField}>Qual a sua idade?</Text>
                        <TextInput
                            placeholder="Ex: 32"
                            style={styles.input}
                        />
                        <Text style={styles.titleField}>Qual seu sexo?</Text>
                        
                        <Button text="Cadastrar" style={styles.button}/>
                    </View>
                </View>

        )
  };
}

const styles = StyleSheet.create({
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
    padding: 20
  },
  titleForm: {
    margin: 16,
    fontSize: 18,
    alignSelf: 'center',
    color: '#de5a5b',
    fontWeight: 'bold'
  },
  titleField: {
    fontSize: 14,
    color: '#de5a5b',
    fontWeight: 'bold',
    ...Platform.select({
        ios: {
            marginVertical: 16,
        },
        android: {
            marginTop: 16,
        },
    }),
  },
  input: {
      borderColor: '#de5a5b',
      fontSize: 16,
      borderBottomWidth: 1
  },

});
