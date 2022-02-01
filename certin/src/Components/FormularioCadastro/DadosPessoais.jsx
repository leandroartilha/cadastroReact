import React, {useState, useContext} from 'react';
import {TextField, Button, Switch, FormControlLabel} from '@mui/material/';
import ValidacoesCadastro from '../../contexts/ValidacaoCadastro';

function DadosPessoais({aoEnviar}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    const validacoes = useContext(ValidacoesCadastro)


    function validarCampos(event){
        const {name, value} = event.target;        
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);            
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true;
    }

    return(
        <form onSubmit={(event)=>{
                    event.preventDefault();
                    if(possoEnviar()){
                        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                    }
                    
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

                        onBlur={validarCampos}
                        error={!erros.cpf.valido}
                        helperText={erros.cpf.texto}
                        id="CPF"
                        name="cpf"
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
                    

                    <Button type="submit"variant="contained"> Próximo </Button>

            </form>
            )

}

export default DadosPessoais;