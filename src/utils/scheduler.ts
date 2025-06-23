import cron from 'node-cron';
import { JobEntity } from '../models/job.model';
import { sendEmail } from '../jobs/dummy.job';

export const scheduleJob = (job: JobEntity) => {
  cron.schedule(job.cron, async () => {
    await sendEmail();
    job.lastRun = new Date();
    job.nextRun = null; // optionally compute next run time
    await job.save();
  });
};