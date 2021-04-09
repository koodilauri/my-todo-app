import styled from 'styled-components';

const Container = styled.div``;

function TaskCardEl() {
  return (
    <Container className="bg-green-700">
      <input type="checkbox" />
      Task
    </Container>
  );
}

export const TaskCard = TaskCardEl;
