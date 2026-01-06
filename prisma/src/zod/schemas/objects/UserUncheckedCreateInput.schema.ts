import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.string().max(32).optional(),
  permissions: z.string().optional().nullable(),
  locale: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
