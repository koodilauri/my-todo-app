export interface TodoContext {
  id: number;
  title: string;
  prevTitle?: string;
  completed: boolean;
}

export interface TodoStateSchema {
  states: {
    reading: Record<string, unknown>;
    editing: Record<string, unknown>;
  };
}

export type TodoEvent = { type: 'TOGGLE_COMPLETE' } | { type: 'DELETE' };
