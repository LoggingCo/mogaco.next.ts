import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log(req.body);
  const token = req.body.token;
  if (token) {
    return {
      redirect: {
        destination: '/room-list',
        statusCode: 302,
      },
    };
  }
};
