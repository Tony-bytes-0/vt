export function getRandomInt(max) { return Math.floor(Math.random() * max)};
export function calculateDmg(dmg, attackerState, defenderState){
    let aditionalText = ''
    //console.log('daño base: ', dmg,'estados atacante: ', attackerState,' estados defensor: ', defenderState);//DEV
    if('cansado' in defenderState){ dmg = dmg * 0.3 };

    //reduccion de daño por guardia
    const result = defenderState.find( res => res === 'En Guardia');    if(result){dmg = dmg - (dmg * 0.3); aditionalText = 'La Postura Defensiva Reduce el Daño' }

    if(dmg < 0){dmg = 0.1}//evitar daño negativo
    return {dmg:dmg.toFixed(2) , aditionalText}
}
export function enemyRandomTurn(enemyClass){
    function getRandomInt(max) { return Math.floor(Math.random() * max)}; const random = getRandomInt(10)
    if(enemyClass === 'Asesino'){
        if(random <= 7){
            return 'Attack'
        }else return 'buff Attack'
    }

    else if(enemyClass === 'Mago'){
        return 'castMagic'
    }

    else{return 'Attack'}
}

export function castMagic(spell, avalibleMana){
    if(spell === 'Chispa Magica' && avalibleMana >= 5){
        return {'message':' Desata una Pequeña Chispa de La Palma de Su Mano! daño: ', dmg: 5, 'cost':5, 'spellCasted':true}
    }
    else return{'message':'se queda sin mana y ataca!', 'spellCasted':false}
}

