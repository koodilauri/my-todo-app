import styled from 'styled-components';

interface IProps {
  className?: string;
  amount?: number;
  done?: number;
  stats?:
    | {
        name?: string;
        planned?: number;
        done?: number;
      }
    | any;
}

const Container = styled.div``;

function StatCardEl(props: IProps) {
  const { done, stats, amount } = props;

  return (
    <Container className="align-bottom rounded-lg shadow transform transition-all w-full p-5 flex flex-col items-start">
      <h3 className="text-sm leading-6 font-medium text-gray-400">
        {stats.name}
      </h3>
      <p className="text-3xl font-bold text-black">
        {done} / {amount}
      </p>
      <h1>Progress Bar</h1>
      <div className="h-3 relative max-w-xl w-full rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute" />
        <div
          style={{
            width: amount !== 0 ? `${(done / amount) * 100}%` : `0%`,
          }}
          className="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"
        />
      </div>
    </Container>
  );
}

export const StatCard = StatCardEl;
