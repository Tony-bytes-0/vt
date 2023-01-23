import { createSlice } from '@reduxjs/toolkit'

const initial = {'battle':false, 'adventure':true}
export const hudController = createSlice({
    name:'hudController',
    initialState: initial,
    reducers:{
        toggleBattle:(state , action) => {
            return {'battle':action.payload, 'adventure':state.adventure }
        },
        toggleAdventure:(state , action) => {
            return {'battle':state.battle, 'adventure':action.payload}
        }
    }
})

export const { toggleBattle, toggleAdventure } = hudController.actions
export default hudController.reducer