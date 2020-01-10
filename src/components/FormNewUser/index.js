/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker,
  Platform,
} from 'react-native';

import Button from '../Button';

import {Dropdown } from 'react-native-material-dropdown';

import Colors from '../../config/Colors';

export default class FormNewUser extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            age: 0,
            gender: '',
            genders: [{value: 'Masculino'}, {value: 'Feminino'}]
        }
    };

    onAgeChanged(e) {
        if(e.length == 0) {
            this.setState({ myNumber: e });  
        } else {
            if (/^\d+$/.test(e.toString())) { 
                this.setState({ myNumber: e });
              }
        }
    }

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
                            keyboardType="numeric"
                            placeholder="Ex: 32"
                            style={styles.input}
                            onChangeText = {(e)=> this.onAgeChanged(e)}
                            maxLength={3}
                            value = {this.state.myNumber}
                        />
                        
                        <Text style={styles.titleField}>Qual seu sexo?</Text>

                        <Dropdown
                            containerStyle={styles.dropDown}
                            label= ""
                            labelHeight={0}
                            style = {{fontWeight: "normal", marginTop: 0}}
                            baseColor = {Colors.accentColor}
                            data={this.state.genders}/>
                        <Button text="Cadastrar" style={styles.button}/>
                    </View>
                </View>

        )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    marginTop: -48,
    marginBottom: 4,
    margin: 16,
    backgroundColor: Colors.formBackground,
    borderRadius: 8,
    padding: 20
  },
  titleForm: {
    margin: 16,
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.accentColor,
    fontWeight: 'bold'
  },
  titleField: {
    fontSize: 14,
    color: Colors.accentColor,
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

  dropDown: {
    ...Platform.select({
        ios: {
            marginVertical: 0,
        },
        android: {
            marginTop: 12,
        },
    }),
  },

  input: {
      borderColor: Colors.accentColor,
      fontSize: 16,
      borderBottomWidth: 1
  },

});
