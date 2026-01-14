import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  role: z.boolean().optional(),
  permissions: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  locale: z.boolean().optional()
}).strict();
export const LocalUserSelectObjectSchema: z.ZodType<Prisma.LocalUserSelect> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserSelect>;
export const LocalUserSelectObjectZodSchema = makeSchema();
