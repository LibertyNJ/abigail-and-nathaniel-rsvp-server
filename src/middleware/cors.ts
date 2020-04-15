import cors from 'cors';

import config from '../config';

const options = {
  methods: ['GET', 'PATCH'],
  origin: config.cors.origin,
};

export default cors(options);
