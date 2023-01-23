import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newMessage } from "../../../redux/logs";
import { hudBasicMessages } from "../../staticObjects/messages";
//Reducers
import {rest} from '../../../redux/player/playerInfo'
import { advance } from "../../../redux/enviroment/enviromentValues";

export default function Rest(){
    const dispatch = useDispatch()
    return<Button onClick={() => {
        dispatch(advance({'days':1}))
        dispatch(rest())
        dispatch(newMessage(hudBasicMessages.rest))
        const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)//Scroll to end
    }}>Descansar</Button>
}