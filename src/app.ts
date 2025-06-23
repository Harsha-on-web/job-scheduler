import express from 'express';
import cors from 'cors';
import jobRoutes from './routes/job.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './utils/swagger.json';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/jobs', jobRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;