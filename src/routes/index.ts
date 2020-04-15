import { Router } from 'express';

import guestsRouter from './guests';

const router = Router();

router.use('/guests', guestsRouter);

export default router;
