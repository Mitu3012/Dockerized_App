# CI Pipeline for Dockerized Application using Jenkins

This project demonstrates a **Continuous Integration (CI) pipeline** using **Jenkins** to automatically build, run, and health-check a **Dockerized application** using **Docker Compose**.

The pipeline is designed to simulate a real-world DevOps workflow where application changes are automatically validated through container builds and runtime health checks.

---

## Tech Stack
- Linux
- Docker
- Docker Compose
- Jenkins
- GitHub
- (Any backend/frontend app)


---

## What This Project Does
- Builds Docker images using Docker Compose
- Runs containers in a controlled environment
- Performs container health checks
- Fails the pipeline if the application is unhealthy

---

## Prerequisites
Ensure the following are installed on the Jenkins host:
- Docker
- Docker Compose
- Jenkins
- Git

Verify:
bash
docker --version
docker compose version
jenkins --version

## CI Pipeline Workflow

    Developer pushes code to GitHub

    Manually Trigger Jenkins pipeline

    Jenkins:

        Pulls latest code

        Builds Docker images using Docker Compose

        Starts containers

        Performs health checks on the running container

        Marks build as SUCCESS or FAILURE

## Jenkins Pipeline Stages
Example Pipeline Stages

    Checkout Code

    Build Images

    Run Containers

    Health Check

    Cleanup


## Docker Compose Health Check

The application container includes a health check configuration:

healthcheck:
  HEALTHCHECK --interval=10s --timeout=3s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"


This ensures Jenkins verifies the application is running correctly before marking the build successful.
## Pipeline Failure Scenarios

The Jenkins build fails if:

    Docker image build fails

    Containers fail to start

    Health check does not return healthy

This helps catch issues early in the CI process.
