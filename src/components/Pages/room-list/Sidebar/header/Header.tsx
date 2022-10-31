import { CSSProperties, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { flexJustifyBetween } from 'styles/common';

type SideHeaderProps = {
  title: string;
  style?: CSSProperties;
  active?: boolean;
  setActive?: Dispatch<SetStateAction<boolean>> | undefined;
};

function SideHeader({ title, style, active, setActive }: SideHeaderProps) {
  const onToggleActive = () => {
    setActive && setActive((prev) => !prev);
  };

  return (
    <Header style={style}>
      <p> {title}</p>
      {title === '내 모임' && <span>관리</span>}
      {active !== undefined && <span onClick={onToggleActive}> {active ? '닫기' : '열기'} </span>}
    </Header>
  );
}
export default SideHeader;

const Header = styled.header`
  ${flexJustifyBetween}
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 1rem 2rem;

  & > span {
    cursor: pointer;
  }
`;
