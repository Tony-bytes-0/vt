import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initial = [
    {'id':1, 'message':'asdasd'},
    {'id':2, 'message':'segundo mensaje'},
    {'id':3, 'message':'asdasd'}
]
export const logs = createSlice({
    name:'logs',
    initialState: initial,
    reducers:{
        clearConsole:(state, action) =>{
            return [{'id':0, 'message':'se ha limpiado la consola'}]
        },

        newMessage:(state, action) => {
            const newEntry = {"message":action.payload.message, "id":v4()}
            state.push(newEntry)
        }
    }
})

export const { clearConsole, newMessage } = logs.actions
export default logs.reducer