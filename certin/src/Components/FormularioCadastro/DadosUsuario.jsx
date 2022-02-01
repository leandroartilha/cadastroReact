import {TextField, Button} from '@mui/material/';
import { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacaoCadastro';

function DadosUsuario({aoEnviar}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha:{valido:true, texto:""}});

    const validacoes = useContext(ValidacoesCadastro);

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
                aoEnviar({email, senha})
            }
            
        }}>

            <TextField
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
            
            id="email" 
            label="Email"
            type="email" 
            variant="standard" 
            margin="normal" 
            fullWidth
            required
            
            />

            <TextField
            value={senha}
            onChange={(event)=>{
                setSenha(event.target.value);
            }}

            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            
            name="senha"
            id="senha" 
            label="Senha"
            type="password" 
            variant="standard" 
            margin="normal" 
            fullWidth
            
            />

            <Button type='submit' variant="contained">Próximo</Button>

        </form>
    )

}

export default DadosUsuario;