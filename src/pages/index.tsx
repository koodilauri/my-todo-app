import styled from 'styled-components';

import { Layout } from '../components/layout/Layout';
import { TaskList } from '../components/TaskList';
import { TaskStats } from '../components/TaskStats';

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
        <input
          className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-inner lg:text-sm text-xs"
          placeholder="Whats the job?"
        />
        <Wrapper className="flex flex-row items-center shadow-2xl space-x-5 w-full">
          {/* <TaskList listType="saved" show={false} /> */}
          <TaskList listType="Todays Tasks" show />
          {/* <TaskList listType="completed" show /> */}
        </Wrapper>
      </Container>
    </Layout>
  );
}
