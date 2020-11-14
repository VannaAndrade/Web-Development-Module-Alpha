import React from 'react'
import './Cardlogin.css'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

export default function Cardlogin(){

    return(
        <div id="cardlog">
            <Input type="text" placeholder="Email"></Input>
            <br></br>
            <Input type="text" placeholder="Senha"></Input>
            <br></br>
            <Button type="submit" color="primary" variant="contained">Logar</Button>
        </div>
    )
}