import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@mui/material/';

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
    <form onSubmit={(event)=>{
        event.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade});
    }}>
        <TextField
        value={cep}
        onChange={(event)=>{
            setCep(event.target.value);
        }}            
            id="cep" 
            label="CEP"
            type="number" 
            variant="standard" 
            margin="normal" 
               
            />

        <TextField    
            value={endereco}
            onChange={(event)=>{
                setEndereco(event.target.value);
            }}         
            id="endereco" 
            label="Endereço"
            type="text" 
            variant="standard" 
            margin="normal" 
            fullWidth   
            />

            <TextField
            value={numero}
            onChange={(event)=>{
                setNumero(event.target.value);
            }}     
            id="numero" 
            label="Número"
            type="number" 
            variant="standard" 
            margin="normal" 
               
            />

            <TextField
            value={estado}
            onChange={(event)=>{
                setEstado(event.target.value);
            }}     
            id="estado" 
            label="Estado"
            type="text" 
            variant="standard" 
            margin="normal"                
            />

            <TextField    
            value={cidade}
            onChange={(event)=>{
                setCidade(event.target.value);
            }}             
            id="cidade" 
            label="Cidade"
            type="text" 
            variant="standard" 
            margin="normal"                
            />

            <Button type="submit" variant="contained">Enviar</Button>

    </form>
    )
}

export default DadosEntrega;