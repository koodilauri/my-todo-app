import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/TodoContext';
import { deleteTodo } from '../actions/TodoActions';
import { TaskCard } from './TaskCard';

const Container = styled.div``;

function TaskListEl() {
  const {
    state: { todos },
    dispatch,
  } = useContext(Context);

  const deleteHandler = (id: string) => dispatch(deleteTodo(id));

  return (
    <Container className="block w-full">
      <h2 className="bg-pink-700 px-4 py-5 border-b rounded-t sm:px-6 text-lg leading-6 font-medium text-white">
        Todos
      </h2>
      {todos.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {todos.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <h2 className="px-4 py-5 sm:px-6 text-lg leading-6 font-medium">
          No Todos!
        </h2>
      )}
    </Container>
  );
}

export const TaskList: React.FC = TaskListEl;
// export default TaskList;
