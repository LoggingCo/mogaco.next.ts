import { useState } from 'react';
import * as Styled from './Style';

function MyPlanSideTodo({ todo }: any) {
  const [isOpenTodoForm, setIsOpenTodoForm] = useState<Boolean>(false);

  const onOpenTodoForm = () => {
    setIsOpenTodoForm((prev) => !prev);
  };

  return (
    <>
      <Styled.Header>
        <span>Todo List</span>
        <button onClick={onOpenTodoForm}>{isOpenTodoForm ? '-' : '+'}</button>
      </Styled.Header>
      {isOpenTodoForm && (
        <Styled.TodoForm>
          <input />
          <button>추가</button>
        </Styled.TodoForm>
      )}
      <Styled.Content>
        <ul>
          {todo.map((todo: any) => (
            <li key={todo.id}>
              <Styled.TodoState state={todo.state}></Styled.TodoState>
              <Styled.TodoList state={todo.state}>{todo.todo}</Styled.TodoList>
            </li>
          ))}
        </ul>
      </Styled.Content>
    </>
  );
}
export default MyPlanSideTodo;
