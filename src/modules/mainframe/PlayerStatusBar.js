import { Divider, Grid, Stack, Paper } from "@mui/material";

import { useSelector } from "react-redux";

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// function Item (){
//     return <ListItem></ListItem>
// }

export default function PlayerStatusBar (){
    const playerData = useSelector(state => state.playerInfo.playerData)
    console.log(playerData)

    return <Grid item xs={2} marginLeft='90%'>
        <Stack  divider={<Divider orientation="vertical" flexItem />} spacing={1}>
            <Item>Puntos de Vida:{playerData.life}/{playerData.maxLife}</Item>
            <Item>Resistencia:{playerData.stamina}/{playerData.maxStamina}</Item>
            <Item>Mana:{playerData.mana}/{playerData.maxMana}</Item>
            <Item>Ataque:{playerData.attack}</Item>
            <Item>Defensa:{playerData.defence}</Item>
            <Item>Velocidad:{playerData.speed}</Item>

        </Stack>
    </Grid>
}