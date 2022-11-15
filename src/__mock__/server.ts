import { setupServer, SetupServerApi } from 'msw/node';
import { handlers } from '@mocks/api';

const server: SetupServerApi = setupServer(...handlers);
export { server };
