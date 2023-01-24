import { createSlice } from '@reduxjs/toolkit'

const playerData = {
    'name':'', 'class': ['unknown'], 'level': 0, 'exp':0, 'maxExp': 12,
    'life':2, 'stamina':6, 'attack':1, 'defence':1, 'mana':1, 'speed':3,
    'maxLife':5, 'maxStamina':6, 'maxMana':1, 
    'skills': [], 'state':[]
}

export const playerInfo = createSlice({
    name:'PlayerInfo',
    initialState: playerData ,
    reducers:{
        setPlayer:(state, action) => {
            return action.payload
        },
        //modifiers
            modLife:(state, action) => { const newValues = state; newValues.life = newValues.life + action.payload; return newValues },
            modStamina:(state, action) => { const newValues = state; newValues.stamina = newValues.stamina + action.payload; return newValues },
            modExp:(state, action) => { const newValues = state; newValues.exp = newValues.exp + action.payload; return newValues },
        //Actions
            rest:(state, action) => {const newValues = state; newValues.stamina = state.maxStamina; return newValues },
            guardUp:(state, action) => { let newValues = state; newValues.state.push('En Guardia'); return newValues },
            guardDown:(state, action) => { let newValues = state; newValues.state = newValues.state.filter(state => state  !== 'En Guardia'); return newValues },
    }
        
    
        
})
export const { setPlayer, modStamina, modLife, modExp, rest, guardUp, guardDown } = playerInfo.actions
export default playerInfo.reducer