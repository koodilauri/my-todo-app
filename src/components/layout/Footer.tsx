import styled from 'styled-components';

const Container = styled.footer`
  font-family: 'Raleway-Thin', sans-serif;
  border-color: #292929;
`;

function FooterLayout() {
  return (
    <Container className="text-center font-light text-xl sm:text-3xl py-10 pin-b px-4 sm:px-0 sm:w-96 mx-auto mt-96 border-t">
      Made by Lauri Koivisto
    </Container>
  );
}

export const Footer = FooterLayout;
