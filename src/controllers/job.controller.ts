import { Request, Response } from 'express';
import JobService from '../services/job.service';

export const getAllJobs = async (_req: Request, res: Response) => {
  const jobs = await JobService.getAllJobs();
  res.json(jobs);
};

export const getJobById = async (req: Request, res: Response) => {
  const job = await JobService.getJobById(req.params.id);
  res.json(job);
};

export const createJob = async (req: Request, res: Response) => {
  const job = await JobService.createJob(req.body);
  res.status(201).json(job);
};