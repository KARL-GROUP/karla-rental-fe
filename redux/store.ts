import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import onecarSlice from './reducers/onecarSlice'


const persistConfig = {
    key: 'root',
    storage
}
//combining all reducers into one
const rootReducer = combineReducers({
    oneCar: onecarSlice
})

//persisting all reducers into states even when a page is refreshed
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)