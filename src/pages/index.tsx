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
      <Header className="flex flex-col items-center bg-pink-900 md:p-10 sm:p-5 p-1 text-white">
        <h1 className="sm:text-5xl text-3xl">Todo App</h1>
      </Header>
      <Container className="flex flex-col items-center md:w-1/2 sm:w-2/3 w-4/5 m-auto md:space-y-8 sm:space-y-4 space-y-2">
        <TaskStats />
        <AddTodo />
        <Wrapper className="flex flex-row items-center shadow-2xl space-x-5 w-full">
          <TaskList />
        </Wrapper>
      </Container>
    </Layout>
  );
}
