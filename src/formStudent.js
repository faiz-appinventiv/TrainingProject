import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function formStudent() {
    let listRef = useRef(null)
    const [textName, setTextName] = useState('')
    const [textEmail, setTextEmail] = useState('')
    const [nameConfirm, setNameConfirm] = useState(false)
    const [emailConfirm, setEmailConfirm] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const [showName, setShowName] = useState(false)
    const [data, setData] = useState([{ name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }, { name: 'sada', email: 'asdad@saf.com' }])
    const [addButton, setAddButton] = useState('Add Item')
    const [updateAddButton, setUpdateAddButton] = useState(false)
    const [flatListIndex, setFlatListIndex] = useState(-1)
    const [cancelUpdate, setCancelUpdate] = useState(false)

    // useEffect(()=>{

    // },[data])

    const validateName = (text) => {
        // console.log("inside Valid Name")
        let reg = /^[a-zA-Z ]{2,40}$/;
        if (reg.test(text) == false) {
            if (text.length == 0)
                setNameConfirm(false)
            else
                setNameConfirm(true)
        }
        else {
            setNameConfirm(false)
        }
    }

    const validateEmail = (text) => {
        // console.log("inside Valid Email")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        if (reg.test(text) == false) {
            if (text.length == 0)
                setEmailConfirm(false)
            else
                setEmailConfirm(true)
        }
        else {
            setEmailConfirm(false)
        }
    }
    const addItem = () => {
        if (!emailConfirm && !nameConfirm && !updateAddButton) {
            if (!data.some(item => textEmail == item.email)) {
                setData([...data, { name: textName, email: textEmail }])
                setTextName('')
                setTextEmail('')
                setShowEmail(false)
                setShowName(false)
            }
            else {
                Alert.alert("Email Address Already Exists")
            }
        }
        else {
            if (!data.some((item) =>
                (textEmail == item.email && data[flatListIndex].email != textEmail)
            )) {
                data[flatListIndex].name = textName
                data[flatListIndex].email = textEmail
                if (updateAddButton)
                    setAddButton('Add Item')
                setUpdateAddButton(false)
                setTextEmail('')
                setTextName('')
                setFlatListIndex(-1)
                setCancelUpdate(false)
            }
            else {
                Alert.alert("Email Address Already Exists")
            }
        }
        listRef.current.scrollToEnd()
    }

    const editItem = (index) => {
        if (flatListIndex == -1) {
            setFlatListIndex(index)
            setUpdateAddButton(true)
            // console.log(updateAddButton)
            setTextName(data[index].name)
            setTextEmail(data[index].email)
            setAddButton('Update')
            setCancelUpdate(true)
        }
        else if (flatListIndex == index) {
            Alert.alert("Item is Already Being Edited")
        }
        else {
            Alert.alert("Another Item is Being Edited")
        }
    }

    const cancelEdit = () => {
        setFlatListIndex(-1)
        setUpdateAddButton(false)
        setAddButton('Add Item')
        setTextEmail("")
        setTextName("")
        setCancelUpdate(false)
    }

    const deleteItem = (index) => {
        // console.log(i)
        // console.log("kklk",data.splice(i, 1))
        if (index == flatListIndex) {
            Alert.alert("Item Already In Use")
            if (!updateAddButton)
                setFlatListIndex(-1)
        } else {
            if (index < flatListIndex)
                setFlatListIndex(flatListIndex - 1)
            data.splice(index, 1);
            setData([...data])
        }
    }

    const isDisabling = () => {
        if (textName.length > 0 && textEmail.length > 0)
            return (nameConfirm || emailConfirm)
        else
            return true
    }

    const renderList = ({ item }) => {
        // const {name,email} = item
        // console.log(name,email)
        return (
            <View style={styles.studentBlock}>
                <Text style={styles.listText}>{"Name: "}{item.name}</Text>
                <Text style={styles.listText}>{"Email: "}{item.email}</Text>
                <TouchableOpacity style={styles.deleteButton}
                    onPress={() => {
                        let index = data.findIndex(index => index == item)
                        deleteItem(index)
                    }}
                >
                    <Image
                        source={require('../assets/images/trash.png')}
                        style={styles.deleteImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        let i = data.findIndex(i => i === item)
                        editItem(i)
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

    return (
        <SafeAreaView behavior='padding ' style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'height' : null}
                style={styles.container}>
                {/* <KeyboardAwareScrollView style={styles.container}> */}
                <View style={styles.header}>
                    <Text style={styles.listTag}>{"Input Form"}</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputBlock}>
                        {showName && <Text style={styles.text}>{"Name"}</Text>}
                        <TextInput
                            value={textName}
                            placeholder={!showName ? 'Name' : ''}
                            placeholderTextColor={'grey'}
                            style={{ ...styles.text, justifyContent: 'center', fontWeight: '700' }}
                            onFocus={() => {
                                setShowName(true)
                            }}
                            onChangeText={(text) => {
                                if (text.length != 0)
                                    setShowName(true)
                                // else setShowName(false)
                                setTextName(text)
                                validateName(text)
                            }}
                            onBlur={() => {
                                if (textName.length != 0)
                                    setShowName(true)
                                else
                                    setShowName(false)
                            }}
                        >
                        </TextInput>
                    </View>
                    <Text style={styles.errorMessage}>{nameConfirm ? "Invalid Name" : ' '}</Text>
                    <View style={styles.inputBlock}>
                        {showEmail && <Text style={styles.text}>{"Email"}</Text>}
                        <TextInput
                            value={textEmail}
                            placeholder={!showEmail ? 'Email' : ''}
                            placeholderTextColor={'grey'}
                            onFocus={() => {
                                setShowEmail(true)
                            }}
                            onChangeText={(text) => {
                                if (text.length != 0)
                                    setShowEmail(true)
                                // else setShowEmail(false)
                                setTextEmail(text)
                                validateEmail(text)
                            }}
                            onBlur={() => {
                                if (textEmail.length != 0)
                                    setShowEmail(true)
                                else
                                    setShowEmail(false)
                            }}
                            style={{ ...styles.text, justifyContent: 'center', fontWeight: '700' }}
                        >
                        </TextInput>
                    </View>
                    <Text style={styles.errorMessage}>{emailConfirm ? "Invalid Email" : '       '}</Text>
                    <TouchableOpacity
                        style={{ ...styles.addButton, backgroundColor: (isDisabling() ? "#d1ccf3" : '#877ce1') }}
                        onPress={addItem}
                        activeOpacity={0.8}
                        disabled={isDisabling()}
                    >
                        <Text style={styles.text}>{addButton}</Text>
                    </TouchableOpacity>
                    {cancelUpdate &&
                        <TouchableOpacity
                            style={{ ...styles.addButton, right: 20, bottom: 12 }}
                            onPress={cancelEdit}
                        >
                            <Text>{"Cancel"}</Text>
                        </TouchableOpacity>}
                </View>
                <View style={{height:600}}>
                <View style={styles.header}>
                    <Text style={styles.listTag}>{"Student List"}</Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={(item) => renderList(item)}
                        ref={listRef}
                        keyExtractor={(item, index) => index}
                        ListEmptyComponent={() => {
                            return (<View style={styles.emptyList}>
                                <Text >
                                    {"List is Empty"}
                                </Text>
                            </View>)
                        }}
                    // numColumns={2}
                    />
                </View>
                </View>
            </KeyboardAvoidingView>
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#beb8ef'
    },
    formContainer: {
        // flex: 0.3,
        height:200,
        padding: 10,
        border: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#f5f4fc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    inputBlock: {
        paddingLeft: 10,
        borderColor: '#B7CADB',
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 10,
        height: '30%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    addButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        borderRadius: 5,
        padding: 5,
    },
    errorMessage: {
        fontSize: 10,
        color: 'red'
    },
    list: {
        flex: 0.7,
        padding: 10,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#f5f4fc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    listTag: {
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
        borderRadius: 5,
        color: 'white'
        // width:'100%',
        // justifyContent:'center'
    },
    header: {
        backgroundColor: '#8d83e3',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        padding: 5
    },
    studentBlock: {
        // flex: 0.7,
        padding: 10,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#efeefb',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    deleteImage: {
        height: 14,
        width: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    listText: {
        color: 'black'
    },
    emptyList: {
        alignItems: 'center',
    },
    editButton: {
        height: 15,
        width: 15,
    },
    editButtonTochable: {
        position: 'absolute',
        right: 6,
        bottom: 4,
        activeOpacity: 0.8
    }
})