import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//reducers

import { newMessage } from '../../../redux/logs'
import { modStamina } from "../../../redux/player/playerInfo";
import { advance } from "../../../redux/enviroment/enviromentValues";
import { toggleBattle } from "../../../redux/hudController";
import { setEnemy } from '../../../redux/enemy'

//Modules
import { hudBasicMessages } from '../../staticObjects/messages'
import { enemysObject } from "../../staticObjects/Characters";

export default function Advance(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
    const enviroment = useSelector(state => state.enviromentValues)
    const enemys = enemysObject.forest

    function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }; 
    function getRandomInt(max) { return Math.floor(Math.random() * max); }

    function events(){
        const encounter =  getRandomArbitrary(0, 100)
        //Si se consigues enemigos 
        if (encounter <= enviroment.encounterProbability){  dispatch(newMessage({'message':'Al Avanzar, Consigues Enemigos!!', 'conflict':true}))
            dispatch(toggleBattle(true))
            dispatch(setEnemy( Object.values(enemys)[getRandomInt(3)] ))//esto selecciona un enemigo aleatorio
        }
        else { dispatch(newMessage(hudBasicMessages.advance)) }

        //dispatch(newMessage({}))    
    }

    
    return<Button variant='contained'  aria-label="outlined primary button group"  fullWidth 
    onClick={() => {if(player.stamina >= enviroment.advanceEnergyCost){
            //perder stamina
            dispatch(modStamina(-enviroment.advanceEnergyCost))
            //Evento Aleatorio
            events()
        }
        else{ 
            dispatch(newMessage(hudBasicMessages.noEnergy))
         }//desactivar si no tienes estamina


        //dias transcurridos y progreso
        dispatch(advance({"progress":1, "days":0.5}))
        //Scroll to end
        const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)
    }}>Avanzar</Button>
}