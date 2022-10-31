import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

export const Time = styled.div`
  display: flex;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 0.525rem;
  color: #222;
  margin-right: 0.3rem;
`;

export const Content = styled.div`
  max-width: 70%;
  background-color: ${(props) => props.theme.palette.primary[300]};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-top: 0.3rem;
  text-align: left;
  color: #fff;
`;
