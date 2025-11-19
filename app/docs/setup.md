# Setup Guide

## Prerequisites

- Node.js >= 20
- PostgreSQL
- Redis

## Installation

git clone <repository_url>
cd project
npm install
cp .env.example .env
node ace generate:key
node ace migration:run
npm run dev

## Environment Variables

APP_KEY=
DB_CONNECTION=pg
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
REDIS_HOST=
PAYNOW_API_KEY=
PAYNOW_INTEGRITY_KEY=
PAYNOW_TEST_MODE=true # set to false in production
