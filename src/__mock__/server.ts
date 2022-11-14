import { setupServer, SetupServerApi } from 'msw/node';
import { handlers } from '@mocks/api';

export const server: SetupServerApi = setupServer(...handlers);
