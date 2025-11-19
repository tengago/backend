# API Routes

## Auth

| Method | Path           | Description       | Auth | Controller              |
| ------ | -------------- | ----------------- | ---- | ----------------------- |
| POST   | /auth/register | Register new user | No   | AuthController.register |
| POST   | /auth/login    | User login        | No   | AuthController.login    |
| POST   | /auth/logout   | Logout user       | Yes  | AuthController.logout   |

## Vendors

| Method | Path                         | Description                | Auth        | Controller                      |
| ------ | ---------------------------- | -------------------------- | ----------- | ------------------------------- |
| POST   | /vendors/register            | Upgrade customer to vendor | Yes         | VendorController.store          |
| GET    | /vendors                     | List vendors               | No          | VendorController.index          |
| POST   | /vendors/team/invite         | Add team member            | Yes (owner) | VendorTeamController.invite     |
| PATCH  | /vendors/team/:memberId/role | Update team role           | Yes (owner) | VendorTeamController.updateRole |

## Products

| Method | Path          | Description            | Auth         | Controller                |
| ------ | ------------- | ---------------------- | ------------ | ------------------------- |
| GET    | /products     | Public product listing | No           | ProductController.index   |
| POST   | /products     | Add product            | Yes (vendor) | ProductController.store   |
| PUT    | /products/:id | Update product         | Yes (vendor) | ProductController.update  |
| DELETE | /products/:id | Remove product         | Yes (vendor) | ProductController.destroy |

## Orders

| Method | Path        | Description       | Auth | Controller              |
| ------ | ----------- | ----------------- | ---- | ----------------------- |
| GET    | /orders     | List user orders  | Yes  | OrderController.index   |
| POST   | /orders     | Create new order  | Yes  | OrderController.store   |
| GET    | /orders/:id | Get order details | Yes  | OrderController.show    |
| PATCH  | /orders/:id | Update order      | Yes  | OrderController.update  |
| DELETE | /orders/:id | Cancel order      | Yes  | OrderController.destroy |

## Payments

| Method | Path             | Description          | Auth | Controller                 |
| ------ | ---------------- | -------------------- | ---- | -------------------------- |
| POST   | /payments/init   | Initiate payment     | Yes  | PaymentController.initiate |
| GET    | /payments/status | Check payment status | Yes  | PaymentController.status   |

## Team Management

| Method | Path                         | Description             | Auth        | Controller                      |
| ------ | ---------------------------- | ----------------------- | ----------- | ------------------------------- |
| POST   | /vendors/team/invite         | Invite team member      | Yes (owner) | VendorTeamController.invite     |
| PATCH  | /vendors/team/:memberId/role | Update team member role | Yes (owner) | VendorTeamController.updateRole |
| DELETE | /vendors/team/:memberId      | Remove team member      | Yes (owner) | VendorTeamController.remove     |

## Miscellaneous

| Method | Path        | Description             | Auth | Controller                |
| ------ | ----------- | ----------------------- | ---- | ------------------------- |
| GET    | /categories | List product categories | No   | CategoryController.index  |
| GET    | /locations  | List service locations  | No   | LocationController.index  |
| GET    | /health     | Health check endpoint   | No   | HealthController.check    |
| GET    | /settings   | Get app settings        | No   | SettingsController.get    |
| PATCH  | /settings   | Update app settings     | Yes  | SettingsController.update |
