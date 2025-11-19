# Contribution Guide

1. Fork and clone the repository.
2. Copy `.env.example` to `.env` and fill in credentials.
3. Run migrations: `node ace migration:run`
4. Run tests: `node ace test`
5. Open a PR with a descriptive title and linked issue.
6. Engage in code reviews and address feedback promptly.

Follow naming conventions:

- Controllers: PascalCase (e.g., `VendorController`)
- Routes: grouped per domain
- Services: business logic layer
- Models: singular, PascalCase (e.g., `Product`)

Ensure code adheres to style guidelines and passes all tests before submitting a pull request.
