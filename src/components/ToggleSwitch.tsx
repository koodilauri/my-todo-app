import styled from 'styled-components';

const Container = styled.li`
  input:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68d391;
  }
  input:checked + span {
    @apply: bg-green-400;
    background-color: #68d391;
  }
`;

const ToggleCheckbox = styled.input``;

function ToggleSwitchEl() {
  return (
    <Container className="block hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <ToggleCheckbox
          type="checkbox"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
      </div>
      <span className="text-xs text-gray-700">Toggle done.</span>
    </Container>
  );
}

export const ToggleSwitch = ToggleSwitchEl;
