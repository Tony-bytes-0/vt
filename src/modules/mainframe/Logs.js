import {Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

function Line(data){
    return <span>{data}</span>
}

export default function Logs(){

    const logList = useSelector(state => state.logs)
    
    console.log('estos son los mensajes', logList)

    return<Grid item xs = {12} className='logs'>
        <Box flex={true}>
            {logList.map((e) => <li key={e.id}>{e.message}</li>)}
        </Box>
    </Grid>
}