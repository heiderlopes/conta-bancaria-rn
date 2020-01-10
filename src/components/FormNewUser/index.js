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

import Slider from '@react-native-community/slider';

export default class FormNewUser extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            age: 0,
            gender: '',
            genders: [{value: 'Masculino'}, {value: 'Feminino'}],
            valor: 0
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

                        <Text style={styles.titleField}>Defina seu limite</Text>

                        <Slider 
                            step={1}
                            style={styles.slider}
                            minimumTrackTintColor="#de5a5b"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#de5a5b"
                            minimumValue={0}
                            maximumValue={2000}
                            onValueChange={(valorSelecionado) => {this.setState({valor: valorSelecionado})}}
                            value={this.state.valorSelecionado}
                        />

                        <Text style={styles.sliderFooter}>Seu limite é de R$ {this.state.valor},00</Text>

                        <Button text="Criar conta" style={styles.button}/>
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
  slider: {
    fontSize: 14,
    color: Colors.accentColor,
    fontWeight: 'bold',
    ...Platform.select({
        ios: {
            marginVertical: 0,
        },
        android: {
            marginTop: 16,
        },
    })
  },

  sliderFooter: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
    ...Platform.select({
        ios: {
            marginVertical: 16,
        },
        android: {
            marginTop: 16,
        },
    }),
    alignSelf: 'center'
  },

  input: {
      borderColor: Colors.accentColor,
      fontSize: 16,
      borderBottomWidth: 1
  },

});
