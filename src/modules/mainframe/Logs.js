import {Grid, Slide  } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

export default function Logs(){

    const logList = useSelector(state => state.logs)
    
    //console.log('estos son los mensajes', logList)

    return<Grid item xs = {12} className='logs' id='scrollBox'>
        <Box flex={true} >
            {logList.map((e) => <Slide direction="right" key={e.id} in={true} > 
                <li className="logFragment"> {e.message} </li>  
            </Slide>)}
        </Box>
    </Grid>
}