//MUI
import { Grid, ButtonGroup, Grow } from "@mui/material";
//Botones del Hud
import Advance from "./mainHudButtons/Advance";
import Rest from "./mainHudButtons/Rest";
import Inventory from "./mainHudButtons/Inventory";
import ClearConsole from './mainHudButtons/ClearConsole';
import BattleHud from "./BattleHud";
//modules
import PlayerStatusBar from './PlayerStatusBar'
import Logs from "./Logs";
import Animations from './Animations'
import BattleButtons from "./battleButtons/BattleButtons";
import { useSelector } from "react-redux";
import LevelUpModal from "./LvlUpModal";

function Buttons(){
    const battle = useSelector(state => state.hudController.battle)

    if(battle){return <></>} else {return <Grow in = {true} >
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth >
            <Advance/> 
            <Rest />
            <Inventory />
            <ClearConsole />
        </ButtonGroup>
    </Grow>
    }
}

export default function MainHud(){//Main
    
    return<><Grid container className="mainHud">
        <BattleHud />{/*solo aparecen en batalla xs =12 */}

        <Grid item xs={10}>{/* cuadro central de la pantalla */}
            <Animations /> <Logs />
        </Grid>
        <PlayerStatusBar />{/* esto mide xs = 2 */}
        <Buttons /> {/* esto mide xs = 12 */}

        <BattleButtons />{/*solo aparecen en batalla xs = 12 */}

        <LevelUpModal />
    </Grid></>
}