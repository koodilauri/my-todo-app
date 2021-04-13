import styled from 'styled-components';
import { ToggleSwitch } from './ToggleSwitch';

const Container = styled.li``;

function TaskCardEl() {
  return (
    <Container className="block hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <ToggleSwitch />
      <p className="text-sm font-thin text-gray-700 truncate">
        Task description
      </p>
      <div className="ml-2 flex-shrink-0 flex">
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Done
        </p>
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          Work-left
        </p>
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          Behind
        </p>
      </div>
    </Container>
  );
}

export const TaskCard = TaskCardEl;
