import { createSlice } from '@reduxjs/toolkit'

const playerData = {
    'name':'', 'class': ['unknown'], 'level': 0,
    'life':1, 'stamina':6, 'attack':1, 'defence':1, 'mana':1, 'speed':1,
    'maxLife':1, 'maxStamina':6, 'maxMana':1,
    'skills': []
}

export const playerInfo = createSlice({
    name:'PlayerInfo',
    initialState: playerData ,
    reducers:{
        setPlayer:(state, action) => {
            console.log(action.payload)
            return action.payload
        },
        //modifiers
        modStamina:(state, action) => {
           const newValues = state; newValues.stamina = newValues.stamina + action.payload; return newValues
        }
    }
})
export const { setPlayer, modStamina } = playerInfo.actions
export default playerInfo.reducer