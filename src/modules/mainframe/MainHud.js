//MUI
import { Grid, ButtonGroup } from "@mui/material";
//modules
import PlayerStatusBar from './PlayerStatusBar'
import Logs from "./Logs";
import Animations from './Animations'
//Botones del Hud
import Advance from "./mainHudButtons/Advance";
import Rest from "./mainHudButtons/Rest";
import Inventory from "./mainHudButtons/Inventory";
import ClearConsole from './mainHudButtons/ClearConsole';


function Buttons(){

    return<ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth >
        <Advance/> 
        <Rest />
        <Inventory />
        <ClearConsole />
    </ButtonGroup>
}

export default function MainHud(){//Main
    //const playerData = useSelector(state => state.playerInfo)

    
    return<><Grid container className="mainHud">
        <Grid item xs={10}>{/* cuadro central de la pantalla */}
            <Animations /> <Logs />
        </Grid>
        <PlayerStatusBar />{/* esto mide xs = 2 */}
        <Buttons /> {/* esto mide xs = 12 */}
        
    </Grid></>
}