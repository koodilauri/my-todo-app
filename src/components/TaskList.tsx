import styled from 'styled-components';
import { TaskCard } from './TaskCard';

interface IProps {
  className?: string;
  listType?: string;
  show?: boolean;
}

const Container = styled.div``;

function TaskListEl(props: IProps) {
  const { listType } = props;

  return (
    <Container className="block w-full">
      <h2 className="bg-pink-700 px-4 py-5 border-b rounded-t sm:px-6 text-lg leading-6 font-medium text-white">
        {listType}
      </h2>
      <ul className="divide-y divide-gray-200">
        <TaskCard />
        <TaskCard />
      </ul>
    </Container>
  );
}

export const TaskList = TaskListEl;
