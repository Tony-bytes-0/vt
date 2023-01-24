import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { spendPoints, toggleLevelUp } from "../../../redux/hudController";

export default function Inventory(){
    const dispatch = useDispatch()
    return <Button onClick={() => {
        dispatch( spendPoints(4) )
        dispatch( toggleLevelUp(true) )  
    }} >Inventario</Button>
}