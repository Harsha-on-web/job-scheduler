# 🕒 Job Scheduler Microservice

This microservice allows users to schedule and manage recurring jobs using flexible CRON expressions. It supports job creation, retrieval, and listing via RESTful API endpoints and is built with scalability, modularity, and best practices in mind.

---

## ✅ Features

- **Job Scheduling**: Schedule jobs using CRON expressions with customized frequency.
- **Job Execution Logic**: Demonstrates scheduling logic using dummy jobs (e.g., sending email notifications).
- **API Endpoints**:
  - `GET /jobs` – List all scheduled jobs.
  - `GET /jobs/:id` – View details of a specific job.
  - `POST /jobs` – Create and schedule a new job.
- **Database Integration**: Stores job name, CRON pattern, last run time, next run time, etc.
- **Customization**: Each job can be configured with its own scheduling interval and attributes.
- **API Documentation**: Swagger UI integration at `/docs`.
- **Scalable Design**: Architecture ready to scale with thousands of users and services.

---

## ⚙️ Tech Stack

- **Node.js** with **TypeScript**
- **Express.js** – Web framework
- **TypeORM** – ORM for PostgreSQL
- **node-cron** – Job scheduling engine
- **Swagger UI** – Interactive API documentation
- **PostgreSQL** – Relational database

---

## 🛠 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-scheduler.git
cd job-scheduler
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure PostgreSQL

Ensure you have PostgreSQL running locally. Then update `src/config/db.ts` with your credentials:

```ts
username: 'your_db_user',
password: 'your_db_password',
database: 'job_scheduler',
```

You can also set these via environment variables.

### 4. Run the Application

```bash
npm run dev
```

### 5. 🐳 Run PostgreSQL with Docker

If you have Docker installed, just run:

```bash
docker-compose up -d

Visit:
- Swagger Docs: [http://localhost:3000/docs](http://localhost:3000/docs)
- Server: [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Endpoints

| Method | Endpoint      | Description                  |
|--------|---------------|------------------------------|
| GET    | `/jobs`       | List all scheduled jobs      |
| GET    | `/jobs/:id`   | Get details of a job by ID   |
| POST   | `/jobs`       | Create and schedule new job  |

### Sample Request: `POST /jobs`

```json
{
  "name": "Email Notification",
  "cron": "0 9 * * MON"
}
```

This schedules the job to run every Monday at 9:00 AM.

---

## 📘 Swagger Documentation

Open the API docs in your browser:

```
http://localhost:3000/docs
```

It includes:
- Request/response schemas
- Descriptions for each endpoint
- Example payloads

---

## 📈 Scalability Strategy

To handle large-scale usage (~10,000 users, ~1,000 services, ~6,000 RPM), this service can be extended as follows:

### ✅ Replace node-cron with BullMQ
- Use **Redis-backed BullMQ** for distributed job queues
- Create a **dedicated worker service** to run jobs independently from the API

### ✅ Horizontal Scalability
- Deploy stateless API services behind a **load balancer**
- **Containerize** with Docker and deploy using **Kubernetes** or **AWS ECS**

### ✅ Persistence and Reliability
- Use **PostgreSQL** for job metadata
- Use **Redis** as a queue store and rate-limiter

### ✅ Monitoring & Logging
- Integrate tools like:
  - **Winston** or **Pino** for structured logging
  - **Prometheus + Grafana** for metrics
  - **Sentry** for error tracking

### ✅ Caching and Optimization
- Use Redis cache for frequently accessed job data
- Paginate large job lists with cursor or offset-based pagination

---

## 📁 Folder Structure

```
src/
├── controllers/      # API request handlers
├── routes/           # Express route definitions
├── services/         # Business logic
├── models/           # Database entities (TypeORM)
├── jobs/             # Dummy job logic (e.g., sendEmail)
├── utils/            # Scheduler and Swagger definitions
├── config/           # DB config
├── app.ts            # Express app setup
└── server.ts         # Application entry point
```

---

## 🔐 Notes

- Built with modular and clean architecture following **SOLID principles**.
- Designed for **production readiness** and **developer extensibility**.
- Can easily plug in real-world job execution logic (e.g., emailing, batch processing).

---

## 🧑 Author

Made with ❤️ by **Harsha Injam**  
[GitHub: Harsha-on-web](https://github.com/Harsha-on-web)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).