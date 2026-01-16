# FormFlow 🚀

Um formulário multi-etapas moderno e responsivo desenvolvido com **React**, **TypeScript** e **Vite** realizado no curso da plataforma B7WEB.

## 📋 Sobre o Projeto

FormFlow é uma aplicação de cadastro com 4 etapas que coleta informações do usuário de forma intuitiva e segmentada:

1. **Passo 1/4**: Dados Pessoais (Nome)
2. **Passo 2/4**: Nível Profissional (Experiência)
3. **Passo 3/4**: Contatos (E-mail e GitHub)
4. **Passo 4/4**: Confirmação (Revisão de dados)

## ✨ Funcionalidades

- ✅ Formulário com múltiplas etapas
- ✅ Validação de dados em tempo real
- ✅ Navegação entre etapas
- ✅ Persistência de dados com Context API
- ✅ Design responsivo e moderno
- ✅ TypeScript para type-safety
- ✅ Styled Components para estilização

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem de código
- **Vite** - Build tool
- **React Router** - Navegação
- **Styled Components** - Estilização CSS-in-JS
- **ESLint** - Linter de código

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/form-flow.git

# Entre no diretório
cd form-flow

# Instale as dependências
npm install
```

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   ├── SidebarItem/
│   ├── SelectOption/
│   └── Theme/
├── pages/
│   ├── FormStep1/
│   ├── FormStep2/
│   ├── FormStep3/
│   └── FormStep4/
├── contexts/
│   └── FormContext.tsx
├── svgs/
├── App.tsx
├── main.tsx
└── router.tsx
```

## 🎨 Cores e Tema

O projeto utiliza um sistema de cores CSS com variáveis globais:

- `--color-1`: Branco (#ffffff)
- `--color-2`: Amarelo claro (#fffae3)
- `--color-3`: Roxo (#736681)
- `--color-4`: Verde pastel (#c1d9d0)
- `--color-5`: Roxo escuro (#62455b)
- `--color-6`: Preto (#141827)
- `--color-7`: Cinza (#424652)

## 💡 Contexto de Dados

O projeto utiliza **Context API** com `useReducer` para gerenciar o estado do formulário:

```tsx
- currentStep: número da etapa atual
- name: nome do usuário
- level: nível de experiência (0 ou 1)
- email: e-mail
- github: URL do GitHub
```

## 🔗 Links Úteis

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [React Router Documentation](https://reactrouter.com)

## 👤 Autor

**Keila Fernanda da Silva**


