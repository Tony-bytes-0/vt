//modulos
import NewAdventurer from './mainframe/mainHudModules/NewAdventurer';
//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//MUI Components
import { Grid } from '@mui/material';
import MainHud from './mainframe/MainHud';
import { StatusBar } from './statusBar/StatusBar';


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
