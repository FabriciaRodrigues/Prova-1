import React from 'react'

import{
    StyleSheet,
    Text,
    View
} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#00ced1',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 65,
        color: '#000'
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}
        </Text>
    </View>