import { Machine, assign, spawn, send, actions } from 'xstate';

import { todoMachine } from '../todo/index';
import { AppContext, AppEvent, AppStateSchema } from './types';

const appMachine = Machine<AppContext, AppStateSchema, AppEvent>({
  id: `app`,
  initial: `fetchingTodos`,
  context: {
    todos: [],
  },
  states: {
    fetchingTodos: {
      invoke: {
        src: () => {
          if (process.browser) {
            return fetch(`api`).then((res) => res.json());
          }
          return null;
        },
        onDone: {
          target: `ready`,
          actions: assign((ctx, e) => ({
            todos: e.data.map((todo) => spawn(todoMachine.withContext(todo))),
          })),
        },
        onError: {
          target: `ready`,
          actions: () => {
            alert(`There was a problem fetching todos`);
          },
        },
      },
    },
    persistingTodos: {
      invoke: {
        src: (ctx) => {
          const data = ctx.todos.map((todo) => {
            const { id, title, completed } = todo.state.context;
            return { id, title, completed };
          });
          return fetch(`api`, {
            method: `PUT`,
            headers: { 'Content-Type': `application/json` },
            body: JSON.stringify(data),
          });
        },
        onDone: `ready`,
        onError: {
          target: `ready`,
          actions: () => {
            alert(`There was a problem persisting todos`);
          },
        },
      },
    },
    ready: {},
  },
  on: {
    'TODO.CREATE': {
      actions: [
        assign((ctx: any, e) => ({
          todos: [
            ...ctx.todos,
            spawn(
              todoMachine.withContext({
                id: Date.now() + Math.random(),
                title: e.title.trim(),
                completed: false,
              }),
            ),
          ],
        })),
        send(`PERSIST_TODOS`),
      ],
      cond: (ctx, e) => !!e.title.trim().length,
    },
    'TODO.UPDATE': {
      actions: [
        actions.cancel(`debounced-persist-todos`),
        send(`PERSIST_TODOS`, {
          delay: 200,
          id: `debounced-persist-todos`,
        }),
      ],
    },
    'TODO.DELETE': {
      actions: [
        assign({
          todos: (ctx, e) =>
            ctx.todos.filter((todo) => todo.state.context.id !== e.id),
        }),
        send(`PERSIST_TODOS`),
      ],
    },
    PERSIST_TODOS: `persistingTodos`,
  },
});

export default appMachine;
