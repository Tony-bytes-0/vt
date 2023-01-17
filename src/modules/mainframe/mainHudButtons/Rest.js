import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newMessage } from "../../../redux/logs";
import { hudBasicMessages } from "../../staticObjects/messages";

export default function Rest(){
    const dispatch = useDispatch()
    return<Button onClick={() => {
        dispatch(newMessage(hudBasicMessages.rest))
        
        const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)//Scroll to end
    }}>Descansar</Button>
}