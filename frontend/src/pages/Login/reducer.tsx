export const SUBMIT = 'SUBMIT';
export const ERROR = 'ERROR';
export const CHANGE_CHALLENGE = 'CHANGE_CHALLENGE';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export enum Status {
  initial,
  submitting,
  error,
}

type Action =
  | {type: typeof SUBMIT}
  | {type: typeof ERROR}
  | {type: typeof CHANGE_CHALLENGE; payload: string}
  | {type: typeof CHANGE_NAME; payload: string}
  | {type: typeof CHANGE_PASSWORD; payload: string};

type State = {
  challenge: string;
  name: string;
  password: string;
  status: Status;
};

export const initialState = {challenge: '', name: '', password: '', status: Status.initial};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGE_CHALLENGE:
      return {
        ...state,
        status: Status.initial,
        challenge: action.payload,
      };
    case CHANGE_NAME:
      return {
        ...state,
        status: Status.initial,
        name: action.payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        status: Status.initial,
        password: action.payload,
      };
    case SUBMIT:
      return {
        ...state,
        status: Status.submitting,
      };
    case ERROR:
      return {
        ...state,
        status: Status.error,
      };
    default:
      return state;
  }
};
