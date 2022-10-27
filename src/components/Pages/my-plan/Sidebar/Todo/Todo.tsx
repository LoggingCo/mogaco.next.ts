import * as Styled from './Style';

function MyPlanSideTodo({ todo }: any) {
  return (
    <>
      <Styled.Header>
        <span>Todo List</span>
        <button>+</button>
      </Styled.Header>
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
