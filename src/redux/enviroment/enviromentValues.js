import { createSlice } from '@reduxjs/toolkit'
import { zoneVariants }  from '../../modules/staticObjects/zoneVariants'; 


export const enviromentValues = createSlice({
    name:'enviromentValues',
    initialState: zoneVariants,
    reducers:{
        
    }
})

//export const {  } = enviromentValues.actions
export default enviromentValues.reducer