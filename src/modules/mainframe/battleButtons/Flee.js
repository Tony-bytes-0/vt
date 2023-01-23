import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleBattle } from "../../../redux/hudController";


export default function Flee(){
    const dispatch = useDispatch()

    return <Button onClick={() => {

        dispatch(toggleBattle(false))
        
    }}>Escapar</Button>
}