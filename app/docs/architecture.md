# System Architecture

## Overview

Describe the purpose of the platform:

- Connects vendors and customers in Zimbabwe.
- Handles payments, order tracking, and vendor team roles.

## Stack

- **Framework:** AdonisJS v6
- **Database:** PostgreSQL
- **Cache/Queue:** Redis + BullMQ
- **ORM:** Lucid
- **Messaging:** RabbitMQ (future)
- **Frontend:** Next.js (if applicable)
- **Storage:** AWS S3 or Cloudinary

## High-Level Flow

1. User registers via `/auth/register`
2. Upgrades to vendor via `/vendors/register`
3. Vendor creates team members
4. Vendor team manages products and orders
5. Customers browse and place orders
6. Payments handled via Paynow/EcoCash integrations

## Architecture Diagram

(Add your diagram image or link here)

## Key Components

- **User Service:** Handles user registration, authentication, and profile management.
- **Vendor Service:** Manages vendor onboarding, product listings, and order fulfillment.
- **Order Service:** Coordinates order processing, payment handling, and status updates.
- **Notification Service:** Sends email/SMS notifications for key events (e.g., order updates).
- **Reporting Service:** Generates sales reports and analytics for vendors and admins.

## Future Enhancements

- Implement advanced fraud detection mechanisms.
- Explore AI-driven product recommendations.
- Enhance mobile app experience for users.
- Integrate with additional payment gateways.
- Expand support for international vendors and customers.

## Deployment

- Use Docker for containerization.
- CI/CD pipeline with GitHub Actions.
- Host on AWS/GCP with auto-scaling capabilities.
- Monitor with Prometheus and Grafana.
- Regular backups and disaster recovery plans.

## Environment Variables

- `NODE_ENV`: Application environment (development, production)
- `DB_HOST`: Database host address
- `DB_PORT`: Database port
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_DATABASE`: Database name
- `REDIS_HOST`: Redis host address
- `REDIS_PORT`: Redis port
- `PAYNOW_API_KEY`: Paynow API key
- `ECOCASH_API_KEY`: EcoCash API key
- `AWS_ACCESS_KEY_ID`: AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: AWS secret access key
- `S3_BUCKET_NAME`: S3 bucket name for storage
- `RABBITMQ_URL`: RabbitMQ connection URL
- `FRONTEND_URL`: URL of the frontend application
- `BACKEND_URL`: URL of the backend application
- `JWT_SECRET`: Secret key for JWT authentication
- `EMAIL_SERVICE_API_KEY`: API key for email service provider
- `SMS_SERVICE_API_KEY`: API key for SMS service provider
- `LOG_LEVEL`: Logging level (info, debug, error)
- `PORT`: Application port
- `APP_URL`: Base URL of the application
- `SESSION_SECRET`: Secret key for session management
- `CORS_ORIGINS`: Allowed origins for CORS
- `RATE_LIMIT_MAX`: Maximum requests for rate limiting
- `RATE_LIMIT_WINDOW`: Time window for rate limiting
- `BUGSNAG_API_KEY`: Bugsnag API key for error monitoring
- `SENTRY_DSN`: Sentry DSN for error tracking
- `GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID
- `SEGMENT_WRITE_KEY`: Segment write key for analytics
- `TWILIO_API_KEY`: Twilio API key for SMS/voice services
- `STRIPE_API_KEY`: Stripe API key for payment processing
- `PAYPAL_CLIENT_ID`: PayPal client ID for payment processing
- `PAYPAL_CLIENT_SECRET`: PayPal client secret for payment processing
- `MAILCHIMP_API_KEY`: Mailchimp API key for email marketing
- `SENDGRID_API_KEY`: SendGrid API key for email delivery
- `PUSHER_APP_ID`: Pusher app ID for real-time notifications
- `PUSHER_KEY`: Pusher key for real-time notifications
- `PUSHER_SECRET`: Pusher secret for real-time notifications
- `MAPBOX_API_KEY`: Mapbox API key for geolocation services
- `GEOCODING_API_KEY`: Geocoding API key for address lookup
- `SENTRY_ENVIRONMENT`: Sentry environment (development, production)
- `NEW_RELIC_LICENSE_KEY`: New Relic license key for performance monitoring
- `NEW_RELIC_APP_NAME`: New Relic application name

## Notes

- Ensure all sensitive information is stored securely and not hard-coded.
- Regularly update dependencies to maintain security and performance.

## Conclusion

This architecture is designed to be scalable, maintainable, and secure, providing a robust platform for vendors and customers in Zimbabwe to interact seamlessly.
