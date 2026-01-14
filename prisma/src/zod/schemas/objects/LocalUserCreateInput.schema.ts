import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(255).optional().nullable(),
  email: z.string().max(255),
  passwordHash: z.string(),
  role: z.string().max(50).optional(),
  permissions: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  locale: z.string().optional()
}).strict();
export const LocalUserCreateInputObjectSchema: z.ZodType<Prisma.LocalUserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserCreateInput>;
export const LocalUserCreateInputObjectZodSchema = makeSchema();
