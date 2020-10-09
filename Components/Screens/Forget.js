import React from 'react'
import Style from '../../Styles/Styles'
import { Icon, Input, Button } from 'react-native-elements'
import { View, Text, ScrollView } from 'react-native'

const Forget = ({ navigation }) => {
    return (
        <>

            <View style={Style.formScreen}>
                    <View style={Style.formBox}>
                        {/* Avatar Form */}
                        <View style={Style.viewFlexCenter}>
                            <Icon name="account-box" type="material" color="#fbea76" size={100} />
                        </View>
                        {/* Input Form */}
                        <View style={{ marginTop: 20 }}>
                            <Input placeholder='Email' leftIcon={{ type: 'font-awesome-5', name: 'envelope', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} />
                        </View>
                        {/* Button Form */}
                        <Button title="Login" />
                        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>or</Text>
                        <View style={{ ...Style.viewFlexCenter, justifyContent: 'space-between' }}>
                            <Button buttonStyle={{ width: 120 }} title="Register" type="outline"
                                icon={<Icon iconStyle={{ marginRight: 10 }} name="hand-point-left" type="font-awesome-5" size={20} color="#2288dc" />}
                                onPress={() => navigation.navigate('Register')}
                            />
                            <Button buttonStyle={{ width: 120 }} title="Login" type="outline"
                                iconRight={true}
                                icon={<Icon iconStyle={{ marginLeft: 10 }} name="hand-point-right" type="font-awesome-5" size={20} color="#2288dc" />}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </View>
            </View>
        </>
    )
}

export default Forget;