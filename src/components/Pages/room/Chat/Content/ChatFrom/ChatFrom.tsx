import { parseLevel } from '@libs/utils/parseLevel';
import * as Styled from './Style';
import dayjs from 'dayjs';

dayjs.locale('ko');
function RoomChatFrom({ chat }: any) {
  return (
    <>
      <Styled.Name>
        <span>{parseLevel(chat.level)}</span> {chat.from}
      </Styled.Name>
      <Styled.Wrapper>
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
        <Styled.Time>
          <Styled.TimeDate>{dayjs(chat.createdAt).format('YYYY.MM.DD')}</Styled.TimeDate>
          <p>{dayjs(chat.createdAt).format('A HH:mm')}</p>
        </Styled.Time>
      </Styled.Wrapper>
    </>
  );
}
export default RoomChatFrom;
