import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from '@mocks/api';

export const worker: SetupWorkerApi = setupWorker(...handlers);
