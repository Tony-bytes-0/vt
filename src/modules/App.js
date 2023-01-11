//modulos
//React-Router
//import {BrowserRouter, Route, Routes} from 'react-router-dom'

//MUI Components
import { Grid } from '@mui/material';
import MainHud from './mainframe/MainHud';
import { StatusBar } from './statusBar/StatusBar';

export default function Application(){

    return<><Grid container>
        <StatusBar />
        <MainHud />
    </Grid></>
}
