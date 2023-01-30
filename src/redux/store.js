import { configureStore } from '@reduxjs/toolkit'
//Player & Enemy
import playerInfo from './player/playerInfo'; import enemy from './enemy';
import battleController from './battleController';

//enviroment
import enviromentValues from './enviroment/enviromentValues'

//Hud
import logs from './logs'
import hudController from './hudController'
import battleButonsController from './battleButonsController'


export default configureStore({
    reducer: { playerInfo, enemy, enviromentValues, logs, hudController, battleController, battleButonsController }
})