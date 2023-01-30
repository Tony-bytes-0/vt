//React
//import { useState } from "react";
//MUI
import { ButtonGroup, Grow } from "@mui/material";
import Attack from './Attack';
import Guard from './Guard';
import Skill from './Skill';
import Flee from './Flee';
//Redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clickAttack, clickCalm, clickGuard } from "../../../redux/battleButonsController";
import Calm from "./Calm";
//Weas pa pelia
import { setReferi, turnCount } from "../../../redux/battleController";
import { toggleBattle, toggleLevelUp } from "../../../redux/hudController";
import { modExp, modLife, modStamina, guardDown,  } from "../../../redux/player/playerInfo";//PLAYER
import { setLife, setStamina, setMana, setAttack, setGuardUp, setGuardDown } from "../../../redux/enemy";//ENEMY
import { newMessage } from "../../../redux/logs";
import { calculateDmg, enemyRandomTurn, getRandomInt, castMagic } from "../../staticObjects/dmgCalculator";

export default function BattleButtons(){
    const dispatch = useDispatch()
    const battle = useSelector(state => state.hudController.battle)
    const player = useSelector(state => state.playerInfo)
    const enemy = useSelector(state => state.enemy)

    const turn = useSelector(state => state.battleController.turn)
    const referi = useSelector(state => state.battleController.referi)
    const battleButonsController = useSelector(state => state.battleButonsController )

    function playerAction(){
        if(battleButonsController.attack && battle){
            console.log('ejecutar Attack'); dispatch(clickAttack(false))
        }

        else if(battleButonsController.guard && battle){
            console.log('ejecutar Guardia!'); dispatch(clickGuard(false))
        }

        else if(battleButonsController.calm && battle){
            console.log('Calmarse'); dispatch(clickCalm(false))
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
            }else { dispatch(newMessage({'message':'El Enemigo Descansa Recuperando Resistencia y Mana '}))
            dispatch(setStamina(enemy.maxStamina)); dispatch(setMana(enemy.maxMana * 0.5)) //vida y mana

            //regular maximos xd
            if(enemy.mana > enemy.maxMana){dispatch(setMana(enemy.maxMana))}; if(enemy.stamina > enemy.maxStamina){dispatch(setStamina(enemy.maxStamina))}
        }
/////////////////////////////////////// Usar Magia  - Fin  //////////////////////////////////////////// 
        }else if(action === 'Guard'){dispatch(newMessage({'message':enemy.name + ' Levanta Su Guardia '})); dispatch(setGuardUp())}///////

        else{dispatch(newMessage({'message':'El Enemigo Descansa Recuperando Resistencia y Mana '}))
            dispatch(setStamina(enemy.maxStamina))
        }
        dispatch(setReferi(false))
    }

    useEffect( () => {
        //console.log('use effect !!!', battleButonsController)
        if(battleButonsController.attack || battleButonsController.guard || battleButonsController.calm){
            dispatch(newMessage({'message':'___ Turno ' + turn + ' ___'}))
            if(player.speed > enemy.speed){//setTimeout(( ) => playerAction() , 2000) //setTimeout(() => enemyAction(), 6000)
                playerAction()
                enemyAction() 
            }else{
                enemyAction()
                playerAction()
            }
            dispatch(turnCount());

        }
    } )

    if(battle){
        return <Grow in={true}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth className="battleButtons battleHud">
                <Attack /> <Guard /> <Calm /> <Skill /> <Flee />
            </ButtonGroup>
            
        </Grow>
    }

    else{return <></>}

}