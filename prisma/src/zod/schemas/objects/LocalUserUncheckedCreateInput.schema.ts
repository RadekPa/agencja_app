import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255).optional().nullable(),
  email: z.string().max(255),
  passwordHash: z.string(),
  role: z.string().max(50).optional(),
  permissions: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  locale: z.string().optional()
}).strict();
export const LocalUserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LocalUserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserUncheckedCreateInput>;
export const LocalUserUncheckedCreateInputObjectZodSchema = makeSchema();
