import styled from 'styled-components';

export const Name = styled.div`
  text-align: left;
  color: #222;
  font-size: 0.675rem;
  box-sizing: border-box;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 0.5rem;
`;

export const Time = styled.div`
  display: flex;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 0.525rem;
  color: #222;
  margin-left: 0.2rem;
`;

export const Content = styled.div`
  max-width: 65%;
  background-color: ${(props) => props.theme.palette.primary[100]};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-top: 0.3rem;
  text-align: left;
  margin-left: 0.5rem;
`;
