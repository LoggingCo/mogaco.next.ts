import { useState } from 'react';
import * as Styled from './Style';

function RoomCard({ room }: any) {
  const [isOpenCard, setIsOpenCard] = useState(false);

  const onOpenCard = (e: any) => {
    setIsOpenCard((prev) => !prev);
  };

  console.log(room);

  return (
    <Styled.Wrapper isOpenCard={isOpenCard}>
      <div onClick={onOpenCard}>
        <Styled.Header>
          <Styled.Title>{room.title}</Styled.Title>
          <div>
            <span>
              {room.currentMember} / {room.maxMember}
            </span>

            <Styled.State>{room.private ? '잠금' : '공개'}</Styled.State>
            <button>{isOpenCard ? '-' : '+'}</button>
          </div>
        </Styled.Header>
        <Styled.Container>{room.description}</Styled.Container>
      </div>
      <Styled.Content isOpenCard={isOpenCard} status={room.private}>
        <p>
          <span>개설일: </span>
          <span>{room.startDate}</span>
        </p>
        <p>
          <span>코딩시간: </span>
          <span>{room.totalhour}</span>
        </p>
        <p>
          <span>유지기간:</span>
          <span>128일 째</span>
        </p>

        <p>
          {room.private && <input type="passowrd" placeholder="PASSWORD" />}
          <button>입장</button>
        </p>
      </Styled.Content>

      <Styled.Category>
        {room.category.map((category: string) => (
          <span key={category}>{category}</span>
        ))}
      </Styled.Category>
    </Styled.Wrapper>
  );
}
export default RoomCard;
