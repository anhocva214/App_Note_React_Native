import React from 'react'
import {useState, useRef} from 'react'
import {View, Text} from 'react-native'
import firebase from '../Firebase/config'

const NoteManager = ()=>{

    const useComponentWillMount = func => { const willMount = useRef(true); if (willMount.current) {func();} willMount.current = false;};

    useComponentWillMount(()=>{
        // const database  = firebase.database().ref('/dataNote/');
        // database.once('value').then(function(snapshot) {
        //     console.log(snapshot.val());
        // });
        // database.set({
        //     title: 'Trung thu',
        //     content: 'Ở nhà',
        // });
    })

    return(
        <>
            <View>
                <Text>Note Manager</Text>
            </View>
        </>
    )
}

export default NoteManager;