import { ModelCounter } from '@/models/couterModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    } as ModelCounter,
    reducers: {
        increment: (state: ModelCounter) => {
            state.count += 1
        },
        decrement: (state: ModelCounter) => {
            state.count -= 1
        },
        incrementByAmount: (state: ModelCounter, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer