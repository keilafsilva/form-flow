import * as C from './styles'
import { Theme } from '../../components/Theme';
import { useNavigate, Link} from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { useEffect, useState, type ChangeEvent } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  if (!dispatch) {
    console.error('Dispatch não disponível');
    return null;
  }

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidGithub = (github: string) =>
    /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/.test(github);

  const handleNextStep = () => {
    let hasError = false;

    // EMAIL
    if (state.email.trim() === '') {
      setEmailError('O e-mail é obrigatório');
      hasError = true;
    } else if (!isValidEmail(state.email)) {
      setEmailError('Digite um e-mail válido');
      hasError = true;
    }

    // GITHUB
    if (state.github.trim() === '') {
      setGithubError('O GitHub é obrigatório');
      hasError = true;
    } else if (!isValidGithub(state.github)) {
      setGithubError('Digite um GitHub válido (https://github.com/usuario)');
      hasError = true;
    }

    if (!hasError) {
      navigate('/step4');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });

    if (emailError) setEmailError('');
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });

    if (githubError) setGithubError('');
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

  const [emailError, setEmailError] = useState('');
  const [githubError, setGithubError] = useState('');

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal, {state.name}, onde te achamos?</h1>
        <p>Preencha o campo abaixo com o seus contatos.</p>

        <hr />

        <label htmlFor="email">
          Qual seu e-mail?
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            value={state.email}
            onChange={handleEmailChange}
            autoComplete="email"
            aria-invalid={!!emailError}
            aria-describedby={emailError ? 'email-error' : undefined}
          />

          {emailError && (
            <span id="email-error" className="error">
              {emailError}
            </span>
          )}
        </label>

        <label htmlFor="github">
          Qual seu GitHub?
          <input
            id="github"
            name="github"
            type="url"
            placeholder="https://github.com/seu-usuario"
            value={state.github}
            onChange={handleGithubChange}
            autoComplete="url"
            aria-invalid={!!githubError}
            aria-describedby={githubError ? 'github-error' : undefined}
          />

          {githubError && (
            <span id="github-error" className="error">
              {githubError}
            </span>
          )}
        </label>

        <div className='buttons'>
          <Link to="/step2" className='backButton'>
            {' '}
            Voltar
          </Link>

          <button onClick={handleNextStep}>Próximo</button>
        </div>
      </C.Container>
    </Theme>
  );
};