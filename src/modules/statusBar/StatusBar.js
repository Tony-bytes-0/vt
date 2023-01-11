import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

export function StatusBar (){
    const zone = useSelector( state => state.enviromentValues.zone)
    const progress = useSelector( state => state.enviromentValues.progress)
    
    console.log(zone)
    return <Grid item xs = {12} className='statusBar'> Zona actual: {zone}<br/> avance: {progress} </Grid>
}