import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Footer } from './Footer';

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: absolute;
  width: 100%;
`;
const Container = styled.main``;

export const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <Wrapper>
      <Head>
        <title>My To-do list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="md:space-y-8 sm:space-y-4 space-y-2">
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
};
