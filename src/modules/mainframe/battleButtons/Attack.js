import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//Reducers
import { turnCount } from "../../../redux/battleController";
import { toggleBattle, toggleLevelUp } from "../../../redux/hudController";
import { modExp, modLife, modStamina, guardDown,  } from "../../../redux/player/playerInfo";//PLAYER
import { setLife, setStamina, setMana, setAttack, setGuardUp, setGuardDown } from "../../../redux/enemy";//ENEMY
import { newMessage } from "../../../redux/logs";
import { useEffect } from "react";
import { calculateDmg, enemyRandomTurn, getRandomInt, castMagic } from "../../staticObjects/dmgCalculator";
import { advance } from "../../../redux/enviroment/enviromentValues";
import { clickAttack } from "../../../redux/battleButonsController";

export default function Attack(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
    const enemy = useSelector(state => state.enemy)
    const turn = useSelector(state => state.battleController.turn)
    const battle = useSelector(state => state.battleController.battle)


    useEffect(() => {
            referi()
      });

    function referi(){
        if(player.life <= 0){
            dispatch(toggleBattle(false))
            alert('has sido Derrotado!, perderas experiencia pero podras seguir viajando')
            dispatch(setLife(0.5))
            dispatch(modExp(- (player.exp * 0.6)))
        }
        else if(enemy.life <= 0 && battle){//final de la batalla
            const lvl = enemy.maxLife + enemy.maxMana + enemy.maxStamina + enemy.attack + enemy.defence + enemy.speed / 6;
            dispatch(modExp(lvl))
            dispatch(newMessage({'message':'Derrotas a: ' + enemy.name +' Ganas: ' + lvl.toFixed(2) + ' Puntos de Experiencia'}))
            dispatch(toggleBattle(false))

            dispatch(advance({"progress":1, "days":0.5}))
            if(player.exp > player.maxExp){
                dispatch(toggleLevelUp(true))
            }
        }
        //else{console.log('player: ',player.life,' enemy:',enemy.life)}
    }

    function playerAction(){
        dispatch(guardDown())//para regular
        if(player.stamina >= 2){//ataque Basico //dispatch(newMessage({'message':''}))
            dispatch(modStamina(-2))
            const result = calculateDmg( player.attack - (enemy.defence * 0.8).toFixed(1), player.state, enemy.state )
            dispatch(newMessage({'message':'Atacas por: '+ result.dmg + ' puntos ' + result.aditionalText }))
            dispatch(setLife(-result.dmg))
        }else{
            dispatch(newMessage({'message':'Estas Cansado, Te Tomas un Respiro.'}))
            dispatch(modStamina(player.maxStamina))
        }
        
    }
    function enemyAction(){
        dispatch(setGuardDown())//para regular
        const action = enemyRandomTurn(enemy.class)

        if(enemy.stamina >= 2 && action === 'Attack'){////////////////////////////// Ataque Basico /////////////////////////////////////
            dispatch(setStamina(-2)); dispatch(setMana(enemy.maxMana * 0.2))//mana y vida
            const result = calculateDmg( enemy.attack - (player.defence * 0.8).toFixed(1), enemy.state, player.state )
            dispatch(newMessage({'message':enemy.name+' Te Ataca por: '+ result.dmg + ' puntos ' + result.aditionalText }))
            dispatch(modLife(-result.dmg))//daño!

        }else if(action === 'buff Attack'){///////////////////////////////////// Boost de Ataque /////////////////////////////////////////
            dispatch(newMessage({'message':enemy.name + ' Se prepara sus armas y aumenta su ataque + 4 puntos'})); dispatch(setAttack(4))

        }else if(action === 'castMagic'){/////////////////////////////////////// Usar Magia - Inicio ////////////////////////////////////////////
            const result = castMagic(enemy.skills[getRandomInt(enemy.skills.length - 1)], enemy.mana)

            //si se castea algo
            if(result.spellCasted){
                const magicCalculatedDmg = calculateDmg( result.dmg - (player.defence * 0.8).toFixed(1), enemy.state, player.state )
                dispatch(newMessage({'message':enemy.name + result.message + magicCalculatedDmg.dmg + magicCalculatedDmg.aditionalText}))
                dispatch(setMana(-result.cost)); dispatch(modLife(-magicCalculatedDmg.dmg))//vida y mana

            //si falla la magia, ataque basico
            }else if(enemy.stamina >= 2){
                dispatch(setStamina(-2)); dispatch(setMana(enemy.maxMana * 0.2))//mana y vida
                const result = calculateDmg( enemy.attack - (player.defence * 0.8).toFixed(1), enemy.state, player.state )
                dispatch(newMessage({'message':enemy.name+' Te Ataca por: '+ result.dmg + ' puntos ' + result.aditionalText }))
                dispatch(modLife(-result.dmg))//daño!

            //esto es cuando no tenga mana ni estamina - Descanso
            }else { dispatch(newMessage({'message':'el enemigo se come los mocos mientras descansa... '}))
            dispatch(setStamina(enemy.maxStamina)); dispatch(setMana(enemy.maxMana * 0.5)) //vida y mana

            //regular maximos xd
            if(enemy.mana > enemy.maxMana){dispatch(setMana(enemy.maxMana))}; if(enemy.stamina > enemy.maxStamina){dispatch(setStamina(enemy.maxStamina))}
        }
/////////////////////////////////////// Usar Magia  - Fin  //////////////////////////////////////////// 
        }else if(action === 'Guard'){dispatch(newMessage({'message':enemy.name + ' Levanta Su Guardia '})); dispatch(setGuardUp())}///////

        else{dispatch(newMessage({'message':'El Enemigo Descansa Recuperando Resistencia y Mana '}))
            dispatch(setStamina(enemy.maxStamina))
        }
        
    }


    return <><Button onClick = {() => {//dispatch(newMessage({'message':''}))
        // dispatch(newMessage({'message':'___ Turno ' + turn + ' ___'}))
        // if(player.speed > enemy.speed){//setTimeout(( ) => playerAction() , 2000) //setTimeout(() => enemyAction(), 6000)
        //     playerAction()
        //     enemyAction() 
        // }else{
        //     enemyAction()
        //     playerAction()
        // }
        // dispatch(turnCount())
        console.log('acabas de clikear Atacar')
        dispatch(clickAttack(true))
    const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)
    
    }}>Atacar!</Button>
    
    </>
}