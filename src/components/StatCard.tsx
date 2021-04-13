import styled from 'styled-components';

interface IProps {
  className?: string;
  stats?: {
    name?: string;
    planned?: number;
    done?: number;
  };
}

const Container = styled.div``;

function StatCardEl(props: IProps) {
  const { stats } = props;

  return (
    <Container className="inline-block align-bottom rounded-lg shadow transform transition-all w-full p-5 flex items-start">
      <h3 className="text-sm leading-6 font-medium text-gray-400">
        {stats.name}
      </h3>
      <p className="text-3xl font-bold text-black">
        {stats.done} / {stats.planned}
      </p>
    </Container>
  );
}

export const StatCard = StatCardEl;
