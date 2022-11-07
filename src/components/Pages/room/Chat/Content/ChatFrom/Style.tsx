import styled from 'styled-components';

export const Name = styled.div`
  text-align: left;
  color: #222;
  font-size: 1rem;
  box-sizing: border-box;
  font-weight: 900;
  margin-left: 0.7rem;
  margin-top: 16px;
  margin-bottom: 4px;

  & span {
    margin-right: 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 0.5rem;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  align-items: flex-start;
  justify-content: flex-end;
  font-size: 0.525rem;
  color: #222;
  margin-left: 0.2rem;
`;

export const TimeDate = styled.div`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Content = styled.div`
  max-width: 65%;
  font-weight: 100;
  background-color: ${(props) => props.theme.palette.primary[100]};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-top: 0.3rem;
  text-align: left;
  margin-left: 0.5rem;
`;
