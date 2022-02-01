import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacoes}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    useEffect(()=>{
        if(etapaAtual === etapasArray.length){
            aoEnviar(dadosColetados);
        }
        
    })

    const etapasArray = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1);
    }
    return(
       <>
       <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>

       </Stepper>
        {etapasArray[etapaAtual]}
       </>
    )
}

export default FormularioCadastro;