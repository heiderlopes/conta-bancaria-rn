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
  Switch,
  Platform,
  Alert,
} from 'react-native';

import Button from '../Button';
import Divider from '../Divider';

import {Dropdown } from 'react-native-material-dropdown';

import Colors from '../../config/Colors';

import Slider from '@react-native-community/slider';

export default class FormNewUser extends Component {

    constructor(props) {
        super(props);
        
        this.inputName = React.createRef();
        this.inputAge = React.createRef();

        this.state = {
            name: '',
            age: 0,
            gender: '',
            genders: [{value: 'Masculino'}, {value: 'Feminino'}],
            accountLimit: 0,
            isStudent: false
        }
    };

    onAgeChanged(e) {
        if(e.length == 0) {
            this.setState({ age: e });  
        } else {
            if (/^\d+$/.test(e.toString())) { 
                this.setState({ age: e });
              }
        }
    }

    resetForm() {
        this.setState({
            name: '',
            age: 0,
            gender: '',
            accountLimit: 0,
            isStudent: false
        });
    }

    showAlertConfirmData() {
        let message = "Nome: " + this.state.name + "\n";
        message += "Idade: " + this.state.age + "\n";
        message += "Sexo: " + this.state.gender + "\n"
        message += "Conta do tipo: " + (this.state.isStudent ? "Estudante"  : "Não estudante") + "\n"
        message += "Limite: R$" + this.state.accountLimit + ",00."

        Alert.alert(
            'Confirmação dos dados',
            message,                
            [
              //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Alterar', onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
              {text: 'Confirmar', onPress: () => this.resetForm()},
            ],
            {cancelable: false},
          );
    }

    createAccount() {
        console.log(this.state.name.trim());
        if(this.state.name == '') {
            alert("Informe o nome do cliente");
            this.inputName.current.focus();
            return;
        } 

        if(this.state.age == '') {
            alert("Informe uma idade válida");
            this.inputAge.current.focus();
            return;
        }

        if(this.state.gender == '') {
            alert("Informe o sexo");
            return;
        }
        
        if(this.state.accountLimit == 0) {
            alert("Informe o limite para sua conta");
            return;
        }


        this.showAlertConfirmData();
    }

    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.content}>
                        
                        <Text style={styles.titleForm}>Preencha os dados do cliente</Text>
                        
                        <Text style={styles.titleField}>Qual seu nome?</Text>
                        <TextInput
                            ref={this.inputName}
                            placeholder="Ex: Heider Lopes"
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={(value) => this.setState({name: value})}
                        />

                        <Text style={styles.titleField}>Qual a sua idade?</Text>
                        <TextInput
                            ref={this.inputAge}
                            keyboardType="numeric"
                            placeholder="Ex: 32"
                            style={styles.input}
                            onChangeText = {(e)=> this.onAgeChanged(e)}
                            maxLength={3}
                            value={this.state.age}
                        />
                        
                        <Text style={styles.titleField}>Qual seu sexo?</Text>

                        <Dropdown
                            ref={this.inputGender}
                            onChangeText={(value) => this.setState({gender: value})}
                            containerStyle={styles.dropDown}
                            label= ""
                            labelHeight={0}
                            style = {{fontWeight: "normal", marginTop: 0}}
                            baseColor = {Colors.accentColor}
                            data={this.state.genders}
                            value={this.state.gender}
                        />

                        <Text style={styles.titleForm}>Complementos da conta</Text>

                        <Divider/>

                        <View style={styles.containerStudent}>
                            <Text style={styles.titleField}>Sua conta é Estudante?</Text>

                            <Switch
                                trackColor={{ true: '#de5a5b', false: Platform.OS=='android'?'#d3d3d3':'#fbfbfb'  }}
                                thumbColor={[Platform.OS=='ios'?'#FFFFFF':(this.state.isStudent ?'#de5a5b':'#ffffff')]}
                                ios_backgroundColor="#fbfbfb"
                                style={[this.state.isStudent ?styles.switchEnableBorder:styles.switchDisableBorder]}
                                value={this.state.isStudent}
                                onValueChange={(status) => this.setState({isStudent: status})            }
                            />
                        </View>

                        <Text style={styles.titleField}>Qual limite desejado?</Text>

                        <Slider 
                            step={1}
                            style={styles.slider}
                            minimumTrackTintColor="#de5a5b"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#de5a5b"
                            minimumValue={0}
                            maximumValue={2000}
                            onValueChange={(value) => {this.setState({accountLimit: value})}}
                            value={this.state.accountLimit}
                        />

                        <Text style={styles.sliderFooter}>Seu limite é de R$ {this.state.accountLimit},00</Text>
                        
                        <Button
                            text="Criar conta" 
                            style={styles.button}
                            onPress={() => this.createAccount()}
                        />
                    </View>
                </View>

        )
  };
}

const styles = StyleSheet.create({
  divider:{
    height: 1,
    marginVertical: 32,
    marginHorizontal: -8,
    backgroundColor: "#AAA"
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  switch: {

  },
  containerStudent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

  switchEnableBorder: {
    borderColor: '#6fa6d3',
    borderWidth: 1},
    
    switchDisableBorder: {
    borderColor: '#f2f2f2',
    borderWidth: 1,  },

});
