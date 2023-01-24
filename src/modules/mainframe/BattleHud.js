import { Divider, Grid, Stack, Paper, Grow } from "@mui/material";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',...theme.typography.body2,
padding: theme.spacing(1), textAlign: 'center', color: "black", fontSize:"0.8em" }));


export default function BattleHud (){

    const enemy = useSelector(state => state.enemy)
    const battle = useSelector(state => state.hudController.battle)
    const turn = useSelector(state => state.battleController.turn)


    if(battle){return <Grid item xs={12} maxHeight={350} className='battleHud'>
            <Grow in={true}>
                <Stack direction={'row'} divider={<Divider orientation="horizontal" flexItem />}  spacing={0.5}>
                    <Item>Enemigo: <br/>{enemy.name}</Item>
                    <Item>Puntos de Vida:<br/>{enemy.life.toFixed(1)} / {enemy.maxLife.toFixed(1)}</Item>
                    <Item> Resistencia:<br/>{enemy.stamina.toFixed(1)} / {enemy.maxStamina.toFixed(1)}</Item>
                    <Item>Mana:<br/>{enemy.mana.toFixed(1)} / {enemy.maxMana.toFixed(1)}</Item>
                    <Item>Ataque:<br/>{enemy.attack}</Item>
                    <Item>Defensa:<br/>{enemy.defence}</Item>
                    <Item>Velocidad:<br/>{enemy.speed}</Item>
                    <Item>Turno:<br/>{turn}</Item>
                    <Item >Estados: {enemy.state.map((e) => <li key = {e}>{e}<br/></li>)}</Item>
                </Stack>
            </Grow>
        </Grid>}
        
    else{return<> </>}

    
}