import { ButtonGroup, Grid, Modal, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spendPoints, toggleLevelUp } from "../../redux/hudController";
import { setPlayer } from "../../redux/player/playerInfo";

export default function LevelUpModal(){
    const dispatch = useDispatch()
    const lvlUp = useSelector(state => state.hudController.levelUp)
    const pointsAvalible = useSelector(state => state.hudController.spendPoints)
    const player = useSelector(state => state.playerInfo)

    const [disableBtns, setDisable] = useState('true')
    const [life, setLife] = useState(0); 
    const [stamina, setStamina] = useState(0)
    const [mana, setMana] = useState(0)
    const [attack, setAttack] = useState(0)
    const [defence, setDefence] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [knowledge, setKnowledge] = useState(0)

    function restore(){
        setLife(0); setStamina(0); setMana(0); setAttack(0); setDefence(0); setSpeed(0); setKnowledge(0); 
    }
    function evaluatePoints(){
        if(pointsAvalible < 1){return true}else return false
    }

    if(lvlUp){return <Modal open = {lvlUp} >  
            <div className='centrate simpleModal'><Grid container spacing={1}>
                <Grid item xs = {12} ><h2> Subes de Nivel </h2></Grid>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>

                    <div className="verticalFlex element"><div className="element">Vida: {life}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setLife(life + 1); dispatch(spendPoints(pointsAvalible - 1))}} >+</Button></div>

                    <div className="verticalFlex element"><div className="element">Resistencia: {stamina}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setStamina(stamina + 1); dispatch(spendPoints(pointsAvalible - 1))}} >+</Button></div>

                    <div className="verticalFlex element"><div className="element">Poder Magico: {mana}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setMana(mana + 1); dispatch(spendPoints(pointsAvalible - 1))}}>+</Button></div>

                    <div className="verticalFlex element"><div className="element">Ataque: {attack}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setAttack(attack + 1); dispatch(spendPoints(pointsAvalible - 1))}}>+</Button></div>

                    <div className="verticalFlex element"><div className="element">Defensa: {defence}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setDefence(defence + 1); dispatch(spendPoints(pointsAvalible - 1))}} >+</Button></div>

                    <div className="verticalFlex element"><div className="element">Velocidad: {speed}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setSpeed(speed + 1); dispatch(spendPoints(pointsAvalible - 1))}} >+</Button></div>
                    
                    <div className="verticalFlex element"><div className="element">Sabiduria: {knowledge}</div><Button disabled = {evaluatePoints()}
                    onClick={() => {setKnowledge(knowledge + 1); dispatch(spendPoints(pointsAvalible - 1))}} >+</Button></div>
                    
                </ButtonGroup>

                <Button variant="contained" onClick={() => {restore(); dispatch(spendPoints(4))}} > Limpiar Seleccion </Button><Grid item xs={4}>Puntos para gastar: {pointsAvalible} </Grid>
                <Grid item xs={4}>
                    
                <Button onClick={() => {
                    dispatch(setPlayer({
                    'name':player.name, 'class':player.class, 'level': player.level, 'exp':0, 'maxExp': player.maxExp * 1.6,
                    'life':player.life , 'stamina':6, 'attack':player.attack + attack, 'defence':player.defence + defence, 
                    'mana':1, 'speed':player.speed + speed, 'maxLife':player.maxLife + life, 'maxStamina':player.maxStamina + stamina, 'maxMana': player.maxMana + mana, 
                    'knowledge': player.knowledge + knowledge, 'skills': player.skills, 'state':[]
                    }))
                    dispatch(toggleLevelUp(false))
                    restore()
                }}>Confirmar Cambios</Button></Grid>
                

            </Grid></div> 
        </Modal>

    }
    else{return <></>}
}