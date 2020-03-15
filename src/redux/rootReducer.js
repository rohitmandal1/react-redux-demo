import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecremeReducer from './icecreme/icecremeReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreme: icecremeReducer,
    user:userReducer
})

export default rootReducer

