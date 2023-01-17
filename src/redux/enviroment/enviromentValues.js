import { createSlice } from '@reduxjs/toolkit'

const zoneVariants = {
    'zone': 'Bosque de Hojas Secas',
    'progress':0,
    'advanceEnergyCost':1,
    'posibleDrops':['Apple']
}

export const enviromentValues = createSlice({
    name:'enviromentValues',
    initialState: zoneVariants,
    reducers:{

    }
})

//export const {  } = enviromentValues.actions
export default enviromentValues.reducer