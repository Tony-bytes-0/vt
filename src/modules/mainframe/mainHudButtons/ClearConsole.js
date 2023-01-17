import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearConsole } from "../../../redux/logs";

export default function Clear(){
    const dispatch = useDispatch()
    return <Button onClick={() => {
        dispatch(clearConsole())
    }}> Limpiar Consola </Button>
}