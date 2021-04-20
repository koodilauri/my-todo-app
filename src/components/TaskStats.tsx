import { useService } from '@xstate/react';
import styled from 'styled-components';
import { appService } from '../machines/app';
import { StatCard } from './StatCard';

const Container = styled.div``;

function TaskStatsEl() {
  const [state] = useService(appService);
  const { todos } = state.context;
  const completedTodos = todos.filter((todo) => todo.state.context.completed);

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
      <StatCard
        stats={stats.tasks}
        amount={todos.length}
        done={completedTodos.length}
      />
      {/* <StatCard stats={stats.hours} /> */}
    </Container>
  );
}

export const TaskStats = TaskStatsEl;
