
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../stores/slices/couterSlice'
import loadingReducer from '../stores/slices/loadingSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            loading: loadingReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']