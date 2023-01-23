import { Modal } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
//reducers

export default function MatchOver(){
    const show = useSelector(state => state.hudController.battle)
    const [mutate, setMutate] = useState(!show)

    const player = useSelector(state => state.playerInfo)
    const enemy = useSelector(state => state.enemy)
    
    
    return <Modal open={mutate} ><div className="centrate simpleModal">
            modal al toque
        </div></Modal>
}