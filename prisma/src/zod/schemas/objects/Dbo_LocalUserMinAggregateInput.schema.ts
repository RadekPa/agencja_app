import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  role: z.literal(true).optional(),
  permissions: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  locale: z.literal(true).optional()
}).strict();
export const Dbo_LocalUserMinAggregateInputObjectSchema: z.ZodType<Prisma.Dbo_LocalUserMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Dbo_LocalUserMinAggregateInputType>;
export const Dbo_LocalUserMinAggregateInputObjectZodSchema = makeSchema();
