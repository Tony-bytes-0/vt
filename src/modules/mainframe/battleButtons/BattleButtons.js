//React
//import { useState } from "react";
//MUI
import { ButtonGroup, Grow } from "@mui/material";
import Attack from './Attack';
import Guard from './Guard';
import Skill from './Skill';
import Flee from './Flee';
//Redux
import { useSelector } from "react-redux";
import MatchOver from "./MatchOver";
import { useEffect } from "react";


export default function BattleButtons(){
    //const dispatch = useDispatch()
    const battle = useSelector(state => state.hudController.battle)

    useEffect( () => {
        console.log('esto deberia ejecutarse una sola vez :S')
    })

    if(battle){
        return <Grow in={true}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth className="battleButtons battleHud">
                <Attack /> <Guard /> <Skill /> <Flee />
            </ButtonGroup>
            
        </Grow>
    }

    else{return <></>}

}