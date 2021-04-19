import React, { useReducer } from 'react';
import { ICounterAction, ICounterState, IContextModel } from '../interface';

// Setup a default state for our reducer.
const defaultState: ICounterState = {
  todos: [],
};

// Setup basic reducer
const reducer = (
  state: ICounterState,
  action: ICounterAction,
): ICounterState => {
  switch (action.type) {
    case `ADD`:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case `DELETE`:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

// Export and create a context to be used by functional components.
export const Context = React.createContext({} as IContextModel);

// Export the provider, which we’ll wrap our application in. Were setting up the reducer and returning the Context.Provider with values mapped and rendering any children passed in.
export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
