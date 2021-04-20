import styled from 'styled-components';

import { Layout } from '../components/layout/Layout';
import { TaskList } from '../components/TodoList/TaskList';
import { TaskStats } from '../components/TaskStats';
import { AddTodo } from '../components/AddTodo';

const Header = styled.header``;
const Container = styled.div``;
const Wrapper = styled.div``;

export default function Home() {
  return (
    <Layout>
      <Header className="flex flex-col items-center mb-20 space-y-8">
        Todo App
      </Header>
      <Container className="flex flex-col items-center w-1/2 m-auto space-y-8">
        <TaskStats />
        <AddTodo />
        <Wrapper className="flex flex-row items-center shadow-2xl space-x-5 w-full">
          <TaskList />
        </Wrapper>
      </Container>
    </Layout>
  );
}
