import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { flexAlignCenter, flexCenter } from '../styles/common';
import { desktopM } from '../styles/media';
import Typist from 'react-typist';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>모여서 코딩하자, mogaco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1>mogaco</h1>
      </Header>
      <Container>
        Mogaco {'{'}
        <Typist avgTypingDelay={100} startDelay={1000}>
          name: 'mogaco'
          <Typist.Delay ms={500} />
          <br />
          <Typist.Delay ms={1000} />
          console.log("mogaco")
          <Typist.Delay ms={500} />
          <br />
          <Typist.Delay ms={1000} />
          Loading ...
        </Typist>
        {'}'}
        <Link href="/room-list">
          <button>go</button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 3rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  cursor: pointer;
  ${flexAlignCenter};
`;

const curser = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
`;

const Container = styled.div`
  width: ${desktopM}px;
  margin: 0 auto;
  height: calc(100vh - 48px);
  ${flexCenter}
  flex-direction: column;
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 100px;

  & .Typist {
    width: 437px;
    font-size: 44px;
    text-align: center;

    & .Cursor {
      color: #ff0000;
      margin-left: 8px;
      animation: ${curser} 0.7s linear infinite;
    }
  }

  & button {
    background-color: #fff;
    color: ${({ theme }) => theme.palette.primary[300]};
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    padding: 8px 16px;
    border-radius: 16px;

    :hover {
      background-color: ${({ theme }) => theme.palette.primary[300]};
      color: #fff;
    }
  }
`;
