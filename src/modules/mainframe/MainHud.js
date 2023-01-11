import { Button, Grid, ButtonGroup } from "@mui/material";
//import { useSelector } from "react-redux";

import PlayerStatusBar from './PlayerStatusBar'


function Buttons(){
    return <Grid item xs = {12} > 
        <div className="hudBtns" ><ButtonGroup variant="contained" aria-label="outlined primary button group" >   
            <Button>Crear Aventurero</Button>
            <Button>Avanzar</Button>
            <Button>Descansar</Button>
            <Button>Inventario</Button>
            <Button>Resumen</Button>
        </ButtonGroup></div>
    </Grid> 
}

export default function MainHud(){
    //const playerData = useSelector(state => state.playerInfo)

    
    return<><Grid container className="mainHud">



        
    <PlayerStatusBar />
    <Buttons />
    </Grid></>
}