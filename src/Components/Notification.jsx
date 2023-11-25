import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../store/notification";

const Notification =({type,message,open})=>{
    const dispatch = useDispatch()
    const notification = useSelector((state)=>state.alert.notification);
    const handleClose = () =>{
        dispatch(alertActions.showNotificatio({
            open:false
        }))
    }
    return(
        <div>
             {notification.open && 
             <Alert severity={type} onClick={handleClose} 
             style={{cursor:"pointer", marginTop:"15%"}}>
                {message}
             </Alert>}
        </div>
    )
}

export default Notification;