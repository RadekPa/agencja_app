import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().optional().nullable(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string().max(50).optional(),
  permissions: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  locale: z.string().optional()
}).strict();
export const dbo_LocalUserCreateManyInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserCreateManyInput>;
export const dbo_LocalUserCreateManyInputObjectZodSchema = makeSchema();
