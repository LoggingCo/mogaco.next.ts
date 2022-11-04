import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 150px;
  max-height: 150px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  border: 1px solid #999;

  //th
  & th {
    background-color: ${({ theme }) => theme.palette.gray[200]};
    border: 1px solid #999;
  }

  //td
  & td {
    padding: 8px;
    border: 0.5px dashed #999;
  }

  //tr
  & tr {
    :hover {
      background-color: ${({ theme }) => theme.palette.primary[100]};
    }
  }

  //button
  & button:first-of-type {
    background-color: ${({ theme }) => theme.palette.primary[200]};
    color: ${({ theme }) => theme.palette.fontColor};
  }

  & button {
    margin-left: 8px;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    padding: 4px;
    color: ${({ theme }) => theme.palette.fontSubColor};

    :hover {
      opacity: 0.7;
    }
  }
`;
