import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../../../redux/logs";

//Reducers
import {modLife, rest} from '../../../redux/player/playerInfo'
import { advance } from "../../../redux/enviroment/enviromentValues";

export default function Rest(){
    const dispatch = useDispatch()
    const player = useSelector(state => state.playerInfo)
  
    function calculateDiff(){//agrega 50% de tu vida maxima, recortando la diferencia si excede el maximo
        let lifeToAdd = player.maxLife * 0.5
        let totalLife = lifeToAdd + player.life
        let diff = 0
        if(totalLife > player.maxLife){ diff =  totalLife - player.maxLife }
        if(diff > 0){return lifeToAdd - diff}
        else{return lifeToAdd + diff}
    }
    return<Button onClick={() => {
        calculateDiff()//calcula la vida que se va a agregar
        dispatch(newMessage({'message':'Descansas, Recuperando energia y '+ calculateDiff()+' puntos de vida'}))

        dispatch(advance({'days':1}))
        dispatch(rest())//restablecer stamina y vida
        dispatch(modLife(calculateDiff()))

        const scroll = document.getElementById('scrollBox') ;scroll.scroll(0, scroll.scrollHeight)//Scroll to end
    }}>Descansar</Button>
}