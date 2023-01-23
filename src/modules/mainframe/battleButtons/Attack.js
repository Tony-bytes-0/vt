import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//Reducers
import { turnCount } from "../../../redux/battleController";
import { setLife } from "../../../redux/enemy";
import { newMessage } from "../../../redux/logs";

export default function Attack(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
    const enemy = useSelector(state => state.enemy)

    function playerAction(){
        const dmg = player.attack - (enemy.defence * 0.6).toFixed(2)
        console.log(dmg)
        dispatch(newMessage({'message':'tomas el primero movimiento, atacas por: '+ dmg + ' puntos de daño'}))
        dispatch(setLife(-dmg))
    }
    function enemyAction(){
        console.log('flojo, tehee ')
    }

    return <Button onClick = {() => {
        
        if(player.speed > enemy.speed){
            playerAction()
            enemyAction()
        }else{
            enemyAction()
            playerAction()
        }

        dispatch(turnCount())

    const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)
    }}>Atacar!</Button>
}