import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image, Alert, Modal } from 'react-native'
import React, { Component } from 'react'
import styles from './flatListColor'
 class RenderItemFlatlist extends Component {

     shouldComponentUpdate(nextProps,nextState){
        if(nextProps.name!=this.props.name || nextProps.email!=this.props.email)
        return true
        return false
     }

  render() {
      console.log('inside render')
    return (
        <View style={styles.studentBlock}>
            <Text style={styles.listText}>{"Name: "}{this.props.name}</Text>
            <Text style={styles.listText}>{"Email: "}{this.props.email}</Text>
            <TouchableOpacity style={styles.deleteButton}
                onPress={() => {
                    let index = this.props.data.findIndex(index => index == this.props.item)
                    this.props.deleteItem(index)
                }}
            >
                <Image
                    source={require('../assets/images/trash.png')}
                    style={styles.deleteImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    let i = this.props.data.findIndex(i => i === item)
                    this.props.editItem(i)
                    // setModalVisibility(true)
                }}
                style={styles.editButtonTochable}>
                <Image
                    source={require('../assets/images/editButton.png')}
                    style={styles.editButton}
                />
            </TouchableOpacity>
        </View>
    )
  }
}

export default RenderItemFlatlist