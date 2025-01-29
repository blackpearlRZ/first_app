import {legacy_createStore as createStore} from 'redux'
import userReducer from './UserReducer'

export const store = createStore(userReducer)