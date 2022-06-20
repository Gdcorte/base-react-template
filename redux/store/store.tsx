import { useMemo } from 'react'
import { Reducer } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {STORE_INITIAL_STATE} from '.'
import rootReducer from '../reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' //change to 'redux-persist/lib/storage/session' to store in sessionStorage instead

let store: any

function initStore(preloadedState = STORE_INITIAL_STATE, baseReducer: Reducer = rootReducer) {
  return configureStore({
    reducer: baseReducer,
    preloadedState,
  })
}

export const initializeStore = (preloadedState: any) => {
  // On the server rendering side, this will always create a new store and return it instead of using the local store for the client
  if (typeof window === 'undefined') {
    return initStore()
  }

  // Base configuration for persisting redux store!
  const persistConfig = {
    key: 'root',
    storage
  };

  let baseReducer = persistReducer(persistConfig, rootReducer)
  let _store = store ?? initStore(preloadedState, baseReducer)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    }, baseReducer)
    // Reset the current store
    store = undefined
  }  

  // Create the store once in the client
  if (!store){
    store = _store
  }

  store.__PERSISTOR = persistStore(store);
  
  return _store
}

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
