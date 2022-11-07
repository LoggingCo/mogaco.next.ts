import dayjs from 'dayjs';
import * as Styled from './Style';

dayjs.locale('ko');
function RoomChatTo({ chat }: any) {
  return (
    <Styled.Wrapper>
      <Styled.Time>
        <Styled.TimeDate>{dayjs(chat.createdAt).format('YYYY.MM.DD')}</Styled.TimeDate>
        <p>{dayjs(chat.createdAt).format('A HH:mm')}</p>
      </Styled.Time>
      <Styled.Content>
        {chat.content.split('\n').map((word: string, index: number) => {
          return (
            <span key={index}>
              {word}
              <br />
            </span>
          );
        })}
      </Styled.Content>
    </Styled.Wrapper>
  );
}
export default RoomChatTo;
