//modulos
import NewAdventurer from './NewAdventurer';
import StatusBar  from './StatusBar';
import MainHud from './mainframe/MainHud';
//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//MUI Components
import { Grid } from '@mui/material';




export default function Application(){

    return<>
        <BrowserRouter><Routes>
            <Route path='/' element={<NewAdventurer />} />
            
            <Route path='/start' element ={<Grid container spacing={0}>
                    <StatusBar />
                    <MainHud />
                </Grid>} />
            
        </Routes></BrowserRouter>
    </>
}
