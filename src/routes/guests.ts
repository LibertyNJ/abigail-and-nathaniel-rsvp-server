import { Router } from 'express';

import controller from '../controllers/GuestController';

const router = Router();

router.get('/', controller.getGuests);
router.patch('/', controller.updateGuests);

export default router;
