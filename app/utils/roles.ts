export const UserRoleEnum = ['admin', 'user', 'guest'] as const
export type UserRole = (typeof UserRoleEnum)[number]
