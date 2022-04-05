import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

// const Home = home.navigate("home")

export default function Register({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [emailConfirm, setEmailConfirm] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agree, setAgree] = useState(false)
    const [showName,setShowName]=useState(false)
    const [showEmail,setShowEmail]=useState(false)
    const [showVisiblePassword,setShowVisiblePassword]=useState(true)
    const [showVisibleConfirmPassword,setShowVisibleConfirmPassword]= useState(true)
    const [showAgreement,setShowAgreement] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState(false)
    const eyePressConfirm = () => {
        setShowVisibleConfirmPassword(!showVisibleConfirmPassword)
    }
    const agreement = () => {
        if(agree)
        setShowAgreement(false)
        setAgree(!agree)
    }
    const eyePress = () => {
        setShowVisiblePassword(!showVisiblePassword)
    }
    const validatePassword = () => {
        let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if (!reg.test(password)) {
            if (password.length == 0)
                setPasswordConfirm(false)
            else
                setPasswordConfirm(true)
        }
        else {
            setPasswordConfirm(false)
        }
    }
    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        if (reg.test(email) == false) {
            console.log("Email Incorrect")
            if(email.length==0)
            setEmailConfirm(false)
            else
            setEmailConfirm(true)
        }
        else {
            console.log('Email correct')
            setEmail(text)
            setEmailConfirm(false)
        }
    }
    const checkAgreement = () => {
        console.log("helloooo")
        if (agree) {
            if(password===confirmPassword)
            console.log("Password Matched")
            else
            console.log("Password is not matching")
        }
        else {
            console.log("TOS not Agreed")
        }
    }
    const handleNavigation = () => {
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('./assets/images/login.png')}
                style={styles.bgimage}
            />
            <View style={styles.viewBlock}>
            <Text style={styles.loginHeaderText}>{"Register"}</Text>
            <Text style={styles.enterDetailsText}>{"Enter your Details to Continue"}</Text>
            <View style={styles.emailBlock}>
                {showName && <Text style={styles.text}>{"Name"}</Text>}
                <TextInput
                    placeholder='Enter Name'
                    onChangeText={(text)=>{
                        if(text.length!=0)
                    setShowName(true)
                    else setShowName(false)
                    }}
                    style={[styles.blockText, { marginBottom: 12, fontWeight:'bold',padding :5 }]}
                />
            </View>
            <View style={styles.emailBlock}>
                {showEmail && <Text style={styles.text}>{"Email"}</Text>}
                <TextInput
                onChangeText={(text)=>{
                    if(text.length!=0)
                    setShowEmail(true)
                    else setShowEmail(false)
                    setEmail(text)
                    if(text.length==0)
                    setEmailConfirm(false)
                }}
                    onBlur={(text) => { validateEmail(text) }}
                    placeholder='Enter Email'
                    style={[styles.blockText, { marginBottom: 10 , fontWeight:'bold',padding :5}]}
                />
            </View>
            <Text style={styles.errorMessage}>{emailConfirm  ? "Invalid Email": '       '}</Text>
            <View style={styles.emailBlock}>
                {showPassword && <Text style={styles.text}>{"Password"}</Text>}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.visiblity}
                    onPress={eyePress}>
                    <Image
                        source={require('./assets/images/visible.png')}
                        style={styles.eyeImage}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder='Enter Password'
                    onChangeText={(text) => {
                        if (text.length != 0)
                            setShowPassword(true)
                        else setShowPassword(false)
                        setPassword(text)
                        setPasswordConfirm(false)
                    }}
                    onBlur={() => {
                        validatePassword()
                    }}
                    style={[styles.blockText, { marginBottom: 10, fontWeight: 'bold', padding: 5 }]}
                    onSubmitEditing={() => {
                        Keyboard.dismiss
                    }}
                    secureTextEntry={showVisiblePassword}
                />
            </View>
            <Text style={styles.errorMessage}>{passwordConfirm  ? "Invalid Password": '       '}</Text>
            <View style={styles.emailBlock}>
                {showConfirmPassword && <Text style={styles.text}>{"Confirm Password"}</Text>}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visiblity}
                    onPress={eyePressConfirm}>
                    <Image
                        source={require('./assets/images/visible.png')}
                        style={styles.eyeImage}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder='Confirm Password'
                    onChangeText={(text)=>{
                        setConfirmPassword(text)
                        if(text.length==0)
                        setShowConfirmPassword(false)
                        else setShowConfirmPassword(true)
                    }}
                    style={[styles.blockText, { marginBottom: 10, fontWeight:'bold',padding :5 }]}
                    secureTextEntry={showVisibleConfirmPassword}
                />
            </View>
            <Text style={styles.errorMessage}>{(confirmPassword!=password)  ? "Password not Matching": '       '}</Text>
            <View style={styles.checkBox}>
                <TouchableOpacity
                activeOpacity={0.8}
                    onPress={agreement}>
                    <Image
                        source={require('./assets/images/check.png')}
                        style={styles.checkimg}
                    />
                </TouchableOpacity>
                <Text style={{ marginLeft: 5 }}>{"Agree to "}
                    <Text style={{ fontWeight: 'bold' }}>{"Terms of Service & Privacy Policy"}</Text>
                </Text>
            </View>
                <TouchableOpacity 
                activeOpacity={0.8}
                style={[styles.loginButton,{marginTop:5}]}
                onPress={()=>{checkAgreement()
                setShowAgreement(true)
                }}>
                <Text style={styles.loginButtonText}>
                    {"Register"}
                </Text>
            </TouchableOpacity>
            { (!agree)?(showAgreement)?<Text style={styles.errorMessage}>{"TOS not Agreed"}</Text>:<Text>{' '}</Text>:<Text>{" "}</Text>}
            <View style={[styles.bottomLogin, {marginTop:0}]}>
                <Text style={styles.text}>{"Already Have an Account?"}</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                    onPress={handleNavigation}
                >
                    <Text style={[styles.text, { fontWeight: 'bold',marginLeft:0 }]}>{'Login'}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
