import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Skill(){
    const battleDev = useSelector(state => state.battleController)
    return <Button onClick={() => {
        console.log(' datos dev:!!! ', battleDev)
    }}>Habilidades</Button>
}