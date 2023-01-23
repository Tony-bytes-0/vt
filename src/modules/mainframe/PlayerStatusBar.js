import { Divider, Grid, Stack, Paper } from "@mui/material";

import { useSelector } from "react-redux";

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "black",
  fontSize:"1.1em"
}));

// function Item (){
//     return <ListItem></ListItem>
// }

export default function PlayerStatusBar (){
    const playerData = useSelector(state => state.playerInfo)

    return <Grid item xs={2} maxHeight={450}>
        <Stack divider={<Divider orientation="vertical" flexItem />}  spacing={0.5}>
            <Item>Puntos de Vida:<br/>{playerData.life.toFixed(1)} / {playerData.maxLife.toFixed(1)}</Item>
            <Item>Resistencia:<br/>{playerData.stamina.toFixed(1)} / {playerData.maxStamina.toFixed(1)}</Item>
            <Item>Mana:<br/>{playerData.mana.toFixed(1)} / {playerData.maxMana.toFixed(1)}</Item>
            <Item>Ataque:{playerData.attack}</Item>
            <Item>Defensa:{playerData.defence}</Item>
            <Item>Velocidad:{playerData.speed}</Item>
            <Item>Exp: {playerData.exp.toFixed(1)}</Item>
        </Stack>
    </Grid>
}