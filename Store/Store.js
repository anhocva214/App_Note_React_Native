import { createStore } from 'redux'
import { Alert } from 'react-native'

const initialState = {

}

const AllReducer = (state = initialState, action) => {
    switch (action.type) {

        case "CONNECT":
            console.log("connect success")
            return { ...state }
        case "ALERT":
            // console.log(action.title, action.content)
            Alert.alert(
                action.title,
                action.content,
                [
                    // {
                    //     text: 'Cancel',
                    //     onPress: () => console.log('Cancel Pressed'),
                    //     style: 'cancel'
                    // },
                    { text: 'OK' }
                ],
                { cancelable: false }
            );
            return { ...state }

        default:
            return state
    }
}


const store = createStore(AllReducer);

export default store;