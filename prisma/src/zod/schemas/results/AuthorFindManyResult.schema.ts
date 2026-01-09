import * as z from 'zod';
export const AuthorFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  fullName: z.string().optional(),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  suffix: z.string().optional(),
  penName: z.string().optional(),
  userMod: z.string(),
  dateMod: z.date(),
  remarks: z.string().optional()
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