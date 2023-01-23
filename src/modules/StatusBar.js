import { Grid, Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";


export default function StatusBar (){
    const zone = useSelector( state => state.enviromentValues.zone)
    const progress = useSelector( state => state.enviromentValues.progress)
    const days = useSelector( state => state.enviromentValues.days)
    const battle = useSelector(state => state.hudController.battle)


    console.log(zone)
    if(battle){return <></>}else return <Grid item xs = {12} className='statusBar plainBorder'> 
        <Box>
            <Grid item xs= {12}><Slide direction="up" in={true}><span>Zona: {zone} - Progreso en Zona: {progress}</span></Slide></Grid>
            <Grid item xs= {12}><Slide direction="up" in={true}><span>Dia: {days} </span></Slide></Grid>
        </Box>
    </Grid>    
}