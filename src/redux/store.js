import { configureStore } from '@reduxjs/toolkit'
//Player
import playerInfo from './player/playerInfo'

//enviroment
import enviromentValues from './enviroment/enviromentValues'

//Hud
import logs from './logs'


export default configureStore({
    reducer: { playerInfo, enviromentValues, logs }
})