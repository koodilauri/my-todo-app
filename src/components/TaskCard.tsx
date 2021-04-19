import styled from 'styled-components';
import { ToggleSwitch } from './ToggleSwitch';

interface IProps {
  key?: string;
  title?: string;
  deleteHandler?: any;
}

const Container = styled.li``;

function TaskCardEl(props: IProps) {
  const { key, title, deleteHandler } = props;
  return (
    <Container className="hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <ToggleSwitch />
      <div className="text-sm font-thin text-gray-700 truncate">{title}</div>
      <div className="ml-2 flex-shrink-0 flex flex-row">
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Done
        </p>
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          Work-left
        </p>
        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          Behind
        </p>
        <button type="button" onClick={() => deleteHandler(key)}>
          Delete
        </button>
      </div>
    </Container>
  );
}

export const TaskCard = TaskCardEl;
