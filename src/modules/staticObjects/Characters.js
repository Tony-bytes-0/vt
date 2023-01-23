export const newCharacters = {
    admin:{name:'soy admin', class:'admin', level:10, life:15, stamina:15, attack:15, defence:15, mana:15, speed:15, exp:0},

    guerrero:{name:'', class:'Guerrero', level:1, life:10, maxLife:10, stamina:6, maxStamina:6, attack:2, defence:7, mana:1, maxMana:1, speed:3, exp:0},//24
    asesina:{name:'', class:'Asesina',   level:1, life:7, maxLife:7, stamina:4, maxStamina:4, attack:7, defence:3, mana:2, maxMana:2, speed:7, exp:0 },//26
    mago:{name:'', class:'Mago',         level:1, life:7, maxLife:7, stamina:4, maxStamina:4, attack:1, defence:3, mana:15, maxMana:15, speed:8, exp:0,
    skills:['Golpe Chispa']},

    trotamundos:{name:'', class:'', level:0, life:1, stamina:1, attack:1, defence:1, mana:1, speed:1, exp:0},
    cazador:{name:'', class:'', level:0, life:1, stamina:1, attack:1, defence:1, mana:1, speed:1, exp:0},
    esgrimistaMagico:{name:'', class:'', level:0, life:1, stamina:1, attack:1, defence:1, mana:1, speed:1, exp:0},

}

export const enemysObject = {
    forest:{
        goblin:{name:'Goblin', class:'asesino', life:4, stamina:2, attack:1, defence:1, mana:1, speed:4},
        zombie:{name:'Zombie', class:'Ambulante', life:8, stamina:2, attack:3, defence:0, mana:1, speed:1},
        maskMan:{name:'Hombre Encapuchado', class:'?', life:2.5, stamina:2, attack:1, defence:1, mana:6, speed:2.5},
    }
}