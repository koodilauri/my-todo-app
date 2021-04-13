import styled from 'styled-components';
import { StatCard } from './StatCard';

const Container = styled.div``;

function TaskStatsEl() {
  const stats = {
    tasks: {
      name: `Tasks`,
      planned: 5,
      done: 1,
    },
    hours: {
      name: `Hours`,
      planned: 8,
      done: 1,
    },
  };
  return (
    <Container className="w-full sm:mx-auto sm:flex sm:space-x-8">
      <StatCard stats={stats.tasks} />
      <StatCard stats={stats.hours} />
    </Container>
  );
}

export const TaskStats = TaskStatsEl;
