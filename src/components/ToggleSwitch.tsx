import styled from 'styled-components';

const Container = styled.div`
  input:checked + span {
    background-color: #68d391;
  }
`;

const ToggleCheckbox = styled.input``;

function ToggleSwitchEl() {
  return (
    <Container className="block hover:bg-gray-50 px-4 py-4 sm:px-6 flex items-center justify-between">
      <div className="relative inline-block w-10 mr-2 align-middle">
        <ToggleCheckbox
          type="checkbox"
          className="transition duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:border-green-400 checked:right-0"
        />

        <span className="transition duration-200 ease-in block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
      </div>
      <span className="text-xs text-gray-700">Toggle when done.</span>
    </Container>
  );
}

export const ToggleSwitch = ToggleSwitchEl;
