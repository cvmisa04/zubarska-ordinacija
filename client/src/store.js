import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import {userReducer} from './reducers/authReducer'

const rootReducer = combineReducers({
    auth:userReducer,

})

const initialState={

}

let middlware = [thunk]


export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))