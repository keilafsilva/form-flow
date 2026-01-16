import * as C from './styles'
import { Theme } from '../../components/Theme';
import { useNavigate, Link} from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { useEffect } from 'react';

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  if (!dispatch) {
    console.error('Dispatch não disponível');
    return null;
  }

  useEffect(() => {
    if (state.name === '' || state.email === '' || state.github === '') {
      const step = Math.max(state.currentStep, 1);
      navigate(step === 1 ? '/' : `/step${step}`);
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email != '' && state.github != '') {
      console.log(state);
      alert('Finalizado com sucesso!');
    } else {
      alert('Preencha os dados!');
    }
  };

  if (!state) {
    return (
      <Theme>
        <C.Container>
          <p>Carregando...</p>
        </C.Container>
      </Theme>
    );
  }

  const nivelProframador = () => {
    if (state.level === 0) {
      return 'Iniciante';
    } else {
      return 'Programador';
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Finalizando o seu cadastro</h1>
        <p>Confira os dados e, se estiverem corretos, clique no botão Finalizar cadastro.</p>

        <hr />

        <h3>Nome</h3>
        <span>{state.name}</span>

        <h3>Nível em programação</h3>
        <span>{nivelProframador()}</span>

        <h3>E-mail</h3>
        <span>{state.email}</span>

        <h3>GitHub</h3>
        <span>{state.github}</span>

        <div className='buttons'>
          <Link to="/step3" className='backButton'>
            {' '}
            Voltar
          </Link>

          <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </div>
        
      </C.Container>
    </Theme>
  );
};