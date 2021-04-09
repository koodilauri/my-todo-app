import styled from 'styled-components';

import { Layout } from '../components/layout/Layout';
import { TaskList } from '../components/TaskList';

const Header = styled.header``;
const Container = styled.div``;
const Wrapper = styled.div``;

export default function Home() {
  return (
    <Layout>
      <Header className="flex flex-col items-center mb-80 space-y-8">
        Todays Tasks
      </Header>
      <Container className="flex flex-col items-center shadow-2xl">
        <input className="shadow-2xl" placeholder="Whats the job?" />
        <Wrapper className="flex flex-row items-center shadow-2xl">
          <TaskList listType="saved" show={false} />
          <TaskList listType="todo" show />
          <TaskList listType="completed" show />
        </Wrapper>
      </Container>
    </Layout>
  );
}
