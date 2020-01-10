import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Colors from '../../config/Colors';

export default class Button extends Component {

    render() {
        return(
            <TouchableOpacity
                style={styles.botao}
                onPress={this.props.onPress}
            >
                <View
                    style={styles.btnArea}>
                    <Text style={styles.btnTexto}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    botao : {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: Colors.accentColor,
        borderRadius: 25,
        alignSelf: 'center',
        margin: 32
    },
    btnArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnTexto: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: Colors.primaryColor
    }
});