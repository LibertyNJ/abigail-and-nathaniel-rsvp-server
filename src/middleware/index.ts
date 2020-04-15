import cors from './cors';
import helmet from './helmet';
import json from './json';
import logger from './logger';

export { errorHandler } from './error-handler';
export { notFoundHandler } from './not-found-handler';

const middleware = [helmet, cors, json, logger];

export default middleware;
