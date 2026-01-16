import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

/* ---------- State ---------- */

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

/* ---------- Actions ---------- */

export const FormActions = {
  setCurrentStep: "setCurrentStep",
  setName: "setName",
  setLevel: "setLevel",
  setEmail: "setEmail",
  setGithub: "setGithub",
} as const;

type Action =
  | { type: typeof FormActions.setCurrentStep; payload: number }
  | { type: typeof FormActions.setName; payload: string }
  | { type: typeof FormActions.setLevel; payload: 0 | 1 }
  | { type: typeof FormActions.setEmail; payload: string }
  | { type: typeof FormActions.setGithub; payload: string };

/* ---------- Context ---------- */

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const FormContext = createContext<ContextType | undefined>(undefined);

/* ---------- Initial State ---------- */

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

/* ---------- Reducer ---------- */

const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };

    case FormActions.setName:
      return { ...state, name: action.payload };

    case FormActions.setLevel:
      return { ...state, level: action.payload };

    case FormActions.setEmail:
      return { ...state, email: action.payload };

    case FormActions.setGithub:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};

/* ---------- Provider ---------- */

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

/* ---------- Hook ---------- */

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm deve ser usado dentro de FormProvider");
  }

  return context;
};
