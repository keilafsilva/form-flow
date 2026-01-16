import * as C from './styles'
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { useEffect, useState, type ChangeEvent } from 'react';

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  if (!dispatch) {
    console.error('Dispatch não disponível');
    return null;
  }

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 1
      });
    }
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name.trim() !== '') {
      setError('');
      navigate('/step2');
    } else {
      setError('O nome é obrigatório');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });

    if (error) {
      setError('');
    }
  };

  // ✅ Renderização condicional
  if (!state) {
    return (
      <Theme>
        <C.Container>
          <p>Carregando...</p>
        </C.Container>
      </Theme>
    );
  }

  const [error, setError] = useState('');

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/4</p>
        <h1>Vamos começar com o seu nome:</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="name">
          Seu nome completo
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            autoFocus
            value={state.name || ''}
            onChange={handleNameChange}
            autoComplete="name"
            aria-invalid={!!error}
            aria-describedby={error ? 'name-error' : undefined}
          />

          {error && (
            <span id="name-error" className="error">
              {error}
            </span>
          )}
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};