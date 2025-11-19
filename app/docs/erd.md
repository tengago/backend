# Entity Relationship Diagram

## Tables

users (with role_id, avatar, is_active, etc.)
roles
vendors
products
product_images
categories
product_categories
orders
order_items
payments
reviews
addresses

## Relationships

- Role 1:N User - A role can have many users, but a user has only one role.
- User 1:1 Vendor - A user can be a vendor, but not all users are vendors.
- Vendor 1:N Product - A vendor can have many products, but a product belongs to one vendor.
- Product N:M Category - Products can belong to multiple categories, and categories can have multiple products (through product_categories).
- User 1:N Order - A user can have many orders, but an order belongs to one user.
- Order 1:N OrderItem - Each order can have multiple order items, but an order item belongs to one order.
- Product 1:N OrderItem - A product can appear in many order items, but an order item refers to one product.
- Product 1:N ProductImage - A product can have many images, but an image belongs to one product.
- Vendor 1:N Review - A vendor can have many reviews, but a review belongs to one vendor.
- User N:M Address - A user can have many addresses, and an address can belong to many users.
- Order 1:1 Payment - Each order has one payment, and a payment is for one order.user
- User 1:N Review - A user can have many reviews, but a review belongs to one user.
- Order 1:1 Address - Each order has one shipping address, and an address can be used for many orders.
-
