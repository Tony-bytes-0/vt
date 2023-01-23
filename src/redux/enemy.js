import { createSlice } from '@reduxjs/toolkit'

const enemyData = {
    'name':'enemigo de pruebaMelaChota', 'class': ['unknown'],
    'life':5, 'stamina':5, 'attack':5, 'defence':4, 'mana':1, 'speed':5,
    'maxLife':5, 'maxStamina':6, 'maxMana':1,
    'skills': []
}
export const enemy = createSlice({
    name:'enemy',
    initialState: enemyData,
    reducers:{
        setEnemy:(state, action) => {
            return {
                "name":action.payload.name, "class": action.payload.class,
                "life":action.payload.life, "maxLife":action.payload.life,
                "stamina":action.payload.stamina, "maxStamina":action.payload.stamina,
                "mana":action.payload.mana, "maxMana":action.payload.mana,
                "attack":action.payload.attack, "defence":action.payload.defence, "speed":action.payload.speed
            }
        },
        setLife:(state, action) => { 
            return {
                "name":state.name, "class": state.class,
                "life":state.life + action.payload, "maxLife":state.maxLife,
                "stamina":state.stamina, "maxStamina":state.maxStamina,
                "mana":state.mana, "maxMana":state.maxMana,
                "attack":state.attack, "defence":state.defence, "speed":state.speed
            }
        }
        
    }
})

export const { setEnemy, setLife } = enemy.actions
export default enemy.reducer