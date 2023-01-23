import { createSlice } from '@reduxjs/toolkit'

const zoneVariants = {
    'zone': 'Bosque de Hojas Secas',
    'progress':0, 'days':0,
    'advanceEnergyCost':1,
    'encounterProbability':60,
    'posibleDrops':['Apple']
}

export const enviromentValues = createSlice({
    name:'enviromentValues',
    initialState: zoneVariants,
    reducers:{
        advance:(state, action)=>{
            if (action.payload.progress !== undefined) { state.progress += action.payload.progress; }
            if (action.payload.days !== undefined) { state.days += action.payload.days; }
        }
    }
})

export const { advance } = enviromentValues.actions
export default enviromentValues.reducer