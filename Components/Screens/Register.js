import React from 'react'
import Style from '../../Styles/Styles'
import { Icon, Input, Button } from 'react-native-elements'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import firebase from '../Firebase/config'
import {useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'


const Register = ({ navigation }) => {

    const dispatch = useDispatch();

    const database  = firebase.database().ref('/dataAccount/');

    const [_fullname, set_fullname] = useState("");
    const [_email, set_email] = useState("");
    const [_username, set_username] = useState("");
    const [_password, set_password] = useState("");
    const [_rePassword, set_rePassword] = useState("");
    const [_listAccount, set_listAccount] = useState([]);

    const useComponentWillMount = func => { const willMount = useRef(true); if (willMount.current) {func();} willMount.current = false;};

    useComponentWillMount(()=>{
        // dispatch({type: "ALERT", title: "test", content: "content test"})
    })
    
    const checkAccount = ()=>{
        return new Promise((resolve, reject)=>{
            database.once('value',(data)=>{
                var tempData = [];
                data.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    tempData.push({key: childKey, data: childData})
                })

               resolve(tempData);
            })
        })
        
    }

    useComponentWillMount(async ()=>{
        set_listAccount(await checkAccount());
    })

    const isEmail = ()=>{
        return _listAccount.map((value, index)=>{
            if (value.data.email == _email) return true
        }).filter(item => item == true)
    }

    const isUsername = ()=>{
        return _listAccount.map((value, index)=>{
            if (value.data.username == _username) return true
        }).filter(item => item == true)
        
    }

    const registerAccount = async ()=>{

        if (_fullname.length>0 && _email.length>0 && _username.length>0 && _password.length>0 && _rePassword.length>0){
            if (_email.indexOf("@")<0){
                dispatch({type: 'ALERT', title: "Register Failed", content: "Email invalid"})
            }
            else if (_password != _rePassword){
                dispatch({type: 'ALERT', title: "Register Failed", content: "Confirm password not match"})
            }
            else if (isUsername()[0] == true){
                dispatch({type: 'ALERT', title: "Register Failed", content: "Username Is Exist"})
            }
            else if (isEmail()[0] == true){
                dispatch({type: 'ALERT', title: "Register Failed", content: "Email Is Exist"})
            }
            else{
                
                database.push({
                    fullname: _fullname,
                    email: _email,
                    username: _username,
                    password: _password
                })
                dispatch({type: 'ALERT', title: "Register Success", content: "Wellcome"})
            }
        }
        else{
            dispatch({type: 'ALERT', title: "Register Failed", content: "Your info not enough"})
        }

    }

    return (
        <>
            <View style={Style.formScreen}>
                <View style={Style.formBox}>
                    {/* Avatar Form */}
                    <ScrollView>
                        <View style={Style.viewFlexCenter}>
                            <Icon name="account-box" type="material" color="#fbea76" size={100} />
                        </View>
                        {/* Input Form */}
                        <View style={{ marginTop: 20 }}>
                            <Input onChangeText={(text)=>set_fullname(text)} placeholder='Fullname' leftIcon={{ type: 'font-awesome-5', name: 'address-card', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} />
                            <Input onChangeText={(text)=>set_email(text)} placeholder='Email' leftIcon={{ type: 'font-awesome-5', name: 'envelope', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} />
                            <Input onChangeText={(text)=>set_username(text)} placeholder='Username' leftIcon={{ type: 'material', name: 'account-circle', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} />
                            <Input onChangeText={(text)=>set_password(text)} placeholder='Password' leftIcon={{ type: 'font-awesome-5', name: 'unlock-alt', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} secureTextEntry={true} />
                            <Input onChangeText={(text)=>set_rePassword(text)} placeholder='Confirm Password' leftIcon={{ type: 'font-awesome-5', name: 'unlock-alt', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} secureTextEntry={true} />
                        </View>
                        {/* Button Form */}
                        <Button onPress={()=>registerAccount()} title="Register" />
                        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>or</Text>
                        <View style={{ ...Style.viewFlexCenter, justifyContent: 'space-between' }}>
                            <Button buttonStyle={{ width: 120 }} title="Foget" type="outline"
                                icon={<Icon iconStyle={{ marginRight: 10 }} name="hand-point-left" type="font-awesome-5" size={20} color="#2288dc" />}
                                onPress={() => navigation.navigate('Forget')}
                            />
                            <Button buttonStyle={{ width: 120 }} title="Login" type="outline"
                                iconRight={true}
                                icon={<Icon iconStyle={{ marginLeft: 10 }} name="hand-point-right" type="font-awesome-5" size={20} color="#2288dc" />}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Register;