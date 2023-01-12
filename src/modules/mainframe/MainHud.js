//MUI
import { Button, Grid, ButtonGroup } from "@mui/material";
//import { useSelector } from "react-redux";
//modules
import { hudBasicMessages } from "../staticObjects/messages";
import PlayerStatusBar from './PlayerStatusBar'
import Logs from "./Logs";
import Animations from './Animations'
//reducers
import { useDispatch } from "react-redux";
import { clearConsole, newMessage } from "../../redux/logs";




function Buttons(){
    const dispatch = useDispatch()
    const makeClearConsole = () => {dispatch(clearConsole())}
    
    return <Grid item xs = {12} > 
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth >   
            <Button >Crear Aventurero</Button>
            <Button onClick={() => {dispatch(newMessage(hudBasicMessages.advance))}}>Avanzar</Button>
            <Button>Descansar</Button>
            <Button>Inventario</Button>
            <Button onClick={ makeClearConsole }>Limpiar consola</Button>
        </ButtonGroup>
    </Grid> 
}

export default function MainHud(){
    //const playerData = useSelector(state => state.playerInfo)

    
    return<><Grid container className="mainHud">
        <Animations />
        <Logs />
        <PlayerStatusBar />{/* esto mide xs = 2 */}
        

        
       

        <Buttons /> {/* esto mide xs = 12 */}
        
    </Grid></>
}