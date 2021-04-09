import styled from 'styled-components';
import { TaskCard } from './TaskCard';

interface IProps {
  className?: string;
  listType?: string;
  show?: boolean;
}

const Container = styled.div``;

function TaskListEl(props: IProps) {
  const { listType, show } = props;

  return (
    <Container className={show ? `block` : `hidden`}>
      <h2>{listType}</h2>
      <TaskCard />
    </Container>
  );
}

export const TaskList = TaskListEl;
