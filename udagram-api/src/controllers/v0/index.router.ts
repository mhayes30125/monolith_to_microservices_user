import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';
import {HealthcheckRouter} from './health/routes/healthcheck.router';

const router: Router = Router();

router.use('/users', UserRouter);
router.use('/healthcheck', HealthcheckRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
