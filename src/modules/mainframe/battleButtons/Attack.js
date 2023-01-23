import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//Reducers
import { turnCount } from "../../../redux/battleController";
import { toggleBattle } from "../../../redux/hudController";
import { modExp, modLife } from "../../../redux/player/playerInfo";
import { setLife } from "../../../redux/enemy";
import { newMessage } from "../../../redux/logs";
import { useEffect } from "react";

export default function Attack(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
    const enemy = useSelector(state => state.enemy)

    useEffect(() => {
        setTimeout(() => {
            console.log('referi de useEffect')
            referi()
        }, 200);
      });

    function referi(){
        if(player.life <= 0){console.log('el player semurio palcoño'); 
            dispatch(toggleBattle(false))
        }
        else if(enemy.life <= 0 ){//final de la batalla
            const lvl = enemy.maxLife + enemy.maxMana + enemy.maxStamina + enemy.attack + enemy.defence + enemy.speed / 6;
            dispatch(modExp(lvl))
            dispatch(newMessage({'message':'Derrotas a: ' + enemy.name +' Ganas: ' + lvl.toFixed(2) + 'Puntos de Experiencia'}))
            console.log('mueeeelto'); dispatch(toggleBattle(false))
        }
        else{console.log('player: ',player.life,' enemy:',enemy.life)}
        //const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)
    }

    function playerAction(){
        const dmg = player.attack - (enemy.defence * 0.6).toFixed(1)
        dispatch(newMessage({'message':'Atacas por: '+ dmg + ' puntos de daño'}))
        dispatch(setLife(-dmg))
    }
    function enemyAction(){
        const dmg = enemy.attack - (player.defence * 0.6).toFixed(1)
        dispatch(newMessage({'message':enemy.name+' Te Ataca por: '+ dmg + ' puntos de daño'}))
        dispatch(modLife(-dmg))
    }

    return <Button onClick = {() => {
        
        if(player.speed > enemy.speed){
            playerAction(); 
            enemyAction(); 
        }else{
            enemyAction();  
            playerAction(); 
        }

        dispatch(turnCount())

    const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)
    }}>Atacar!</Button>
}