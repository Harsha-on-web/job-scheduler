import { JobEntity } from '../models/job.model';
import { scheduleJob } from '../utils/scheduler';

class JobService {
  async getAllJobs() {
    return await JobEntity.find();
  }

  async getJobById(id: string) {
    return await JobEntity.findOneBy({ id });
  }

  async createJob(data: any) {
    const job = JobEntity.create(data);
    await job.save();
    scheduleJob(job); // Schedule it immediately
    return job;
  }
}

export default new JobService();