import { createSlice } from '@reduxjs/toolkit'

const enemyData = {
    'name':'enemigo de pruebaMelaChota', 'class': ['unknown'],
    'life':5, 'stamina':5, 'attack':5, 'defence':4, 'mana':1, 'speed':5,
    'maxLife':5, 'maxStamina':6, 'maxMana':1,
    'skills': [], 'state':[]
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
                "attack":action.payload.attack, "defence":action.payload.defence, "speed":action.payload.speed,
                "skills":action.payload.skills, "state":[],"items":action.payload.items
            }
        },
        setLife:(state, action) => { const newValues = state; newValues.life = newValues.life + action.payload; return newValues },
        setStamina:(state, action) => { const newValues = state; newValues.stamina = newValues.stamina + action.payload; return newValues },
        setMana:(state, action) => { const newValues = state; newValues.mana = newValues.mana + action.payload; return newValues },
        setAttack:(state, action) => { const newValues = state; newValues.attack = newValues.attack + action.payload; return newValues },
        setGuardUp:(state, action) => { let newValues = state; newValues.state.push('En Guardia'); return newValues },
        setGuardDown:(state, action) => { let newValues = state; newValues.state = newValues.state.filter(state => state  !== 'En Guardia'); return newValues },
        
    }
})

export const { setEnemy, setLife, setStamina, setAttack, setGuardUp, setGuardDown, setMana  } = enemy.actions
export default enemy.reducer