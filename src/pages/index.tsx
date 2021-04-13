import styled from 'styled-components';

import { Layout } from '../components/layout/Layout';
import { TaskList } from '../components/TaskList';

const Header = styled.header``;
const Container = styled.div``;
const Wrapper = styled.div``;

export default function Home() {
  return (
    <Layout>
      <Header className="flex flex-col items-center mb-40 space-y-8">
        Todays Tasks
      </Header>
      <Container className="flex flex-col items-center w-1/2 m-auto space-y-8">
        <input
          className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-inner lg:text-sm text-xs"
          placeholder="Whats the job?"
        />
        <Wrapper className="flex flex-row items-center shadow-2xl space-x-5 w-full">
          {/* <TaskList listType="saved" show={false} /> */}
          <TaskList listType="todo" show />
          {/* <TaskList listType="completed" show /> */}
        </Wrapper>
      </Container>
    </Layout>
  );
}
