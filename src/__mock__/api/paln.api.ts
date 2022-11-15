import { rest } from 'msw';
import { myplanData } from '../data/myplan.data';
import { userData, userPlanData } from '../data/user.data';

// get plan user
export const planGetUser = rest.get('/api/plan/user', async (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: '모가코 유저 조회 성공',
      data: {
        paln: myplanData,
        user: userPlanData,
      },
    }),
  );
});

// post todo list
export const planPostTodo = rest.post('/api/plan/todo', async (req, res, ctx) => {
  let todo;
  await req.json().then((data) => {
    todo = data.todo;
  });

  const data = {
    id: Math.floor(Math.random() * 1000),
    state: false,
    todo,
  };
  return res(ctx.status(200), ctx.json(data));
});

// delete todo list
export const planDeleteTodo = rest.delete('/api/plan/todo', async (req, res, ctx) => {
  let todoId;
  await req.json().then((data) => {
    todoId = data.todoId;
  });

  return res(ctx.status(200), ctx.json(todoId));
});

// update toto list
export const planUpdateTodo = rest.put('/api/plan/todo', async (req, res, ctx) => {
  let todo;
  let state;
  let todoId;
  await req.json().then((data) => {
    todo = data.todo;
    state = data.state;
    todoId = data.todoId;
  });

  const data = {
    id: todoId,
    state,
    todo,
  };

  return res(ctx.status(200), ctx.json(data));
});

// post memo
export const planPostMemo = rest.post('/api/plan/memo', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userData));
});

// update memo
export const planUpdateMemo = rest.put('/api/plan/memo', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userData));
});

// delete memo
export const planDeleteMemo = rest.delete('/api/plan/memo', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userData));
});
