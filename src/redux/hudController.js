import { createSlice } from '@reduxjs/toolkit'

const initial = {'battle':false, 'adventure':true, 'levelUp':false, 'spendPoints':0}
export const hudController = createSlice({
    name:'hudController',
    initialState: initial,
    reducers:{
        toggleBattle:(state , action) => {
            const newValues = state; newValues.battle = action.payload; return newValues;
        },
        toggleAdventure:(state , action) => {
            const newValues = state; newValues.adventure = action.payload; return newValues;
        },
        toggleLevelUp:(state, action) => {
            const newValues = state; newValues.levelUp = action.payload; return newValues;
        },
        spendPoints:(state, action) => {
            const newValues = state; newValues.spendPoints = action.payload; return newValues;
        },
    }
})

export const { toggleBattle, toggleAdventure, toggleLevelUp, spendPoints } = hudController.actions
export default hudController.reducer