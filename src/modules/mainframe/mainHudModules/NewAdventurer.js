import { FormControl, TextField, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newCharacters } from "../../staticObjects/Characters";
import { setPlayer } from "../../../redux/player/playerInfo";
import { useNavigate } from "react-router-dom";


export default function NewAdventurer(){//Main
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    return<Grid container padding={'20px'} alignItems='center' justifyContent={'center'} >
    <FormControl>
        <TextField variant="outlined" label='Nombre'></TextField>
        <Button variant="contained" onClick={() => {console.log('A')}}>admin</Button>{/* Dev */}
        
        <Button variant="contained" onClick={() => {dispatch(setPlayer(newCharacters.guerrero)); navigate('/start')}}>Guerrero</Button>

        <Button variant="contained" onClick={() => {dispatch(setPlayer(newCharacters.asesina)); navigate('/start')}}>Asesina</Button>

        <Button variant="contained" onClick={() => {dispatch(setPlayer(newCharacters.mago)); navigate('/start')}}>Mago</Button>

        {/* <Button variant="contained" onClick={() => {dispatch(setPlayer())}}>Trotamundos</Button>

        <Button variant="contained" onClick={() => {dispatch(setPlayer(newCharacters.cazador)); navigate('/start')}}>Cazador</Button>

        <Button variant="contained" onClick={() => {dispatch(setPlayer())}}>Esgrimista Magico</Button> */}

    </FormControl>
    </Grid>
}