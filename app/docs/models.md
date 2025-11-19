# Model Reference

## User

| Field              | Type     | Notes              |
| ------------------ | -------- | ------------------ |
| id                 | integer  | PK                 |
| firstName          | string   | user's first name  |
| lastName           | string   | user's last name   |
| isActive           | boolean  | active status      |
| profilePhotoUrl    | string   | profile photo URL  |
| email              | string   | unique             |
| phone_number       | string   | contact number     |
| password           | string   | hashed             |
| role               | string   | user role          |
| last_login         | datetime | last login date    |
| primary_address_id | integer  | FK -> addresses.id |
| created_at         | datetime | creation date      |
| updated_at         | datetime | last update        |

## Vendor

| Field      | Type     | Notes          |
| ---------- | -------- | -------------- |
| id         | integer  | PK             |
| user_id    | integer  | FK -> users.id |
| name       | string   | business name  |
| status     | string   | account status |
| created_at | datetime | creation date  |
| updated_at | datetime | last update    |

## Product

| Field             | Type                   | Notes               |
| ----------------- | ---------------------- | ------------------- |
| id                | integer                | PK                  |
| vendor_id         | integer                | FK -> vendors.id    |
| name              | string                 | product name        |
| description       | text                   | product description |
| price             | decimal                | product price       |
| status            | enum(active, inactive) | product status      |
| sku               | string                 | stock keeping unit  |
| stock_quantity    | integer                | available stock     |
| is_featured       | boolean                | featured product    |
| primary_image_url | string                 | primary image URL   |
| created_at        | datetime               | creation date       |
| updated_at        | datetime               | last update         |

## Order

| Field               | Type                                | Notes              |
| ------------------- | ----------------------------------- | ------------------ |
| id                  | integer                             | PK                 |
| user_id             | integer                             | FK -> users.id     |
| status              | enum(pending, confirmed, cancelled) | order status       |
| total               | decimal                             | order total        |
| created_at          | datetime                            | order date         |
| updated_at          | datetime                            | last update        |
| shipping_address_id | integer                             | FK -> addresses.id |
| billing_address_id  | integer                             | FK -> addresses.id |
| payment_id          | integer                             | FK -> payments.id  |
| notes               | text                                | additional notes   |
| completed_at        | datetime                            | completion date    |

## OrderItem

| Field      | Type     | Notes             |
| ---------- | -------- | ----------------- |
| id         | integer  | PK                |
| order_id   | integer  | FK -> orders.id   |
| product_id | integer  | FK -> products.id |
| quantity   | integer  | item quantity     |
| price      | decimal  | item price        |
| created_at | datetime | creation date     |
| updated_at | datetime | last update       |

## Payment

| Field          | Type                             | Notes           |
| -------------- | -------------------------------- | --------------- |
| id             | integer                          | PK              |
| order_id       | integer                          | FK -> orders.id |
| amount         | decimal                          | payment amount  |
| status         | enum(pending, completed, failed) | payment status  |
| method         | string                           | payment method  |
| transaction_id | string                           | transaction ID  |
| created_at     | datetime                         | payment date    |
| updated_at     | datetime                         | last update     |

## Review

| Field       | Type     | Notes             |
| ----------- | -------- | ----------------- |
| id          | integer  | PK                |
| product_id  | integer  | FK -> products.id |
| user_id     | integer  | FK -> users.id    |
| rating      | integer  | review rating     |
| comment     | text     | review comment    |
| is_approved | boolean  | approval status   |
| created_at  | datetime | creation date     |
| updated_at  | datetime | last update       |

## Category

| Field       | Type     | Notes                          |
| ----------- | -------- | ------------------------------ |
| id          | integer  | PK                             |
| name        | string   | category name                  |
| parent_id   | integer  | FK -> categories.id (nullable) |
| description | text     | category description           |
| is_active   | boolean  | active status                  |
| created_at  | datetime | creation date                  |
| updated_at  | datetime | last update                    |

## ProductCategory

| Field       | Type     | Notes               |
| ----------- | -------- | ------------------- |
| id          | integer  | PK                  |
| product_id  | integer  | FK -> products.id   |
| category_id | integer  | FK -> categories.id |
| created_at  | datetime | creation date       |
| updated_at  | datetime | last update         |

## Inventory

| Field             | Type     | Notes             |
| ----------------- | -------- | ----------------- |
| id                | integer  | PK                |
| product_id        | integer  | FK -> products.id |
| quantity          | integer  | available stock   |
| updated_at        | datetime | last update       |
| reserved_quantity | integer  | reserved stock    |
| minimum_quantity  | integer  | minimum stock     |

## ProductDiscount

| Field       | Type    | Notes              |
| ----------- | ------- | ------------------ |
| id          | integer | PK                 |
| product_id  | integer | FK -> products.id  |
| discount_id | integer | FK -> discounts.id |

## PaymentMethod

| Field   | Type                                     | Notes                  |
| ------- | ---------------------------------------- | ---------------------- |
| id      | integer                                  | PK                     |
| user_id | integer                                  | FK -> users.id         |
| type    | enum(credit_card, paypal, bank_transfer) | payment method type    |
| details | text                                     | payment method details |

## Address

| Field         | Type                    | Notes           |
| ------------- | ----------------------- | --------------- |
| id            | integer                 | PK              |
| user_id       | integer                 | FK -> users.id  |
| address_line1 | string                  | address line 1  |
| address_line2 | string                  | address line 2  |
| city          | string                  | city            |
| state         | string                  | state/province  |
| postal_code   | string                  | postal/zip code |
| country       | string                  | country         |
| address_type  | enum(billing, shipping) | address type    |
| is_primary    | boolean                 | primary address |
| created_at    | datetime                | creation date   |
| updated_at    | datetime                | last update     |

## ReviewResponse

| Field     | Type    | Notes            |
| --------- | ------- | ---------------- |
| id        | integer | PK               |
| review_id | integer | FK -> reviews.id |
| user_id   | integer | FK -> users.id   |
| response  | text    | response text    |

## StockMovement

| Field         | Type                     | Notes             |
| ------------- | ------------------------ | ----------------- |
| id            | integer                  | PK                |
| product_id    | integer                  | FK -> products.id |
| quantity      | integer                  | quantity changed  |
| movement_type | enum(increase, decrease) | type of movement  |

## VendorRating

| Field        | Type    | Notes             |
| ------------ | ------- | ----------------- |
| id           | integer | PK                |
| vendor_id    | integer | FK -> vendors.id  |
| rating       | decimal | vendor rating     |
| review_count | integer | number of reviews |

## FeaturedProduct

| Field         | Type    | Notes             |
| ------------- | ------- | ----------------- |
| id            | integer | PK                |
| product_id    | integer | FK -> products.id |
| featured_date | date    | date featured     |

## Cart

| Field      | Type     | Notes              |
| ---------- | -------- | ------------------ |
| id         | integer  | PK                 |
| user_id    | integer  | FK -> users.id     |
| created_at | datetime | cart creation date |

## CartItem

| Field      | Type     | Notes             |
| ---------- | -------- | ----------------- |
| id         | integer  | PK                |
| cart_id    | integer  | FK -> carts.id    |
| product_id | integer  | FK -> products.id |
| quantity   | integer  | item quantity     |
| price      | decimal  | item price        |
| created_at | datetime | creation date     |
| updated_at | datetime | last update       |

## Refund

| Field        | Type                              | Notes           |
| ------------ | --------------------------------- | --------------- |
| id           | integer                           | PK              |
| order_id     | integer                           | FK -> orders.id |
| reason       | text                              | refund reason   |
| status       | enum(pending, approved, rejected) | refund status   |
| amount       | decimal                           | refund amount   |
| requested_by | integer                           | FK -> users.id  |
| processed_by | integer                           | FK -> users.id  |
| created_at   | datetime                          | refund date     |
| updated_at   | datetime                          | last update     |

## Supplier

| Field        | Type    | Notes                 |
| ------------ | ------- | --------------------- |
| id           | integer | PK                    |
| name         | string  | supplier name         |
| contact_info | text    | supplier contact info |

## PurchaseOrder

| Field        | Type                               | Notes                 |
| ------------ | ---------------------------------- | --------------------- |
| id           | integer                            | PK                    |
| supplier_id  | integer                            | FK -> suppliers.id    |
| order_date   | date                               | purchase order date   |
| status       | enum(pending, received, cancelled) | purchase order status |
| total_amount | decimal                            | total order amount    |

## PurchaseOrderItem

| Field             | Type    | Notes                    |
| ----------------- | ------- | ------------------------ |
| id                | integer | PK                       |
| purchase_order_id | integer | FK -> purchase_orders.id |
| product_id        | integer | FK -> products.id        |
| quantity          | integer | item quantity            |
| price             | decimal | item price               |

## InventoryAdjustment

| Field           | Type                        | Notes               |
| --------------- | --------------------------- | ------------------- |
| id              | integer                     | PK                  |
| product_id      | integer                     | FK -> products.id   |
| adjustment_type | enum(addition, subtraction) | type of adjustment  |
| quantity        | integer                     | adjustment quantity |
| reason          | text                        | adjustment reason   |

## SupplierRating

| Field        | Type    | Notes              |
| ------------ | ------- | ------------------ |
| id           | integer | PK                 |
| supplier_id  | integer | FK -> suppliers.id |
| rating       | decimal | supplier rating    |
| review_count | integer | number of reviews  |

## HolidaySchedule

| Field      | Type    | Notes              |
| ---------- | ------- | ------------------ |
| id         | integer | PK                 |
| name       | string  | holiday name       |
| start_date | date    | holiday start date |
| end_date   | date    | holiday end date   |

## TaxRate

| Field          | Type     | Notes               |
| -------------- | -------- | ------------------- |
| id             | integer  | PK                  |
| region         | string   | applicable region   |
| rate           | decimal  | tax rate            |
| effective_date | date     | rate effective date |
| created_at     | datetime | creation date       |
| updated_at     | datetime | last update         |

## ProductTax

| Field       | Type     | Notes              |
| ----------- | -------- | ------------------ |
| id          | integer  | PK                 |
| product_id  | integer  | FK -> products.id  |
| tax_rate_id | integer  | FK -> tax_rates.id |
| created_at  | datetime | creation date      |
| updated_at  | datetime | last update        |

## ShippingMethod

| Field              | Type     | Notes                   |
| ------------------ | -------- | ----------------------- |
| id                 | integer  | PK                      |
| name               | string   | shipping method name    |
| cost               | decimal  | shipping cost           |
| estimated_delivery | string   | estimated delivery time |
| is_active          | boolean  | active status           |
| created_at         | datetime | creation date           |
| updated_at         | datetime | last update             |

## OrderShipping

| Field              | Type     | Notes                     |
| ------------------ | -------- | ------------------------- |
| id                 | integer  | PK                        |
| order_id           | integer  | FK -> orders.id           |
| shipping_method_id | integer  | FK -> shipping_methods.id |
| tracking_number    | string   | shipping tracking number  |
| shipped_at         | datetime | shipping date             |
| delivered_at       | datetime | delivery date             |
| created_at         | datetime | creation date             |
| updated_at         | datetime | last update               |

## GiftCard

| Field           | Type    | Notes                     |
| --------------- | ------- | ------------------------- |
| id              | integer | PK                        |
| code            | string  | gift card code            |
| amount          | decimal | gift card amount          |
| expiration_date | date    | gift card expiration date |

## GiftCardRedemption

| Field        | Type    | Notes               |
| ------------ | ------- | ------------------- |
| id           | integer | PK                  |
| gift_card_id | integer | FK -> gift_cards.id |
| order_id     | integer | FK -> orders.id     |
| amount       | decimal | redeemed amount     |

## Notification

| Field      | Type                   | Notes                |
| ---------- | ---------------------- | -------------------- |
| id         | integer                | PK                   |
| user_id    | integer                | FK -> users.id       |
| type       | enum(email, sms, push) | notification type    |
| content    | text                   | notification content |
| is_read    | boolean                | read status          |
| created_at | datetime               | creation date        |
| updated_at | datetime               | last update          |
| read_at    | datetime               | read date            |

## ActivityLog

| Field      | Type     | Notes              |
| ---------- | -------- | ------------------ |
| id         | integer  | PK                 |
| user_id    | integer  | FK -> users.id     |
| activity   | string   | activity details   |
| ip_address | string   | IP address         |
| user_agent | string   | user agent details |
| created_at | datetime | activity date      |
| metadata   | text     | additional details |

## Wish_list

| Field      | Type     | Notes                  |
| ---------- | -------- | ---------------------- |
| id         | integer  | PK                     |
| user_id    | integer  | FK -> users.id         |
| created_at | datetime | wishlist creation date |
| updated_at | datetime | last update            |

## Wish_listItem

| Field       | Type     | Notes              |
| ----------- | -------- | ------------------ |
| id          | integer  | PK                 |
| wishlist_id | integer  | FK -> wishlists.id |
| product_id  | integer  | FK -> products.id  |
| created_at  | datetime | creation date      |
| updated_at  | datetime | last update        |
| quantity    | integer  | product quantity   |
