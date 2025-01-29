import {legacy_createStore as createStore} from 'redux'
import StagiaireReducer from './stagiaireReducer'
export const storeStagiaire = createStore(StagiaireReducer)