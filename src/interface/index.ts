import React from 'react';

export interface ITodoItem {
  id: string;
  title: string;
  active: boolean;
}

export interface ICounterState {
  todos: ITodoItem[];
}

export interface IContextModel {
  state: ICounterState;
  dispatch: React.Dispatch<ICounterAction>;
}

export type ICounterAction =
  | { type: 'ADD'; payload: ITodoItem }
  | { type: 'DELETE'; payload: string };
