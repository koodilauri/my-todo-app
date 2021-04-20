import { Interpreter } from 'xstate';
import { useService } from '@xstate/react';
import styled from 'styled-components';

import { TodoContext } from '../../machines/todo';

interface Props {
  todo: Interpreter<TodoContext>;
}
const Container = styled.li``;

const ToggleSwitch = styled.div`
  input:checked + span {
    background-color: #68d391;
  }
`;
const ToggleCheckbox = styled.input``;

function TaskListItemEl({ todo }: Props) {
  const [state, send] = useService(todo);
  const { title, completed } = state.context;

  const onChangeCheckbox = () => {
    send(`TOGGLE_COMPLETE`);
  };

  return (
    <Container className="hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <ToggleSwitch className="block hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
        <div className="relative inline-block w-10 mr-2 align-middle">
          <ToggleCheckbox
            type="checkbox"
            className="transition duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:border-green-400 checked:right-0"
            onChange={onChangeCheckbox}
            checked={completed}
          />
          <span className="transition duration-200 ease-in block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
        </div>
      </ToggleSwitch>
      <div className="text-sm font-thin text-gray-700 truncate">{title}</div>
      <button
        type="button"
        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
        onClick={() => send(`DELETE`)}
      >
        Delete
      </button>
    </Container>
  );
}

export const TaskListItem = TaskListItemEl;
