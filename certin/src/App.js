import React, {Component} from 'react';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@mui/material"
import {validarCPF, validarSenha} from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacaoCadastro';

class App extends Component {

  render(){
    return (
   <Container component="article" maxWidth="sm">
    <Typography variant='h4' align="center">Formulário de Cadastro</Typography>
    <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha}}>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </ValidacoesCadastro.Provider>
    
   </Container>
  );
  }
  
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
