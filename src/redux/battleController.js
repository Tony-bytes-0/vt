import { createSlice } from '@reduxjs/toolkit'

const initial = {turn:1, referi:true}
export const battleController = createSlice({
    name:'battleController',
    initialState: initial,
    reducers:{
        estabilize:(state, action) => { return initial },
        turnCount:(state, action) => {return {turn:state.turn + 1, referi: state.referi } },
        setReferi:(state, action) => {return {turn: state.turn, referi:action.payload } },

    }
})

export const { estabilize, turnCount, setReferi } = battleController.actions
export default battleController.reducer