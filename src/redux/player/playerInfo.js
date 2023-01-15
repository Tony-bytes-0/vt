import { createSlice } from '@reduxjs/toolkit'

const playerData = {
    'name':'', 'class': ['unknown'], 'level': 0,
    'life':1, 'stamina':1, 'attack':1, 'defence':1, 'mana':1, 'speed':1,
    'maxLife':1, 'maxStamina':1, 'maxMana':1,
    'skills': []
}

export const playerInfo = createSlice({
    name:'PlayerInfo',
    initialState: playerData ,
    reducers:{
        setPlayer:(state, action) => {
            console.log(action.payload)
            return action.payload
        }
    }
})
export const { setPlayer } = playerInfo.actions
export default playerInfo.reducer