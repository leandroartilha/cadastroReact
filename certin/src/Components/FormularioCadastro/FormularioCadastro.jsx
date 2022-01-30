import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@mui/material/';

function FormularioCadastro({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("Leandro");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});


    return(
       <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
       }}>
           
            <TextField
            value={nome}
            onChange={(event)=>{
                let tmpNome = event.target.value;                
                if(tmpNome.length >= 3){
                    tmpNome = tmpNome.substr(0, 3);
                }       
                setNome(tmpNome);      
            }}
            
            id="nome" 
            label="Nome" 
            variant="standard" 
            margin="normal" 
            fullWidth/>

            <TextField 

            onChange={(event)=>{
                setSobrenome(event.target.value);
                
            }}

            id="sobrenome" 
            label="Sobrenome" 
            variant="standard" 
            margin="dense" 
            fullWidth/>

            <TextField
                value={cpf}
                onChange={(event) => {
                setCpf(event.target.value);
                }}

                onBlur={(event)=>{
                const ehValido = validarCPF(cpf);
                setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel label="Promoções" control={
                <Switch   
                checked={promocoes}
                name="promocoes"                
                label="Promoções"  
                color='primary'

                onChange={(event)=>{
                   setPromocoes(event.target.checked);
                }}
                />         
            }/>
               
            <FormControlLabel label="Novidades" control={
                <Switch
                checked={novidades}
                onChange={(event)=>{
                    setNovidades(event.target.checked);
                }}
                name="Novidades"
                
                label="Novidades"  
                color='primary'
                />
            }/>
            

            <Button type="submit"variant="contained"> Cadastrar </Button>

       </form>
    )
}

export default FormularioCadastro;