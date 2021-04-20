import { Interpreter } from 'xstate';
import { TodoContext } from '../todo/types';

export interface AppContext {
  todos: Interpreter<TodoContext>[];
}

export interface AppStateSchema {
  states: {
    fetchingTodos: Record<string, unknown>;
    persistingTodos: Record<string, unknown>;
    ready: Record<string, unknown>;
  };
}

export type AppEvent =
  | { type: 'TODO.CREATE'; title: string }
  | { type: 'TODO.UPDATE' }
  | { type: 'TODO.DELETE'; id: number }
  | { type: 'PERSIST_TODOS' };
