import React, { Component } from 'React';
import { StyleSheet, View, TextInput , findNodeHandle} from 'react-native';


export class Input extends Component {
    constructor(props) {
        super(props);
        this.state={ viewRef: null};
    }

    render() {
        return (
            <View style={style.view}>
                <TextInput style={style.view} {...this.props}></TextInput>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 5,
    },
    blur: {}
});
