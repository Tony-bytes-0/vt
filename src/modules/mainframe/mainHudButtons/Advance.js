import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//reducers
import { hudBasicMessages } from '../../staticObjects/messages'
import { newMessage } from '../../../redux/logs'
import { modStamina } from "../../../redux/player/playerInfo";
//React
import { useState } from "react";




export default function Advance(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
    const enviroment = useSelector(state => state.enviromentValues)
    const [disable, setDisable] = useState(false); function toggleDisable(){setDisable(true)}

    
    return<Button variant='contained'  aria-label="outlined primary button group" disabled={disable} data-anijs="if: click, do: flipInY animated" fullWidth 
    onClick={() => {
        
        dispatch(modStamina(-enviroment.advanceEnergyCost))

        dispatch(newMessage(hudBasicMessages.advance))//mensaje de avanzar
        if(player.stamina <= enviroment.advanceEnergyCost){  toggleDisable()  }//desactivar si no tienes estamina
        const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)//Scroll to end
    }}>Avanzar, chiquito</Button>
}