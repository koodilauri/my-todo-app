import { Machine, assign, sendParent } from 'xstate';
import { TodoContext, TodoEvent } from './types';

const todoMachine = Machine<TodoContext, TodoEvent>({
  id: `todo`,
  initial: `reading`,
  states: {
    reading: {
      on: {
        TOGGLE_COMPLETE: {
          actions: [
            assign((ctx) => ({
              completed: !ctx.completed,
            })),
            sendParent(`TODO.UPDATE`),
          ],
        },
        DELETE: {
          actions: sendParent((ctx) => ({
            type: `TODO.DELETE`,
            id: ctx.id,
          })),
        },
      },
    },
  },
});

export default todoMachine;
