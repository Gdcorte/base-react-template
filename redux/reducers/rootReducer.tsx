import {combineReducers, Reducer} from 'redux'

import {storeType} from '../store'

import {settingsReducer} from 'settings/redux/Reducer'

const rootReducer: Reducer = (state:storeType, action) => {
   
   // For applications that require User Logout, a logic similar to that 
   // can be used to return the store to its default status upon logout
   // if(action.type == LOGOUT_USER){
   //    state = {
   //       ...STORE_INITIAL_STATE,
   //       settings: state.settings,
   //    }
   // }

   return appReducer(state, action)
 }

const appReducer = combineReducers({
   settings: settingsReducer,
})

export default rootReducer