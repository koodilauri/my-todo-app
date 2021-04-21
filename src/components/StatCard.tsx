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
    <Container className="flex flex-col sm:h-10 h-4 relative w-full rounded-full overflow-hidden">
      <div className="w-full h-full bg-gray-200 absolute text-center">
        <p className="text-3xl font-bold text-black relative z-10 sm:block hidden">
          {amount !== 0 ? `${done} / ${amount}` : ``}
        </p>
      </div>
      <div
        style={{
          width: amount !== 0 ? `${(done / amount) * 100}%` : `0%`,
        }}
        className="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"
      />
    </Container>
  );
}

export const StatCard = StatCardEl;
