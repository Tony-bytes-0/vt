import { createSlice } from '@reduxjs/toolkit'

const initial = {attack:false, guard:false, calm:false}

export const battleButonsController = createSlice({
    name:'battleButonsController',
    initialState: initial,
    reducers:{
        clickAttack:(state, action) => {
            const newValue = state;  newValue.attack = action.payload;   return newValue
        },
        clickGuard:(state, action) => {
            const newValue = state;  newValue.guard = action.payload;   return newValue
        },
        clickCalm:(state, action) => {
            const newValue = state;  newValue.calm = action.payload;   return newValue
        },
    }
})

export const { clickAttack, clickGuard, clickCalm } = battleButonsController.actions
export default battleButonsController.reducer