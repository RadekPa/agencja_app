import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().optional().nullable(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string().max(32).optional(),
  permissions: z.string().optional().nullable(),
  locale: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
