import * as C from './styles'
import { Theme } from '../../components/Theme';
import { useNavigate, Link} from 'react-router-dom';
import { FormActions, useForm} from '../../contexts/FormContext';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption/index';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();


useEffect(() => {
  if (state.name === '') {
    navigate('/');
  } else {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
  }
}, []);

const handleNextStep = () => {
  if (state.name != '') {
    navigate('/step3');
  } else {
        alert("Preencha os dados!")

  }
  
};

const setLevel = (level: 0 | 1) => {
  dispatch({
    type: FormActions.setLevel,
    payload: level
  })
}

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/4</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

          <SelectOption
            title="Sou Iniciante"
            description="Comecei a programar há menos de 2 anos"
            icon="🥳"
            selected={state.level === 0}
            onClick= {() => setLevel(0)}
          />

          <SelectOption
            title="Sou programador"
            description="Já programado a 2 anos ou mais"
            icon="😎"
            selected={state.level === 1}
            onClick= {() => setLevel(1)}

          />

        <div className='buttons'>
        <Link to = "/" className='backButton'> Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button></div>
      </C.Container>
    </Theme>
  );
};
