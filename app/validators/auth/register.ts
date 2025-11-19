import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    firstName: vine.string().minLength(3).maxLength(100),
    lastName: vine.string().minLength(3).maxLength(100),
    email: vine.string().email(),
    password: vine.string().minLength(6).maxLength(100),
    role: vine.enum(['user', 'vendor']).optional(),
  })
)

export const registerSuperAdminValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6).maxLength(100),
  })
)
