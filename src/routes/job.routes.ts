import { Router } from 'express';
import { getAllJobs, getJobById, createJob } from '../controllers/job.controller';

const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/', createJob);

export default router;