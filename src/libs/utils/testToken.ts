import { NextApiRequest, NextApiResponse } from 'next';

const TestToken = (req: NextApiRequest, res: NextApiResponse<any>) => {
  const header = req.headers;
  const { authorization } = header;
  if (!authorization) {
    return false;
  }
  return true;
};
export default TestToken;
