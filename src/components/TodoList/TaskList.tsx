import { useService } from '@xstate/react';
import styled from 'styled-components';

import { appService } from '../../machines/app';
import { TaskListItem } from './TaskListItem';

const Container = styled.div``;

function TaskListEl() {
  const [state] = useService(appService);
  const { todos } = state.context;

  return (
    <Container className="block w-full">
      <h2 className="bg-pink-700 px-4 sm:py-5 py-2 border-b rounded-t sm:px-6 sm:text-lg text-base leading-6 font-bold text-white">
        Todos
      </h2>
      {todos.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {todos.map((item) => (
            <TaskListItem key={item.id} todo={item} />
          ))}
        </ul>
      ) : (
        <h2 className="px-4 sm:py-5 py-2 sm:px-6 sm:text-lg text-base leading-6 font-medium text-center">
          No tasks, add some!
        </h2>
      )}
    </Container>
  );
}

export const TaskList = TaskListEl;
