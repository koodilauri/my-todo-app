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
  const textClass = `text-sm font-thin truncate ${
    completed ? `line-through text-gray-300` : `no-underline text-gray-700`
  }`;
  const imageClass = `${completed ? `opacity-100` : `opacity-10`}`;
  const onChangeCheckbox = () => {
    send(`TOGGLE_COMPLETE`);
  };

  return (
    <Container className="group hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <ToggleSwitch className="px-4 py-4 sm:px-6 flex flex-row items-center justify-between">
        <div className="relative inline-block w-10 mr-2 align-middle">
          <ToggleCheckbox
            type="checkbox"
            className="transition duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:border-green-400 checked:right-0"
            onChange={onChangeCheckbox}
            checked={completed}
          />
          <span className="transition duration-200 ease-in block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
        </div>
        <img
          src="/done.png"
          alt="done?"
          width={25}
          height={25}
          className={imageClass}
        />
      </ToggleSwitch>
      <div className={textClass}>{title}</div>
      <button
        type="button"
        className="transition duration-200 ease-in-out group-hover:block px-2 inline-flex text-xs leading-5 font-semibold rounded-full group-hover:bg-red-100 bg-white group-hover:text-red-800 text-white"
        onClick={() => send(`DELETE`)}
      >
        Delete
      </button>
    </Container>
  );
}

export const TaskListItem = TaskListItemEl;
