import { createSlice } from '@reduxjs/toolkit'
import { playerData } from '../../modules/staticObjects/playerData'

export const playerInfo = createSlice({
    name:'PlayerInfo',
    initialState:{ playerData },
    reducers:{
        
    }
})

export default playerInfo.reducer