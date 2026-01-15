import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string().optional(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string(),
  permissions: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  locale: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});